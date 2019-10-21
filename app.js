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
// require geocoder for location
const NodeGeocoder = require('node-geocoder');

// take user command and input
let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");

// app logic
switch (userInput) {
  case 'concert-this':
    concert()
    break;

  case 'spotify-this-song':
    song()
    break;

  // case 'movie-this':
  //   movies()
  //   break;

  // case 'do-what-it-says':
  //   whatever()
  //   break;

  default:
    console.log("I don't know!")
    break;
}


//   * `movie-this`

//   * `do-what-it-says`

// * `concert-this`
function concert() {
  console.log(`Searching For ... ${userQuery} Shows!`)
  let queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  console.log(queryUrl)
  let userBand = JSON.parse(body);
  axios.get(queryUrl).then(function (response) {
    console.log(response.data)
  })
  if (userBand.length > 0) {
    // for every concert (name, venue , country, city, date format with moment)
    for (i = 0; i < 1; i++) {
      console.log(`
      \nArtist: ${userBand[i].lineup[0]} \nVenue: ${userBand[i].venue.name} \nVenue Location: ${userBand[i].venue.city}, ${userBand[i].venue.country}`);
      let concertDate = moment(userBand[1].datetime).format('MM/DD/YY  hh:00 A');
      console.log(`Date and Time: ${concertDate}`);
    }
  } else {
    console.log('Band / Concert Not Found!');
  }

}

// function song() {
//   let spotify = new Spotify(keys.spotify);
//   fetch('https://www.npmjs.com/package/node-spotify-api')
//     .then(r => r.json())
//     .then(data => { }
// }

function (song) {
  console.log(`Searching For ... ${userQuery} Song!`);
  // * If no song is provided then your program will default to "The Sign" by Ace of Base.
  if (!userQuery) { userQuery = 'the sign ace of base' };
  spotify.search({ type: 'track', query: userQuery, limit: 1 }, function (error, data) {
    if (error) {
      console.log('Error:' + error);
    }
    // put spotify data in array
    let spotifyArr = data.track.items;
    for (i = 0; i < spotifyArr.length; i = ++) {
      console.log(`Found this for you: \n\nArtist: ${data.track.items[i].album.artist[0].name} \nSong: ${data.track.items[i].name} \nSong Link: ${data.track.items[i].external_urls.spotify} \nAlbum: ${data.track.items[i].album.name}`)
    }
  })

}
// * Artist(s)

//     * The song's name

//       * A preview link of the song from Spotify

//         * The album that the song is from

// function movies() {


//       }

// function whatever() {


//       }