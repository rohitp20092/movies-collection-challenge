import MoviesList from "./MoviesList";
import MovieDetails from "./MovieDetails";
import { useEffect, useState } from "react";
import axios from "axios";

function MoviesCollection() {
  const baseURL = "https://swapi.dev/api/films/";
  const [moviesList, setMovies] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMovies(response.data.results);
      console.log(response.data.results);
    });
  }, []);
  return (
    <div>
      <h1>Star Wars</h1>
    </div>
  );
}

export default MoviesCollection;
