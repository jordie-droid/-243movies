import React from "react";
import styled from "styled-components";
import Theme from "../theme";
import Logo from "../images/Logo.svg";
import facebook from "../images/icons/facebook.svg";
import twitter from "../images/icons/twitter.svg";
import instagram from "../images/icons/instagram.svg";
import linkedIn from "../images/icons/linkedin.svg";

const { light, dark, transparentLight } = Theme;

const FooterPage = styled.footer`
  box-sizing: border-box;
  width: 100%;
  margin-top: 50px;
  background-color: ${transparentLight};
  color: ${light};
`;

const ConteneurLogoReseau = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ConteneurlLogo = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  margin: 20px;
  hr {
    background-color: ${light};
  }
  img {
    width: 150px;
    margin-bottom: 10px;
  }
`;

const ConteneurReseaux = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  img {
    width: 30px;
    margin-left: 50px;
  }
  ~ hr {
    background-color: ${light};
    margin-right: 20px;
  }
`;

const CopyRight = styled.div`
  width: 100%;
  background-color: ${dark};
  color: ${light};
  display: flex;
  justify-content: center;
  img {
    height: 21px;
    position: relative;
    top: 15px;
    margin-left: 2px;
  }
`;

const CopyRightText = styled.strong`
  font-size: 1.9rem;
  color: ${light};
  padding: 5px;
`;

const Description = styled.div`
  width: 50%;
  text-align: justify;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export function Footer() {
  return (
    <FooterPage>
      <ConteneurLogoReseau>
        <ConteneurlLogo>
          <img src={Logo} alt=""></img>
          <hr></hr>
        </ConteneurlLogo>
        <div>
          <ConteneurReseaux>
            <img src={facebook} alt=""></img>
            <img src={twitter} alt=""></img>
            <img src={instagram} alt=""></img>
            <img src={linkedIn} alt=""></img>
          </ConteneurReseaux>
          <hr />
        </div>
      </ConteneurLogoReseau>
      <Description>
        <p>
          +243 movie est un site de streaming. Nous sommes là pour vous aider à
          trouver rapidement les informations sur les films, séries et
          célébrités. Nous avons le plaisir de travailler en collaboration avec
          the movie database qui nous fourni une base de données riche contenant
          la majorité des informations que vous rechercher.
        </p>
      </Description>
      <CopyRight>
        <CopyRightText>Copy Right 2021 </CopyRightText>
        <img src={Logo} alt=""></img>
      </CopyRight>
    </FooterPage>
  );
}
