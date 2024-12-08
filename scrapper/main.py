import sys
import io
sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')
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


def translate_text(text, cache={}):
    if text in cache:
        return cache[text]
    
    try:
        translated = GoogleTranslator(source='ru', target='en').translate(text)
        cache[text] = translated
        return translated
    except Exception as e:
        print(f"Translation error: {e}")
        return text

def sanitize_filename(name):
    return name.replace(" ", "_").replace("'", "").replace('"', "").replace("/", "_").replace('.', '_').replace('*', 'x')

image_paths = {}

def save_image(image_url, product_name, retries=3):
    if not image_url:
        print(f"No valid URL to save for product {product_name}.")
        return None

    os.makedirs("images", exist_ok=True)
    unique_id = str(random.randint(1000, 9999))
    filename = f"{sanitize_filename(translate_text(product_name + '_' + unique_id))}.jpg"
    file_path = os.path.join("images_1", filename)

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
            EC.presence_of_all_elements_located((By.XPATH, "//img[@class='gallery-picture-obj']"))
        )

        images = browser.find_elements(By.XPATH, "//img[@class='gallery-picture-obj']")
        if images:
            image_urls.append(images[1].get_attribute("src"))  # First image (unchanged)

        try:
            second_image_div = browser.find_elements(By.XPATH, "//div[contains(@class, 'details-carousel-item') and @data-parameters]")
            data_parameters = second_image_div[1].get_attribute("data-parameters")
            if data_parameters:
                data = json.loads(data_parameters.replace("'", "\""))  # Handle single quotes in JSON
                second_image_url = data.get('originalPath')

                if second_image_url:
                    image_urls.append(second_image_url)
                else:
                    image_urls.append(images[1].get_attribute("src"))
        except Exception as e:
            image_urls.append(images[1].get_attribute("src"))
            print(f"Failed to get second image from second div: {e}")

    except Exception as e:
        print(f"Error loading images for {product_url}: {e}")
    finally:
        browser.quit()

    print(f"Selected images for product: {image_urls}")
    return image_urls

def get_description(product_url):
    print("Trying to get description...")
    
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    driver = webdriver.Chrome(options=options)
    
    try:
        print(f"Opening URL: {product_url}")
        driver.get(product_url)
        
        description_div = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located(
                (By.CSS_SELECTOR, 'div.tab-content.details-tabs-deacription.tab-content-active[itemprop="description"]')
            )
        )
        try:
            paragraph = description_div.find_element(By.TAG_NAME, 'p')
        except Exception as e:
            try:
                paragraph = description_div.find_element(By.TAG_NAME, 'span')
            except Exception as ex:
                paragraph = description_div
        
        if paragraph:
            description = paragraph.text.strip().replace('/n', ' ')
        else:
            description = "N/A"
        description = description.encode('utf-8', 'ignore').decode('utf-8')
        print(f"Description: {translate_text(description)}")
    
    except Exception as e:
        print(f"An error occurred: {e}")
    
    finally:
        driver.quit()
    
    return translate_text(description)

def get_product_data(product_url):
    headers = {
        "User-Agent": "Mozilla/5.0"
    }

    response = requests.get(product_url, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")

    attributes = {}
    properties_list = soup.find_all('ul', class_='properties')
    if properties_list:
        span_values = []
        attributes_values =[]
        for li in properties_list[0].find_all('li', class_='properties-item'):
            span = li.find('div', class_='properties-item-value').find('span', class_='inplace-offset')
            attribute = li.find('div', class_='properties-item-name')
            if span:
                span_values.append(translate_text(span.text.strip()))
            else:
                span_values.append("N/A")
            if attribute:
                attributes_values.append(translate_text(attribute.text.strip()))


        for i, attribute_name in enumerate(attributes_values):
            if i < len(span_values):
                attributes[attribute_name] = span_values[i]
            else:
                attributes[attribute_name] = "N/A"
    available = soup.find('div', attrs={'class': 'details-avalable-text'})  # Use find() since we expect a single element
    available_attr = "N/A"
    if available:
        available_text = available.text.strip() + " psc."
        if available_text:  
            available_attr = available_text
    try:
        description = get_description(product_url)
    except Exception as e:
        description = 'N/A'
    product_data = {
        "attributes": attributes,
        "Available": available_attr,
        "Description" : description
    }

    return product_data

def scrapPositions(url, depth=0, curr_category=None, category_path=None, all_data=None, processed_urls=None):
    print(f"Scraping URL: {url} (Depth: {depth})")
    
    if all_data is None:
        all_data = []
    if processed_urls is None:
        processed_urls = set()

    headers = {
        "User-Agent": "Mozilla/5.0"
    }
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

        products = soup.find_all('div', attrs={'class': 'products-view-item'})
        product_names = soup.find_all('a', attrs={'class': 'products-view-name-link'})
        products_prices = soup.find_all('div', attrs={'class': 'price-number'})
      

        for i in range(len(products)):
            product_url = product_names[i].get('href')

            product_name = product_names[i].text.strip()
            product_price = products_prices[i].text.strip() if i < len(products_prices) else "N/A"
            
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
                image_paths[product_url] = (first_image_file_path, second_image_file_path)
            try:
                product_price_float = float(product_price.replace(",", "").replace(" ", "")) / 100
                formatted_price = f"${product_price_float:.2f}"
            except ValueError:
                formatted_price = product_price
            
            product_details = get_product_data(product_url)
            product_data = {
                "name": translate_text(product_name),
                "price": formatted_price,
                "previous_price": "N/A",
                "first_image": first_image_file_path,
                "second_image" : second_image_file_path,
                "details": {
                    **product_details
                }
            }
            category_data["products"].append(product_data)
            print(f"Saved product as: {product_data}")
        all_data.append(category_data)
        

        categories_names = soup.find_all('a', attrs={'class': 'product-categories-header-slim-title'})
        for category in categories_names:
            category_name = category.text.strip()
            category_url = category.get('href')
            if category_url:
                scrapPositions(category_url, depth + 1, curr_category=category_name, category_path=category_path[:],
                               all_data=all_data, processed_urls=processed_urls)

    except Exception as e:
        print(f"Error while scraping {url}: {e}")
    finally:
        browser.quit()

    return all_data




def save_all_data_as_json(all_data):
    os.makedirs("scraped_products_1", exist_ok=True)
    file_path = os.path.join("scraped_products_1", "products_data.json")
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(all_data, f, ensure_ascii=False, indent=4)
    print(f"All data saved as {file_path}")

all_data = scrapPositions("https://darth-shop.ru/categories/star-wars")
save_all_data_as_json(all_data)
