import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONT } from "../../../../constants";

const AboutUsDetail = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ width: "90%", marginTop: 20, display: "flex", gap: 15 }}>
        <View style={{ display: "flex", gap: 15 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: FONT.semibold,
              color: COLORS.primary,
            }}
          >
            Về chúng tôi:
          </Text>
          <View
            style={{ padding: 20, backgroundColor: "#fff", borderRadius: 15 }}
          >
            <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
              Noti-UIT là một nền tảng được thiết kế dành riêng cho sinh viên,
              giúp bạn quản lý thông báo học tập, tham gia các hoạt động ngoại
              khóa, và tiếp cận các cơ hội việc làm một cách nhanh chóng, tiện
              lợi. Chúng tôi mong muốn trở thành người bạn đồng hành đáng tin
              cậy, hỗ trợ bạn trong suốt hành trình học tập và phát triển sự
              nghiệp. Sứ mệnh của chúng tôi là mang đến một giải pháp toàn diện,
              tiết kiệm thời gian và nâng cao hiệu quả quản lý thông tin cho
              sinh viên. Đội ngũ phát triển của chúng tôi luôn lắng nghe phản
              hồi từ người dùng để không ngừng cải tiến và mang lại trải nghiệm
              tốt nhất.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutUsDetail;
