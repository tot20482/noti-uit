import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONT } from "../../../constants";

const SignOut = ({ setIsSignOut }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          width: "70%",
          height: "20%",
          borderRadius: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          padding: 25,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: FONT.semibold,
            color: COLORS.primary,
            textAlign: "center",
          }}
        >
          Đăng xuất khỏi tài khoản của bạn
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 15,
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIsSignOut(false);
            }}
            style={{
              width: "40%",
              padding: 8,
              borderColor: COLORS.primary,
              borderWidth: 2,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: FONT.regular,
                color: COLORS.primary,
                textAlign: "center",
              }}
            >
              Hủy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "40%",
              padding: 8,
              borderRadius: 8,
              backgroundColor: COLORS.primary,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: FONT.regular,
                color: "#fff",
                textAlign: "center",
              }}
            >
              Đăng xuất
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignOut;