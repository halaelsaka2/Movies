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

  const getRate = () => {
    const filledStars = Math.floor(data.vote_average / 2);
    const emptyStars = Math.ceil(5 - data.vote_average / 2);
    let filledStarContent = Array.from({ length: filledStars }, (_, i) => i + 1);
    let emptyStarContent = Array.from({ length: emptyStars }, (_, i) => i + 1);
    return (
      <div>
        {filledStarContent.map((star) => (
          <img key={star} src="/assets/images/star-filled.svg" alt="star" />
        ))}
        {emptyStarContent.map((star) => (
          <img key={star} src="/assets/images/empty-star.svg" alt="star" />
        ))}
      </div>
    );
  };

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
        <div className="mask_data">
          <div className="tooltip">
            <img
              alt="heart"
              src={loved ? "/assets/images/heart-329.svg" : "/assets/images/heart.svg"}
              onClick={(e) => loveHandler(e, loved ? false : true)}
              // className="favorite"
            />
            <span className="tooltiptext">{loved ? "Remove From Favorite" : "Add To Favorite"}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {getRate()}
            <div className="text-wrapper"> {data.overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
