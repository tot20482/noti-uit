import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { COLORS, FONT } from "../../constants";

const NotiContent = ({ title, description, createdAt }) => {
  return (
    <View
      style={{
        width: "85%",
        backgroundColor: "#fff",
        flexDirection: "column",
        gap: 4,
        borderRadius: 20,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontFamily: FONT.semibold,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{ color: "#6C757D", fontFamily: FONT.italic, marginLeft: 8 }}
      >
        {createdAt}
      </Text>
      <Text style={{ fontSize: 12, fontFamily: FONT.italic }}>
        {description}
      </Text>
      <Link
        href="#"
        style={{
          fontSize: 12,
          fontFamily: FONT.medium,
          color: "#2F6BFF",
          textDecorationLine: "underline",
          textAlign: "right",
        }}
      >
        Chi tiết
      </Link>
    </View>
  );
};

export default NotiContent;
