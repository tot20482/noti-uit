import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONT, icons } from "../../../constants";

const FiterJob = ({ setIsFiltered }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 280,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            height: "30%",
            backgroundColor: COLORS.primary,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: FONT.semibold,
              color: "#fff",
            }}
          >
            Bộ lọc tìm kiếm
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            height: "70%",
          }}
        >
          <View
            style={{
              marginLeft: 20,
              marginRight: 20,
              paddingTop: 15,
              paddingBottom: 15,
              borderBottomColor: "#B3B3B3",
              borderBottomWidth: 1,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FONT.regular,
                  marginBottom: 10,
                }}
              >
                Thời gian
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "47%",
                  borderColor: COLORS.primary,
                  borderWidth: 2,
                  padding: 8,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontFamily: FONT.regular,
                    color: COLORS.primary,
                  }}
                >
                  Mới nhất
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "47%",
                  padding: 8,
                  backgroundColor: "#F5F5F5",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontFamily: FONT.regular,
                  }}
                >
                  Cũ nhất
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginTop: 15,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 25,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: "40%",
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: 8,
                padding: 12,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: COLORS.primary,
                  fontFamily: FONT.regular,
                  fontSize: 16,
                }}
              >
                Thiết lập lại
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsFiltered(false);
              }}
              style={{
                width: "40%",
                backgroundColor: COLORS.primary,
                borderRadius: 8,
                padding: 12,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontFamily: FONT.regular,
                  fontSize: 16,
                }}
              >
                Áp dụng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FiterJob;
