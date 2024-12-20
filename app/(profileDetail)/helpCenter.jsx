import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Header from "../../components/profile/Header";
import HelpCenterDetail from "../../components/profile/helpCenter/HelpCenterDetail";

const HelpCenter = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Trung tâm hỗ trợ" />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <HelpCenterDetail />
      </View>
    </>
  );
};

export default HelpCenter;
