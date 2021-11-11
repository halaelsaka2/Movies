import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFavoriteMovies } from "../../Redux/Movie/Action";
const Movie = (props) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.MovieReducer.currentPage);
  const { data } = props;
  const [loved, setLoved] = useState(
    JSON.parse(localStorage.getItem("lovedMovies"))?.some((movie) => movie.id === data.id)
  );

  const loveHandler = (e, loved) => {
    e.stopPropagation();
    setLoved(loved);
    let movies = JSON.parse(localStorage.getItem("lovedMovies")) || [];
    if (loved) {
      movies.push(data);
      dispatch(changeFavoriteMovies(movies, currentPage));
    } else {
      let newMovies = movies.filter((movie) => movie.id !== data.id);
      dispatch(changeFavoriteMovies(newMovies, currentPage));
    }
  };

  return (
    <div className="movie-card">
      <div className="image-wrapper" style={{ width: "200px" }}>
        <img
          className="image-wrapper-img"
          alt="poster"
          src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
        />
        <div className=" mask_data">
          <img
            alt="heart"
            src={loved ? "/assets/images/heart-329.svg" : "/assets/images/heart.svg"}
            style={{ position: "absolute", top: 2, right: 3 }}
            onClick={(e) => loveHandler(e, loved ? false : true)}
          />

          <div className="text-wrapper"> {data.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
