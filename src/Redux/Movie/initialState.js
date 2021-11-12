const obj = {
  homeMovies: [],
  countHomeMovies: 0,
  countFavoriteMovies: JSON.parse(localStorage.getItem("lovedMovies"))?.length,
  favoriteMoviesPaginated: [],
};

export default obj;
