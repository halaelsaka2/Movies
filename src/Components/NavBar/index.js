import Search from "../Search";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const listContent = (className) => (
    <div className={className}>
      <NavLink className="custom-link" to="/home" style={{ marginRight: "2rem" }}>
        <i className="fa fa-home" style={{ marginRight: "10px" }}></i>
        Home
      </NavLink>
      <NavLink className="custom-link" to="/favorite">
        <i className="fa fa-star" style={{ marginRight: "10px" }}></i>
        Favorite
      </NavLink>
    </div>
  );
  return (
    <>
      <nav className="movie-nav">
        <img src="/assets/images/logo.svg" alt="logo" className="logo" />
        {listContent("list-container")}
        <Search />
      </nav>
      {listContent("changable")}
    </>
  );
};

export default NavBar;
