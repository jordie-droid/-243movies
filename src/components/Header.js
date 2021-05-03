import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Theme from "../theme";
import Button from "./Button";
import Logo from "../images/Logo.svg";
import Image from "./Image";
import Input from "./Input";

export default function Header() {
  const { transparentLight, dark } = Theme;
  const widthInput = "370px";
  const textAlign = "center";

  /****************STYLES******************/

  const PageHeader = styled.header`
    background-color: ${dark};
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 9999;
  `;

  const LogoNavButtonsContainer = styled.div`
    height: 60px;
    background-color: ${transparentLight};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  `;

  const NavFlexBox = styled.nav`
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 0 10px;
    position: relative;
  `;

  const UnOrderedList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const UnStyledList = styled.li`
    list-style: none;
  `;

  const GroupButtons = styled.div`
    width: 210px;
    display: flex;
    justify-content: space-between;
  `;

  const InputSearchContainer = styled.div`
    width: 100%;
    background-color: ${dark};
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  /****************** SCRIPTS *****************/

  const activeMenu = (clickedMenu) => {
    const activedMenu = document.querySelector(".nav__link.actived");
    const currentMenu = clickedMenu.target;
    activedMenu.classList.remove("actived");
    currentMenu.classList.add("actived");
  };

  return (
    <PageHeader>
      <LogoNavButtonsContainer>
        <Link to="/">
          <Image className="logo" src={Logo}></Image>
        </Link>
        <NavFlexBox>
          <UnOrderedList>
            <UnStyledList>
              <Link className="nav__link actived" onClick={activeMenu} to="/">
                Accueil
              </Link>
            </UnStyledList>
            <UnStyledList>
              <Link className="nav__link" onClick={activeMenu} to="/Series">
                Séries
              </Link>
            </UnStyledList>
            <UnStyledList>
              <Link className="nav__link" onClick={activeMenu} to="/Films">
                Films
              </Link>
            </UnStyledList>
            <UnStyledList>
              <Link className="nav__link" onClick={activeMenu} to="/Acteurs">
                Acteurs
              </Link>
            </UnStyledList>
          </UnOrderedList>
        </NavFlexBox>
        <GroupButtons>
          <Button width="100px">Connexion</Button>
          <Button width="100px">Créer un compte</Button>
        </GroupButtons>
      </LogoNavButtonsContainer>
      <InputSearchContainer>
        <Input
          width={widthInput}
          centerText={textAlign}
          type="search"
          placeholder="Rechercher un film, une série ou un acteur"
          named="inputSearch"
        />
      </InputSearchContainer>
    </PageHeader>
  );
}
