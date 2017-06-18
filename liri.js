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
    /*
     case 'tweets':    //type: 'node liri tweets' in the command line to get the tweets
     getTweets();
     break;
     */
    case 'spotify':   //type: 'node liri spotify' in the command line to get the song
        getSpotify();
        break;
    case 'movie':
        getMovie();
        break;
    case 'do-what-it-says':
        getText();
        break;


/*
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

            for (var i = 0; i < 4; i++) {

                console.log("");
                console.log("tweet -------- ", tweets[i].text);

                console.log("time tweeted ------------ ", tweets[i].created_at);
                console.log("");
            }
        });
    }
*/


    function getSpotify() {

        var Spotify = require('node-spotify-api');      //https://www.npmjs.com/package/node-spotify-api

        var client = new Spotify({
            id: spotify.client_id,
            secret: spotify.client_secret

        });

        client.search({type: 'track', query: 'All the Small Things'}, (error, data) => {   //api site
            if (error) {
                return console.log('error occured: ' + error);
            }

            console.log(data);
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    function getText() {
        fs.readFile("random.txt", "utf8", (error, data) => {    //Classwork 5.4 #13
            if (error) {
                return console.log(error);
            }

            var output = data.slice(0);       //stack overflow

            console.log(output[0]);

            if (output[0] === User) {

                Text = output[1]


                getSpotify()
            }

        })


    }

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



 //login

 console.log("params", theKeys.screen_name);*/


/*
 var params = {screen_name: 'nodejs'};
 client.get('statuses/user_timeline', params, function(error, tweets, response) {
 if (!error) {
 console.log(tweets);
 }
 });*/



