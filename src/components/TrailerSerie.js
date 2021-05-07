import React, { useEffect, useState } from "react";

export default function Iframe({ serieID }) {
  const urlVideo = `https://api.themoviedb.org/3/tv/${serieID}/videos?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    fetch(urlVideo)
      .then((responses) => responses.json())
      .then((dataSet) => setTrailer(dataSet.results));
  }, [urlVideo]);

  const showIframe = () => {
    if (trailer.length > 0) {
      return (
        <iframe
          title="a"
          src={`https://www.youtube.com/embed/${trailer[0].key}`}
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      );
    } else {
      return <p>La vidéo d'annonce n'est pas encore disponible</p>;
    }
  };

  return <>{showIframe()}</>;
}
