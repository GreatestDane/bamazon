var mysql = require("mysql");
var inquirer = require("inquirer")


// Create the MySql query to initialize the process  
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "root",
    database: "bamazon"
})


connection.connect(function (err) {
    if (err) throw err;
});







//display products function

function displayProducts() {
    var res;
    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        console.log(res);
        inquirer.prompt([{
            name: "product",
            type: "input",
            message: "Purchase an item, select it by ID number"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many of these would you like to purchase?"
        }]
        )
            .then(function (answer) {
                var query = "SELECT stock_quantity FROM products WHERE ?";
                connection.query(query, { id: answer.product }, function (err, res) {
                    if (answer.quantity < res[0].stock_quantity) {
                        console.log("Your order is being fulfilled");
                        //Give the customer the price
                        query = "SELECT price FROM products WHERE ?";
                        connection.query(query, { id: answer.product }, function (err, res) {
                            var price = answer.quantity * res[0].price;
                            console.log("That will cost $" + price);
                        })
                        //Subtract the quantity purchased from the stock in the database
                        query = "SELECT stock_quantity FROM products WHERE ?";
                        connection.query(query, { id: answer.product }, function (err, res) {
                            var newQuantity = res[0].stock_quantity - answer.quantity;
                            //Update the database
                            query = "UPDATE products SET stock_quantity = " + newQuantity + " WHERE ?";
                            connection.query(query, { id: answer.product }, function (err, res) {
                                console.log("there are " + newQuantity + " left.");
                            })
                        })

                    }
                    else {
                        console.log("There is not enough in stock");
                    }
                })
            })
    })
};


displayProducts()








