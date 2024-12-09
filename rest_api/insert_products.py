import os
import random
import requests
import json
import re

# Configuration
API_URL = "http://localhost:8080/api/"
API_KEY = "WMD622FVQ2MP6P412WBNRWQSQRBU71GF"
JSON_FILE = "../scrapper/scraped_products_1/products_data.json"  # Path to the JSON file
DEBUG = False  # Set to True to enable debug logging


def log_debug(message):
    """Log debug messages if DEBUG is True."""
    if DEBUG:
        print(f"[DEBUG] {message}")

def generate_link_rewrite(category_name):
    """Generate a valid link_rewrite from the category name."""
    # Convert to lowercase, replace spaces with hyphens, and remove non-alphanumeric characters
    return re.sub(r'[^a-z0-9\-]', '', category_name.lower().replace(' ', '-'))


def get_or_create_category(category_name, parent_id, first_product_image=None):
    """Retrieve or create a category by name."""
    log_debug(f"Fetching category ID for '{category_name}' under parent ID: {parent_id}")
    response = requests.get(
        f"{API_URL}categories",
        params={"filter[name]": category_name, "display": "full"},
        auth=(API_KEY, "")
    )
    response.raise_for_status()
    category_data = response.text
    category_id = None
    if "<id><![CDATA[" in category_data:
        category_id = category_data.split("<id><![CDATA[")[1].split("]]></id>")[0]

    if not category_id:
        log_debug(f"Category '{category_name}' not found. Creating it...")
        link_rewrite = generate_link_rewrite(category_name)
        category_xml = f"""
        <prestashop>
          <category>
            <id_parent>{parent_id}</id_parent>
            <name>
              <language id="1">{category_name}</language>
            </name>
            <description>
              <language id="1">{category_name}</language>
            </description>
            <link_rewrite>
              <language id="1">{link_rewrite}</language>
            </link_rewrite>
            <active>1</active>
          </category>
        </prestashop>
        """
        response = requests.post(
            f"{API_URL}categories",
            data=category_xml.encode('utf-8'),
            headers={"Content-Type": "application/xml"},
            auth=(API_KEY, "")
        )
        response.raise_for_status()
        category_data = response.text
        if "<id><![CDATA[" in category_data:
            category_id = category_data.split("<id><![CDATA[")[1].split("]]></id>")[0]

        if category_id and first_product_image and os.path.isfile(first_product_image):
            # Upload category image
            log_debug(f"Uploading image for category '{category_name}': {first_product_image}")
            with open(first_product_image, 'rb') as img_file:
                files = {'image': img_file}
                response = requests.post(
                    f"{API_URL}images/categories/{category_id}",
                    files=files,
                    auth=(API_KEY, "")
                )
                if "<error>" in response.text:
                    print(f"Failed to upload image for category '{category_name}'")
                else:
                    print(f"Image uploaded for category '{category_name}'")
    log_debug(f"Category ID for '{category_name}': {category_id}")
    return category_id

def resolve_feature_ids(attributes):
    """
    Resolve feature IDs and values for attributes.
    This function maps attributes to their corresponding feature and value IDs.
    """
    value_ids = {}
    for key, value in attributes.items():
        # Get or create feature ID
        feature_id = get_or_create_feature(key)
        if feature_id:
            # Get or create feature value ID
            value_id = get_feature_value_id(feature_id, value)
            if value_id:
                value_ids[feature_id] = value_id
    return value_ids


def get_or_create_feature(name):
    """
    Retrieve or create a product feature by name.
    """
    log_debug(f"Fetching product feature ID for '{name}'")
    response = requests.get(
        f"{API_URL}product_features",
        params={"filter[name]": name, "display": "full"},
        auth=(API_KEY, "")
    )
    response.raise_for_status()
    feature_data = response.text
    feature_id = None
    if "<id><![CDATA[" in feature_data:
        feature_id = feature_data.split("<id><![CDATA[")[1].split("]]></id>")[0]

    if not feature_id:
        log_debug(f"Product feature '{name}' not found. Creating it...")
        feature_xml = f"""
        <prestashop>
          <product_feature>
            <name>
              <language id="1">{name}</language>
            </name>
          </product_feature>
        </prestashop>
        """
        response = requests.post(
            f"{API_URL}product_features",
            data=feature_xml.encode('utf-8'),
            headers={"Content-Type": "application/xml"},
            auth=(API_KEY, "")
        )
        response.raise_for_status()
        feature_data = response.text
        if "<id><![CDATA[" in feature_data:
            feature_id = feature_data.split("<id><![CDATA[")[1].split("]]></id>")[0]
    log_debug(f"Product feature ID for '{name}': {feature_id}")
    return feature_id


def get_feature_value_id(feature_id, value):
    """
    Retrieve the ID of a feature value from PrestaShop API or create it if not exists.
    """
    log_debug(f"Fetching feature value ID for feature ID {feature_id} and value '{value}'")
    response = requests.get(
        f"{API_URL}product_feature_values",
        params={"filter[id_feature]": feature_id, "filter[value]": value, "display": "full"},
        auth=(API_KEY, "")
    )
    response.raise_for_status()
    feature_value_data = response.text
    feature_value_id = None
    if "<id><![CDATA[" in feature_value_data:
        feature_value_id = feature_value_data.split("<id><![CDATA[")[1].split("]]></id>")[0]

    if not feature_value_id:
        log_debug(f"Feature value '{value}' not found. Creating it...")
        feature_value_xml = f"""
        <prestashop>
          <product_feature_value>
            <id_feature><![CDATA[{feature_id}]]></id_feature>
            <value>
              <language id="1">{value}</language>
            </value>
          </product_feature_value>
        </prestashop>
        """
        response = requests.post(
            f"{API_URL}product_feature_values",
            data=feature_value_xml.encode('utf-8'),
            headers={"Content-Type": "application/xml"},
            auth=(API_KEY, "")
        )
        response.raise_for_status()
        feature_value_data = response.text
        if "<id><![CDATA[" in feature_value_data:
            feature_value_id = feature_value_data.split("<id><![CDATA[")[1].split("]]></id>")[0]
    log_debug(f"Feature value ID for '{value}': {feature_value_id}")
    return feature_value_id


def get_product_count_in_category(category_id):
    """
    Retrieve the number of products in a specific category.
    """
    log_debug(f"Fetching product count for category ID: {category_id}")
    response = requests.get(
        f"{API_URL}categories/{category_id}",
        params={"display": "full"},
        auth=(API_KEY, "")
    )
    response.raise_for_status()
    category_data = response.text
    product_count = 0

    if "<products>" in category_data:
        # Extract and count the number of <product> elements
        product_count = category_data.count("<product>")

    log_debug(f"Product count for category ID {category_id}: {product_count}")
    return product_count


def process_products(json_file):
    """Process products from JSON file."""
    if not os.path.isfile(json_file):
        print(f"JSON file not found: {json_file}")
        return

    log_debug(f"Reading JSON file: {json_file}")
    with open(json_file, 'r', encoding='utf-8') as file:
        data = json.load(file)

    for category_entry in data:
        category = category_entry.get("category", "")
        parent_id = 2  # Default parent category (e.g., "Home")
        category_id = parent_id

        first_product_image = None

        # Get the first product image for the category
        for product in category_entry.get("products", []):
            if os.path.isfile(product.get("first_image", "")):
                first_product_image = product.get("first_image", "")
                break

        # Handle category hierarchy
        log_debug(f"Processing category: {category}")
        for part in category.split("/"):
            category_id = get_or_create_category(part.strip(), category_id, first_product_image)

        # Process products
        for product in category_entry.get("products", []):
            name = product.get("name", "Unnamed")
            price = product.get("price", "0.0").replace("$", "")
            description = product.get("details", {}).get("Description", name)

            # Validate description
            if description in ["N/A", "", "ATTENTION!", "out of stock"]:
                description = name

            available = product.get("details", {}).get("Available", "N/A")
            active = 1 if available != "N/A" else 0
            quantity = random.randint(1,10)
            supplier = random.randint(1,2)
            weight = round(random.uniform(0.05, 0.2), 2)
            image_path = "../scrapper/" + product.get("first_image", "")
            second_image_path = "../scrapper/" + product.get("second_image", "")

            # Generate product_features XML
            attributes = product.get("details", {}).get("attributes", {})
            product_features_xml = "".join(
                f"""
                            <product_feature>
                              <id><![CDATA[{feature_id}]]></id>
                              <id_feature_value><![CDATA[{value_id}]]></id_feature_value>
                            </product_feature>
                            """
                for feature_id, value_id in resolve_feature_ids(attributes).items()
            )

            log_debug(f"Adding product: {name}")
            log_debug(f"Price: {price}, Quantity: {quantity}, Active: {active}, Image Path: {image_path}")
            log_debug(f"With ID_Category: {category_id}")

            product_position = get_product_count_in_category(category_id) + 1

            # Create product
            product_xml = f"""
            <prestashop>
              <product>
                <id_category_default>{category_id}</id_category_default>
                <price>{format(float(price) * 4.2, '.2f')}</price>
                <active>{active}</active>
                <name>
                  <language id="1">{name}</language>
                </name>
                <description>
                  <language id="1">{description}</language>
                </description>
                <associations>
                  <product_features>
                    {product_features_xml}
                  </product_features>
                  <categories>
                    <category><id>{category_id}</id></category>
                    <position_in_category>{product_position}</position_in_category>
                  </categories>
                </associations>
                <visibility>both</visibility>
                <available_for_order>1</available_for_order>
                <state>1</state>
                <id_tax_rules_group>4</id_tax_rules_group>
                <id_supplier>{supplier}</id_supplier>
                <redirect_type>301-category</redirect_type>
                <show_price>1</show_price>
                <weight>{weight}</weight>
              </product>
            </prestashop>
            """
            response = requests.post(
                f"{API_URL}products",
                data=product_xml.encode('utf-8'),
                headers={"Content-Type": "application/xml"},
                auth=(API_KEY, "")
            )
            response.raise_for_status()
            product_data = response.text
            product_id = None
            if "<id><![CDATA[" in product_data:
                product_id = product_data.split("<id><![CDATA[")[1].split("]]></id>")[0]

            if not product_id:
                print(f"Failed to add product: {name}")
                continue
            print(f"Added product '{name}' with ID: {product_id}")

            # Update stock
            # Find the stock ID for the product
            stock_id_response = requests.get(
                f"{API_URL}stock_availables?filter%5Bid_product%5D={product_id}&display=full",
                auth=(API_KEY, "")
            )

            # Parse the response to extract stock ID
            try:
                stock_id = re.search(r"<id><!\[CDATA\[([0-9]+)]]></id>", stock_id_response.text).group(1)
            except AttributeError:
                stock_id = None
                log_debug(f"No stock ID found for product ID {product_id}")

            # Prepare XML for stock update
            stock_xml = f"""
            <prestashop>
              <stock_available>
                <id>{stock_id or ''}</id>
                <id_product>{product_id}</id_product>
                <id_product_attribute>0</id_product_attribute>
                <id_shop>1</id_shop>
                <id_shop_group>0</id_shop_group>
                <quantity>{quantity}</quantity>
                <depends_on_stock>0</depends_on_stock>
                <out_of_stock>2</out_of_stock>
              </stock_available>
            </prestashop>
            """

            if stock_id:
                # Update existing stock
                response = requests.put(
                    f"{API_URL}stock_availables/{stock_id}",
                    data=stock_xml.encode('utf-8'),
                    headers={"Content-Type": "application/xml"},
                    auth=(API_KEY, "")
                )
                if "<error>" in response.text:
                    print(f"Failed to update stock for '{name}'. Response: {response.text}")
                else:
                    print(f"Updated stock for '{name}' to {quantity}")
            else:
                # Handle case where stock ID is not found
                print(f"Stock ID not found for product '{name}'. Cannot update stock.")

            # Upload images
            for img_path in [image_path, second_image_path]:
                if img_path and os.path.isfile(img_path):
                    log_debug(f"Uploading image for '{name}': {img_path}")
                    with open(img_path, 'rb') as img_file:
                        files = {'image': img_file}
                        response = requests.post(
                            f"{API_URL}images/products/{product_id}",
                            files=files,
                            auth=(API_KEY, "")
                        )
                    if "<error>" in response.text:
                        print(f"Failed to upload image for '{name}'")
                    else:
                        print(f"Image uploaded for '{name}'")
                else:
                    log_debug(f"Image file not found for '{name}': {img_path}")

    print("Processing complete.")


if __name__ == "__main__":
    process_products(JSON_FILE)
