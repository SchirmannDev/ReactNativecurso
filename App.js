import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = (props) => {
  return <Text>{props.phrase}</Text>;
};

export default () => {
  return (
    <Container>
      <Title phrase="Seja bem vindo(a)" />
      <Title phrase="Hello World" />
    </Container>
  );
};
