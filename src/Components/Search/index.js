const Search = (props) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={props.searchKeyword}
        className="search-input"
        placeholder="Search"
        onChange={props.searchHandler}
      />
      <span className="search-icon">
        <i className="fa fa-search"></i>
      </span>
    </div>
  );
};

export default Search;
