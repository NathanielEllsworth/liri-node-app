var fs = require("fs");

var keysNeeded = require("./keys.js");

var twitter = keysNeeded.twitterKeys;
var spotify = keysNeeded.spotifyKeys;

var User = process.argv[2];

var Text = process.argv[3];



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
    spotifyClient.search({type: 'track', query: Text, limit: 1}, (err, data) => {

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
    fs.readFile("random.txt", "utf8", (err, data) => {

        // log error
        if (err) {
            return console.log("Error", err);
        }

        var textArray = data.split(",");

        User = textArray[0];

        Text = textArray[1];
        console.log(Text);

        getSpotify();

    });

}




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



