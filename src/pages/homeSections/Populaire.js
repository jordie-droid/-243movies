import React from "react";
import PopularMovies from "../../components/PopularMovies";

export default function Populaire({data}) {
  return (
    <>
      <PopularMovies title="20 films les plus populaires" data={data}></PopularMovies>
    </>
  );
}
