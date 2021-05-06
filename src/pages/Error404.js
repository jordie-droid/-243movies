import React from "react";
import styled from "styled-components";
import Theme from "../theme";

const { light } = Theme;

const PageNotFind = styled.h1`
  margin: 200px 20px;
  color: ${light};
`;

export default function Error404() {
  return (
    <PageNotFind>{`Erreur 404
  Page non trouvée`}</PageNotFind>
  );
}
