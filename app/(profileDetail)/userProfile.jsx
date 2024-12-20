import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Header from "../../components/profile/Header";
import HoSoCaNhan from "../../components/profile/userProfile/HoSoCaNhan";

const UserProfile = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Hồ sơ cá nhân" />
      <HoSoCaNhan />
    </>
  );
};

export default UserProfile;
