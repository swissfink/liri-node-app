require("dotenv").config();

var axios = require("axios");

var Spotify = require('node-spotify-api');
 
var moment = require('moment');

var fs = require("fs");

//////////////////////////////////////////////////
// First argument
//////////////////////////////////////////////////

var action = process.argv[2];

switch (action) {

  case "concert-this":
    concertThis();
    break;

  case "spotify-this-song":
    spotifyThis();
    break;

  case "movie-this":
    movieThis();
    break;

  case "do-what-it-says":
    doitNow();
    break;

};

//////////////////////////////////////////////////
//Second Argument
//////////////////////////////////////////////////


///////////////////////////////
// Concert Search
///////////////////////////////

function concertThis() {

  // Store all of the arguments in an array
  var nodeArgs = process.argv;

  // Create an empty variable for holding the band name
  var artistName = "";

  // Loop through all the words in the node argument
  // And do a little for-loop magic to handle the inclusion of "%20"s as per the documentation
  for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
      artistName = artistName + "%20" + nodeArgs[i];
    }
    else {
      artistName += nodeArgs[i];
    }

    // console.log(artistName);

  };

  // DOCUMENTATION // https://app.swaggerhub.com/apis-docs/Bandsintown/PublicAPI/3.0.0#/artist%20events/artistEvents

  // Then run a request with axios to the bandsintown API with the artist specified
  var queryUrl = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";

  // This line is just to help us debug against the actual URL.
  // console.log(queryUrl);

  axios
    .get(queryUrl)
    .then(function (response) {
      // Response
      console.log(response.data); // This is working
      // Name of Venue
      // console.log("\t This band will be performing at " + response.data.venue); // Undefined
      // Venue Location
      // console.log("\t in " + response.data.venue.city); // Not working at all
      // Date of the Event
      // console.log("\t on " + moment(response.data.datetime).format("MM DD YYYY")); // Not Working
  })

  .catch(function (error) {
    if (error) {
      console.log(error);
    }
  })
};

///////////////////////////////
// Song Search
///////////////////////////////

function spotifyThis() {

  // Store all of the arguments in an array
  var nodeArgs = process.argv;

  // Create an empty variable for holding the band name
  var songName = "";

  // Loop through all the words in the node argument
  // And do a little for-loop magic to handle the inclusion of "+"s as per the documentation
  for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
      songName = songName + "+" + nodeArgs[i];
    }
    else {
      songName += nodeArgs[i];
    }

    // console.log(songName);

  }

  var keys = require("./keys.js");

  var spotify = new Spotify(keys.spotify);

  // DOCUMENTATION // https://developer.spotify.com/documentation/web-api/reference/object-model/#track-object-full 

  // Then run a request with the Spotify API with the song name specified
  spotify
    .search({ type: 'track', query: songName, limit: 10 })
    .then(function(response) {
      // Response
      // console.log(response);
      // Artist(s)
      console.log("\t Artist Name: " + response.artists);
      // Song name
      console.log("\t Song Title: " + response.name);
      // A preview link of the song from Spotify
      console.log("\t Preview Link: " + response.preview_url);
      // Album name that the song is from
      console.log("\t Album: " + response.album);
    })
    .catch(function(err) {
      console.log(err);
    });
};

///////////////////////////////
// Movie Search
///////////////////////////////

function movieThis() {

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

  };

  // DOCUMENTATION // https://media.readthedocs.org/pdf/omdbpy/latest/omdbpy.pdf 

  // Then run a request with axios to the OMDB API with the movie specified
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&apikey=trilogy";

  // This line is just to help us debug against the actual URL.
  // console.log(queryUrl);

  axios
    .get(queryUrl)
    .then(function (response) {
      //Response
      // console.log(response.data);
      //Title of the movie.
      console.log("\t Movie Title: " + response.data.Title);
      // Year the movie came out.
      console.log("\t Release Year: " + response.data.Year);
      // IMDB Rating of the movie.
      console.log("\t IMDB Rating: " + response.data.imdbRating);
      // Rotten Tomatoes Rating of the movie.
      console.log("\t RT Rating: " + response.data.tomatoRating);
      // Country where the movie was produced.
      console.log("\t Country Produced: " + response.data.Country);
      // Language of the movie.
      console.log("\t Language: " + response.data.Language);
      // Plot of the movie.
      console.log("\t Plot: " + response.data.Plot);
      // Actors in the movie.
      console.log("\t Actors: " + response.data.Actors);
    })
    .catch(function (error) {
      if (error) {
        console.log(error);
      }
    })
};

///////////////////////////////
// Do What It Says
///////////////////////////////

function doitNow() {

  fs.readFile("random.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
  
    // We will then print the contents of data
    console.log(data);
  
    // Then split it by commas
    // var dataArr = data.split(",");
  
    // Then re-display the content as an array.
    // console.log(dataArr);
  
  });

};

