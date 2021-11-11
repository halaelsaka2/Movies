import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterMovies, saveFilterValue, saveCurrentPage } from "../../Redux/Movie/Action";

const Filter = () => {
  const [optios] = useState([
    { value: "top_rated", name: "Top Rated" },
    { value: "now_playing", name: "Now Playing" },
    { value: "upcoming", name: "Upcoming" },
  ]);
  const dispatch = useDispatch();

  const filterHandler = (e) => {
    let value = e.target.value;
    dispatch(saveFilterValue(value));
    dispatch(saveCurrentPage(1));
    dispatch(filterMovies(value, 1));
  };
  return (
    <div className="wrapper">
      <div className="filter">
        <label style={{ color: "white", fontWeight: 600 }}>Filter by:</label>
        <div className="selectWrapper">
          <select className="selectBox" defaultValue="now_playing" onChange={filterHandler}>
            {optios.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
