import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { MockOutline1 } from "../../../../mocks/library/Study";
import Outline1Content from "../../../../components/library/Study/Detail/Outline1Content";

const Outline1 = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Outline1Content />
    </>
  );
};

export default Outline1;
