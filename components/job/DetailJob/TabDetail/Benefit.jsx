import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONT } from "../../../../constants";

const Benefit = ({ title, benefit, advantage }) => {
  return (
    <View
      style={{
        width: "85%",
        minHeight: "238px",
        backgroundColor: "#fff",
        paddingLeft: 15,
        paddingRight: 30,
        paddingTop: 20,
        paddingBottom: 40,
        borderRadius: 15,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <Text
        style={{
          fontFamily: FONT.semibold,
          fontSize: 18,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <View>
        <Text style={{ fontSize: 14, fontFamily: FONT.bold }}>Quyền lợi:</Text>
        {benefit.map((item, index) => (
          <View
            key={index}
            style={{ display: "flex", flexDirection: "row", gap: 8 }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>•</Text>
            <Text style={{ fontSize: 14, fontFamily: FONT.regular }}>
              {item}
            </Text>
          </View>
        ))}
      </View>
      <View>
        <Text style={{ fontSize: 14, fontFamily: FONT.bold }}>
          Những ưu điểm:
        </Text>
        {advantage.map((item, index) => (
          <View
            key={index}
            style={{ display: "flex", flexDirection: "row", gap: 8 }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>•</Text>
            <Text style={{ fontSize: 14, fontFamily: FONT.regular }}>
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Benefit;
