import React from "react";
import styled from "styled-components";
import Theme from "../theme";
const { light, orange, dark } = Theme;
const MyButton = styled.button`
  background-color: ${dark};
  width: 100px;
  color: ${light};
  padding: 15px 0;
  border: solid 1px ${orange};
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    border: solid 1px ${light};
    color: ${orange};
    transition: 1s;
  }
`;

export default function Button({ className, children, width }) {
  return <MyButton className={className}>{children}</MyButton>;
}
