import React from "react";
import styled from "styled-components";

export default function HorizontalSeparator() {
  const Hr = styled.hr`
    width: 69.5%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  `;
  return <Hr />;
}
