import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import JobContent from "../../components/job/JobContent";
import HeaderTab from "../../components/profile/HeaderTab";
import { images } from "../../constants";

const Saved = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <HeaderTab />
    </>
  );
};

export default Saved;
