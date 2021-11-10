import axios from "axios";

const getMovies = async (type, page) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${type}?api_key=a54bd452007b5135b6e98aed05131979&language=en-US&page=${page}`
  );
};

const getMoviesBySearch = async (keyword, page) => {
  return await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=a54bd452007b5135b6e98aed05131979&query=${keyword}&page=${page}`
  );
};

const obj = { getMovies, getMoviesBySearch };
export default obj;
