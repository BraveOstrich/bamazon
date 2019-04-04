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
    start();
});

// Functions 

function start(){
    inquirer.prompt({
        name: "item",
        type: "input",
        message: "What item would you like to buy?"
    })
    .then (function(answer){
        connection.query(
            "SELECT * FROM products WHERE product_name=?"
            {
                
            }
        )
    })
}