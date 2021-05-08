import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HorizontalSeparator from "../components/HorizontalSeparator";
import PopularMovie from "../components/PopularMovies";
import PopularSerie from "../components/PopularSeries";
import PopularActors from "../components/PoupularActors";
import Theme from "../theme";

const { light, dark, transparentLight, orange } = Theme;

const H1 = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  color: ${light};
  margin: 190px 10px 30px;
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

export default function Recherche({ infoToSearch }) {
  const [page, setPage] = useState(1);
  const [dataTable, setTableMovie] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  const [tvData, setTvData] = useState([]);
  const [actorsData, setActorsData] = useState([]);

  let url = `https://api.themoviedb.org/3/search/multi?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=${page}&include_adult=false&query=${infoToSearch}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((dataSet) => {
        setTableMovie(dataSet);
        populateMovieInfo(dataSet);
        populateTvInfo(dataSet);
        populateActorsInfo(dataSet);
      });
  }, [url]);

  const populateTvInfo = (dataSet) => {
    if (dataSet) {
      if (dataSet.total_pages > 0) {
        setTvData(dataSet.results.filter((data) => data.media_type === "tv"));
      }
    }
  };

  const populateMovieInfo = (dataSet) => {
    if (dataSet) {
      if (dataSet.total_pages > 0) {
        setMoviesData(
          dataSet.results.filter((data) => data.media_type === "movie")
        );
      }
    }
  };

  const populateActorsInfo = (dataSet) => {
    if (dataSet) {
      if (dataSet.total_pages > 0) {
        setActorsData(
          dataSet.results.filter((data) => data.media_type === "person")
        );
      }
    }
  };

  const showHorizontalSeparatorForMovie = () => {
    if (tvData.length > 0 || actorsData.length > 0) {
      return <HorizontalSeparator></HorizontalSeparator>;
    }
  };

  const showMovies = () => {
    if (moviesData.length > 0) {
      return (
        <>
          <PopularMovie title="le (s) films" data={moviesData}></PopularMovie>
          {showHorizontalSeparatorForMovie()}
        </>
      );
    }
  };

  const showHorizontalSeparatorForTv = () => {
    if (moviesData.length > 0 || actorsData.length > 0) {
      return <HorizontalSeparator></HorizontalSeparator>;
    }
  };

  const showTv = () => {
    if (tvData.length > 0) {
      return (
        <>
          <PopularSerie title="la (les) séries" data={tvData}></PopularSerie>
          {showHorizontalSeparatorForTv()}
        </>
      );
    }
  };

  const showPagination = () => {
    if (dataTable) {
      if (dataTable.total_pages > 1) {
        return (
          <PaginationContainer>
            <Prev onClick={prevPage}>
              <p>Précédente</p>
            </Prev>
            <PageState>
              <p>{`${page} sur ${dataTable.total_pages}`}</p>
            </PageState>
            <Next onClick={nextPage}>
              <p>Suivante</p>
            </Next>
          </PaginationContainer>
        );
      }
    }
  };

  const nextPage = () => {
    if (dataTable) {
      if (dataTable.total_pages > 1) {
        do {
          setPage(page + 1);
        } while (page === dataTable.total_pages);
      }
    }
  };

  const prevPage = () => {
    if (dataTable) {
      if (dataTable.total_pages > 1) {
        do {
          setPage(page - 1);
        } while (page === 1);
      }
    }
  };

  const showActors = () => {
    if (actorsData.length > 0) {
      return (
        <>
          <PopularActors
            title="L' (les) acteurs"
            data={actorsData}
          ></PopularActors>
        </>
      );
    }
  };

  const showInformation = () => {
    if (dataTable) {
      if (dataTable.total_pages < 1) {
        return <H1>Aucune information relative à {infoToSearch}</H1>;
      } else {
        return (
          <>
            <H1>Voici l' (les) information (s) relative à {infoToSearch}</H1>
            {showPagination()}
            {showMovies()}
            {showTv()}
            {showActors()}
            {showPagination()}
          </>
        );
      }
    } else {
      <H1>Aucune information relative à {infoToSearch}</H1>;
    }
  };

  return <> {showInformation()}</>;
}
