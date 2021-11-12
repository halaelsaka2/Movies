import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Components/NavBar";
import ListMovies from "../../Components/ListMovies";
import Pagination from "../../Components/Pagination";
import Filter from "../../Components/Filter";
import { filterMovies } from "../../Redux/Movie/Action";

const Home = (props) => {
  const dispatch = useDispatch();
  const homeMovies = useSelector((state) => state.MovieReducer.homeMovies);
  const countHomeMovies = useSelector((state) => state.MovieReducer.countHomeMovies);
  useEffect(() => {
    dispatch(filterMovies("now_playing", 1));
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <NavBar />
        <Filter />
        <ListMovies data={homeMovies} />
        {countHomeMovies > 20 && <Pagination type="home" countMovies={countHomeMovies} />}
      </div>
    </>
  );
};

export default Home;
