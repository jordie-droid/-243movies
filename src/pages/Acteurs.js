import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Theme from "../theme";
import PopularActors from "../components/PoupularActors";

const { transparentLight, orange, dark } = Theme;

const MainContainer = styled.div`
  margin-top: 100px;
`;

const ResutsContainer = styled.div`
  margin-top: -20px;
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

export default function Acteurs() {
  const [page, setPage] = useState(1);
  const [popularActors, setPopularActors] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const urlPopular =
    "https://api.themoviedb.org/3/person/popular?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=1";
  useEffect(() => {
    fetch(urlPopular)
      .then((responses) => responses.json())
      .then((dataSet) => {
        setPopularActors(dataSet.results);
        setDataTable(dataSet);
      });
  }, []);

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

  const showActors = () => {
    if (popularActors.length > 0) {
      return (
        <MainContainer>
          {showPagination()}
          <ResutsContainer>
            <PopularActors data={popularActors}></PopularActors>
          </ResutsContainer>
          {showPagination()}
        </MainContainer>
      );
    } else {
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
    }
  };

  return <>{showActors()}</>;
}
