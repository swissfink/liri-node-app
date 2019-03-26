// var dotenv = require("dotenv").config();

var axios = require("axios");

// var fs = require("fs");

// var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

// var moment = require('moment');

// moment().format();

// First argument
var action = process.argv[2];

switch (action) {
    case "concert-this":
      concert();
      break;
    
    case "spotify-this-song":
      spot();
      break;
    
    case "movie-this":
      movie();
      break;
    
    case "do-what-it-says":
      doit();
      break;
    }

//Second Argument

// Concert Search
//////////////////////////////////////////////////

function concert() {

    // Store all of the arguments in an array
    var nodeArgs = process.argv;

    // Create an empty variable for holding the band name
    var artist = "";

    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
        artist = artist + "%20" + nodeArgs[i];
    }
    else {
        artist += nodeArgs[i];
    }

    console.log(artist);
  }

    // Run the axios.get function...
    // The axios.get function takes in a URL and returns a promise (just like $.ajax)
    // axios
    // .get("rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    // .then(function(response) {
    // // If the axios was successful...
    // // Then log the body from the site!
    // console.log(response);
    // })
    // if (error) {
    // console.log("\r\n\r\n\r\n");
    // console.log("Sorry we don't have enough data on that band! Try another one.");
    // console.log("\r\n\r\n\r\n");

    // return;
    // } else {

    // console.log("This band will be performing at " + data.venue.name);
    // console.log("in " + data.venue.city);
    // console.log("on " + data.datetime);

    // }

}


// Song Search
////////////////////////////////////////////////
function spot() {

    // Store all of the arguments in an array
    var nodeArgs = process.argv;

    // Create an empty variable for holding the band name
    var search = "";

    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
        search = search + "%20" + nodeArgs[i];
    }
    else {
        search += nodeArgs[i];
    }
    console.log(search);
  }
}

// Movie Search
////////////////////////////////////////////////

function movie() {

    // Store all of the arguments in an array
    var nodeArgs = process.argv;

    // Create an empty variable for holding the band name
    var search = "";

    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
        search = search + "+" + nodeArgs[i];
    }
    else {
        search += nodeArgs[i];
    }
    console.log(search);
  }
}


// Do What It Says
////////////////////////////////////////////////

function doit() {

    // Store all of the arguments in an array
    var nodeArgs = process.argv;

    // Create an empty variable for holding the band name
    var search = "";

    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
        search = search + "+" + nodeArgs[i];
    }
    else {
        search += nodeArgs[i];
    }
    console.log(search);
  }
}
