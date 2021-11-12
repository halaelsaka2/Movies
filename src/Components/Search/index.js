import { useDispatch, useSelector } from "react-redux";
import { searchMovie, saveSearchKeyword, filterMovies, saveCurrentPage } from "../../Redux/Movie/Action";
const debounce = require("lodash.debounce");
const Search = () => {
  const dispatch = useDispatch();
  const searchKeyword = useSelector((state) => state.MovieReducer.searchKeyword);
  const filterValue = useSelector((state) => state.MovieReducer.filterValue);

  const searchHandler = (e) => {
    dispatch(saveSearchKeyword(e.target.value));
    debounce(() => {
      dispatch(saveCurrentPage(1));
      if (e.target.value) {
        dispatch(searchMovie(e.target.value, 1));
      } else {
        dispatch(filterMovies(filterValue, 1));
      }
    }, 1000)();
  };
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchKeyword}
        className="search-input"
        placeholder="Search"
        onChange={searchHandler}
      />
      <span className="search-icon">
        <i className="fa fa-search"></i>
      </span>
    </div>
  );
};

export default Search;
