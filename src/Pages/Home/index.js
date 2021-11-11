import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Components/NavBar";
import ListMovies from "../../Components/ListMovies";
import Pagination from "../../Components/Pagination";
import Filter from "../../Components/Filter";
import Search from "../../Components/Search";
import { filterMovies } from "../../Redux/Movie/Action";

const Home = (props) => {
  const dispatch = useDispatch();
  const homeMovies = useSelector((state) => state.MovieReducer.homeMovies);
  const countHomeMovies = useSelector((state) => state.MovieReducer.countHomeMovies);
  useEffect(() => {
    dispatch(filterMovies("now_playing", 1));
  }, []);
  return (
    <>
      <div className="container">
        <NavBar />
        <Filter />
        <Search />
        <ListMovies data={homeMovies} />
        <Pagination type="home" countMovies={countHomeMovies} />
      </div>
    </>
  );
};

export default Home;