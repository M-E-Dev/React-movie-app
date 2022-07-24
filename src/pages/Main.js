import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}`;

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => {
        setMovies(res.data.results);
        console.log(movies);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        {movies.map((movie) =>
          // {...movie} şeklinde verdiğimizde içinden her şeyi alabiliriz. movie.id gibi uüraşmaya gerek yok
          <MovieCard key={movie.id} {...movie} />
        )}
      </div>
    </>
  );
};

export default Main;
