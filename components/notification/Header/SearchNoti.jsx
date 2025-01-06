import {
  View,
  Text,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, icons } from "../../../constants";
import { useRouter } from "expo-router";

const SearchNoti = ({ setIsSearched }) => {
  const router = useRouter();
  return (
    <>
      <View
        style={{
          width: "100%",
          paddingLeft: 20,
          display: "flex",
          gap: 4,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ width: "10%" }}>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            style={{ width: 32, height: 32 }}
          >
            <Image
              source={icons.left}
              resizeMode="contain"
              style={{ width: 32, height: 32 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 45,
            width: "80%",
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 30,
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#F5F5F5",
              height: "100%",
              paddingLeft: 15,
              paddingRight: 15,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              flexDirection: "column",
              justifyContent: "center",
            }}
            onPress={() => {
              setIsSearched(false);
            }}
          >
            <Image
              source={icons.searched}
              style={{
                tintColor: "#6C757D",
                height: 28,
                width: 28,
              }}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Tìm kiếm thông báo"
            style={{ width: "70%", paddingTop: 4, paddingBottom: 4 }}
          />
        </View>
      </View>
    </>
  );
};

export default SearchNoti;
