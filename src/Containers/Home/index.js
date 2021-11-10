import { useEffect } from "react";
import { connect } from "react-redux";
import NavBar from "../../Components/NavBar";
import ListMovies from "../../Components/ListMovies";
import Pagination from "../../Components/Pagination";
import FilterComponent from "../../Components/FilterComponent";
import { getNowPlayingMovies } from "../../Redux/Movie/Action";

const Home = (props) => {
  useEffect(() => {
    props.getNowPlayingMovies(1);
  }, []);
  return (
    <>
      <div className="container">
        <NavBar />
        <FilterComponent />
        <ListMovies data={props.homeMovies} />
        <Pagination />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { homeMovies: state.MovieReducer.homeMovies };
};
const mapDispatchToProps = { getNowPlayingMovies };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
