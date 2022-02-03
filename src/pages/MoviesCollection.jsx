import MoviesList from "./MoviesList";
import MovieDetails from "./MovieDetails";
import { Routes, Route } from "react-router-dom";

function MoviesCollection() {
  return (
    <div>
      <div className="">
        <img
          height="auto"
          width="150px "
          src={require(`../assests/images/star-wars-logo.svg`).default}
          alt="avatar"
          loading="lazy"
          className="ourstory-img my-4 pb-2 pt-4"
        />
      </div>
      <Routes>
        <Route exect path="/" element={<MoviesList />} />
        <Route exect path="/film/:id" element={<MovieDetails />} />
      </Routes>
      <div className="d-sm-flex d-block align-items-center justify-content-center text-white my-5 footer">
        <p className="pe-4">TM © LucasFilm Ltd. All rights reserved</p>
        <a href="https://www.starwars.com/" className="text-decoration-none text-white ps-4"><p>Star Wars Official Website</p></a>
      </div>
    </div>
  );
}

export default MoviesCollection;
