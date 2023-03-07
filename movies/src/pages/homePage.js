import React, { useState, useEffect } from "react";  
import PageTemplate from '../components/templateMovieListPage' 
import { getMovies } from "../api/tmdb-api";


const HomePage = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        return json.results;
      })
      .then((movies) => {
        setMovies(movies);
      });
  }, []);

 
  return (
    <PageTemplate
      title='Discover Movies'
      movies={movies}
      selectFavorite={addToFavorites}
    />
  );
};
export default HomePage;
