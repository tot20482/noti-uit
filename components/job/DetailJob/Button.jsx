import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONT, icons } from "../../../constants";

const Button = () => {
  return (
    <>
      <TouchableOpacity
        style={{
          width: "35%",
          padding: 12,
          borderWidth: 3,
          borderColor: COLORS.primary,
          borderRadius: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          gap: 8,
        }}
      >
        <Image
          source={icons.heart}
          resizeMode="contain"
          style={{ width: 24, height: 24 }}
        />
        <Text
          style={{
            fontSize: 16,
            fontFamily: FONT.medium,
            color: COLORS.primary,
          }}
        >
          Lưu tin
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "62%",
          padding: 12,
          borderWidth: 3,
          borderColor: COLORS.primary,
          borderRadius: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.primary,
          gap: 8,
        }}
      >
        <Image source={icons.fly} />
        <Text style={{ fontFamily: FONT.medium, fontSize: 16, color: "#fff" }}>
          Ứng tuyển ngay
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;
