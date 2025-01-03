import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONT, icons } from "../../../../constants";
import { useRouter } from "expo-router";
import { MockOutline1 } from "../../../../mocks/library/Study";

const DetailStudy = ({ mockData }) => {
  const router = useRouter();
  return (
    <View>
      <View
        style={{
          height: 120,
          width: "100%",
          backgroundColor: COLORS.primary,
        }}
      >
        <View
          style={{
            marginTop: 70,
            height: 40,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 20,
          }}
        >
          <View style={{ width: "20%" }}>
            <TouchableOpacity
              style={{ width: 32, height: 32 }}
              onPress={() => {
                router.back();
              }}
            >
              <Image
                source={icons.left}
                resizeMode="contain"
                style={{ width: 32, height: 32 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ width: "70%" }}>
            <Text
              style={{ fontSize: 24, fontFamily: FONT.bold, color: "#fff" }}
            >
              Nội dung chi tiết
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {mockData.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: 15,
              padding: 15,
              paddingBottom: 40,
              width: "95%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <View style={{ width: "20%" }}>
                <Image
                  source={item.imgUrl}
                  resizeMode="contain"
                  style={{ width: 90, height: 90 }}
                />
              </View>
              <View style={{ width: "70%" }}>
                <Text
                  style={{
                    fontFamily: FONT.semibold,
                    color: COLORS.primary,
                    fontSize: 16,
                  }}
                >
                  {item.title}
                </Text>
                <View
                  style={{ display: "flex", flexDirection: "row", gap: 20 }}
                >
                  <Text
                    style={{
                      fontFamily: FONT.regular,
                      fontSize: 14,
                      marginTop: 6,
                    }}
                  >
                    <Text style={{ fontFamily: FONT.bold }}>Size: </Text>
                    {item.size}
                  </Text>
                  <Text
                    style={{
                      fontFamily: FONT.regular,
                      fontSize: 14,
                      marginTop: 6,
                    }}
                  >
                    <Text style={{ fontFamily: FONT.bold }}>Format: </Text>
                    {item.format}
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: FONT.regular,
                    fontSize: 14,
                    marginTop: 6,
                  }}
                >
                  <Text style={{ fontFamily: FONT.bold }}>Năm xuất bản: </Text>
                  {item.year}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                paddingLeft: 8,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: FONT.regular,
                  fontSize: 14,
                  marginTop: 6,
                }}
              >
                <Text style={{ fontFamily: FONT.bold }}>Keywords: </Text>
                {item.keywords}
              </Text>
              <Text
                style={{
                  fontFamily: FONT.regular,
                  fontSize: 14,
                  marginTop: 6,
                }}
              >
                <Text style={{ fontFamily: FONT.bold }}>Pushlisher: </Text>
                {item.publisher}
              </Text>
              <View>
                <Text
                  style={{
                    fontFamily: FONT.bold,
                    fontSize: 14,
                    marginBottom: 8,
                  }}
                >
                  URI
                </Text>
                <View style={{ marginLeft: 8, display: "flex", gap: 6 }}>
                  {item.uri.map((item, index) => (
                    <Text
                      key={index}
                      style={{
                        fontFamily: FONT.regular,
                        fontSize: 14,
                      }}
                    >
                      {index + 1}. {item}
                    </Text>
                  ))}
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: FONT.bold,
                    fontSize: 14,
                    marginBottom: 8,
                  }}
                >
                  Relative references:
                </Text>
                {item.relative.length === 0 ? (
                  ""
                ) : (
                  <>
                    {item.relative.map((item, index) => (
                      <View key={index} style={{ marginLeft: 8 }}>
                        <Text
                          style={{
                            fontFamily: FONT.regular,
                            fontSize: 14,
                            marginBottom: 8,
                          }}
                        >
                          {index + 1}.{" "}
                          <Text style={{ fontFamily: FONT.bold }}>
                            {item.title}
                            {":"}
                            <Text style={{ fontFamily: FONT.regular }}>
                              {item.link}
                            </Text>
                          </Text>
                        </Text>
                      </View>
                    ))}
                  </>
                )}
                <View>
                  <Text
                    style={{
                      fontFamily: FONT.bold,
                      fontSize: 14,
                      marginBottom: 8,
                    }}
                  >
                    Authors:
                  </Text>
                  <View style={{ marginLeft: 8, display: "flex", gap: 6 }}>
                    {item.authors.map((item, index) => (
                      <Text
                        key={index}
                        style={{
                          fontFamily: FONT.regular,
                          fontSize: 14,
                        }}
                      >
                        {index + 1}. {item}
                      </Text>
                    ))}
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
        <View
          style={{
            width: "95%",
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              width: "40%",
              backgroundColor: "#fff",
              borderRadius: 10,
              borderColor: COLORS.primary,
              borderWidth: 2,
              padding: 12,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={icons.heart}
              resizeMode="contain"
              style={{ width: 24, height: 24 }}
            />
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: 18,
                color: COLORS.primary,
              }}
            >
              Lưu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              width: "56%",
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              padding: 12,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={icons.download}
              resizeMode="contain"
              style={{ width: 24, height: 24 }}
            />
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: 18,
                color: "#fff",
              }}
            >
              Tải tài liệu
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailStudy;
