from selenium import webdriver # type: ignore
from selenium.webdriver.common.by import By # type: ignore
from selenium.webdriver.common.keys import Keys # type: ignore
from selenium.webdriver.support.ui import WebDriverWait # type: ignore
from selenium.webdriver.support import expected_conditions as EC # type: ignore
import random
import time
from random import shuffle
def test_prestashop():
    # Initialize WebDriver
    driver = webdriver.Chrome()
    driver.maximize_window()

    try:
        # Open the store homepage
        driver.get("https://localhost:8443")  # Replace with your local store URL
    
        # Add 10 products to the cart from two categories
        category_ids = [99, 106]
        for category_id in category_ids:
            driver.get(f"https://localhost:8443/index.php?id_category={category_id}&controller=category&id_lang=1")
            time.sleep(2)
            products = driver.find_elements(By.XPATH, '//*[@class =" elementor-button elementor-size-sm elementor-animation-push"]')
            time.sleep(1)
            for i in range(5):
                products = driver.find_elements(By.XPATH, '//*[@class =" elementor-button elementor-size-sm elementor-animation-push"]')
                time.sleep(1)
                for _ in range(random.randint(1,2)):
                    products[i].click()
                    WebDriverWait(driver, 5).until(
                        EC.presence_of_element_located((By.CLASS_NAME, "cart-content-btn"))
                    )
                    time.sleep(1)
                    driver.find_element(By.XPATH,'//button[contains(@class, "btn btn-secondary") and text()="Continue shopping"]').click()
            
        # Search for a product and add a random one to the cart
        search_box = driver.find_element(By.CLASS_NAME, "elementor-search__input")
        search_box.send_keys("Postcard")
        search_box.send_keys(Keys.RETURN)
        time.sleep(2)
        search_results = driver.find_elements(By.XPATH, '//*[@class =" elementor-button elementor-size-sm elementor-animation-push"]')
        random.choice(search_results).click()

        time.sleep(1)
        # Remove 3 products from the cart
        driver.get("https://localhost:8443/index.php?controller=cart&action=show")
        time.sleep(1)
        cart_items = driver.find_elements(By.XPATH, '//li[contains(@class, "cart-item")]')
        time.sleep(3)
        for i in range(min(3, len(cart_items))):
            time.sleep(1)
            cart_items = driver.find_elements(By.XPATH, '//li[contains(@class, "cart-item")]')
            remove_button = cart_items[0].find_element(By.CLASS_NAME, "remove-from-cart")
            remove_button.click()
            time.sleep(1)
        
        time.sleep(3)
        
        # Register a new account
        driver.get("https://localhost:8443/index.php?controller=authentication&create_account=1")
        driver.find_element(By.NAME, "firstname").send_keys("Test")
        driver.find_element(By.NAME, "lastname").send_keys("User")
        email = f"testuser{random.randint(1000,9999)}@example.com"
        driver.find_element(By.NAME, "email").send_keys(email)
        driver.find_element(By.NAME, "password").send_keys("SecurePassword123")
        
        privacy_checkbox = driver.find_element(By.NAME, "customer_privacy")
        if not privacy_checkbox.is_selected():
            privacy_checkbox.click()

        gdpr_checkbox = driver.find_element(By.NAME, "psgdpr")
        if not gdpr_checkbox.is_selected():
            gdpr_checkbox.click()
            
        driver.find_element(By.CLASS_NAME, "form-control-submit").click()
        time.sleep(1)
        # Complete the order
        driver.get("https://localhost:8443/index.php?controller=order")
        WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CLASS_NAME, "checkout-step"))
        )
        
        driver.find_element(By.NAME, "address1").send_keys("Traugutta 115B")
        driver.find_element(By.NAME, "postcode").send_keys("80-226")
        driver.find_element(By.NAME, "city").send_keys("Gdansk")
        driver.find_element(By.NAME, "confirm-addresses").click()
        time.sleep(2)
        
        delivery_radio = driver.find_element(By.ID, "delivery_option_5")
        if not delivery_radio.is_selected():
            delivery_radio.click()
        driver.find_element(By.NAME, "confirmDeliveryOption").click()
        time.sleep(1)
        driver.find_element(By.ID, "payment-option-2").click()
        
        terms_checkbox = driver.find_element(By.ID, "conditions_to_approve[terms-and-conditions]")
        if not terms_checkbox.is_selected():
            terms_checkbox.click()
        time.sleep(2)   
        driver.find_element(By.XPATH, '//button[contains(@class, "btn btn-primary center-block")]').click()

        # Check the order status
        time.sleep(1)
        driver.find_element(By.XPATH,'//a[contains(text(), "Log In")]').click()
        driver.find_element(By.ID, "history-link").click()
        driver.find_element(By.LINK_TEXT,"Details").click()
        

        # Download the invoice
        time.sleep(1)
        driver.find_element(By.XPATH,'//a[contains(text(), "Log In")]').click()
        driver.find_element(By.ID, "history-link").click()
        driver.find_element(By.XPATH, "//td[@class='text-sm-center hidden-md-down']/a").click()
        time.sleep(4)
        print("Finish")
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    test_prestashop()
