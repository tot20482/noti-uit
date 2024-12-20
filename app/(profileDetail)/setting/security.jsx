import { Stack } from "expo-router";
import React from "react";
import Header from "../../../components/profile/Header";
import AboutUsDetail from "../../../components/profile/setting/SettingDetail/AboutUsDetail";

const Security = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Chính sách bảo mật" />
      <AboutUsDetail />
    </>
  );
};

export default Security;
