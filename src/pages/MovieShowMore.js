import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import Loader from "../components/Loader";
import Theme from "../theme";
import defaultImage from "../images/defaultImage.png";

const { light, transparentOrange, orange, dark } = Theme;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 95%;
  max-width: 95%;
  margin: 100px auto 0;
  padding: 30px;
  color: ${light};
  border-radius: 10px;
  &::after {
    content: "";
    background: url(${(props) =>
        `https://image.tmdb.org/t/p/w1280${props.poster_path}`})
      no-repeat center center;
    background-size: cover;
    opacity: 0.3;
    width: 100%;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  img {
    width: 300px;
    border-radius: 8px;
    max-height: 500px;
    position: relative;
    left: -40px;
  }
  strong {
    margin-right: 10px;
  }
`;

const DetailsContainer = styled.div`
  padding: 10px;
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
  left: 100%;
  transform: translateX(-180px);
  &:hover {
    border: solid 2px ${orange};
    color: ${orange};
    transition: 1s;
  }
`;

const CanstingCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-bottom: 5px;
  img {
    width: 100%;
    height: 150px;
    position: relative;
    left: 0;
  }
`;

const CardBody = styled.div`
  padding: 10px 0;
`;

const SimilarMovieMainContainer = styled.div`
  padding: 25px;
  color: white;
`;

const SimilarMovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function MovieShowMore() {
  const { id } = useParams();

  const history = useHistory();

  const [movieDetails, setMovieDetails] = useState({});
  const [movieCredit, setMovieCredit] = useState({});
  const [similarMovies, setSimularMovies] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const imageUrl = `https://image.tmdb.org/t/p/w1280`;
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;
  const castingUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR`;
  const similarMoviesUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=d6ad6af3d05f971cd2712d949276910b&language=fr-FR&page=1`;

  async function fetchMovieDetails() {
    let response = await fetch(movieDetailsUrl);
    let data = await response.json();
    await setMovieDetails(data);

    response = await fetch(castingUrl);
    data = await response.json();
    await setMovieCredit(data.cast.filter((actor, index) => index < 10));

    response = await fetch(similarMoviesUrl);
    data = await response.json();
    await setSimularMovies(data.results.filter((movie, index) => index < 10));

    await setIsLoading(!isLoading);
  }

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const dispalayMovieDetails = () => {
    const { poster_path, title, overview, genres, vote_average } = movieDetails;
    return isLoading ? (
      <Loader></Loader>
    ) : (
      <div>
        <MainContainer poster_path={poster_path}>
          <img
            src={poster_path ? `${imageUrl}${poster_path}` : defaultImage}
            alt="affiche du film"
          ></img>
          <DetailsContainer>
            <h1>{title}</h1>
            <p>{overview}</p>
            <strong>{genres.length === 1 ? "Genre : " : "Genres : "}</strong>
            {genres.map(({ id, name }) => {
              return <strong key={id}>{name}</strong>;
            })}
            <h3>note : {vote_average}</h3>
            <h3>Casting : </h3>
            <CanstingCardContainer>
              {movieCredit.map(({ id, name, character, profile_path }) => {
                return (
                  <Card key={id}>
                    <img
                      src={
                        profile_path
                          ? `${imageUrl}${profile_path}`
                          : defaultImage
                      }
                      alt={"Profil acteur"}
                    />
                    <CardBody>
                      <p>
                        <strong>
                          {name} alias {character}
                        </strong>
                      </p>
                    </CardBody>
                  </Card>
                );
              })}
            </CanstingCardContainer>
          </DetailsContainer>
        </MainContainer>
        <SimilarMovieMainContainer>
          <h2>
            {similarMovies.length === 1 ? `Film similaire` : `Films similaires`}
          </h2>
          <SimilarMovieContainer>
            {similarMovies.map(({ id, title, poster_path }) => {
              return (
                <Card key={id}>
                  <img
                    src={
                      poster_path ? `${imageUrl}${poster_path}` : defaultImage
                    }
                    alt={"Affiche du film"}
                  />
                  <CardBody>
                    <p>
                      <strong>{title}</strong>
                    </p>
                  </CardBody>
                </Card>
              );
            })}
          </SimilarMovieContainer>
        </SimilarMovieMainContainer>
        <GoBack onClick={goBack}>Retourner</GoBack>
      </div>
    );
  };
  return <>{dispalayMovieDetails()}</>;
}
