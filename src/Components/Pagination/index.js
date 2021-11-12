import ReactPagination from "react-js-pagination";
const Pagination = (props) => {
  return (
    <div className="wrapper">
      <ReactPagination
        activePage={props.currentPage}
        itemsCountPerPage={20}
        totalItemsCount={props.countMovies}
        pageRangeDisplayed={5}
        onChange={props.pageHandler}
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
