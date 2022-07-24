import axios from 'axios';
import React, {useEffect} from 'react'
import { useParams } from "react-router-dom";


const MovieDetail = () => {

  // const param = useParams()
  // çağırırken param.id olarak çağırırz...

  // routerde /details/:id olarak verdiğimiz parametreyi aldık
  const {id} = useParams()

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const baseImageUrl = `https://image.tmdb.org/t/p/w1280`;
  const defaultImage = "https://images.unsplash.com/photo-1658572352229-14bbe60b3c5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60";

  useEffect(() => {
    
    axios.get(movieDetailBaseUrl).then(res => console.log(res.data)).catch(err => console.log(err))

  }, [movieDetailBaseUrl]);
  

  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail