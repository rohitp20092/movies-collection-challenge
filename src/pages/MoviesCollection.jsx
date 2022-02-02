import MoviesList from "./MoviesList";
import MovieDetails from "./MovieDetails";
import { Routes, Route } from "react-router-dom";

function MoviesCollection() {
  return (
    <div>
      <h1>Star Wars</h1>
      <Routes>
      <Route exect path="/" element={<MoviesList />} />
      <Route exect path="/film/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default MoviesCollection;
