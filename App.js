import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = (props) => {
  const [name, setName] = useState("Cíntia Schirmann");

  return <Text>Nome: {name}</Text>;
};

export default () => {
  return (
    <Container>
      <Title phrase="Seja bem vindo(a)" />
    </Container>
  );
};
