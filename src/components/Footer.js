import React from "react";
import styled from "styled-components";
import Theme from "../theme";
import Logo from "../images/Logo.svg";

const { gray, light, dark } = Theme;

const FooterPage = styled.footer`
  position: relative;
  width: 100%;
  height: 80vh;
  background-color: ${gray};
  color: ${light};
`;

const CopyRight = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  background-color: ${dark};
  color: ${light};
  bottom: 0;
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

export function Footer() {
  return (
    <FooterPage>
      <CopyRight>
        <CopyRightText>Copy Right 2021 </CopyRightText>
        <img src={Logo} alt=""></img>
      </CopyRight>
    </FooterPage>
  );
}
