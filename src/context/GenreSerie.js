import React, { createContext, useState, useEffect } from "react";

export const GenreSerieContext = createContext();

export const GenreSerieProvider = ({ children }) => {
  const [GenreSerie, setGenreSerie] = useState([]);
  const urlPopular =
    "https://api.themoviedb.org/3/genre/tv/list?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=1";
  useEffect(() => {
    fetch(urlPopular)
      .then((responses) => responses.json())
      .then((dataSet) => setGenreSerie(dataSet));
  }, []);

  return (
    <GenreSerieContext.Provider value={[GenreSerie, setGenreSerie]}>
      {children}
    </GenreSerieContext.Provider>
  );
};
