import { Link, Stack } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import { COLORS, FONT } from "../constants";
import SpinnerLoader from "./../components/SpinnerLoader";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Text
        style={{
          fontSize: 32,
          fontFamily: FONT.bold,
          textTransform: "uppercase",
          color: "#fff",
        }}
      >
        Noti-uit
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontFamily: FONT.medium,
          color: "#fff",
          marginBottom: 10,
        }}
      >
        Đơn giản - Hiệu quả - Gọn gàng
      </Text>
      <SpinnerLoader />
    </SafeAreaView>
  );
}
