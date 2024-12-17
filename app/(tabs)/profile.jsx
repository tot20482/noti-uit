import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONT, icons, images } from "./../../constants";

const btnTab = [
  {
    type: "Hồ sơ cá nhân",
    title: "Hồ sơ cá nhân",
  },
  {
    type: "Tin tuyển dụng đã lưu",
    title: "Tin tuyển dụng đã lưu",
  },
  {
    type: "Thông báo đã lưu",
    title: "Thông báo đã lưu",
  },
  {
    type: "Trung tâm hỗ trợ",
    title: "Trung tâm hỗ trợ",
  },
  {
    type: "Liên hệ chúng tôi",
    title: "Liên hệ chúng tôi",
  },
  {
    type: "Cài đặt",
    title: "Cài đặt",
  },
];

const Profile = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.primary,
          height: 243,
          paddingTop: 30,
        }}
      >
        <Image
          source={images.Avatar}
          resizeMode="contain"
          style={{ width: 112, height: 112, marginBottom: 10 }}
        />
        <Text style={{ fontFamily: FONT.bold, fontSize: 24, color: "#fff" }}>
          Nguyễn Duy Tân
        </Text>
        <Text
          style={{
            fontFamily: FONT.medium,
            fontSize: 15,
            color: "#fff",
          }}
        >
          22521304 - KHMT2022.4
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        {btnTab.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: 50,
              width: "80%",
              padding: 10,
              backgroundColor: "#fff",
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontFamily: FONT.semibold,
                fontSize: 16,
                color: COLORS.primary,
              }}
            >
              {item.title}
            </Text>
            <Image
              source={icons.right}
              resizeMode="contain"
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Profile;
