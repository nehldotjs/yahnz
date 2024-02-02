import React, { useState, useEffect, useRef } from 'react';
// STYLESHEET
import "../homeComponets/homeStyleComponent/mostPopularStyleSheet.css";
// COMPONENTS
import Movies from '../extras/Movies';
import Gist from '../extras/Gist';
// CONTEXT PROVIDER

import { MovieContextValue } from "../../context/propContext/moviesApiContext";

function MostPopular() {

  const movieRef = useRef();
  const [movies, setmovies] = useState([]);
  const API_KEY = `d80fba97183aac558e5de13ea1ee3488`;
  const moviesData = async () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setmovies([...data.results]);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  movieRef.current = moviesData
  useEffect(() => {
    movieRef.current()
  }, []);

  const text = "text from the other side";
  return (
    <>
      <MovieContextValue.Provider value={{ movies, text }}>
        <div className='mostPopularContainer'>
          <div className="mostPopularHeader">
            <h3>PROMOTIONS</h3>
          </div>
          <div className="mostPopularContent">
            <h1>ADS</h1>
          </div>
          <div className="extras">
            <Movies quote={text} />
            <Gist />
          </div>
        </div>
      </MovieContextValue.Provider>
    </>
  )
}
export default MostPopular;