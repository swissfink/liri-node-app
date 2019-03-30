# liri-node-app

## A command line node app that takes in parameters and gives back data.

### Overview

For this assignment, the class made a LIRI app. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. 

LIRI is be a command line node app that takes in parameters and gives back data.

### How It Works

1. LIRI searches "Spotify" for songs, "Bands in Town" for concerts, and "OMDB" for movies.

2. To retrieve the data that powers this app, it sends requests using the `axios` package to the "Bands in Town," "Spotify," and "OMDB" APIs.

3. The liri.js can take in the following commands:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

### What Each Command Does

1. `node liri.js concert-this <artist/band name here>`

   * This will search the "Bands in Town Artist Events" API for an artist and render the following information about each event to the terminal:

     * Name of the venue.

     * Venue location.

     * Date of the Event (using Moment.js to format the date).

2. `node liri.js spotify-this-song '<song name here>'`

   * This will search the "Spotify" API and show the following information about the song in your terminal/bash window:

     * Artist(s).

     * The song's name.

     * A preview link of the song from Spotify.

     * The album that the song is from.

3. `node liri.js movie-this '<movie name here>'`

   * This will search the "OBDM" API and output the following information to your terminal/bash window:

       * Title of the movie.

       * Year the movie came out.

       * IMDB Rating of the movie.

       * Rotten Tomatoes Rating of the movie.

       * Country where the movie was produced.

       * Language of the movie.

       * Plot of the movie.

       * Actors in the movie.

4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of a random.txt file and then use it to call one of LIRI's commands.

### Examples of the LIRI app executing commands

1. `node liri.js concert-this beck`

     * **Command**
     ![alt text](https://github.com/swissfink/liri-node-app/blob/master/images/concert-command.png "concert-this command") 

     * **Results**
     ![alt text](https://github.com/swissfink/liri-node-app/blob/master/images/concert-results.png "concert-this results") 


2. `node liri.js spotify-this-song blue`

     * **Command**
     ![alt text](https://github.com/swissfink/liri-node-app/blob/master/images/spotify-command.png "spoify-this-song command") 

     * **Results**
     ![alt text](https://github.com/swissfink/liri-node-app/blob/master/images/spotify-results.png "spoify-this-song results") 

     * **Real Time**
     ![alt text](https://github.com/swissfink/liri-node-app/blob/master/images/spotify.gif "spoify-this-song results gif") 


3. `node liri.js spotify-this-song` (no entry)

     * **Command**
     ![alt text](https://github.com/swissfink/liri-node-app/blob/master/images/spotify-command-no-entry.png "spoify-this-song command") 

     * **Results**
     ![alt text](https://github.com/swissfink/liri-node-app/blob/master/images/spotify-results-no-entry.png "spoify-this-song results - no entry") 

4. `node liri.js movie-this cars 2` 

     * **Command**
     ![alt text](https://github.com/swissfink/liri-node-app/blob/master/images/movie-command.png "movie-this command") 

     * **Results**
     ![alt text](https://github.com/swissfink/liri-node-app/blob/master/images/movie-results.png "movie-this results") 

5. `node liri.js movie-this` (no entry) 

     * **Command**
     ![alt text](https://github.com/swissfink/liri-node-app/blob/master/images/movie-command-no-entry.png "movie-this command - no entry") 

     * **Results**
     ![alt text](https://github.com/swissfink/liri-node-app/blob/master/images/movie-results-no-entry.png "movie-this results - no entry") 

6. `node liri.js do-what-it-says` 

     * **Command**
     ![alt text](https://github.com/swissfink/liri-node-app/blob/master/images/do-command.png "concert-this command") 

     * **Results**
     ![alt text](https://github.com/swissfink/liri-node-app/blob/master/images/do-results.png "concert-this results") 