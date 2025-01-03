import { Stack } from "expo-router";
import React from "react";
import DetailStudy from "../../../../components/library/Study/Detail/DetailStudy";
import { MockBook2, MockDocument1 } from "../../../../mocks/library/Study";

const Book2 = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <DetailStudy mockData={MockBook2} />
    </>
  );
};

export default Book2;
