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

const Square = styled.View`
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border: 3px dashed #000;
  margin-top: 30px;
`;

const Title = () => {
  const [name, setName] = useState("Cíntia Schirmann");
  const [backupName, setBackupName] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <View>
      <Input value={name} onChangeText={(t) => setName(t)} />

      <Button
        title={show ? "Ocultar nome" : "Mostrar nome"}
        onPress={handleClick}
      />

      {show && (
        <Square>
          <Text>Seu nome é :</Text>
          <Text>{name}</Text>
        </Square>
      )}
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
