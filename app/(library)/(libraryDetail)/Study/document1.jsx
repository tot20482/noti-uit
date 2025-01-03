import { Stack } from "expo-router";
import React from "react";
import DetailStudy from "../../../../components/library/Study/Detail/DetailStudy";
import { MockDocument1 } from "../../../../mocks/library/Study";

const Document1 = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <DetailStudy mockData={MockDocument1} />
    </>
  );
};

export default Document1;
