import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { COLORS, FONT } from "../../../constants";

const OutlineContent = ({
  imgUrl,
  title,
  topic,
  subject,
  publishYear,
  routerPath,
}) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(routerPath);
      }}
      style={{
        minHeight: 115,
        width: "90%",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <View style={{ width: "20%" }}>
          <Image
            source={imgUrl}
            resizeMode="contain"
            style={{ width: 70, height: 70 }}
          />
        </View>
        <View style={{ width: "75%", display: "flex", gap: 2 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: FONT.semibold,
              color: COLORS.primary,
            }}
          >
            {title}
          </Text>
          <Text style={{ fontSize: 14 }}>
            <Text style={{ fontFamily: FONT.bold }}>Chủ đề: </Text>
            {topic}
          </Text>
          <Text style={{ fontSize: 14 }}>
            <Text style={{ fontFamily: FONT.bold }}>Mã môn: </Text>
            {subject}
          </Text>
          <Text style={{ fontSize: 14 }}>
            <Text style={{ fontFamily: FONT.bold }}>Năm xuất bản: </Text>
            {publishYear}
          </Text>
        </View>
      </View>
      <Link
        href="#"
        style={{
          textAlign: "right",
          color: "#2F6BFF",
          textDecorationLine: "underline",
          fontFamily: FONT.italic,
        }}
      >
        Chi tiết
      </Link>
    </TouchableOpacity>
  );
};

export default OutlineContent;
