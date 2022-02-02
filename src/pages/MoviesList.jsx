import { BrowserRouter as Router, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MoviesList() {
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
      {moviesList.map((data, i) => (
        <Link to={`/film/${data.episode_id}`}>
        <p>Episode {data.episode_id}</p>
        <h3>{data.title}</h3>
        <Link to={`/film/${data.episode_id}`} >More Details</Link>
        </Link>
      ))}
    </div>
  );
}

export default MoviesList;
