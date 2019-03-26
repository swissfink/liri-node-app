var dotenv = require("dotenv").config();

var axios = require("axios");

// var fs = require("fs");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

// var moment = require('moment');

// moment().format();

// First argument
var action = process.argv[2];

switch (action) {
    case "concert-this":
      concert();
      break;
    
    case "spotify-this-song":
      spotify();
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
    // And do a little for-loop magic to handle the inclusion of "%20"s as per the documentation
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
function spotify() {

    // Store all of the arguments in an array
    var nodeArgs = process.argv;

    // Create an empty variable for holding the band name
    var search = "";

    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "%20"s as per the documentation
    for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
        search = search + "%20" + nodeArgs[i];
    }
    else {
        search += nodeArgs[i];
    }

    console.log(search);

  }

  // This call isn't correct, but is needs to be something lek this.

    // // Then run a request with axios to the OMDB API with the movie specified
    // var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    // // This line is just to help us debug against the actual URL.
    // console.log(queryUrl);

    // axios.get(queryUrl).then(
    // function(response)

  // Artist(s)
  console.log("Artist Name: "+ response.data.artists);
  // Song name
  console.log("Song Title: "+ response.data.name);
  // A preview link of the song from Spotify
  console.log("Preview Link: "+ response.data.preview
  -url);
  // Album name that the song is from
  console.log("Album: "+ response.data.album);

}

// Movie Search
////////////////////////////////////////////////

function movie() {

    // Grab or assemble the movie name and store it in a variable called "movieName"
    var nodeArgs = process.argv;

    // Create an empty variable for holding the movie name in case there are multiple words in the movie title.
    var movieName = "";

    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    }

    else {
        movieName += nodeArgs[i];
    }

    // console.log(movieName);

  }

  // Then run a request with axios to the OMDB API with the movie specified
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);

  axios.get(queryUrl).then(
    function(response) {
      //Title of the movie.
      console.log("Movie Title: "+ response.data.Title);
      // Year the movie came out.
      console.log("Release Year: " + response.data.Year);
      // IMDB Rating of the movie.
      console.log("IMDB Rating: " + response.data.imdbRating);
      // Rotten Tomatoes Rating of the movie.
      console.log("RT Rating: " + response.data.tomatoRating);
      // Country where the movie was produced.
      console.log("Country Produced: " + response.data.Country);
      // Language of the movie.
      console.log("Language: " + response.data.Language);
      // Plot of the movie.
      console.log("Plot: " + response.data.Plot);
      // Actors in the movie.
      console.log("Actors: " + response.data.Actors);
    }
  
  );

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
