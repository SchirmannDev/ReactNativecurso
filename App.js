import React, { useState } from "react";
import { View, Text, Button } from "react-native";
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
  const [backupName, setBackupName] = useState("");

  const handleClick = () => {
    setBackupName(name);
  };

  return (
    <View>
      <Input value={name} onChangeText={(t) => setName(t)} />
      <Button title="Trocar o nome" onPress={handleClick} />
      <Text>{backupName}</Text>
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
