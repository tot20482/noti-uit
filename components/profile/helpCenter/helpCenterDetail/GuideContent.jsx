import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONT } from "../../../../constants";
import { useRouter } from "expo-router";

const GuideContent = () => {
  const router = useRouter();
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ width: "90%", marginTop: 15, display: "flex", gap: 15 }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: FONT.semibold,
            color: COLORS.primary,
          }}
        >
          Cách thêm một thông báo vào lịch:
        </Text>
        <Text style={{ fontSize: 15, fontFamily: FONT.regular }}>
          Để nhận được nhắc nhở từ một hoạt động hoặc thông báo, người dùng cần
          truy cập vào chi tiết thông báo, phía cuối bài viết sẽ có nút “Thêm
          vào lịch”. Sau khi nhấn vào nút này, thông báo sẽ được tự động thêm
          vào lịch và sẽ nhắc nhở bạn trước 1 ngày khi hoạt động được diễn ra.
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: FONT.semibold,
            color: COLORS.primary,
          }}
        >
          Bạn không tìm thấy câu trả lời phù hợp?
        </Text>
        <TouchableOpacity
          onPress={() => {
            router.push("/(profileDetail)/contact");
          }}
          style={{
            backgroundColor: COLORS.primary,
            padding: 15,
            marginTop: 15,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: FONT.semibold,
              color: "#fff",
              textAlign: "center",
            }}
          >
            Liên hệ với chúng tôi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GuideContent;
