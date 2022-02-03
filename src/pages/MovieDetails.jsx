import { useParams } from "react-router-dom";
import react, { useEffect, useState } from "react";
import axios from "axios";
import { movieImage } from "../utils";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovies] = useState({});
  const imageName= movieImage.find((o) => o.episode_id === movieDetails.episode_id)
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
      {/* <img src={require(`../assests/images/${imageName}`).default} /> */}
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
