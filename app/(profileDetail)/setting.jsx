import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Header from "../../components/profile/Header";
import SettingDetail from "../../components/profile/setting/SettingDetail";

const Setting = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="     Cài đặt" />
      <SettingDetail />
    </>
  );
};

export default Setting;
