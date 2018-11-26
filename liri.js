var inquirer = require("inquirer");

require("dotenv").config();

const result = dotenv.config()
 
if (result.error) {
  throw result.error
}
 
console.log(result.parsed)

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <4b64e9ac130048c18dd2fd95d9edba9f>,
  secret: <4bf34fcd5184d2e8c9517150aeb065e>
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(chalk`
Artist: ${songs.artist[0].name}
Song Title: ${songs.name}
Album: ${songs.album.name}
Spotify Link: ${songs.external_urls.spotify}
`); 
});

var axios = require("axios");

axios.get('/user?ID=f680275c')
  .then(function (response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  })
  .catch(function (error) {
    console.log(error);
  });const db = require('db')
    db.connect({
  
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
});


