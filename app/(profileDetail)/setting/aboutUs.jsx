import { Stack } from "expo-router";
import React from "react";
import Header from "../../../components/profile/Header";
import AboutUsDetail from "../../../components/profile/setting/SettingDetail/AboutUsDetail";

const AboutUs = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Về chúng tôi" />
      <AboutUsDetail />
    </>
  );
};

export default AboutUs;
