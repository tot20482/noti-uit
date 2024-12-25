import { Stack } from "expo-router";
import React from "react";
import Header from "../../../components/library/Header/StudyResearch/Header";

const Thesis = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Khóa luận" />
    </>
  );
};

export default Thesis;
