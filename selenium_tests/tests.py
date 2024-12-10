from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import random

def test_prestashop():
    # Initialize WebDriver
    driver = webdriver.Chrome()
    driver.maximize_window()

    try:
        # Open the store homepage
        driver.get("https://localhost:8443")  # Replace with your local store URL

        # Add 10 products to the cart from two categories
        category_ids = [100, 101]
        for category_id in category_ids:
            driver.get(f"https://localhost:8443/index.php?id_category={category_id}&controller=category&id_lang=1")
            products = driver.find_elements(By.CLASS_NAME, "product-miniature")[:5]
            for product in products:
                product.find_element(By.CLASS_NAME, "ajax-add-to-cart").click()
                WebDriverWait(driver, 5).until(
                    EC.presence_of_element_located((By.CLASS_NAME, "cart-content-btn"))
                )
                driver.find_element(By.CLASS_NAME, "cart-content-btn").click()

        # Search for a product and add a random one to the cart
        search_box = driver.find_element(By.NAME, "s")
        search_box.send_keys("Postcard")
        search_box.send_keys(Keys.RETURN)
        WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CLASS_NAME, "product-miniature"))
        )
        search_results = driver.find_elements(By.CLASS_NAME, "product-miniature")
        random.choice(search_results).find_element(By.CLASS_NAME, "ajax-add-to-cart").click()

        # Remove 3 products from the cart
        driver.get("https://localhost:8443/index.php?controller=cart")
        remove_buttons = driver.find_elements(By.CLASS_NAME, "remove-from-cart")[:3]
        for button in remove_buttons:
            button.click()

        # Register a new account
        driver.get("https://localhost:8443/index.php?controller=authentication&create_account=1")
        driver.find_element(By.NAME, "firstname").send_keys("Test")
        driver.find_element(By.NAME, "lastname").send_keys("User")
        email = f"testuser{random.randint(1000,9999)}@example.com"
        driver.find_element(By.NAME, "email").send_keys(email)
        driver.find_element(By.NAME, "password").send_keys("SecurePassword123")
        driver.find_element(By.CLASS_NAME, "form-control-submit").click()

        # Complete the order
        driver.get("https://localhost:8443/index.php?controller=order")
        WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CLASS_NAME, "checkout-step"))
        )
        driver.find_element(By.ID, "payment-option-2").click()  # Cash on delivery
        carriers = driver.find_elements(By.NAME, "delivery_option")
        random.choice(carriers).click()
        driver.find_element(By.NAME, "confirmDeliveryOption").click()
        driver.find_element(By.CLASS_NAME, "place-order-button").click()

        # Check the order status
        driver.get("https://localhost:8443/index.php?controller=history")
        WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CLASS_NAME, "history-link"))
        )
        status = driver.find_element(By.CLASS_NAME, "order-status").text
        print(f"Order status: {status}")

        # Download the invoice
        driver.find_element(By.CLASS_NAME, "download-invoice").click()

    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    test_prestashop()
