import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import Theme from "../theme";
import DefaultCardImage from "../images/defaultImage.png";

const { dark, light, transparentOrange, orange } = Theme;

const ConteneurPrincipal = styled.div`
  display: flex;
  background-color: ${dark};
  width: 90%;
  margin: 100px 0 0;
  padding: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  h3 {
    color: ${orange};
    margin-bottom: 10px;
  }
  img {
    width: 300px;
    border-radius: 8px;
    max-height: 500px;
  }
`;

const ConteneurApropos = styled.div`
  margin-left: 30px;
  color: ${light};
`;

const ConteneurFlexImageConnuPour = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

`;

const GoBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${dark};
  width: 110px;
  max-width: 110px;
  height: 40px;
  color: ${light};
  border: solid 2px ${transparentOrange};
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  margin-top: 20px;
  left: 100%;
  transform: translateX(-180px);
  &:hover {
    border: solid 2px ${orange};
    color: ${orange};
    transition: 1s;
  }
`;

const NotInformation = styled.h1`
  margin-bottom: 300px;
`;

const Name = styled.h1`
  margin-bottom: 30px;
`;

const CardNowFor = styled.div`
  width: 150px;
  display: flex;
  margin-right: 10px;
  flex-direction: column;
  img {
    width: 100%;
    height: 150px;
  }
`;

const BodyCardNowFor = styled.div`
  padding: 10px 0;
`;

export default function GoBackActeur() {
  let imageUrl = `https://image.tmdb.org/t/p/w1280`;

  const [celebrityInfo, setCelebrityInfo] = useState([]);
  const [knowFor, sectionKnowFor] = useState([]);

  const { id } = useParams();
  const history = useHistory();

  const fetchCelebrityInfoUrl = `https://api.themoviedb.org/3/person/${id}?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;
  const fetchMoviesUrl = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;

  useEffect(() => {
    fetch(fetchMoviesUrl)
      .then((responses) => responses.json())
      .then((dataSet) => {
        sectionKnowFor(dataSet);
      });
  }, [fetchMoviesUrl]);

  useEffect(() => {
    fetch(fetchCelebrityInfoUrl)
      .then((responses) => responses.json())
      .then((dataSet) => {
        setCelebrityInfo(dataSet);
      });
  }, [fetchCelebrityInfoUrl]);

  const goBackHandle = () => {
    history.goBack();
  };

  const getFoorData = () => {
    const data = [];
    if (knowFor.cast) {
      for (let i = 0; i < 5; i++) {
        data.push(knowFor.cast[i]);
      }
    }
    return data;
  };

  const showKnowFor = () => {
    if (knowFor.cast) {
      if (knowFor.cast.length > 0) {
        return (
          <>
            <h3>{celebrityInfo.gender === 1 ? "Connue pour" : "Connu pour"}</h3>
            <ConteneurFlexImageConnuPour>
              {knowFor.cast.length &&
                getFoorData().map((data) => {
                  return (
                    <CardNowFor key={data && data.id}>
                      <img
                        src={
                          data && data.poster_path
                            ? `${imageUrl}${data.poster_path}`
                            : DefaultCardImage
                        }
                        alt=""
                      ></img>
                      <BodyCardNowFor>
                        <p>
                          <strong>{data && data.title}</strong>
                        </p>
                      </BodyCardNowFor>
                    </CardNowFor>
                  );
                })}
            </ConteneurFlexImageConnuPour>
          </>
        );
      }
    }
  };

  const showInformation = () => {
    if (celebrityInfo) {
      return celebrityInfo ? (
        <>
          <ConteneurPrincipal id="main-container">
            <img
              src={
                celebrityInfo.profile_path
                  ? `${imageUrl}${celebrityInfo.profile_path}`
                  : DefaultCardImage
              }
              alt=""
            ></img>
            <ConteneurApropos>
              <Name>{celebrityInfo.name}</Name>
              <h3>Biographie</h3>
              <p>
                {celebrityInfo.biography
                  ? celebrityInfo.biography
                  : "biographie non disponible"}
              </p>
              {celebrityInfo.birthday && (
                <p>Data de naissance : {celebrityInfo.birthday}</p>
              )}
              {celebrityInfo.place_of_birth && (
                <p>Lieu de naissance : {celebrityInfo.place_of_birth}</p>
              )}
              {showKnowFor()}
            </ConteneurApropos>
          </ConteneurPrincipal>
          <GoBack onClick={goBackHandle}>Retourner</GoBack>
        </>
      ) : (
        <NotInformation></NotInformation>
      );
    }
  };

  return <>{showInformation()}</>;
}
