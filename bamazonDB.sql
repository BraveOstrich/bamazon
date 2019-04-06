-- DROP DATABASE IF EXISTS bamazonDB;
-- CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
	item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price DECIMAL(10,2),
    stock_quantity INTEGER(10),
    PRIMARY KEY (item_id)
);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Battlefield", "Video Game", 49.99, 10),
(2, "Minecraft", "Video Game", 19.99, 10),
(3, "Settlers of Catan", "Board Game", 39.99, 10),
(4, "Cards Against Humanity", "Board Game", 19.99, 10),
(5, "Carry On by Rainbow Rowell", "Books", 9.99, 20),
(6, "Pet Sematary by Stephen King", "Books", 14.99, 20),
(7, "Belgian Waffle Maker", "Cooking", 39.99, 5),
(8, "Cast Iron Skillet", "Cooking", 29.99, 5),
(9, "Scrub Daddy", "Cleaning", 4.99, 10),
(10, "Swiffer Wet Jet", "Cleaning", 19.99, 10);


-- UPDATE products SET department_name="Cooking"
-- WHERE department_name="";
-- UPDATE products SET product_name="Swiffer Wet Jet" WHERE item_id="10";
-- UPDATE products SET stock_quantity="75" WHERE product_name="Cards Against Humanity";




