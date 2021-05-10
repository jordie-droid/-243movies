import React from "react";
import PopularActors from "../../components/PoupularActors";

export default function Actors({ data }) {
  return (
    <>
      <PopularActors
        title="20 célébrités les plus populaires"
        data={data}
      ></PopularActors>
    </>
  );
}
