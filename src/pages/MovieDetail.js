import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState();

  // const param = useParams()
  // çağırırken param.id olarak çağırırz...

  // routerde /details/:id olarak verdiğimiz parametreyi aldık
  const { id } = useParams();

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const baseImageUrl = `https://image.tmdb.org/t/p/w1280`;
  const defaultImage =
    "https://images.unsplash.com/photo-1658572352229-14bbe60b3c5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60";

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => {
        setMovieDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl]);

  return (
    <div className="container py-5">
      <h1 className="text-center">{movieDetails?.title}</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                movieDetails?.poster_path
                  ? baseImageUrl + movieDetails?.poster_path
                  : defaultImage
              }
              className="img-fluid rounded-start"
              alt="movie_photo"
            />
          </div>
          <div className="col-md-8 d-flex movie-detail flex-column">
            <div className="card-body">
              <h5 className="card-title text-danger">Overview</h5>
              <p className="card-text text-secondary ">{movieDetails?.overview}</p>
            </div>
            <ul className="list-group ">
              <li className="list-group-item">
                {"Release Date : " + movieDetails?.release_date}
              </li>
              <li className="list-group-item">
                {"Rate : " + movieDetails?.vote_average}
              </li>
              <li className="list-group-item">
                {"Total Vote : " + movieDetails?.vote_count}
              </li>
              <li className="list-group-item">
                <Link to={-1} className="card-link">
                  Go Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
