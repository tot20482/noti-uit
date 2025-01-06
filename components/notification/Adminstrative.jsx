import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import { COLORS, FONT, icons } from "../../constants";
import Filter from "./Filter";

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
  const [isFilterVisible, setFilterVisible] = useState(false);

  return (
    <>
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
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <View style={{ width: "82%" }}>
            <Text
              style={{
                fontFamily: FONT.semibold,
                fontSize: 16,
                color: COLORS.primary,
              }}
            >
              {title}
            </Text>
          </View>
          <View style={{ width: "13%" }}>
            <TouchableOpacity
              onPress={() => {
                setFilterVisible(true);
              }}
            >
              <Image
                source={icons.moreGray}
                resizeMode="contain"
                style={{ width: 23, height: 23 }}
              />
            </TouchableOpacity>
          </View>
        </View>
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
      <Filter
        isFilterVisible={isFilterVisible}
        setFilterVisible={setFilterVisible}
      />
    </>
  );
};

export default Adminstrative;
