var mysql = require("mysql")

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'ice_creamDB'
});

connection.connect();

connection.query("SELECT * from products", function (error, results, fields) {
    if (error) throw error;
    console.log(results)
});

connection.end();