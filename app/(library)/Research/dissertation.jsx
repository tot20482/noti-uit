import { Stack } from "expo-router";
import React from "react";
import Header from "../../../components/library/Header/StudyResearch/Header";

const Dissertation = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Luận án" />
    </>
  );
};

export default Dissertation;
