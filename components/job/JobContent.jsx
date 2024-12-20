import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { COLORS, FONT } from "../../constants";
import { useRouter } from "expo-router";

const JobContent = ({
  title,
  type,
  address,
  createdAt,
  imgUrl,
  routerPath,
}) => {
  const router = useRouter();
  return (
    <>
      <TouchableOpacity
        onPress={() => router.push(routerPath)}
        style={{
          width: "95%",
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
            minHeight: 110,
            gap: 10,
          }}
        >
          <View style={{ width: "25%" }}>
            <Image
              source={imgUrl}
              style={{ width: 60, height: 60, marginLeft: 15, marginTop: 15 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ width: "73%" }}>
            <Text
              style={{
                fontFamily: FONT.semibold,
                fontSize: 16,
                color: COLORS.primary,
              }}
            >
              {title}
              <Text
                style={{
                  fontFamily: FONT.italic,
                  fontSize: 14,
                  color: "#6C757D",
                }}
              >
                ({type})
              </Text>
            </Text>
            <Text
              style={{
                color: "#6C757D",
                fontFamily: FONT.italic,
                fontSize: 13,
              }}
            >
              {createdAt}
            </Text>
            <Text style={{ fontFamily: FONT.regular, fontSize: 14 }}>
              <Text style={{ fontFamily: FONT.bold, fontSize: 14 }}>
                Địa chỉ:{" "}
              </Text>
              {address}
            </Text>
          </View>
        </View>
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
    </>
  );
};

export default JobContent;
