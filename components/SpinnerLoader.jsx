import { View, Text, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";

const SpinnerLoader = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/(auth)/signIn");
    }, 3000);
  }, []);
  return (
    <View>
      <ActivityIndicator
        size="large"
        color="#fff"
        style={{
          margin: 20,
        }}
      />
    </View>
  );
};

export default SpinnerLoader;
