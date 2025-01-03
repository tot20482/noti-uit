import { Stack } from "expo-router";
import React from "react";
import Outline2Content from "../../../../components/library/Study/Detail/Outline2Content";

const Outline2 = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Outline2Content />
    </>
  );
};

export default Outline2;
