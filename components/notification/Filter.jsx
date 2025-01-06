import { View, Text, Modal, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { FONT, COLORS, icons } from "../../constants";
import Delete from "./Delete";

const Filter = ({ isFilterVisible, setFilterVisible }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  return (
    <>
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
              height: 200,
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
                  fontFamily: FONT.medium,
                  color: "#fff",
                }}
              >
                Tùy chọn
              </Text>
            </View>
            <View
              style={{
                height: "75%",
                backgroundColor: "#fff",
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => setFilterVisible(false)}
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  borderBottomWidth: 1,
                  borderColor: "#B3B3B3",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: FONT.regular,
                    marginLeft: 50,
                  }}
                >
                  Đánh dấu là đã đọc
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setFilterVisible(false);
                  setIsDeleted(true);
                  setTimeout(() => {
                    setIsDeleted(false);
                  }, 3000);
                }}
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: FONT.regular,
                    marginLeft: 50,
                  }}
                >
                  Xóa thông báo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {isDeleted && (
        <Delete setIsDeleted={setIsDeleted} isDeleted={isDeleted} />
      )}
    </>
  );
};

export default Filter;
