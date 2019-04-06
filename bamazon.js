// Variables

var mysql = require("mysql");
var inquirer = require("inquirer");
var totalCost;
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
                    //"Item ID": res[i].item_id,
                    "Product Name": res[i].product_name,
                    "Department Name": res[i].department_name,
                    "Price": res[i].price,
                    "Stock Quantity": res[i].stock_quantity
                }
            );
          }
          console.table(productTable);
          start(res);
    })
}

    // Product & Quantity Selection //
function start(res){

    inquirer.prompt([
        {
            name: "item_id" ,
            type: "input",
            message: "|| - What is the index number of the product you would like to buy? - ||",
            validate: function(value){
                return((value >= 0) && (value < res.length));
            }
        },
        {
            name: "quantity",
            type: "input",
            message: "|| - How many would you like to buy? - ||",
            validate: function(value){
                return (value > 0)
            }

        }
    ])
    .then (function(answer){
            if (answer.item_id >= 0 && answer.item_id < res.length){
                if (res [answer.item_id].stock_quantity >= answer.quantity){
                    var remaining = res[answer.item_id].stock_quantity - answer.quantity;
                    totalCost = answer.quantity * res[answer.item_id].price;
                    console.log("|| - Your total cost is: $" + parseFloat(totalCost).toFixed(2) + " - ||");
                    var bamazonReport = "UPDATE products SET ? WHERE ?"
                    connection.query(bamazonReport, [{stock_quantity : remaining}, {item_id: +answer.item_id+1}], function(err, response){
                    displayItems();   
                    });
            } else {
                console.log("|| - Insufficient quantity, there are " + res [answer.item_id].stock_quantity + " available for purchase - ||");
                displayItems();
            }
        }
    });
};