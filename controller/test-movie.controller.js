const axios = require('axios');

const BASE_URL = "https://yts-proxy.now.sh/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

const getMovies = async (limit, rating) => {
  const res = await axios.get(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    }
  });
  const { movies } = res.data.data;

  return movies
};

const getMovie = async (id) => {
  const res = await axios.get(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    }
  });

  const { movie } = res.data.data;

  return movie
};

module.exports.getMovies = getMovies;
module.exports.getMovie = getMovie;