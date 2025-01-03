import { View, Text, Modal, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONT, icons } from "../../constants";

const Filter = ({ isFilterVisible, setFilterVisible }) => {
  return (
    <Modal visible={isFilterVisible} transparent={true} animationType="fade">
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
            height: 300,
            flexDirection: "column",
          }}
        >
          <View
            style={{
              height: "15%",
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
                fontFamily: FONT.medium,
                color: "#fff",
              }}
            >
              Bộ lọc tìm kiếm
            </Text>
          </View>
          <View
            style={{
              height: "85%",
              backgroundColor: "#fff",
              paddingLeft: 30,
              paddingRight: 30,
            }}
          >
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                borderBottomWidth: 1,
                borderColor: "#B3B3B3",
              }}
            >
              <Text style={{ fontSize: 16, fontFamily: FONT.regular }}>
                Thời gian
              </Text>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "50%",
                    backgroundColor: "#F5F5F5",
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: FONT.regular,
                      textAlign: "center",
                    }}
                  >
                    Mới nhất
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "45%",
                    backgroundColor: "#F5F5F5",
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: FONT.regular,
                      textAlign: "center",
                    }}
                  >
                    Cũ nhất
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "45%",
                  backgroundColor: COLORS.primary,
                  paddingTop: 14,
                  paddingBottom: 14,
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: 16,
                    fontFamily: FONT.regular,
                  }}
                >
                  Thiết lập lại
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "45%",
                  backgroundColor: COLORS.primary,
                  paddingTop: 14,
                  paddingBottom: 14,
                  borderRadius: 12,
                }}
                onPress={() => setFilterVisible(false)}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: 16,
                    fontFamily: FONT.regular,
                  }}
                >
                  Áp dụng
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Filter;
