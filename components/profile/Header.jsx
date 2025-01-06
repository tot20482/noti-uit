import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT, icons } from "../../constants";

const Header = ({ title }) => {
  const router = useRouter();
  return (
    <>
      <View
        style={{
          height: 130,
          width: "100%",
          backgroundColor: COLORS.primary,
        }}
      >
        <View
          style={{
            marginTop: 70,
            height: 40,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 20,
          }}
        >
          <View style={{ width: "20%" }}>
            <TouchableOpacity
              style={{ width: 32, height: 32 }}
              onPress={() => {
                router.back();
              }}
            >
              <Image source={icons.left} />
            </TouchableOpacity>
          </View>
          <View style={{ width: "70%" }}>
            <Text
              style={{ fontSize: 24, fontFamily: FONT.bold, color: "#fff" }}
            >
              {title}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;
