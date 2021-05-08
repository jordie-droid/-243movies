import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ButtonLink from "../components/ButtonLink";
import PopularSerie from "../components/PopularSeries";
import { GenreSerieContext } from "../context/GenreSerie";
import Theme from "../theme";

const { transparentLight, orange, dark } = Theme;

const GenreTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${transparentLight};
  color: ${orange};
  padding: 20px;
  margin-bottom: 50px;
  font-size: 2rem;
`;

const GenreContainer = styled.div`
  margin-top: 180px;
  margin-bottom: 50px;
  padding: 20px 0 10px;
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
  margin: 20px 0;
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
  const [GenreSerie] = useContext(GenreSerieContext);
  const nameGenre = GenreSerie.genres;

  const [SeriesData, setSerieData] = useState([]);
  const dataTable = SeriesData.results;

  let url = `https://api.themoviedb.org/3/tv/popular?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=${page}`;

  useEffect(() => {
    fetch(url)
      .then((responses) => responses.json())
      .then((dataSet) => {
        setSerieData(dataSet);
      });
  }, [url]);

  const showGenres = () => {
    if (GenreSerie.length === 0 || SeriesData.length === 0) {
      return (
        <div className="loader-container">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <GenreTitleContainer>
            <h1>Trouver la série que vous cherchiez par son genre</h1>
            <GenreContainer>
              {nameGenre.map(({ id, name }) => (
                <ButtonLink key={id} text={name}></ButtonLink>
              ))}
            </GenreContainer>
          </GenreTitleContainer>
          {showPagination()}
          <PopularSerie title="" data={dataTable}></PopularSerie>
          {showPagination()}
          <br />
        </>
      );
    }
  };

  const nextPage = () => {
    if (SeriesData) {
      if (SeriesData.total_pages > 1) {
        do {
          setPage(page + 1);
        } while (page === SeriesData.total_pages);
      }
    }
  };

  const prevPage = () => {
    if (SeriesData) {
      if (SeriesData.total_pages > 1) {
        do {
          setPage(page - 1);
        } while (page === 1);
      }
    }
  };

  const showPagination = () => {
    if (SeriesData) {
      if (SeriesData.total_pages > 1) {
        return (
          <PaginationContainer>
            <Prev onClick={prevPage}>
              <p>Précédente</p>
            </Prev>
            <PageState>
              <p>{`${page} sur ${SeriesData.total_pages}`}</p>
            </PageState>
            <Next onClick={nextPage}>
              <p>Suivante</p>
            </Next>
          </PaginationContainer>
        );
      }
    }
  };

  return <>{showGenres()}</>;
}
