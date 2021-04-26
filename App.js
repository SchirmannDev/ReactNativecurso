import React from "react";
import styled from "styled-components/native";

import Header from "./src/components/Header";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #16d2d4;
`;

export default () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};
