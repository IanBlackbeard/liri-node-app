require("dotenv").config();

var fs = require("fs");
var keys = require("./keys.js")

// npm packages
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error && response.statusCode === 200) {
  	console.log(tweets[0].text);
  	
  	}
  	for (var i = 0; i < 20; i++) {
  		console.log(tweets[i].text);
  		console.log(tweets[i].created_at);
  	}  
});



// var movieName = process.argv[2];
// var queryUrl = require("request")
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// console.log(queryUrl);