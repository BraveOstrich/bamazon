// Variables

var mysql = require("mysql");
var inquirer = require("inquirer");

// Create Connection

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "CodingClass",
    database: "bamazonDB"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected to database bamazonDB");
    displayItems();
});

// Functions //

    // Products & Quantity Table //
function displayItems(){
    connection.query("SELECT * FROM products", function(err, res){
        
        var productTable = [];
        for (var i = 0; i < res.length; i++) {
            productTable.push(
                {
                    "Item ID": res[i].item_id,
                    "Product Name": res[i].product_name,
                    "Department Name": res[i].department_name,
                    "Price": res[i].price,
                    "Stock Quantity": res[i].stock_quantity
                }
            );
          }
          console.table(productTable);
          start();
    })
}

    // Product & Quantity Selection //
function start(){
    inquirer.prompt([
        {
            name: "itemID",
            type: "input",
            message: "What is the item ID of the product you would like to buy?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?"
        }
    ])
    .then (function(answer){
        console.log(answer);
        connection.query(
            "UPDATE products SET ? WHERE ?", 
        [
            {
                stock_quantity: stock_quantity - answer.quantity
            },
            {
                item_id: answer.itemID
            }
        
        ],
        function(err, res){
             

            var productTable = [];
        for (var i = 0; i < res.length; i++) {
            productTable.push(
                {
                    "Item ID": res[i].item_id,
                    "Product Name": res[i].product_name,
                    "Department Name": res[i].department_name,
                    "Price": res[i].price,
                    "Stock Quantity": res[i].stock_quantity
                }
            );
          }
          console.table(productTable);
        })
    })
}