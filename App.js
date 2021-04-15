import React, { useEffect } from "react";
import { Dimensions, Alert } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ff009a;
`;

export default () => {
  useEffect(() => {
    Alert.alert("NOTICE", "VERY IMPORTANT", [
      { text: "I agree", onpress: () => console.log("Accepted") },
      {
        text: "I do not agree",
        onPress: () => console.log("Not accept"),
        style: "cancel",
      },
    ]);
  }, []);

  return <Container></Container>;
};
