import Movie from "../Movie";

const ListMovies = (props) => {
  return (
    <section className="movies">
      {props.data.length > 0 ? (
        props.data.map((movie) => <Movie key={movie.id} data={movie} currentPage={props.currentPage} />)
      ) : (
        <div style={{ color: "white", margin: "0 auto", fontWeight: 700 }}>No Movies</div>
      )}
    </section>
  );
};

export default ListMovies;
