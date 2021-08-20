const breedName = process.argv[2];
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
})
