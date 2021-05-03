import React from "react";
import styled from "styled-components";
import Theme from "../theme";

export default function Input(props) {
  const { orange, dark, light } = Theme;
  const { width, id, className, type, named, placeholder, centerText } = props;

  const Input = styled.input`
    background-color: ${dark};
    border: solid 1px ${orange};
    width: ${width};
    text-align: ${centerText};
    height: 40px;
    color: ${light};
    padding: 0 10px;
    border-radius: 30px;
    &:focus {
      outline: none;
    }
  `;
  return (
    <Input
      id={id}
      className={className}
      type={type}
      placeholder={placeholder}
      name={named}
    />
  );
}
