// Create the search variable <show or actor>
var search = process.argv[2];

var term = process.argv.slice(3).join(" ");
var tv = require("./tv_js.js");

if (!search) {
    search = "show";
}

if (!term) {
    term = "Andy Griffith";
}

if (search === "show") {
    console.log("User is searching for a show");
}

if (search === "actor") {
    console.log("user is searching for an actor");
}
else {
    console.log("Invalid input");
}

console.log(`
    Search: ${search}
    Term: ${term}
`)


