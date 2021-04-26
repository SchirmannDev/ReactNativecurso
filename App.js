import React from "react";
import styled from "styled-components/native";
import { Image, StyleSheet } from "react-native";

import Header from "./src/components/Header";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #16d2d4;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <Container>
      <Image source={require("./src/images/cintia.png")} style={styles.image} />
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
