import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Header from "../../../components/profile/Header";
import ServiceDetail from "../../../components/profile/setting/SettingDetail/ServiceDetail";

const Service = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Điều khoản dịch vụ" />
      <ServiceDetail />
    </>
  );
};

export default Service;
