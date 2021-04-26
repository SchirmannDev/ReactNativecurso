import React, { useState } from "react";
import styled from "styled-components/native";
import { Image, StyleSheet, Text } from "react-native";

import Header from "./src/components/Header";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #16d2d4;
  justify-content: center;
  align-items: center;
`;

export default () => {
  const [status, setStatus] = useState("");
  return (
    <Container>
      <Image
        source={require("./src/images/cintia.png")}
        style={styles.image}
        onLoadStart={() => setStatus("Carregando")}
      />

      <Text>{status}</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 25,
  },
});
