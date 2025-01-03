import { Stack } from "expo-router";
import React from "react";
import Outline3Content from "../../../../components/library/Study/Detail/Outline3Content";

const Outline3 = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Outline3Content />
    </>
  );
};

export default Outline3;
