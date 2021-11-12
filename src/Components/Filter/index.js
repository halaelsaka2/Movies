import { useState } from "react";

const Filter = (props) => {
  const [optios] = useState([
    { value: "top_rated", name: "Top Rated" },
    { value: "now_playing", name: "Now Playing" },
    { value: "upcoming", name: "Upcoming" },
  ]);

  return (
    <div className="wrapper">
      <div className="filter">
        <label style={{ color: "white", fontWeight: 600 }}>Filter by:</label>
        <div className="selectWrapper">
          <select className="selectBox" defaultValue={props.filterValue} onChange={props.filterHandler}>
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
