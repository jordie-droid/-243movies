import React, { createContext, useState } from "react";

export const popularMovieContext = createContext();

export const BopularMovieProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  return (
    <popularMovieContext.Provider value={[popularMovies, setPopularMovies]}>
      {children}
    </popularMovieContext.Provider>
  );
};
