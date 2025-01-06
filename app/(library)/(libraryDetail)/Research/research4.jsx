import { Stack } from "expo-router";
import React from "react";
import DetailResearch from "../../../../components/library/Study/Detail/DetailResearch";
import { MockResearch4 } from "../../../../mocks/library/Research";

const Research4 = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <DetailResearch mockData={MockResearch4} />
    </>
  );
};

export default Research4;
