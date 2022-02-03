import { BrowserRouter as Router, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { convertToRoman } from "../utils";

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
    <div className="row mx-0">
      <div className="col-md-11 p-0 m-auto">
        <h2 className="text-white my-4 text-uppercase fw-bold pb-2"> Classic Movies <span className="fw-light">Collection</span></h2>
        <div className="row mx-0 main">
          {moviesList.map((data, i) => (
            <div className="col-lg-4 col-sm-6 col-12 my-3">
              <div className="row mx-0 justify-content-between rounded-3 p-4 text-start box">
                <div className="col-lg-7 col-md-7 col-sm-6 col-6 pe-0 ps-lg-3 ps-0">
                  <Link className="text-decoration-none text-white" to={`/film/${data.episode_id}`}>
                    <p className="">Episode: {data.episode_id}</p>
                    <h3 className="fw-bold title">{data.title}</h3>
                    <Link className="d-inline-block text-white text-decoration-none border rounded px-lg-5 px-sm-3 px-3 py-2 my-3 link" to={`/film/${data.episode_id}`} >More Details</Link>
                  </Link>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6 col-6 px-0 position-relative">
                  <h2 className="vi">
                    {convertToRoman(data.episode_id)}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviesList;
