import React, { createContext, useState, useEffect } from "react";

export const SeriesGenresContext = createContext();

export const SeriesGenresProvider = ({ children }) => {
  const [seriesGenres, setSeriesGenres] = useState([]);
  
  const SeriesGenresUrl =
    "https://api.themoviedb.org/3/genre/tv/list?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR";

  async function fetchSeriesGenres() {
    const response = await fetch(SeriesGenresUrl);
    const data = await response.json();
    await setSeriesGenres(data.genres);
  }

  useEffect(() => {
    fetchSeriesGenres();
  }, []);

  return (
    <SeriesGenresContext.Provider value={[seriesGenres, setSeriesGenres]}>
      {children}
    </SeriesGenresContext.Provider>
  );
};
