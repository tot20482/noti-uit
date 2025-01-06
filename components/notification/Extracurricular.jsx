import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { COLORS, FONT, icons, images } from "../../constants";
import Filter from "./Filter";

const Extracurricular = ({
  title,
  image1,
  address,
  time,
  createdAt,
  routerPath,
}) => {
  const [isFilterVisible, setFilterVisible] = useState(false);

  const router = useRouter();
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: routerPath,
          });
        }}
        style={{
          width: "90%",
          backgroundColor: "#fff",
          flexDirection: "column",
          gap: 4,
          borderRadius: 20,
          padding: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            width: "100%",
          }}
        >
          <View style={{ width: "20%" }}>
            <Image
              source={image1}
              resizeMode="contain"
              style={{ width: 80, height: 80, borderRadius: 8 }}
            />
          </View>
          <View style={{ width: "77%" }}>
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <View style={{ width: "85%" }}>
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
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: 12,
              }}
            >
              <Text style={{ fontFamily: FONT.bold }}>Địa chỉ: </Text>
              {address}
            </Text>
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: 12,
              }}
            >
              <Text style={{ fontFamily: FONT.bold }}>Thời gian: </Text>
              {time}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: FONT.italic,
              fontSize: 12,
              color: "#6C757D",
            }}
          >
            {createdAt}
          </Text>
          <Text
            style={{
              fontFamily: FONT.italic,
              fontSize: 12,
              textDecorationLine: "underline",
              color: "#2F6BFF",
            }}
          >
            Chi tiết
          </Text>
        </View>
      </TouchableOpacity>
      <Filter
        isFilterVisible={isFilterVisible}
        setFilterVisible={setFilterVisible}
      />
    </>
  );
};

export default Extracurricular;
