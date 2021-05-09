import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TvType from "../components/TvType";
import PopularSerie from "../components/PopularSeries";
import { GenreSerieContext } from "../context/GenreSerie";
import Theme from "../theme";

const { transparentLight, orange, dark } = Theme;

const GenreTitleContainer = styled.div`
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${transparentLight};
  color: ${orange};
  margin-bottom: 50px;
  font-size: 2rem;
  h1 {
    margin: 50px 0 20px;
    font-size: 2rem;
    color: ${orange};
  }
`;

const GenreContainer = styled.div`
  margin-bottom: 50px;
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
  margin: 20px 0 -40px;
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

export default function Series(props) {
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

  const getGenreId = (id) => {
    props.getGenreId(id);
  };

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
            <h1>Trouvez la série que vous cherchez par à sa catégorie</h1>
            <GenreContainer>
              {nameGenre.map(({ id, name }) => (
                <TvType
                  key={id}
                  text={name}
                  genreID={() => getGenreId(id)}
                ></TvType>
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
