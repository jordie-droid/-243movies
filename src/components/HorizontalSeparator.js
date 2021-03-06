import React from "react";
import styled from "styled-components";

const Hr = styled.hr`
  width: 69.5%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
`;

export default function HorizontalSeparator() {
  return <Hr></Hr>;
}
