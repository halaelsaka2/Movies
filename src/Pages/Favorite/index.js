import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Components/NavBar";
import ListMovies from "../../Components/ListMovies";
import Pagination from "../../Components/Pagination";
import { getFavoriteMovies } from "../../Redux/Movie/Action";
const Favorite = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const favoriteMoviesPaginated = useSelector((state) => state.MovieReducer.favoriteMoviesPaginated);
  const countFavoriteMovies = useSelector((state) => state.MovieReducer.countFavoriteMovies);

  useEffect(() => {
    dispatch(getFavoriteMovies(1));
  }, [dispatch]);

  const pageHandler = (page) => {
    setCurrentPage(page);
    dispatch(getFavoriteMovies(page));
  };
  return (
    <>
      <div className="container">
        <NavBar />
        <ListMovies data={favoriteMoviesPaginated} currentPage={currentPage} />
        {countFavoriteMovies > 20 && (
          <Pagination currentPage={currentPage} pageHandler={pageHandler} countMovies={countFavoriteMovies} />
        )}
      </div>
    </>
  );
};

export default Favorite;
