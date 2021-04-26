import React from "react";
import styled from "styled-components/native";

const Header = styled.View`
  width: 100%;
  height: 60px;
  background-color: #f778f6;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 25;
`;

export default () => {
  return (
    <Header>
      <HeaderText>Hello World Bitches</HeaderText>
    </Header>
  );
};
