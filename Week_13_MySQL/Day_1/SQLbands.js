var mysql = require("mysql")

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'playlistDB'
});


connection.connect();


connection.end();


//Create functions for query
function selectAll() {
    connection.query("SELECT * from songs", function (error, results, fields) {
        if (error) throw error;
        console.log(results)
    });
}

function create() {
    connection.query("INSERT INTO songs (title, artist, genre) VALUES ('Rich GIrl', 'Gwen Stefani', 'Pop')", function (error, results, fields) {
        if (error) throw error;
        console.log(results)
    });
}

function update() {
    connection.query("UPDATE songs SET title = 'I am a rich girl', artist = 'Gwyn Stephanie' WHERE id = 6", function (error, results, fields) {
        if (error) throw error;
        console.log(results)
    });
}

function del() {
    connection.query("DELETE FROM songs WHERE id = 6", function (error, results, fields) {
        if (error) throw error;
        console.log(results)
    });
}