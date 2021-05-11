import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Theme from "../theme";

const { dark, light, transparentOrange, orange } = Theme;

const ConteneurPrincipal = styled.div`
  display: flex;
  background-color: ${dark};
  width: 90%;
  margin: 100px 30px 0;
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

const VoirPlus = styled.div`
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
  right: 0;
  &:hover {
    border: solid 2px ${orange};
    color: ${orange};
    transition: 1s;
  }
`;

export default function VoirPlusActeur() {

  const history = useHistory();

  const goBackHandle = ()=>{
    history.goBack();
  }

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
        <VoirPlus onClick={goBackHandle}>Retourner</VoirPlus>
      </ConteneurApropos>
    </ConteneurPrincipal>
  );
}
