import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { FONT, icons, COLORS } from "../../../constants";
import Button from "../../../components/NotiDetail/Button";

const Study = () => {
  const { title, classId, room, time, createdAt, description } =
    useLocalSearchParams();
  const router = useRouter();
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{ width: "100%", height: 120, backgroundColor: COLORS.primary }}
      >
        <View
          style={{
            marginTop: 70,
            height: 40,
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 60,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <Image
              source={icons.left}
              style={{ height: 32, width: 32 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontFamily: FONT.bold, color: "#fff" }}>
            Chi tiết thông báo
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            marginTop: 20,
            width: "90%",
            borderRadius: 15,
            minHeight: 200,
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 25,
            paddingRight: 25,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: FONT.bold,
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
          <Text style={{ fontFamily: FONT.regular }}>
            <Text style={{ fontFamily: FONT.bold }}>Mã lớp: </Text>
            {classId}
          </Text>
          <Text style={{ fontFamily: FONT.semibold, color: "red" }}>
            <Text style={{ fontFamily: FONT.bold, color: "#000" }}>
              Phòng:{" "}
            </Text>
            {room}
          </Text>
          <Text style={{ fontFamily: FONT.semibold, color: "red" }}>
            <Text style={{ fontFamily: FONT.bold, color: "#000" }}>
              Thời gian:{" "}
            </Text>
            {time}
          </Text>
          <Text style={{ fontFamily: FONT.regular }}>
            <Text style={{ fontFamily: FONT.bold }}>Mô tả: </Text>
            {description}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "85%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Button />
        </View>
      </View>
    </>
  );
};

export default Study;
