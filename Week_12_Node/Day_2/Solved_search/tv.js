var axios = require("axios");
var fs = require("fs");

// Create the TV constructor
var TV = function () {
  // `divider` will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findShow = function (show) {
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    axios.get(URL)
      .then(function (resp) {
        // parse the response body (string) to a JSON object

        // showData ends up being the string containing the show data we will print to the console
        var showData = [
          "Show: " + resp.data.name,
          "Genre(s): " + resp.data.genres.join(", "),
          "Rating: " + resp.data.rating.average,
          "Network: " + resp.data.network.name,
          "Summary: " + resp.data.summary
        ].join("\n\n");

        // Append showData and the divider to log.txt, print showData to the console
        fs.appendFile("log.txt", showData + divider, function (err) {
          if (err) throw err;
          console.log(showData);
        });
      })
      .catch(function (err) {
        console.error(err);
      })
  };

  // findActor takes in the name of an actor to search for
  this.findActor = function (actor) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;

    axios.get(URL)
      .then(function (resp) {
        // actorData ends up being the string containing the show data we will print to the console
        var actorData = [
          "Name: " + resp.data[0].person.name,
          "Birthday: " + resp.data[0].person.birthday,
          "Gender: " + resp.data[0].person.gender,
          "Country: " + resp.data[0].person.country.name,
          "URL: " + resp.data[0].person.url
        ].join("\n\n");

        // Append actorData and the divider to log.txt, print showData to the console
        fs.appendFile("log.txt", actorData + divider, function (err) {
          if (err) throw err;
          console.log(actorData);
        });
      })
      .catch(function (err) {
        console.error(err);
      })
  };

};


module.exports = TV;
