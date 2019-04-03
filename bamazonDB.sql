DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
	item_id INTEGER NOT NULL,
	product_name VARCHAR(50),
	department_name VARCHAR(50),
	price DECIMAL(6, 2),
	stock_quantity INTEGER(10),
	PRIMARY KEY (item_id)
);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Settlers of Catan", "Board Games", 39.99, 10);