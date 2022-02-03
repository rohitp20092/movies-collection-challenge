import { useParams } from "react-router-dom";
import react, { useEffect, useState } from "react";
import axios from "axios";
import { movieImage } from "../utils";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovies] = useState({});

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
    <div className="row mx-0 my-3 py-3">
      <div className="col-md-11 p-0 m-auto">
        {
          movieDetails &&
          <div className="row mx-0 main">
            <div className="col-lg-4 col-sm-6 col-12 mb-3">
              <img
                height="auto"
                width="95%"
                src={require(`../assests/images/${movieImage && movieImage[id - 1]}`)}
                alt="avatar"
                loading="lazy"
                className="mt-0"
              />
            </div>
            <div className="col-lg-8 col-sm-6 col-12 text-white text-start ps-4">
              <h4>Episode {movieDetails.episode_id}</h4>
              <h2 className="fs-1 text-uppercase my-3">{movieDetails.title}</h2>
              <div className="d-flex resp-width">
                <p className="text-lht">Directore:<span className="text-white fw-bold d-block">{movieDetails.director}</span></p>
                <p className="text-lht">Producer:<span className="text-white fw-bold d-block">{movieDetails.producer}</span></p>
                <p className="text-lht">Release Date:<span className="text-white fw-bold d-block">{movieDetails.release_date}</span></p>
              </div>
              <p className="description fw-normal">{movieDetails.opening_crawl}</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};
export default MovieDetails;
