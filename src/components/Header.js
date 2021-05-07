import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Theme from "../theme";
import Button from "./Button";
import Logo from "../images/Logo.svg";
import Image from "./Image";
import SearchIcon from "../images/icons/search.svg";

const { transparentLight, dark, light, transparentOrange, orange } = Theme;

const PageHeader = styled.header`
  background-color: ${dark};
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 9998;
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
  width: 230px;
  display: flex;
  justify-content: space-between;
`;

const InputSearchContainer = styled.div`
  position: relative;
  margin-top: 10px;
  left: 49.3%;
  transform: translateX(-50%);
  width: 370px;
  background-color: ${dark};
  padding: 20px 0;
  align-items: center;
  img {
    position: absolute;
    top: 28px;
    right: 10px;
  }
`;

const InputSearch = styled.input`
  background-color: ${dark};
  border: solid 2px ${transparentOrange};
  width: 370px;
  text-align: center;
  height: 40px;
  color: ${light};
  padding: 0 35px;
  border-radius: 30px;
  transition: 1s;
  &:focus {
    outline: none;
    border: solid 2px ${orange};
  }
  &:hover {
    border: solid 2px ${orange};
  }
`;

const IconSearch = styled.img`
  width: 20px;
  height: 20px;
`;

export default function Header() {
  const activeMenu = (clickedMenu) => {
    const activedMenu = document.querySelector(".nav__link.actived");
    const currentMenu = clickedMenu.target;
    activedMenu.classList.remove("actived");
    currentMenu.classList.add("actived");
  };

  let [infoToSearch, setInfoToSearch] = useState();

  const submitData = (event) => {
    event.preventDefault();
    
    console.log(infoToSearch);
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
              <Link
                className="nav__link"
                onClick={activeMenu}
                to="/series.html"
              >
                Séries
              </Link>
            </UnStyledList>
            <UnStyledList>
              <Link className="nav__link" onClick={activeMenu} to="/films.html">
                Films
              </Link>
            </UnStyledList>
            <UnStyledList>
              <Link
                className="nav__link"
                onClick={activeMenu}
                to="/acteurs.html"
              >
                Acteurs
              </Link>
            </UnStyledList>
          </UnOrderedList>
        </NavFlexBox>
        <GroupButtons>
          <Button>Connexion</Button>
          <Button>Créer un compte</Button>
        </GroupButtons>
      </LogoNavButtonsContainer>
      <InputSearchContainer className="input-search-container">
        <form onSubmit={submitData}>
          <InputSearch
            type="search"
            placeholder="Faites votre recherche"
            onChange={(event) => {
              setInfoToSearch(event.target.value);
            }}
          ></InputSearch>
        </form>
        <IconSearch src={SearchIcon}></IconSearch>
      </InputSearchContainer>
    </PageHeader>
  );
}
