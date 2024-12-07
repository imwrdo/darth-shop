import random
import requests
from bs4 import BeautifulSoup
import time
import json
import os
from deep_translator import GoogleTranslator
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def translate_text(text):
    try:
        return GoogleTranslator(source='ru', target='en').translate(text)
    except Exception as e:
        print(f"Translation error: {e}")
        return text

def sanitize_filename(name):
    return name.replace(" ", "_").replace("'", "").replace('"', "").replace("/", "_").replace('.', '_').replace('*', 'x')

# Dictionary to store image paths for each product URL
image_paths = {}

def save_image(image_url, product_name, retries=3):
    if not image_url:
        return None

    os.makedirs("images", exist_ok=True)
    unique_id = str(random.randint(1000, 9999))
    filename = f"{sanitize_filename(translate_text(product_name + '_' + unique_id))}.jpg"
    file_path = os.path.join("images", filename)

    headers = {
        "User-Agent": "Mozilla/5.0"
    }

    for attempt in range(retries):
        try:
            response = requests.get(image_url, headers=headers, stream=True, timeout=10)
            response.raise_for_status()
            with open(file_path, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            print(f"Image saved as {file_path}")
            return file_path
        except requests.RequestException as e:
            print(f"Failed to download image: {e} (Attempt {attempt + 1}/{retries})")
            time.sleep(random.uniform(1, 3))
    return None

def get_js_loaded_images(product_url):
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    browser = webdriver.Chrome(options=options)

    image_urls = []
    try:
        browser.get(product_url)
        WebDriverWait(browser, 60).until(
            EC.presence_of_all_elements_located(
                (By.XPATH, "//img[@class='gallery-picture-obj' and contains(@data-ng-style, 'max-height')]"))
        )
        images = browser.find_elements(By.XPATH, "//img[@class='gallery-picture-obj' and contains(@data-ng-style, 'max-height')]")
        for img in images:
            img_url = img.get_attribute("src")
            if img_url and not img_url.startswith("data:image/svg+xml"):
                image_urls.append(img_url)
            if len(image_urls) >= 2:
                break
    except Exception as e:
        print(f"Error loading images: {e}")
    finally:
        browser.quit()

    return image_urls


def scrapPositions(url, depth=0, curr_category=None, category_path=None, all_data=None, processed_urls=None):
    headers = {
        "User-Agent": "Mozilla/5.0"
    }
    if all_data is None:
        all_data = []
    if processed_urls is None:
        processed_urls = set()

    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    browser = webdriver.Chrome(options=options)

    try:
        browser.get(url)
        last_height = browser.execute_script("return document.body.scrollHeight")
        while True:
            browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(2)
            new_height = browser.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height

        soup = BeautifulSoup(browser.page_source, "html.parser")

        if category_path is None:
            category_path = ""
        if curr_category:
            category_path += (translate_text(curr_category) + "/")

        translated_category = translate_text(curr_category) if curr_category else "Uncategorized"
        category_data = {"category": translated_category, "products": []}

        products = soup.find_all('div', attrs={'class': 'products-view-item text-static cs-br-1 js-products-view-item'})
        products_prices = soup.find_all('div', attrs={'class': 'price-number'})
        product_names = soup.find_all('a', attrs={'class': 'products-view-name-link'})
        product_descriptions = soup.find_all('div', attrs={'class': 'tab-content'})

        for i in range(len(products)):
            product_url = product_names[i].get('href')
            processed_urls.add(product_url)
            product_name = product_names[i].text.strip() if i < len(product_names) else "N/A"
            product_price = products_prices[i].text.strip() if i < len(products_prices) else "N/A"
            product_description = product_descriptions[i].text.strip() if i < len(product_descriptions) else "N/A"

            # Extract the six attributes from subsequent spans
            spans = products[i].find_all('span', class_='inplace-offset')
            attributes = {
                "universe": spans[0].text.strip() if len(spans) > 0 else "N/A",
                "hero_or_theme": spans[1].text.strip() if len(spans) > 1 else "N/A",
                "delivery_city": spans[2].text.strip() if len(spans) > 2 else "N/A",
                "size": spans[3].text.strip() if len(spans) > 3 else "N/A",
                "self_pick_up": spans[4].text.strip() if len(spans) > 4 else "N/A",
                "color": spans[5].text.strip() if len(spans) > 5 else "N/A",
            }

            # Check if the product has been processed for images
            if product_url in image_paths:
                first_image_file_path, second_image_file_path = image_paths[product_url]
                print(f"Reusing images for {product_name}")
            else:
                product_image_urls = get_js_loaded_images(product_url)
                if len(product_image_urls) >= 1:
                    first_image_file_path = save_image(product_image_urls[0], product_name)
                    second_image_file_path = save_image(product_image_urls[1], product_name) if len(product_image_urls) > 1 else None
                else:
                    first_image_file_path = second_image_file_path = None

                # Store the paths for future use
                image_paths[product_url] = (first_image_file_path, second_image_file_path)

            translated_product_name = translate_text(product_name)
            try:
                product_price_float = float(product_price.replace(",", "").replace(" ", "")) / 100
                formatted_price = f"${product_price_float:.2f}"
            except ValueError:
                formatted_price = product_price

            product = {
                "name": translated_product_name,
                "price": formatted_price,
                "previous_price": "N/A",
                "first_image": first_image_file_path,
                "second_image": second_image_file_path,
                "details": {
                    "is_available": "Available",
                    "delivery_info": [],
                    "description": product_description,
                    **attributes
                }
            }

            category_data["products"].append(product)

        all_data.append(category_data)

        categories_names = soup.find_all('a', attrs={'class': 'product-categories-header-slim-title'})
        for category in categories_names:
            category_name = category.text.strip()
            category_url = category.get('href')
            if category_url:
                scrapPositions(category_url, depth + 1, curr_category=category_name, category_path=category_path[:],
                               all_data=all_data, processed_urls=processed_urls)

    except Exception as e:
        print(f"An error occurred: {e}")
        time.sleep(3)

    finally:
        browser.quit()

    return all_data



def save_all_data_as_json(all_data):
    os.makedirs("scraped_products", exist_ok=True)
    file_path = os.path.join("scraped_products", "products_data.json")
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(all_data, f, ensure_ascii=False, indent=4)
    print(f"All data saved as {file_path}")

# Start the scraping process
all_data = scrapPositions("https://darth-shop.ru/categories/star-wars")
save_all_data_as_json(all_data)
