
const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatap.com/v1/breeds/search?q=' + breedName, function(error, response, body) {
    if (error) {
      callback();
    }
  });
}