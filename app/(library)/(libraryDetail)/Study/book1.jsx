import { Stack } from "expo-router";
import React from "react";
import DetailStudy from "../../../../components/library/Study/Detail/DetailStudy";
import { MockBook1, MockDocument1 } from "../../../../mocks/library/Study";

const Book1 = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <DetailStudy mockData={MockBook1} />
    </>
  );
};

export default Book1;
