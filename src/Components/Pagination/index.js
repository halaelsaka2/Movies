import { useSelector, useDispatch } from "react-redux";

import { saveCurrentPage, searchMovie, getFavoriteMovies, filterMovies } from "../../Redux/Movie/Action";
import PaginationComponent from "react-js-pagination";
const Pagination = (props) => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.MovieReducer.filterValue);
  const searchKeyword = useSelector((state) => state.MovieReducer.searchKeyword);
  const currentPage = useSelector((state) => state.MovieReducer.currentPage);

  const pageChange = (page) => {
    dispatch(saveCurrentPage(page));
    if (props.type === "home") {
      if (!searchKeyword) {
        dispatch(filterMovies(filterValue, page));
      } else {
        dispatch(searchMovie(searchKeyword, page));
      }
    } else {
      dispatch(getFavoriteMovies(page));
    }
  };
  return (
    <div className="wrapper">
      <PaginationComponent
        activePage={currentPage}
        itemsCountPerPage={20}
        totalItemsCount={props.countMovies}
        pageRangeDisplayed={5}
        onChange={pageChange}
        firstPageText="First"
        lastPageText="Last"
        itemClass="pg_item"
        innerClass="pagination_section"
        disabledClass="disabled"
        itemClassFirst="pg-first"
        itemClassLast="pg-last"
        activeClass="pg-active"
      />
    </div>
  );
};

export default Pagination;
