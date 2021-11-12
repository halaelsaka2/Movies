import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash/debounce";
import NavBar from "../../Components/NavBar";
import ListMovies from "../../Components/ListMovies";
import Pagination from "../../Components/Pagination";
import Filter from "../../Components/Filter";
import { filterMovies, searchMovie } from "../../Redux/Movie/Action";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filterValue, setFilterValue] = useState("now_playing");

  const dispatch = useDispatch();
  const homeMovies = useSelector((state) => state.MovieReducer.homeMovies);
  const countHomeMovies = useSelector((state) => state.MovieReducer.countHomeMovies);
  const getMovieByFilter = useCallback(() => {
    dispatch(filterMovies(filterValue, currentPage));
  }, [dispatch, filterValue, currentPage]);

  useEffect(() => {
    getMovieByFilter();
  }, [getMovieByFilter]);

  const filterHandler = (e) => {
    let value = e.target.value;
    setCurrentPage(1);
    setFilterValue(value);
    dispatch(filterMovies(value, 1));
  };

  const searchHandler = (e) => {
    setSearchKeyword(e.target.value);
    debounce(() => {
      setCurrentPage(1);
      if (e.target.value) {
        dispatch(searchMovie(e.target.value, 1));
      } else {
        dispatch(filterMovies(filterValue, 1));
      }
    }, 1000)();
  };

  const pageHandler = (page) => {
    setCurrentPage(page);
    if (!searchKeyword) {
      dispatch(filterMovies(filterValue, page));
    } else {
      dispatch(searchMovie(searchKeyword, page));
    }
  };
  return (
    <>
      <div className="container">
        <NavBar searchKeyword={searchKeyword} searchHandler={searchHandler} />
        <Filter filterHandler={filterHandler} filterValue={filterValue} />
        <ListMovies data={homeMovies} currentPage={currentPage} />
        {countHomeMovies > 20 && (
          <Pagination countMovies={countHomeMovies} currentPage={currentPage} pageHandler={pageHandler} />
        )}
      </div>
    </>
  );
};

export default Home;
