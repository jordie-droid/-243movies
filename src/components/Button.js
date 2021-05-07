import React from "react";
import styled from "styled-components";
import Theme from "../theme";
const { light, orange, dark, transparentOrange } = Theme;
const MyButton = styled.button`
  background-color: ${dark};
  width: 110px;
  height: 40px;
  color: ${light};
  border: solid 2px ${transparentOrange};
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    border: solid 2px ${orange};
    color: ${orange};
    transition: 1s;
  }
`;

export default function Button({ className, children, width }) {
  return <MyButton className={className}>{children}</MyButton>;
}
