import React from "react";
import styled from "styled-components";
import Theme from "../theme";

const { dark, light } = Theme;

const ConteneurPrincipal = styled.div`
  display: flex;
  background-color: ${dark};
  width: 100%;
`;

const ConteneurApropos = styled.div`
  background-color: ${dark};
  color: ${light};
`;

const ConteneurFlexImageConnuPour = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function VoirPlusActeur() {
  return (
    <ConteneurPrincipal>
      <img src="" alt=""></img>
      <ConteneurApropos>
        <h1>Noms</h1>
        <h2>Biographie</h2>
        <p>Biographie text</p>
        <h2>Connue pour</h2>
        <ConteneurFlexImageConnuPour>
          <img src="" alt=""></img>
        </ConteneurFlexImageConnuPour>
      </ConteneurApropos>
    </ConteneurPrincipal>
  );
}
