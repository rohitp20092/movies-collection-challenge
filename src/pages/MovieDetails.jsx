import { useParams } from "react-router";
import react, { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovies] = useState([]);
  useEffect(() => {
    if (id) {
      axios.get(`https://swapi.dev/api/films/`).then((response) => {
        setMovies(response.data.results.find(
          (o) => o.episode_id === Number(id)
        ))
      });
    }
  }, []);
  return (
    <div>
      <img src="/" />
      <h4>Episode {movieDetails.episode_id}</h4>
      <h2>{movieDetails.title}</h2>
      <p>Directore:{movieDetails.director}</p>
      <p>Producer:{movieDetails.producer}</p>
      <p>Release Date:{movieDetails.release_date}</p>
      <p>{movieDetails.opening_crawl}</p>
    </div>
  );
};
export default MovieDetails;
