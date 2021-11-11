const NavBar = (props) => {
  return (
    <nav className="movie-nav">
      <img src="/assets/images/logo.svg" alt="logo"className="logo" />
      <div>
        <a className="custom-link" href="/home">
          Home
        </a>
        <a className="custom-link" href="/favorite">
          Favorite
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
