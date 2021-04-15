import React, { useEffect } from "react";
import { Plataform, Platform } from "react-native";
import { View, TextInput } from "react-native";
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
const KeyboardArea = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff00f;
  width: 100%;
`;

const Logo = styled.View`
  width: 100px;
  height: 100px;
  background-color: #000;
  margin-bottom: 20px;
`;

export default () => {
  useEffect(() => {}, []);

  return (
    <Container>
      <KeyboardArea behavior={Platform.OS == "ios" ? "padding" : null}>
        <Logo></Logo>
        <Input />
      </KeyboardArea>
    </Container>
  );
};
