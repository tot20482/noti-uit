import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONT, icons, images } from "../../../constants";
import { useRouter } from "expo-router";
import Button from "../Button";
import ButtonFavorited from "../ButtonFavorited";

const TheFoolContent = ({ title, createdAt, detail, note, contact }) => {
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
          minHeight: 800,
        }}
      >
        <ScrollView
          style={{
            backgroundColor: "#fff",
            marginTop: 20,
            width: "90%",
            borderRadius: 15,
            height: 730,
            marginBottom: 50,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Image
              source={images.thefool1}
              resizeMode="contain"
              style={{ borderRadius: 15 }}
            />
          </View>
          <View
            style={{
              padding: 20,
              paddingBottom: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: FONT.semibold,
                fontSize: 16,
                color: COLORS.primary,
                textTransform: "uppercase",
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
              }}
            >
              {createdAt}
            </Text>

            <View style={{ width: "100%", marginLeft: 30 }}>
              <Text
                style={{ fontFamily: FONT.bold, fontSize: 14, marginTop: 8 }}
              >
                Thông tin chi tiết về đêm nhạc:
              </Text>
              {detail.map((item) => (
                <View
                  key={item.id}
                  style={{
                    marginLeft: 10,
                    marginTop: 4,
                    width: "100%",
                  }}
                >
                  <View style={{ flexDirection: "row", gap: 4 }}>
                    <Text>✿</Text>
                    <Text>{item.title}:</Text>
                  </View>
                  <Text>{item.description}</Text>
                </View>
              ))}
              <Text
                style={{ fontFamily: FONT.bold, fontSize: 14, marginTop: 8 }}
              >
                Lưu ý:
              </Text>
              {note.map((item, index) => (
                <View
                  key={index}
                  style={{
                    marginLeft: 10,
                    marginTop: 4,
                    width: "90%",
                  }}
                >
                  <View style={{ flexDirection: "row", gap: 4 }}>
                    <Text>✿</Text>
                    <Text>{item}</Text>
                  </View>
                </View>
              ))}
              <Text
                style={{ fontFamily: FONT.bold, fontSize: 14, marginTop: 8 }}
              >
                Mọi thắc mắc xin liên hệ:
              </Text>
              {contact.map((item, index) => (
                <View
                  key={index}
                  style={{
                    marginLeft: 10,
                    marginTop: 4,
                    width: "90%",
                  }}
                >
                  <View style={{ flexDirection: "row", gap: 4 }}>
                    <Text>✿</Text>
                    <Text>{item}</Text>
                  </View>
                </View>
              ))}
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "95%",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <ButtonFavorited />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default TheFoolContent;
