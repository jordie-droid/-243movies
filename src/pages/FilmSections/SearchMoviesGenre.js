import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Loader from "../../components/Loader";
import PopularMovie from "../../components/PopularMovies";
import Theme from "../../theme";

const { dark, transparentLight, orange } = Theme;

const MainContainer = styled.div`
  margin-top: 83px;
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

export default function SearchMoviesGenre() {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=${page}`;
  
  async function fetchMovieByGenre() {
    const response = await fetch(url);
    const data = await response.json();
    await setData(data);
    await setMovieData(data.results);
    await setIsLoading(false);
  }

  useEffect(() => {
    fetchMovieByGenre();
  }, [url]);

  const nextPage = () => {
    if (data.total_pages > 1) {
      do {
        setPage(page + 1);
      } while (page === data.total_pages);
    }
  };

  const prevPage = () => {
    if (data.total_pages > 1) {
      do {
        setPage(page - 1);
      } while (page === 1);
    }
  };

  const showPagination = () => {
    if (data.total_pages > 1) {
      return (
        <PaginationContainer>
          <Prev onClick={prevPage}>
            <p>Précédente</p>
          </Prev>
          <PageState>
            <p>{`${page} sur ${data.total_pages}`}</p>
          </PageState>
          <Next onClick={nextPage}>
            <p>Suivante</p>
          </Next>
        </PaginationContainer>
      );
    }
  };

  const showData = () => {
    return isLoading ? (
      <Loader></Loader>
    ) : (
      <MainContainer>
        {showPagination()}
        <PopularMovie data={movieData}></PopularMovie>
        {showPagination()}
      </MainContainer>
    );
  };

  return <>{showData()}</>;
}
