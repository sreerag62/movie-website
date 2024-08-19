import fetch from "node-fetch"

const url = 'https://api.themoviedb.org/3/collection/collection_id/images';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWQxMjA2MmIzYzk4ZTcwN2ZjZGYwOWZmMDRiNzE4ZSIsIm5iZiI6MTcyMzIwNjA1Ni43MzM5NTUsInN1YiI6IjY2YjQ3OTg4MTM3MzM3NTM4YjdhOWIzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8rfvZgYVn4oeWAHcdtx53VAPW7w1lkSAzp6CeK10LXU'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));