import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import React, { useState } from "react";
import { COLORS, FONT, icons } from "../../../constants";

const btnContact = [
  {
    iconUrL: icons.email,
    label: "Email: ",
    des: "noti-uit@gmail.com",
  },
  {
    iconUrL: icons.phone,
    label: "SĐT: ",
    des: "1800-1980",
  },
];

const ContactUs = () => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "90%", marginTop: 35, display: "flex", gap: 15 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: FONT.semibold,
              color: COLORS.primary,
            }}
          >
            Cách kênh liên hệ:
          </Text>
          <View style={{ display: "flex", gap: 15 }}>
            {btnContact.map((item, index) => (
              <View
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  padding: 12,
                  borderRadius: 15,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 15,
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={item.iconUrL}
                    style={{ width: 24, height: 24 }}
                    resizeMode="contain"
                  />
                  <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
                    <Text
                      style={{ color: COLORS.primary, fontFamily: FONT.bold }}
                    >
                      {item.label}
                    </Text>
                    {item.des}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setIsCopied(true);
                    setTimeout(() => {
                      setIsCopied(false);
                    }, 1000);
                  }}
                  style={{ width: 32, height: 32 }}
                >
                  <Image
                    source={icons.copy}
                    style={{ width: 24, height: 24 }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </View>
      {isCopied && (
        <Modal
          visible={isCopied}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setIsCopied(false)}
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
                style={{ fontSize: 16, fontFamily: FONT.medium, color: "#fff" }}
              >
                Đã sao chép thành công
              </Text>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default ContactUs;
