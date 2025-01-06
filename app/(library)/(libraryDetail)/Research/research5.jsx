import { Stack } from "expo-router";
import React from "react";
import DetailResearch from "../../../../components/library/Study/Detail/DetailResearch";
import { MockResearch5 } from "../../../../mocks/library/Research";

const Research5 = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <DetailResearch mockData={MockResearch5} />
    </>
  );
};

export default Research5;
