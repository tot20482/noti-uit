import { Stack } from "expo-router";
import React from "react";
import { MockResearch2 } from "../../../../mocks/library/Research";
import DetailResearch from "../../../../components/library/Study/Detail/DetailResearch";

const Research2 = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <DetailResearch mockData={MockResearch2} />
    </>
  );
};

export default Research2;
