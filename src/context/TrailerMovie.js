import React, { createContext, useState, useEffect } from "react";

export const TrailerMovieContext = createContext();

export const TrailerMovieProvider = (id, { children }) => {
  const [trailerMovie, setTrailerMovie] = useState([]);
  const urlVideo = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;
  console.log(id);
  useEffect(() => {
    fetch(urlVideo)
      .then((responses) => responses.json())
      .then((dataSet) => setTrailerMovie(dataSet));
  }, [urlVideo]);

  return (
    <TrailerMovieContext.Provider value={[trailerMovie, setTrailerMovie]}>
      {children}
    </TrailerMovieContext.Provider>
  );
};
