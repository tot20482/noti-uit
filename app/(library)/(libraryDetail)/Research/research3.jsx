import { Stack } from "expo-router";
import React from "react";
import DetailResearch from "../../../../components/library/Study/Detail/DetailResearch";
import { MockResearch3 } from "../../../../mocks/library/Research";

const Research3 = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <DetailResearch mockData={MockResearch3} />
    </>
  );
};

export default Research3;
