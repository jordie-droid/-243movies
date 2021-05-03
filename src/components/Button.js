import React from "react";
import styled from "styled-components";
import Theme from "../theme";

export default function Button({ className, children, width }) {
  const { light, orange, dark } = Theme;
  const Button = styled.button`
    background-color: ${dark};
    color: ${light};
    padding: 15px 0;
    width: ${width};
    border: solid 1px ${orange};
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      border: solid 1px ${light};
      color: ${orange};
      transition: 1s;
    }
  `;
  return <Button className={className}>{children}</Button>;
}
