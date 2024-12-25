import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, FONT, icons } from "@/constants";

const CalendarNoti = ({ title, desc, time, status, icon }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#fff",
        minHeight: 96,
        borderRadius: 15,
        padding: 15,
      }}
    >
      <Text
        style={{
          fontFamily: FONT.semibold,
          color: COLORS.primary,
          fontSize: 16,
        }}
      >
        {title}
      </Text>
      <Text style={{ fontFamily: FONT.italic, fontSize: 12 }}>{desc}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          marginTop: 6,
        }}
      >
        <Image
          source={icons.clock}
          resizeMode="contain"
          style={{ width: 15, height: 15 }}
        />
        <Text style={{ fontFamily: FONT.italic, fontSize: 12 }}>{time}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{ width: 15, height: 15 }}
        />
        <Text style={{ fontFamily: FONT.italic, fontSize: 12 }}>{status}</Text>
      </View>
    </View>
  );
};

export default CalendarNoti;
