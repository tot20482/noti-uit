import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONT, icons } from "../../constants";
import StudyResearch from "./StudyResearch";
import { useRouter } from "expo-router";

const LibraryContent = ({ title, routerPath, document1 }) => {
  const router = useRouter();
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: FONT.bold,
              color: COLORS.primary,
            }}
          >
            {title}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            router.push(routerPath);
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONT.regular,
              color: COLORS.primary,
            }}
          >
            Xem tất cả
          </Text>
          <Image
            source={icons.right}
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 15 }}>
        {document1.map((item, index) => (
          <StudyResearch
            key={index}
            imgUrl={item.imgUrl}
            title={item.title}
            Keywords={item.Keywords}
            Pushlisher={item.Pushlisher}
            publishYear={item.publishYear}
            routerPath={item.routerPath}
          />
        ))}
      </View>
    </View>
  );
};

export default LibraryContent;
