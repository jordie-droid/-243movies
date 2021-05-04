import React, { createContext, useState, useEffect } from "react";

export const PopularMovieContext = createContext();

export const PopularMovieProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const urlPopular =
    "https://api.themoviedb.org/3/movie/popular?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=1";
  useEffect(() => {
    fetch(urlPopular)
      .then((responses) => responses.json())
      .then((dataSet) => setPopularMovies(dataSet));
  }, []);

  return (
    <PopularMovieContext.Provider value={[popularMovies, setPopularMovies]}>
      {children}
    </PopularMovieContext.Provider>
  );
};
