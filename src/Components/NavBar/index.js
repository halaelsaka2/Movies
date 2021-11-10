import { useDispatch, useSelector } from "react-redux";
import {
  getMoviesBySearch,
  saveSearchKeyword,
  getNowPlayingMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  saveCurrentPage,
} from "../../Redux/Movie/Action";
const debounce = require("lodash.debounce");
const NavBar = (props) => {
  const dispatch = useDispatch();
  const searchKeyword = useSelector((state) => state.MovieReducer.searchKeyword);
  const filterValue = useSelector((state) => state.MovieReducer.filterValue);

  const searchHandler = (e) => {
    dispatch(saveSearchKeyword(e.target.value));
    debounce(() => {
      console.log(e.target.value);
      dispatch(saveCurrentPage(1));
      if (e.target.value) {
        dispatch(getMoviesBySearch(e.target.value, 1));
      } else {
        if (filterValue === "upcoming") dispatch(getUpcomingMovies(1));
        if (filterValue === "nowPlaying") dispatch(getNowPlayingMovies(1));
        if (filterValue === "topRated") dispatch(getTopRatedMovies(1));
      }
    }, 1000)();
  };
  return (
    <nav className="movie-filter">
      <a className="custom-link" href="/home">
        Home
      </a>
      {window.location.pathname !== "/favorite" && (
        <input
          type="text"
          value={searchKeyword}
          className="search-input"
          placeholder="Search"
          onChange={searchHandler}
        />
      )}
      <a className="custom-link" href="/favorite">
        Favorite
      </a>
    </nav>
  );
};

export default NavBar;
