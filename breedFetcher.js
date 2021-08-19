const catName = process.argv[2];
const request = require('request');

const breedFetcher = breedName => {

  request('https://api.thecatap.com/v1/breeds/search?q=' + breedName, function(error, response, body) {
    if (error) {
      return console.log(error);
    }
    
    const data = JSON.parse(body);
    if (response.statusCode !== 200) {
      const data = JSON.parse(body);
      console.log(data.message);
    } else if (!data.length) {
      console.log(`Please ensure this breed: "${breedName}" is a valid feline breed`);
    } else {
      console.log(data["0"].description);
    }
  });
};

breedFetcher(catName);