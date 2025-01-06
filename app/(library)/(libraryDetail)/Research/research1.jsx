import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import DetailResearch from "../../../../components/library/Study/Detail/DetailResearch";
import { MockResearch1 } from "../../../../mocks/library/Research";

const Research1 = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <DetailResearch mockData={MockResearch1} />
    </>
  );
};

export default Research1;
