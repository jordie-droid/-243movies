import React, { createContext, useState, useEffect } from "react";

export const GenreMovieContext = createContext();

export const GenreMovieProvider = ({ children }) => {
  const [GenreMovie, setGenreMovie] = useState([]);
  const urlPopular =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=1";
  useEffect(() => {
    fetch(urlPopular)
      .then((responses) => responses.json())
      .then((dataSet) => setGenreMovie(dataSet));
  }, []);

  return (
    <GenreMovieContext.Provider value={[GenreMovie, setGenreMovie]}>
      {children}
    </GenreMovieContext.Provider>
  );
};
