// var mysql = require("mysql")

// var connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'root',
//     database: 'playlistDB'
// });


// connection.connect();


// connection.end();

var inquirer = require('inquirer');
inquirer.prompt([
    {
        type: input,
        message: "What is your name?"
    }

]).then(answers => {
    // Use user feedback for... whatever!!
});