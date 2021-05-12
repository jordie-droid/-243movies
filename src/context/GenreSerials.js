import React, { createContext, useState, useEffect } from "react";

export const GenreSerialsContext = createContext();

export const GenreSerialsProvider = ({ children }) => {
  const [genreSerials, setgenreSerials] = useState([]);
  const genreSerialsUrl =
    "https://api.themoviedb.org/3/genre/tv/list?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=1";

  async function fetchGenreSerials() {
    const response = await fetch(genreSerialsUrl);
    const data = await response.json();
    setgenreSerials(data);
  }

  useEffect(() => {
    fetchGenreSerials();
  }, []);

  return (
    <GenreSerialsContext.Provider value={[genreSerials, setgenreSerials]}>
      {children}
    </GenreSerialsContext.Provider>
  );
};
