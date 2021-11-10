import { useDispatch } from "react-redux";
import {
  getUpcomingMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  saveFilterValue,
  saveCurrentPage,
} from "../../Redux/Movie/Action";

const NavBar = (props) => {
  const dispatch = useDispatch();

  const filterHandler = (e) => {
    console.log(e.target.value);
    let value = e.target.value;
    dispatch(saveFilterValue(value));
    dispatch(saveCurrentPage(1));
    if (value === "upcoming") dispatch(getUpcomingMovies(1));
    if (value === "nowPlaying") dispatch(getNowPlayingMovies(1));
    if (value === "topRated") dispatch(getTopRatedMovies(1));
    
  };
  return (
    <div className="pagination-wrapper">
      <div className="filter">
        <label style={{ color: "white" }}>Filter by:</label>
        <div className="selectWrapper">
          <select className="selectBox" defaultValue="nowPlaying" onChange={filterHandler}>
            <option key="topRated" value="topRated">
              Top Rated
            </option>
            <option key="nowPlaying" value="nowPlaying">
              Now Playing
            </option>
            <option key="upcoming" value="upcoming">
              Upcoming
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
