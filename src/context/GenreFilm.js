import React, { createContext, useState, useEffect } from "react";

export const GenreMoviesContext = createContext();

export const GenreMoviesProvider = ({ children }) => {
  const [genreMovie, setGenreMovie] = useState([]);
  const genreMovieUrl =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=1";

  async function fetchMoviesGenre() {
    const response = await fetch(genreMovieUrl);
    const data = await response.json();
    await setGenreMovie(data);
  }

  useEffect(() => {
    fetchMoviesGenre();
  }, []);

  return (
    <GenreMoviesContext.Provider value={[genreMovie, setGenreMovie]}>
      {children}
    </GenreMoviesContext.Provider>
  );
};
