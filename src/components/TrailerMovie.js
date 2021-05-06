import React, { useEffect, useState } from "react";

export default function Iframe({ movieID }) {
  const urlVideo = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;
  const [trailer, setTrailer] = useState([]);
  useEffect(() => {
    fetch(urlVideo)
      .then((responses) => responses.json())
      .then((dataSet) => setTrailer(dataSet));
  }, [urlVideo]);

  console.log(trailer);

  return (
    <iframe
      title="a"
      src="https://www.youtube.com/embed/mijLmCD3W9s"
      width="100%"
      height="200"
    ></iframe>
  );
}
