import tmdb from tmdb;

tmdb.v2.config({
  
  api_key: process.env.TMDB_API_KEY,
  api_acess: process.env.TMDB_API_SECRET,
});

export const tmdbInstance = tmdb.v2;

