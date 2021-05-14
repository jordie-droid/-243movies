import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TvType from "../components/TvGenre";
import PopularSerie from "../components/PopularSeries";
import { SeriesGenresContext } from "../context/SeriesGenres";
import Theme from "../theme";
import Loader from "../components/Loader";

const { transparentLight, orange, dark, light } = Theme;

const GenreTitleContainer = styled.div`
  margin-top: 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${dark};
  color: ${orange};
  margin-bottom: 50px;
  font-size: 2rem;
  h1 {
    margin: 20px 0 20px;
    font-size: 2rem;
    color: ${light};
  }
`;

const GenreContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const PaginationContainer = styled.div`
  width: 100%;
  background-color: ${dark};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 30px;
`;

const Prev = styled.div`
  display: flex;
  width: 75px;
  justify-content: center;
  align-items: center;
  background-color: ${orange};
  color: ${dark};
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  cursor: pointer;
  p {
    margin-top: 15px;
    padding: 0 10px;
    font-size: 1rem;
    font-weight: bold;
  }
`;

const Next = styled.div`
  display: flex;
  width: 75px;
  justify-content: center;
  align-items: center;
  background-color: ${orange};
  color: ${dark};
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
  p {
    margin-top: 15px;
    padding: 0 10px;
    font-size: 1rem;
    font-weight: bold;
  }
`;

const PageState = styled.div`
  display: flex;
  width: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${transparentLight};
  color: ${orange};
  p {
    margin-top: 15px;
    padding: 0 10px;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export default function Series() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [serialsData, setSerialsData] = useState([]);
  const [seriesResults, setSeriesResults] = useState([]);

  const [seriesGenres] = useContext(SeriesGenresContext);

  const url = `https://api.themoviedb.org/3/discover/tv?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=${page}`;

  async function fetchSeries() {
    const response = await fetch(url);
    const data = await response.json();
    await setSerialsData(data);
    await setSeriesResults(data.results);
    await setIsLoading(false);
  }

  useEffect(() => {
    fetchSeries();
  }, [url]);

  const showseriesGenres = () => {
    return isLoading ? (
      <Loader></Loader>
    ) : (
      <>
        <GenreTitleContainer>
          <h1>Trouvez la série que vous cherchiez par à sa catégorie</h1>
          <GenreContainer>
            {seriesGenres.map(({ id, name }) => (
              <TvType key={id} text={name}></TvType>
            ))}
          </GenreContainer>
        </GenreTitleContainer>
        {showPagination()}
        <PopularSerie title="" data={seriesResults}></PopularSerie>
        {showPagination()}
        <br />
      </>
    );
  };

  const nextPage = () => {
    if (serialsData.total_pages > 1) {
      do {
        setPage(page + 1);
      } while (page === serialsData.total_pages);
    }
  };

  const prevPage = () => {
    if (serialsData.total_pages > 1) {
      do {
        setPage(page - 1);
      } while (page === 1);
    }
  };

  const showPagination = () => {
    if (serialsData.total_pages > 1) {
      return (
        <PaginationContainer>
          <Prev onClick={prevPage}>
            <p>Précédente</p>
          </Prev>
          <PageState>
            <p>{`${page} sur ${serialsData.total_pages}`}</p>
          </PageState>
          <Next onClick={nextPage}>
            <p>Suivante</p>
          </Next>
        </PaginationContainer>
      );
    }
  };

  return <>{showseriesGenres()}</>;
}
