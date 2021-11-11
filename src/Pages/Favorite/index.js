import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Components/NavBar";
import ListMovies from "../../Components/ListMovies";
import Pagination from "../../Components/Pagination";
import { getFavoriteMovies } from "../../Redux/Movie/Action";
const Home = (props) => {
  const dispatch = useDispatch();
  const favoriteMoviespaginated = useSelector((state) => state.MovieReducer.favoriteMoviespaginated);
  const countFavoriteMovies = useSelector((state) => state.MovieReducer.countFavoriteMovies);

  useEffect(() => {
    dispatch(getFavoriteMovies(1));
  }, []);

  return (
    <>
      <div className="container">
        <NavBar />
        <ListMovies data={favoriteMoviespaginated} />
        {countFavoriteMovies > 20 && <Pagination type="favorite" countMovies={countFavoriteMovies} />}
      </div>
    </>
  );
};

export default Home;
