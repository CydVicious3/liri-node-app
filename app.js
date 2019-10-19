require("dotenv").config();
//require file system
const fs = require('fs');
// link key page
const keys = require("./keys.js");
// initialize spotify
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
// require axios
const axios = require('axios');
//require moment
const moment = require('moment');
// omdb and bandsintown api
let omdb = (keys.omdb);
let bandsintown = (keys.bandsintown);

// take user command and input
let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");
console.log(operation)
console.log(topic)

// app logic
switch (userInput) {
  case 'concert-this':
    concert()
    break;

  case 'spotify-this-song':
    song()
    break;

  case 'movie-this':
    movies()
    break;

  case 'do-what-it-says':
    whatever()
    break;

  default:
    console.log("I don't know!")
    break;
}


//   * `movie-this`

//   * `do-what-it-says`

// * `concert-this`
function concert() {
  console.log(`Searching For ... ${userQuery} Shows!`)
  let queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
  console.log(queryURL)

  axios.get(queryURL).then(function (response) {
    console.log(response.data)
  })

  // for every concert (name, venue , country, city, date format with moment)
  for (i = 0; i < queryURL.length; i++) {
    text += queryURL[i] + " ";
  }
}

// * Artist(s)

//     * The song's name

//       * A preview link of the song from Spotify

//         * The album that the song is from

//           * If no song is provided then your program will default to "The Sign" by Ace of Base.
function song() {
  var spotify = new Spotify(keys.spotify);
  fetch('https://www.npmjs.com/package/node-spotify-api')
    .then(r => r.json())
    .then(data => {
    }

function movies() {


      }

function whatever() {


      }