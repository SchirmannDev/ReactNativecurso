import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => {
  useEffect(() => {
    let largura = Dimensions.get("window").width;
    alert(largura);
  }, []);

  return <Container></Container>;
};
