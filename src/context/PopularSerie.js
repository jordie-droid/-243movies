import React, { createContext, useState, useEffect } from "react";

export const PopularSerieContext = createContext();

export const PopularSeriesProvider = ({ children }) => {
  const [popularSeries, setPopularSeries] = useState([]);
  const urlPopular =
    "https://api.themoviedb.org/3/tv/popular?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=1";
  useEffect(() => {
    fetch(urlPopular)
      .then((responses) => responses.json())
      .then((dataSet) => setPopularSeries(dataSet));
  }, []);

  return (
    <PopularSerieContext.Provider value={[popularSeries, setPopularSeries]}>
      {children}
    </PopularSerieContext.Provider>
  );
};
