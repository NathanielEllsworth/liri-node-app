var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'v3dKodtJmJ7Mjwiu8w2Q4r04H',
    consumer_secret: 'Ri6GEnITtmQwdHm6KExwLG0satO4bIULjI5l0469Ds6gXci8uW',
    access_token_key: '875703628534878208-TDlNtANXXeMkCJC0sgwmpIiv3xIQGaf',
    access_token_secret: 'VDdm8cgpDKUOfj1nam8qqjc32nXgmHDMtvtSGR7bSq0jV'
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
});