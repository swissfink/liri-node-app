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
// Second Argument
//////////////////////////////////////////////////


///////////////////////////////
// Concert Search - bandsintown
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

  // For removing the "%20"s when displaying the user's search and making the title all caps for aesthtics.
  var p = artistName.toString();
  var displayName = p.replace(/%20/gi, " ").toUpperCase();

  // This line is just to help us debug against the actual URL.
  // console.log(queryUrl);

  axios
    .get(queryUrl)
    .then(function (response) {
      // Response
      // console.log(response.data); // Working

      console.log("\n\t ---------------------------------------------------------------\n");
      console.log("\t Upcoming Concerts for " + "'" + displayName + "'");
      console.log("\n\t ---------------------------------------------------------------\n");

      // Name of Venue
      console.log("\t " + displayName + "'s next show will be at the " + response.data[0].venue.name); // Working
      // Venue Location
      console.log("\t in " + response.data[0].venue.city + ", " + response.data[0].venue.country); // Working 
      // Date of the Event
      console.log("\t on " + moment(response.data[0].datetime).format("MM DD YYYY")); // Working
      // Line Break
      console.log("\n\t ---------------------------------------------------------------\n");

      // Name of Venue
      console.log("\t " + displayName + " will also be performing at the " + response.data[1].venue.name); // Working
      // Venue Location
      console.log("\t in " + response.data[1].venue.city + ", " + response.data[1].venue.country); // Working 
      // Date of the Event
      console.log("\t on " + moment(response.data[1].datetime).format("MM DD YYYY")); // Working
      // Line Break
      console.log("\n\t ---------------------------------------------------------------\n");

      // Name of Venue
      console.log("\t And " + displayName + " will be at the " + response.data[2].venue.name); // Working
      // Venue Location
      console.log("\t in " + response.data[2].venue.city + ", " + response.data[2].venue.country); // Working 
      // Date of the Event
      console.log("\t on " + moment(response.data[2].datetime).format("MM DD YYYY")); // Working
      // Line Break
      console.log("\n\t ---------------------------------------------------------------\n");
    })

    .catch(function (error) {
      if (error) {
        console.log("\n\t ---------------------------------------------------------------\n");
        console.log("\t There is no additional concert information for this band/artist.");
        console.log("\n\t ---------------------------------------------------------------\n");
      }
    })

  // And this is just for the fun of it.
  var concert = require("./concert");
  console.log(concert);
  
};

///////////////////////////////
// Song Search - Spotify
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
      songName = songName + "%20" + nodeArgs[i];
    }
    else {
      songName += nodeArgs[i];
    }

    // console.log(songName);

  };

  if (nodeArgs.length == 3) {
    songName = "The Sign"; 
  }

  var keys = require("./keys.js");
  var spotify = new Spotify(keys.spotify);

  // DOCUMENTATION // https://developer.spotify.com/documentation/web-api/reference/object-model/#track-object-full 

  // For removing the "%20"s when displaying the user's search and making the title all caps for aesthtics.
  var t = songName.toString();
  var displaySong = t.replace(/%20/gi, " ").toUpperCase();

  // Then run a request with the Spotify API with the song name specified
  spotify
    .search({ type: 'track', query: songName, limit: 5 })
    .then(function (response) {
      // Response
      // console.log(response);
      // console.log(response.tracks);
      // line break
      console.log("\n\t ----------------------------------------\n");
      console.log("\t Song Matches for " + "'" + displaySong + "'");
      console.log("\n\t ---------------------------------------- \n");

      // Artist(s)
      console.log("\t Artist Name: " + response.tracks.items[0].artists[0].name);
      // Song name
      console.log("\t Song Title: " + response.tracks.items[0].name);
      // A preview link of the song from Spotify
      console.log("\t Preview Link: " + response.tracks.items[0].preview_url);
      // Album name that the song is from
      console.log("\t From the Album: " + response.tracks.items[0].album.name);
      // line break
      console.log("\n\t ---------------------------------------- \n ");

      // Artist(s)
      console.log("\t Artist Name: " + response.tracks.items[1].artists[0].name);
      // Song name
      console.log("\t Song Title: " + response.tracks.items[1].name);
      // A preview link of the song from Spotify
      console.log("\t Preview Link: " + response.tracks.items[1].preview_url);
      // Album name that the song is from
      console.log("\t From the Album: " + response.tracks.items[1].album.name);
      // line break
      console.log("\n\t ---------------------------------------- \n ");

      // Artist(s)
      console.log("\t Artist Name: " + response.tracks.items[2].artists[0].name);
      // Song name
      console.log("\t Song Title: " + response.tracks.items[2].name);
      // A preview link of the song from Spotify
      console.log("\t Preview Link: " + response.tracks.items[2].preview_url);
      // Album name that the song is from
      console.log("\t From the Album: " + response.tracks.items[2].album.name);
      // line break
      console.log("\n\t ---------------------------------------- \n ");

      // Artist(s)
      console.log("\t Artist Name: " + response.tracks.items[3].artists[0].name);
      // Song name
      console.log("\t Song Title: " + response.tracks.items[3].name);
      // A preview link of the song from Spotify
      console.log("\t Preview Link: " + response.tracks.items[3].preview_url);
      // Album name that the song is from
      console.log("\t From the Album: " + response.tracks.items[3].album.name);
      // line break
      console.log("\n\t ---------------------------------------- \n ");

      // Artist(s)
      console.log("\t Artist Name: " + response.tracks.items[4].artists[0].name);
      // Song name
      console.log("\t Song Title: " + response.tracks.items[4].name);
      // A preview link of the song from Spotify
      console.log("\t Preview Link: " + response.tracks.items[4].preview_url);
      // Album name that the song is from
      console.log("\t From the Album: " + response.tracks.items[4].album.name);
      // line break
      console.log("\n\t ---------------------------------------- \n ");
    })

    .catch(function (error) {
      if (error) {
        console.log("\n\t ---------------------------------------------------------------\n");
        console.log("\t There is no additional information for this song.");
        console.log("\n\t ---------------------------------------------------------------\n");
      }
    })

  // And this is just for the fun of it.
  var music = require("./music");
  console.log(music);

};

///////////////////////////////
// Movie Search - omdb
///////////////////////////////

function movieThis() {

  // Grab or assemble the movie name and store it in a variable called "movieName"
  var nodeArgs = process.argv;

  // Create an empty variable for holding the movie name in case there are multiple words in the movie title.
  var movieName = "";

  // Loop through all the words in the node argument
  // And do a little for-loop magic to handle the inclusion of "%20"s
  for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
      movieName = movieName + "%20" + nodeArgs[i];
    }

    else {
      movieName +=nodeArgs[i];
    }

    // console.log(movieName);

  };

  if (nodeArgs.length == 3) {
    movieName = "Mr. Nobody"; 
  }

  // DOCUMENTATION // https://media.readthedocs.org/pdf/omdbpy/latest/omdbpy.pdf 

  // Then run a request with axios to the OMDB API with the movie specified
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&apikey=trilogy";

  // This line is just to help debug against the actual URL.
  // console.log(queryUrl);

  // For removing the "%20"s when displaying the user's search and making the title all caps for aesthtics.
  var r = movieName.toString();
  var displayMovie = r.replace(/%20/gi, " ").toUpperCase();

  axios
    .get(queryUrl)
    .then(function (response) {
      //Response
      // console.log(response.data);
      console.log("\n\t ----------------------------------------\n");
      console.log("\t Movie Matches for " + "'" + displayMovie + "'");
      console.log("\n\t ---------------------------------------- \n");

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
      console.log("\n\t ---------------------------------------- \n");
    })

    .catch(function (error) {
      if (error) {
        console.log("\n\t ---------------------------------------------------------------\n");
        console.log("\t There is no additional information for this movie.");
        console.log("\n\t ---------------------------------------------------------------\n");
      }
    })

  // And this is just for the fun of it.
  var movie = require("./movie");
  console.log(movie);

};

///////////////////////////////
// Do What It Says - txt doc
///////////////////////////////

function doitNow() {

  fs.readFile("random.txt", "utf8", function (error, data) {
    // If the code experiences any errors it will log the error to the console.
    if (error) {
      console.log(error);
    };

    // Print the contents of data
    // console.log(data);

    // Then split the contents of data by commas
    var dataArr = data.split(",");

    // Then re-display the content as an array.
    // console.log(dataArr);    

    // Separate the data into indices so they can be used as arguments.
    // console.log(dataArr[0]); 
    // console.log(dataArr[1]);

    // We need the value of the existing songName varibale to be replaced with dataArr[1].
    // So we equate the existing argument being used to identify the song to search with our new argument. 
    process.argv[3] = dataArr[1]

    // And then pass this new argument throught the spotifyThis function
    spotifyThis(dataArr[1]);

  });

  // And this is just for the fun of it.
  // var moo = require("./moo");
  // console.log(moo);

};

