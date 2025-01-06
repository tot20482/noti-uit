import { View, Text, Modal, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS, FONT, icons } from "../../../constants";
import FiterJob from "./FiterJob";
import DeleteJob from "./DeleteJob";

const JobFairMore = ({ isMore, setIsMore, type }) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  return (
    <>
      <Modal
        visible={isMore}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsMore(false)}
      >
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
              height: 250,
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
                Chỉnh sửa {type} đã lưu
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#fff",
                height: "70%",
                paddingLeft: 30,
                paddingRight: 30,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setIsFiltered(true);
                  setIsMore(false);
                }}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "40%",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ADB5BD",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Image
                    source={icons.blackFilter}
                    resizeMode="contain"
                    style={{ height: 24, width: 24 }}
                  />
                  <Text style={{ fontSize: 16, fontFamily: FONT.regular }}>
                    Bộ lọc hiển thị
                  </Text>
                </View>
                <Image
                  source={icons.right}
                  resizeMode="contain"
                  style={{ height: 24, width: 24 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setIsDeleted(true);
                  setIsMore(false);
                }}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  height: "40%",
                }}
              >
                <Image
                  source={icons.deleteIcon}
                  resizeMode="contain"
                  style={{ height: 24, width: 24 }}
                />
                <Text style={{ fontSize: 16, fontFamily: FONT.regular }}>
                  Xóa tất cả {type} đã lưu
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        visible={isFiltered}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsFiltered(false)}
      >
        <FiterJob setIsFiltered={setIsFiltered} />
      </Modal>
      <Modal
        visible={isDeleted}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsDeleted(false)}
      >
        <DeleteJob setIsDeleted={setIsDeleted} type={type} />
      </Modal>
    </>
  );
};

export default JobFairMore;
