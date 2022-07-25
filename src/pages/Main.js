import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { currentUser } = useContext(AuthContext);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      if (searchTerm) {
        getMovies(SEARCH_API + searchTerm);
      } else alert("Please write something to search...");
    } else {
      alert("Login for searching...");
    }
  };

  return (
    <>
      <div className="main-up text-center text-white">
        <br /><br /><h1>Explore best movies...</h1>
        <form className="search input-group" onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-input form-text"
            placeholder="A movie, an actor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-dark btn" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        {movies.map((movie) => (
          // {...movie} şeklinde verdiğimizde içinden her şeyi alabiliriz. movie.id gibi uüraşmaya gerek yok
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default Main;
