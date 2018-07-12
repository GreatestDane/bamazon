var mysql = require("mysql")

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: '1000songsDB'
});


connection.connect();
selectAll();

connection.end();

function selectAll() {
    connection.query("SELECT * FROM songs WHERE song_name = 'I kissed a girl'", function (error, results, fields) {
        if (error) throw error;
        console.log(results)
    });
}