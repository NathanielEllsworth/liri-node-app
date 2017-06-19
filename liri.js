var fs = require("fs");

var keysNeeded = require("./keys.js");

var twitter = keysNeeded.twitterKeys;
var spotify = keysNeeded.spotifyKeys;

var User = process.argv[2];

var Text = process.argv[3];

//asynchronously reads the entire contents of a file. Example:

/*fs.readFile('keys.js', (err, data) => {
 if (err) throw err;
 console.log(data);
 });*/


switch (User) {   // classwork 5.4 #15 bank.js

    case 'tweets':    //type: 'node liri tweets' in the command line to get the tweets
        getTweets();
        break;
    case 'spotify':   //type: 'node liri spotify' in the command line to get the song
        getSpotify();
        break;
    case 'do-what-it-says':
        getText();
        break;
    case 'movie':
        getMovie();
        break;
}

function getTweets() {


    var Twitter = require('twitter');

    var client = new Twitter({
        consumer_key: twitter.consumer_key,
        consumer_secret: twitter.consumer_secret,
        access_token_key: twitter.access_token_key,
        access_token_secret: twitter.access_token_secret


    });

    var params = {screen_name: 'SwimRunBike1'}; // user name: RunBikeSwim
    client.get('statuses/user_timeline', params, (error, tweets, response) => {
        if (error) throw error;

        console.log(tweets[0].user.name);

        for (var i = 0; i < tweets.length; i++) {

            console.log("");
            console.log("tweet -------- ", tweets[i].text);

            console.log("time tweeted ------------ ", tweets[i].created_at);
            console.log("");
        }
    });
}


function getSpotify() {

    // Spotify API auth
    var Spotify = require('node-spotify-api');      //https://www.npmjs.com/package/node-spotify-api

    var spotifyClient = new Spotify({
        id: spotify.client_id,
        secret: spotify.client_secret,
    })


    // Spotify search query
    spotifyClient.search({type: 'track', query: "Forbidden Fruit", limit: 1}, (err, data) => {

        if (err) {
            return console.log('Error occurred: ' + err);
        }
        //console.log(data);


        var music = data.tracks.items[0];


        console.log('----------------------------------------------------------');

        console.log("Spotify's search result for", Text, ":");

        // artist name
        console.log("Artist:", music.album.artists[0].name);

        // song name
        console.log("Album name:", music.album.name);
        // Url
        console.log("URL:", music.preview_url);
        // album name
        console.log("Song Title:", music.name);

        console.log('----------------------------------------------------------')

    });

}


function getText() {

    // Read the random.txt file
    fs.readFile("random.txt", "utf8", function (err, data) {

        // log error
        if (err) {
            return console.log(err);
        }



        getSpotify();

    });

}


/*function getSpotify() {

 var Spotify = require('node-spotify-api');      //https://www.npmjs.com/package/node-spotify-api

 var client = new Spotify({
 id: spotify.client_id,
 secret: spotify.client_secret,


 });

 client.search({type: 'track', query: Text, limit: 1}, (error, data) => {   //api site
 if (error) {
 return console.log('error occured: ' + error);
 }

 //console.log(data);

 var songPicked = data.tracks.items[0];

 console.log(songPicked.album.artists[0].name);

 console.log(songPicked.name);

 console.log(songPicked.album.name);

 console.log(songPicked.preview_url);
 })


 }*/


function getText() {
    fs.readFile("random.txt", "utf8", (error, data) => {    //Classwork 5.4 #13
        if (error) throw error;


        var textArray = data.split(",");


        var i = textArray.indexOf(0);
        if (i != -1) {
            textArray.splice(i, 0);
        }


        console.log(textArray);


        if (textArray[0] === User) {

            User = textArray[0];

            Text = textArray[1];

            getSpotify();

        }


        if (textArray[0] === User) {

            User = textArray[0];

        }


    });

}

//if options is a string, then it specifies the encoding. Example:
// fs.readFile(file[,options],callback)

/*fs.readFile('keys.js', 'utf8', callback); //callback is (err, data)

 //just twitter

 console.log("-------------------------");

 console.log("Just Twitter keys");
 console.log('twitter', theKeys.Twitter);
 console.log('twitter', theKeys.consumer_key);
 console.log('twitter', theKeys.consumer_secret);
 console.log('twitter', theKeys.access_token_key);
 console.log('twitter', theKeys.access_token_secret);

 console.log("-------------------------");

 */

function getMovie() {

    // name of movie is set to text
    var nameOfMovie = Text;

    // OMDB queryURL
    var queryUrl = "http://www.omdbapi.com/?t=" + nameOfMovie + "&y=&plot=short&apikey=40e9cece";

    //console.log(queryUrl);

    // Request package function
    request(queryUrl, (error, response, body) => {

        //log error
        if (error) {
            return console.log(error);
        }


        var movie = JSON.parse(body);

        console.log('----------------------------------------------------------');
        // movie info
        console.log("Title: ", movie.Title);
        console.log("Release Year: ", movie.Year);
        console.log("Rating: ", movie.imdbRating);
        console.log("Country: ", movie.Country);
        console.log("Language: ", movie.Language);
        console.log("Plot: ", movie.Plot);
        console.log("Actors: ", movie.Actors);

        console.log('----------------------------------------------------------');


    })

}


/*
 var params = {screen_name: 'nodejs'};
 client.get('statuses/user_timeline', params, function(error, tweets, response) {
 if (!error) {
 console.log(tweets);
 }
 });*/



