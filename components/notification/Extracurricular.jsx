import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { COLORS, FONT, images } from "../../constants";

const Extracurricular = ({
  title,
  image1,
  address,
  time,
  createdAt,
  routerPath,
}) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: routerPath,
        });
      }}
      style={{
        width: "90%",
        backgroundColor: "#fff",
        flexDirection: "column",
        gap: 4,
        borderRadius: 20,
        padding: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          width: "100%",
        }}
      >
        <View style={{ width: "20%" }}>
          <Image
            source={image1}
            resizeMode="contain"
            style={{ width: 80, height: 80, borderRadius: 8 }}
          />
        </View>
        <View style={{ width: "77%" }}>
          <Text
            style={{
              fontFamily: FONT.semibold,
              fontSize: 16,
              color: COLORS.primary,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: FONT.regular,
              fontSize: 12,
            }}
          >
            <Text style={{ fontFamily: FONT.bold }}>Địa chỉ: </Text>
            {address}
          </Text>
          <Text
            style={{
              fontFamily: FONT.regular,
              fontSize: 12,
            }}
          >
            <Text style={{ fontFamily: FONT.bold }}>Thời gian: </Text>
            {time}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: FONT.italic,
            fontSize: 12,
            color: "#6C757D",
          }}
        >
          {createdAt}
        </Text>
        <Text
          style={{
            fontFamily: FONT.italic,
            fontSize: 12,
            textDecorationLine: "underline",
            color: "#2F6BFF",
          }}
        >
          Chi tiết
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Extracurricular;
