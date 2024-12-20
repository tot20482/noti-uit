import { View, Text, FlatList } from "react-native";
import React from "react";
import { COLORS, FONT } from "../../../../constants";
import { InformationFullTime } from "../../../../mocks/job";

const Information = ({
  title,
  createdAt,
  type,
  address,
  description,
  list,
}) => {
  return (
    <View
      style={{
        width: "85%",
        minHeight: "238px",
        backgroundColor: "#fff",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        paddingBottom: 40,
        borderRadius: 15,
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
      <Text style={{ fontSize: 14, fontFamily: FONT.italic, color: "#6C757D" }}>
        {createdAt}
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontFamily: FONT.italic,
          color: "#6C757D",
          marginTop: 8,
        }}
      >
        {type}
      </Text>
      <Text style={{ fontSize: 14, fontFamily: FONT.regular }}>
        <Text style={{ fontSize: 14, fontFamily: FONT.bold }}>Địa chỉ: </Text>
        {address}
      </Text>
      <Text style={{ fontSize: 14, fontFamily: FONT.regular }}>
        <Text style={{ fontSize: 14, fontFamily: FONT.bold }}>Mô tả: </Text>
        {description}
      </Text>
      {InformationFullTime.list.map((item, index) => (
        <View
          key={index}
          style={{ display: "flex", flexDirection: "row", gap: 8 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>•</Text>
          <Text style={{ fontSize: 14, fontFamily: FONT.regular }}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default Information;
