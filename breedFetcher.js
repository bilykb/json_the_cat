const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, function(error, response, body) {
    if (error || body.length === 2) {
      callback(error, null, null);
    } else if (response.statusCode !== 200) {
      callback(null, null, response.statusCode);
  } else {
      const data = JSON.parse(body);
      callback(null, data["0"].description, response.statusCode);
    }
  });
};

module.exports = {
  fetchBreedDescription
};