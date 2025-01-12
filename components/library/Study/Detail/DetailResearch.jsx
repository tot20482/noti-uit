import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import React, { useState } from "react";
import { COLORS, FONT, icons } from "../../../../constants";
import { useRouter } from "expo-router";
import { MockOutline1 } from "../../../../mocks/library/Study";

const DetailResearch = ({ mockData }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const router = useRouter();
  return (
    <>
      <View>
        <View
          style={{
            height: 130,
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
                    <Text style={{ fontFamily: FONT.bold }}>
                      Năm xuất bản:{" "}
                    </Text>
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
                  {item.coAuthors.length === 0 ? (
                    ""
                  ) : (
                    <View>
                      <Text
                        style={{
                          fontFamily: FONT.bold,
                          fontSize: 14,
                          marginBottom: 8,
                          marginTop: 8,
                        }}
                      >
                        Co-Authors:
                      </Text>
                      <View style={{ marginLeft: 8, display: "flex", gap: 6 }}>
                        {item.coAuthors.map((item, index) => (
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
                  )}
                  {item.advisor.length === 0 ? (
                    ""
                  ) : (
                    <View>
                      <Text
                        style={{
                          fontFamily: FONT.bold,
                          fontSize: 14,
                          marginBottom: 8,
                          marginTop: 8,
                        }}
                      >
                        Advisors:
                      </Text>
                      <View style={{ marginLeft: 8, display: "flex", gap: 6 }}>
                        {item.advisor.map((item, index) => (
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
                  )}
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
              onPress={() => {
                setIsSaved(!isSaved);
              }}
            >
              {isSaved ? (
                <Image
                  source={icons.hearted}
                  resizeMode="contain"
                  style={{ width: 24, height: 24 }}
                />
              ) : (
                <Image
                  source={icons.heart}
                  resizeMode="contain"
                  style={{ width: 24, height: 24 }}
                />
              )}

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
              onPress={() => {
                setIsAdded(true);
                setTimeout(() => {
                  setIsAdded(false);
                }, 1500);
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
      {isAdded && (
        <Modal
          visible={isAdded}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setIsAdded(false)}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              height: "35%",
              paddingRight: 30,
            }}
          >
            <View
              style={{
                width: "70%",
                height: "15%",
                backgroundColor: "#4BB543",
                borderRadius: 12,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                justifyContent: "flex-start",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Image
                source={icons.tick}
                style={{ width: 28, height: 28 }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: FONT.medium,
                  color: "#fff",
                }}
              >
                Đã tải tài liệu thành công!
              </Text>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default DetailResearch;
