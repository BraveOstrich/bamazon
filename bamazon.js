// Variables

var mysql = require("mysql");
var inquirer = require("inquirer");

// Create Connection

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "bamazonDB"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected to database bamazonDB");
});