import axios from "axios";

export const getMoviesByFilter = (type, page) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${type}?api_key=a54bd452007b5135b6e98aed05131979&language=en-US&page=${page}`
  );
};

export const getMoviesBySearch = (keyword, page) => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=a54bd452007b5135b6e98aed05131979&query=${keyword}&page=${page}`
  );
};
