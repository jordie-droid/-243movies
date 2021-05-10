import React from "react";
import PopularSeries from "../../components/PopularSeries";

export default function Series({ data }) {
  return (
    <>
      <PopularSeries
        title="20 séries les plus populaires"
        data={data}
      ></PopularSeries>
    </>
  );
}
