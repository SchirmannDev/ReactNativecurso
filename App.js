import React, { useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  border: 1px solid blue;
`;

const Logo = styled.View`
  width: 100px;
  height: 100px;
  background-color: #000;
  margin-bottom: 20px;
`;

const KeyboardArea = styled.KeyboardAvoindingView``;

export default () => {
  return (
    <Container>
      <Logo></Logo>
      <Input />
    </Container>
  );
};
