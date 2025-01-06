import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { COLORS, FONT } from "../../constants";
import SearchNoti from "../../components/notification/Header/SearchNoti";

const Search = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          height: 140,
          width: "100%",
          backgroundColor: COLORS.primary,
          display: "flex",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SearchNoti />
        </View>
      </View>
      <View style={{ width: "100%", padding: 20 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: FONT.semibold,
            color: COLORS.primary,
          }}
        >
          Tìm kiếm gần đây:{" "}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              paddingVertical: 8,
              paddingHorizontal: 20,
              borderRadius: 15,
            }}
          >
            <Text style={{ fontSize: 14, fontFamily: FONT.semibold }}>
              BHYT 2024
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              paddingVertical: 8,
              paddingHorizontal: 20,
              borderRadius: 15,
            }}
          >
            <Text style={{ fontSize: 14, fontFamily: FONT.semibold }}>
              Học phí HK2 2023-2024
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              paddingVertical: 8,
              paddingHorizontal: 20,
              borderRadius: 15,
            }}
          >
            <Text style={{ fontSize: 14, fontFamily: FONT.semibold }}>
              Traning Ban học tập CNPM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              paddingVertical: 8,
              paddingHorizontal: 20,
              borderRadius: 15,
            }}
          >
            <Text style={{ fontSize: 14, fontFamily: FONT.semibold }}>
              Lịch thi
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default Search;
