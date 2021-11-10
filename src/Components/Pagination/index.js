import { useSelector, useDispatch } from "react-redux";

import {
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  saveCurrentPage,
  getMoviesBySearch,
} from "../../Redux/Movie/Action";
import PaginationComponent from "react-js-pagination";
const Pagination = (props) => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.MovieReducer.filterValue);
  const searchKeyword = useSelector((state) => state.MovieReducer.searchKeyword);
  const currentPage = useSelector((state) => state.MovieReducer.currentPage);
  const countMovies = useSelector((state) => state.MovieReducer.countMovies);

  const pageChange = (page) => {
    dispatch(saveCurrentPage(page));
    if (!searchKeyword) {
      if (filterValue === "upcoming") dispatch(getUpcomingMovies(page));
      if (filterValue === "nowPlaying") dispatch(getNowPlayingMovies(page));
      if (filterValue === "topRated") dispatch(getTopRatedMovies(page));
    } else {
      dispatch(getMoviesBySearch(searchKeyword, page));
    }
  };
  return (
    <div className="pagination-wrapper">
      <PaginationComponent
        activePage={currentPage}
        itemsCountPerPage={20}
        totalItemsCount={countMovies}
        pageRangeDisplayed={4}
        onChange={pageChange}
        firstPageText="First"
        lastPageText="Last"
        itemClass="pg_item"
        innerClass="pagination_section"
        disabledClass="disabled"
        itemClassFirst="pg-first"
        itemClassLast="pg-last"
      />
    </div>
  );
};

export default Pagination;
