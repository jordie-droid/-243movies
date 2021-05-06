import React from "react";
import HorizontalSeparator from "../../components/HorizontalSeparator";
import PopularMovies from "../../components/PopularMovies";

export default function Populaire({data}) {
  return (
    <>
      <PopularMovies title="20 films les plus populaires" data={data}></PopularMovies>
      <HorizontalSeparator></HorizontalSeparator>
    </>
  );
}
