import { useSelector } from "react-redux";
import NavBar from "../../Components/NavBar";
import ListMovies from "../../Components/ListMovies";

const Home = (props) => {
  const favoriteMovies = useSelector((state) => state.MovieReducer.favoriteMovies);
  return (
    <>
      <div className="container">
        <NavBar />
        <ListMovies data={favoriteMovies} />
      </div>
    </>
  );
};

export default Home;
