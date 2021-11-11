const obj = {
  homeMovies: [],
  countHomeMovies: 0,
  countFavoriteMovies: JSON.parse(localStorage.getItem("lovedMovies"))?.length,
  filterValue: "now_playing",
  searchKeyword: "",
  currentPage: 1,
  // favoriteMovies: JSON.parse(localStorage.getItem("lovedMovies")) || [],
  favoriteMoviespaginated: [],
};

export default obj;
