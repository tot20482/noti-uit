import React, { useEffect, useRef } from "react";
import { View, Text, Modal, Animated, TouchableOpacity } from "react-native";
import { FONT } from "../../constants";

const Delete = ({ isDeleted, setIsDeleted }) => {
  const translateY = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    if (isDeleted) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      // Lướt xuống khi ẩn
      Animated.timing(translateY, {
        toValue: 200,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setIsDeleted(false));
    }
  }, [isDeleted]);

  return (
    <Modal
      visible={isDeleted}
      transparent={true}
      animationType="none" // Tắt animation mặc định
      onRequestClose={() => setIsDeleted(false)}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.2)", // Hiệu ứng nền mờ
        }}
      >
        <Animated.View
          style={{
            transform: [{ translateY }],
            width: "80%",
            height: 60,
            backgroundColor: "#495057",
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: FONT.medium,
              color: "#fff",
            }}
          >
            Đã xóa thông báo này
          </Text>
          <TouchableOpacity onPress={() => setIsDeleted(false)}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: FONT.medium,
                color: "#2F6BFF",
              }}
            >
              Hoàn tác
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default Delete;
