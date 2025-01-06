import { Stack } from "expo-router";
import React from "react";
import DetailResearch from "../../../../components/library/Study/Detail/DetailResearch";
import { MockResearch6 } from "../../../../mocks/library/Research";

const Research6 = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <DetailResearch mockData={MockResearch6} />
    </>
  );
};

export default Research6;
