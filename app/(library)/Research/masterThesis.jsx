import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Header from "../../../components/library/Header/StudyResearch/Header";

const MasterThesis = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Luận văn thạc sĩ" />
    </>
  );
};

export default MasterThesis;
