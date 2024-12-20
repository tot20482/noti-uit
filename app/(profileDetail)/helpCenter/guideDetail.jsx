import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Header from "../../../components/profile/Header";
import GuideContent from "../../../components/profile/helpCenter/helpCenterDetail/GuideContent";

const GuideDetail = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Chi tiết hướng dẫn" />
      <GuideContent />
    </>
  );
};

export default GuideDetail;
