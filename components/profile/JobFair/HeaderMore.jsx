import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT, icons } from "../../../constants";
import JobFairMore from "./JobFairMore";

const HeaderMore = ({ title, type }) => {
  const [isMore, setIsMore] = useState(false);
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
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <TouchableOpacity
            style={{ width: 32, height: 32 }}
            onPress={() => {
              router.back();
            }}
          >
            <Image source={icons.left} />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontFamily: FONT.bold, color: "#fff" }}>
            {title}
          </Text>
          <TouchableOpacity
            style={{ width: 32, height: 32 }}
            onPress={() => {
              setIsMore(true);
            }}
          >
            <Image source={icons.more} />
          </TouchableOpacity>
        </View>
      </View>
      <JobFairMore isMore={isMore} setIsMore={setIsMore} type={type} />
    </>
  );
};

export default HeaderMore;
