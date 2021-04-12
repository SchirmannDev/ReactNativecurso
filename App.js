import React, { useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 200px;
  height: 40px;
  border: 1px solid red;
`;

const Title = () => {
  const [name, setName] = useState("Cíntia Schirmann");

  function changeText(text) {
    setName(text);
  }

  return (
    <View>
      <Input value={name} onChangeText={changeText} />
      <Text>Ola {name}</Text>
    </View>
  );
};

export default () => {
  return (
    <Container>
      <Title />
    </Container>
  );
};
