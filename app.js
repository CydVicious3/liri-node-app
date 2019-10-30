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
function userCommand(userInput, userQuery) {
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
}

userCommand(userInput, userQuery)

// * `concert-this`
function concert() {
  let userQuery = ' '
  console.log(`Searching For ... ${userQuery} Shows!`)
  // request ("https://rest.bandsintown.com/artists/" + userQuery + "events?app_id=codingbootcamp" + bandsintown);
  console.log(userQuery)
  axios.get(`https://rest.bandsintown.com/artists/${userQuery}events?app_id=codingbootcamp`)
    .then(function (response) {
      console.log(response.data)
    })
  let userBand = JSON.parse('https://rest.bandsintown.com/artists/events?app_id=codingbootcamp')
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
//   fetch('https://www.npmjs.com/package/node-spotify-api')
//     .then(r => r.json())
//     .then(data => { }
// }

// spotify-this-song 
function song() {
  console.log(`Searching For ... ${userQuery} Song!`)
  let spotify = new Spotify(keys.spotify);
  // * If no song is provided then your program will default to "The Sign" by Ace of Base.
  if (!userQuery) { userQuery = 'the sign ace of base' }
  spotify.search({ type: 'track', query: userQuery, limit: 1 }, function (error, data) {
    if (error) {
      console.log('Error:' + error);
    }
  })
  // put spotify data in array
  let spotifyArr = data.track.items
  console.log(data.track.items)
  for (i = 0; i < spotifyArr.length; i++) {
    console.log("song")
    console.log(`Found this for you: \n\nArtist: ${data.track.items[i].album.artist[0].name} \nSong: ${data.track.items[i].name} \nSong Link: ${data.track.items[i].external_urls.spotify} \nAlbum: ${data.track.items[i].album.name}`)
  }
}


//   * `movie-this`
function movies() {
  if (!userQuery) { userQuery = "mr nobody" }
  request('http://www.omdbapi.com/?t=' + userQuery + '&apikey=trilogy')
  let userMovie = JSON.parse(body)
  let ratingsArr = userMovie.Ratings
  if (ratingsArr.length > 2) {
  }
  if (!error && response.statusCode === 200) {
    console.log(`\nFound this...\n\n Title: ${userMovie.Title}\nReleased: ${userMovie.Year}\nIMDb Rating: ${userMovie.imdbRating}\nRotten Tomatoes Rating: ${userMovie.Ratings[1].Value}\nCountry: ${userMovie.Country}\nLanguage: ${userMovie.Language}\n Plot: ${userMovie.Plot}`)
  } else {
    console.log('Movie not found!' + error)
  }
}

//   * `do-what-it-says`
function whatever() {
  fs.readFile('random.txt', 'utf8', function (error, data) {
    if (error) { return console.log(error); }
    let dataArr = data.split(',');
    userInput = dataArr[0];
    userQuery = dataArr[1];
    userCommand(userQuery);
  })
}