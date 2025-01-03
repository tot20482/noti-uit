import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { COLORS, FONT } from "../../constants";

const Adminstrative = ({
  title,
  time,
  address,
  desc,
  link,
  createdAt,
  routerPath,
}) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(routerPath);
      }}
      style={{
        width: "90%",
        backgroundColor: "#fff",
        flexDirection: "column",
        gap: 4,
        borderRadius: 20,
        paddingBottom: 20,
        paddingTop: 20,
        paddingRight: 15,
        paddingLeft: 20,
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
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontFamily: FONT.semibold, color: "red" }}>
          <Text style={{ fontFamily: FONT.bold, color: "#000" }}>
            Thời gian:{" "}
          </Text>
          {time}
        </Text>
      </View>
      {address === "" ? (
        ""
      ) : (
        <Text style={{ fontFamily: FONT.regular }}>
          <Text style={{ fontFamily: FONT.bold }}>Địa chỉ: </Text>
          {address}
        </Text>
      )}
      {desc === "" ? (
        ""
      ) : (
        <Text>
          <Text>{desc}: </Text>
          <Text
            style={{
              fontFamily: FONT.medium,
              color: "#2F6BFF",
              textDecorationLine: "underline",
            }}
          >
            {link}
          </Text>
        </Text>
      )}
      <Link
        href="#"
        style={{
          fontSize: 12,
          fontFamily: FONT.medium,
          color: "#2F6BFF",
          textDecorationLine: "underline",
          textAlign: "right",
        }}
      >
        Chi tiết
      </Link>
    </TouchableOpacity>
  );
};

export default Adminstrative;
