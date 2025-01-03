import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import SurveyContent from "../../../components/NotiDetail/Administative/SurveyContent";

const Survey = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SurveyContent />
    </>
  );
};

export default Survey;
