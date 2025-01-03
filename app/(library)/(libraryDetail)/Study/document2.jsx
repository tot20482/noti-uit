import { Stack } from "expo-router";
import React from "react";
import DetailStudy from "../../../../components/library/Study/Detail/DetailStudy";
import { MockDocument1, MockDocument2 } from "../../../../mocks/library/Study";

const Document2 = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <DetailStudy mockData={MockDocument2} />
    </>
  );
};

export default Document2;
