var fs = require("fs");

var theKeys = require("./keys.js");

//asynchronously reads the entire contents of a file. Example:

fs.readFile('keys.js', (err, data) => {
    if (err) throw err;
console.log(data);
});


//if options is a string, then it specifies the encoding. Example:
// fs.readFile(file[,options],callback)

fs.readFile('keys.js', 'utf8', callback); //callback is (err, data)

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

console.log("params", theKeys.screen_name);


/*
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
});*/

