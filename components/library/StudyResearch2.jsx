import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONT } from "../../constants";
import { Link, useRouter } from "expo-router";

const StudyResearch2 = ({
  imgUrl,
  title,
  Keywords,
  Pushlisher,
  publishYear,
  routerPath,
}) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={{
        minHeight: 145,
        width: "90%",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 15,
      }}
      onPress={() => {
        router.push(routerPath);
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <View style={{ width: "20%" }}>
          <Image
            source={imgUrl}
            resizeMode="contain"
            style={{ width: 70, height: 70 }}
          />
        </View>
        <View style={{ width: "77%", display: "flex", gap: 2 }}>
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
            <Text style={{ fontFamily: FONT.bold }}>Keywords: </Text>
            {Keywords}
          </Text>
          <Text style={{ fontSize: 14 }}>
            <Text style={{ fontFamily: FONT.bold }}>Pushlisher: </Text>
            {Pushlisher}
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

export default StudyResearch2;
