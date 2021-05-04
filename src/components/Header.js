import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Theme from "../theme";
import Button from "./Button";
import Logo from "../images/Logo.svg";
import Image from "./Image";
import SearchIcon from "../images/icons/search.svg";



  const { transparentLight, dark, orange, light } = Theme;

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
    position: relative;
    margin-top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 370px;
    background-color: ${dark};
    padding: 20px 0;
    align-items: center;
  `;

  const InputSearch = styled.input`
    background-color: ${dark};
    border: solid 1px ${orange};
    width: 370px;
    text-align: center;
    height: 40px;
    color: ${light};
    padding: 0 35px;
    border-radius: 30px;
    &:focus {
      outline: none;
    }
  `;

  const IconSearch = styled.img`
    width: 20px;
    height: 20px;
  `;

export default function Header() {
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
          <Button>Connexion</Button>
          <Button>Créer un compte</Button>
        </GroupButtons>
      </LogoNavButtonsContainer>
      <InputSearchContainer className="input-search-container">
        <InputSearch
          type="search"
          placeholder="Faites votre recherche"
        ></InputSearch>
        <IconSearch src={SearchIcon}></IconSearch>
        {/* </div> */}
      </InputSearchContainer>
    </PageHeader>
  );
}
