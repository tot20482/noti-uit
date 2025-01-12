import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import React, { useState } from "react";
import { COLORS, FONT, icons } from "../../constants";

const ButtonFavorited = () => {
  const [isHeart, setIsHeart] = useState(true);
  const [isAdded, setIsAdded] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={{
          width: "35%",
          padding: 12,
          borderWidth: 3,
          borderColor: COLORS.primary,
          borderRadius: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          gap: 8,
        }}
        onPress={() => {
          setIsHeart(!isHeart);
        }}
      >
        {isHeart ? (
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
            fontSize: 16,
            fontFamily: FONT.medium,
            color: COLORS.primary,
          }}
        >
          Lưu tin
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "62%",
          padding: 12,
          borderWidth: 3,
          borderColor: COLORS.primary,
          borderRadius: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.primary,
          gap: 8,
        }}
        onPress={() => {
          setIsAdded(true);
          setTimeout(() => {
            setIsAdded(false);
          }, 1500);
        }}
      >
        <Image source={icons.add} />
        <Text style={{ fontFamily: FONT.medium, fontSize: 16, color: "#fff" }}>
          Thêm vào lịch
        </Text>
      </TouchableOpacity>
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
                Đã thêm vào lịch thành công!
              </Text>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default ButtonFavorited;
