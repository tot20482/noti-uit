import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONT, icons } from "../../../constants";
import CustomToggle from "./CustomToggle";
import { useRouter } from "expo-router";

const SettingDetail = () => {
  const router = useRouter();
  return (
    <>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "90%", marginTop: 20, display: "flex", gap: 15 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: FONT.semibold,
              color: COLORS.primary,
            }}
          >
            Thiết bị:
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
              Thông báo
            </Text>
            <CustomToggle />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontFamily: FONT.semibold,
              color: COLORS.primary,
            }}
          >
            Khác:
          </Text>
          <View style={{ display: "flex", gap: 15 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 20,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
                Phiên bản
              </Text>
              <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
                V1.1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                router.push("/(profileDetail)/setting/service");
              }}
              style={{
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 20,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
                Điều khoản dịch vụ
              </Text>
              <TouchableOpacity>
                <Image
                  source={icons.right}
                  resizeMode="contain"
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                router.push("/(profileDetail)/setting/security");
              }}
              style={{
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 20,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
                Chính sách bảo mật
              </Text>
              <TouchableOpacity>
                <Image
                  source={icons.right}
                  resizeMode="contain"
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                router.push("/(profileDetail)/setting/aboutUs");
              }}
              style={{
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 20,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
                Về chúng tôi
              </Text>
              <TouchableOpacity>
                <Image
                  source={icons.right}
                  resizeMode="contain"
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default SettingDetail;
