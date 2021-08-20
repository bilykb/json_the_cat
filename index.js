const breedName = process.argv[2];
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breedName, (error, description, statusCode) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else if (statusCode !== 200) {
    console.log(statusCode);
  } else {
    console.log(description);
  }
});
