import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONT, icons } from "../../../constants";
import { useRouter } from "expo-router";
import ButtonFavorited from "../ButtonFavorited";

const CsacContent = ({
  image2,
  title,
  createdAt,
  time,
  object,
  fields,
  steps,
}) => {
  const router = useRouter();
  return (
    <>
      <View
        style={{ width: "100%", height: 120, backgroundColor: COLORS.primary }}
      >
        <View
          style={{
            marginTop: 70,
            height: 40,
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 60,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <Image
              source={icons.left}
              style={{ height: 32, width: 32 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontFamily: FONT.bold, color: "#fff" }}>
            Chi tiết thông báo
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            marginTop: 20,
            width: "90%",
            borderRadius: 15,
          }}
        >
          <Image
            source={image2}
            resizeMode="contain"
            style={{ width: "100%", marginTop: 15 }}
          />
          <View
            style={{
              padding: 20,
              paddingBottom: 60,
              width: "90%",
              marginLeft: 15,
            }}
          >
            <Text
              style={{
                fontFamily: FONT.semibold,
                fontSize: 16,
                color: COLORS.primary,
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                fontFamily: FONT.italic,
                fontSize: 12,
                color: "#6C757D",
                marginLeft: 4,
                textAlign: "center",
              }}
            >
              {createdAt}
            </Text>
            <Text
              style={{ fontFamily: FONT.regular, fontSize: 14, marginTop: 10 }}
            >
              <Text style={{ fontFamily: FONT.bold }}>Thời gian: </Text>
              {time}
            </Text>
            <Text
              style={{ fontFamily: FONT.regular, fontSize: 14, marginTop: 8 }}
            >
              <Text style={{ fontFamily: FONT.bold }}>Đối tượng: </Text>
              {object}
            </Text>

            <View>
              <Text
                style={{ fontFamily: FONT.bold, fontSize: 14, marginTop: 8 }}
              >
                Các lĩnh vực:
              </Text>
              {fields.map((item, index) => (
                <Text key={index} style={{ marginLeft: 10, marginTop: 4 }}>
                  {index + 1}. {item}
                </Text>
              ))}
            </View>
            <View>
              <Text
                style={{ fontFamily: FONT.bold, fontSize: 14, marginTop: 8 }}
              >
                Các bước thực hiện:
              </Text>
              {steps.map((item, index) => (
                <View
                  key={index}
                  style={{ display: "flex", flexDirection: "row", gap: 2 }}
                >
                  <Text style={{ fontSize: 14, fontFamily: FONT.regular }}>
                    {index + 1}.
                  </Text>
                  <Text style={{ fontSize: 14, fontFamily: FONT.regular }}>
                    {item.description}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: FONT.italic,
                      textTransform: "uppercase",
                      color: "#2F6BFF",
                      textDecorationLine: "underline",
                    }}
                  >
                    {item.link}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "85%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <ButtonFavorited />
        </View>
      </View>
    </>
  );
};

export default CsacContent;
