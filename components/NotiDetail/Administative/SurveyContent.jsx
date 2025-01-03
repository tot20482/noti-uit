import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONT, icons, images } from "../../../constants";
import { useRouter } from "expo-router";

const SurveyContent = ({ title, createdAt, detail, note, contact }) => {
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
        }}
      >
        <ScrollView
          style={{
            backgroundColor: "#fff",
            marginTop: 20,
            width: "90%",
            borderRadius: 15,
            minHeight: 400,
            marginBottom: 50,
          }}
        >
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
                textAlign: "center",
              }}
            >
              Đăng ký tham gia khảo sát hỗ trợ đề tài "Nghiên cứu, đánh giá tổng
              thể về bình đẳng giới phục vụ phát triển bền vững"
            </Text>
            <Text
              style={{
                fontFamily: FONT.italic,
                fontSize: 12,
                color: "#6C757D",
                marginLeft: 4,
                marginTop: 4,
              }}
            >
              T6, 20/10/2023 - 16:03
            </Text>
            <View style={{ marginTop: 15, display: "flex", gap: 8 }}>
              <Text style={{ fontFamily: FONT.regular }}>
                Nhằm hỗ trợ đề tài{" "}
                <Text
                  style={{
                    fontFamily: FONT.bold,
                  }}
                >
                  "Nghiên cứu, đánh giá tổng thể về bình đẳng giới phục vụ phát
                  triển bền vững”
                </Text>
              </Text>
              <Text style={{ fontFamily: FONT.regular }}>
                Phòng Công tác Sinh viên thông báo sinh viên đăng ký tham gia hỗ
                trợ Đoàn khảo sát về đề tài Bình đẳng giới.
              </Text>
              <View style={{ marginLeft: 8, display: "flex", gap: 6 }}>
                <Text style={{ fontFamily: FONT.regular }}>
                  <Text>✿ </Text>
                  <Text style={{ fontFamily: FONT.bold }}>Số lượng: </Text>
                  100 sinh viên
                </Text>
                <Text style={{ fontFamily: FONT.bold, color: "red" }}>
                  <Text style={{ color: "#000" }}>✿ </Text>
                  <Text style={{ color: "#000" }}>Thời gian khảo sát: </Text>
                  10h30 - 11h00, thứ Ba, ngày 24/10/2023.
                </Text>
                <Text style={{ fontFamily: FONT.regular }}>
                  <Text>✿ </Text>
                  <Text style={{ fontFamily: FONT.bold }}>Địa điểm: </Text>
                  Phòng B1.14
                </Text>
                <Text style={{ fontFamily: FONT.regular }}>
                  <Text>✿ </Text>
                  <Text style={{ fontFamily: FONT.bold }}>
                    Quyền lợi tham gia khảo sát:{" "}
                  </Text>
                  hỗ trợ 50.000đ/sinh viên/khảo sát
                </Text>
                <Text>
                  <Text>✿ </Text>
                  <Text style={{ fontFamily: FONT.bold }}>
                    Sinh viên tham gia khảo sát vui lòng đăng ký theo link:{" "}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: FONT.medium,
                      color: "#2F6BFF",
                      textDecorationLine: "underline",
                      textAlign: "right",
                    }}
                  >
                    https://link.uit.edu.vn/geCUN
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SurveyContent;
