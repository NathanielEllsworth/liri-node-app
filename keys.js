/*
 var twit = require('twitter'),
 twitter = new twit({
 consumer_key: 'v3dKodtJmJ7Mjwiu8w2Q4r04H',
 consumer_secret: 'Ri6GEnITtmQwdHm6KExwLG0satO4bIULjI5l0469Ds6gXci8uW',
 access_token_key: '875703628534878208-TDlNtANXXeMkCJC0sgwmpIiv3xIQGaf',
 access_token_secret: 'VDdm8cgpDKUOfj1nam8qqjc32nXgmHDMtvtSGR7bSq0jV'

 });

 var count = 0;
 util = require('util');

 twitter.stream('filter', {track: 'test'}, function(stream){

 stream.on('data',function(data){
 console.log(util.inspect(data));
 stream.destroy();
 process.exit(0);

 });
 });*/

//console.log("200");

exports.twitterKeys = {
    consumer_key: 'v3dKodtJmJ7Mjwiu8w2Q4r04H',
    consumer_secret: 'Ri6GEnITtmQwdHm6KExwLG0satO4bIULjI5l0469Ds6gXci8uW',
    access_token_key: '875703628534878208-TDlNtANXXeMkCJC0sgwmpIiv3xIQGaf',
    access_token_secret: 'VDdm8cgpDKUOfj1nam8qqjc32nXgmHDMtvtSGR7bSq0jV'
};

//node-spotify-api
exports.spotifyKeys = {
    client_id:'631db228381d4d51ab6671029849b07c',
    client_secret:'9fdb9a0d86e244b99a394c6fb45cefe3'


};

console.log(exports.spotifyKeys)

/*
 var Twitter = require('twitter');

 var client = new Twitter({
 consumer_key: 'v3dKodtJmJ7Mjwiu8w2Q4r04H',
 consumer_secret: 'Ri6GEnITtmQwdHm6KExwLG0satO4bIULjI5l0469Ds6gXci8uW',
 access_token_key: '875703628534878208-TDlNtANXXeMkCJC0sgwmpIiv3xIQGaf',
 access_token_secret: 'VDdm8cgpDKUOfj1nam8qqjc32nXgmHDMtvtSGR7bSq0jV'
 });
 */





/*var params = {screen_name: 'SwimRunBike1'}; //user name BikeRunSwim
 client.get('statuses/user_timeline', params, function(error, tweets, response) {
 if (error) throw error;

 console.log(tweets[0].user.name);

 for (var i = 0; i < 4; i++) {

 console.log("");
 console.log("tweet -------- ", tweets[i].text);

 console.log("time tweeted ------------ ", tweets[i].created_at);
 console.log("");
 }
 });*/


