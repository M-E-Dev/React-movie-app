// import { Movie } from '@material-ui/icons';
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiojEyMDd9&auto=format&fit=crop&w=700&q=80";

  
  const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
    
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

  // renkler bu şekilde de yazılabilirdi
  // const setVoteClass = (vote) => {
  //   if (vote >= 8) {
  //     return "green"
  //   } else if (vote>= 6) {
  //     return "orange"
  //   } else {
  //     return "red"
  //   }
  // }

  return (
    <div>
      <div className="movie" onClick={() => currentUser ? navigate("/details/" + id) : alert("Login to see details!")} >
        <img src={poster_path ? IMG_API + poster_path : defaultImage} alt="" />
        <div className="movie-bottom d-flex align-items-baseline justify-content-evenly p-1 text-white">
          <h5>{title}</h5>
          { currentUser && (<span
              // koşullu css class
            className={`tag ${
              vote_average >= 8 ? "green" : vote_average >= 6 ? "orange" : "red"
            }`}
          >
            {vote_average}
          </span>)}
        </div>
        <div className="movie-over">
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
