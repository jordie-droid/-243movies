import React, { createContext, useState, useEffect } from "react";

export const PopularActorsContext = createContext();

export const PopularActorsProvider = ({ children }) => {
  const [PopularActors, setPopularActors] = useState([]);
  const urlPopular =
    "https://api.themoviedb.org/3/person/popular?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=1";
  useEffect(() => {
    fetch(urlPopular)
      .then((responses) => responses.json())
      .then((dataSet) => setPopularActors(dataSet));
  }, []);

  return (
    <PopularActorsContext.Provider value={[PopularActors, setPopularActors]}>
      {children}
    </PopularActorsContext.Provider>
  );
}; 
