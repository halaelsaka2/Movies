const obj = {
  homeMovies: [],
  countMovies: 0,
  totalPagesOfMovies: 0,
  filterValue: "nowPlaying",
  searchKeyword: "",
  currentPage: 1,
  favoriteMovies: JSON.parse(localStorage.getItem("lovedMovies")) || [],
};

export default obj;
