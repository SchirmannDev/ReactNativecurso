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
    let { width, height } = Dimensions.get("window");
    alert(width + "x" + height);
  }, []);

  return <Container></Container>;
};
