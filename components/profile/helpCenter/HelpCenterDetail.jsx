import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { COLORS, FONT, icons } from "../../../constants";
import { useRouter } from "expo-router";

const askButton = [
  {
    title: "Cách thêm một thông báo vào lịch",
  },
  {
    title: "Cách lưu thông báo/tin tuyển dụng",
  },
  {
    title: "Cách lưu thông báo/tin tuyển dụng",
  },
];

const HelpCenterDetail = () => {
  const router = useRouter();
  return (
    <View style={{ width: "90%" }}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: FONT.semibold,
          color: COLORS.primary,
        }}
      >
        Tìm kiếm câu trả lời của bạn tại đây
      </Text>
      <View
        style={{
          borderRadius: 30,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: 6,
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 10,
          paddingLeft: 15,
        }}
      >
        <TouchableOpacity>
          <Image
            source={icons.searched}
            resizeMode="contain"
            style={{ width: 32, height: 32 }}
          />
        </TouchableOpacity>
        <TextInput placeholder="Tìm kiếm...." style={{ width: "80%" }} />
      </View>
      <Text
        style={{
          fontSize: 20,
          fontFamily: FONT.semibold,
          color: COLORS.primary,
          marginTop: 20,
        }}
      >
        Một số thắc mắc phổ biến:
      </Text>
      <View style={{ display: "flex", gap: 10, marginTop: 15 }}>
        {askButton.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              router.push("/(profileDetail)/helpCenter/guideDetail");
            }}
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
              backgroundColor: "#fff",
              borderRadius: 10,
            }}
          >
            <Text
              style={{ fontSize: 14, fontFamily: FONT.medium, marginLeft: 10 }}
            >
              {item.title}
            </Text>
            <Image source={icons.right} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        ))}
      </View>
      <Text
        style={{
          fontSize: 20,
          fontFamily: FONT.semibold,
          color: COLORS.primary,
          marginTop: 20,
        }}
      >
        Bạn cần liên hệ ?
      </Text>
      <TouchableOpacity
        onPress={() => {
          router.push("/(profileDetail)/contact");
        }}
        style={{
          backgroundColor: COLORS.primary,
          padding: 15,
          marginTop: 15,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: FONT.semibold,
            color: "#fff",
            textAlign: "center",
          }}
        >
          Liên hệ với chúng tôi
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelpCenterDetail;
