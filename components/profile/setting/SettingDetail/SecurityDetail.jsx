import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONT } from "../../../../constants";

const SecurityDetail = () => {
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
            Thu thập thông tin:
          </Text>
          <View
            style={{ padding: 20, backgroundColor: "#fff", borderRadius: 15 }}
          >
            <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
              Chúng tôi thu thập các thông tin cơ bản như tên, email, lịch sử
              dụng nhằm quản lý tài khoản và cung cấp dịch vụ tối ưu.
            </Text>
          </View>
        </View>
        <View style={{ display: "flex", gap: 15, marginTop: 15 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: FONT.semibold,
              color: COLORS.primary,
            }}
          >
            Lưu trữ và bảo mật:
          </Text>
          <View
            style={{ padding: 20, backgroundColor: "#fff", borderRadius: 15 }}
          >
            <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
              Thông tin cá nhân được mã hóa và lưu trữ an toàn. Chỉ nhân viên
              hoặc đối tác được ủy quyền mới có quyền truy cập thông tin này.
            </Text>
          </View>
        </View>
        <View style={{ display: "flex", gap: 15, marginTop: 15 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: FONT.semibold,
              color: COLORS.primary,
            }}
          >
            Chia sẻ thông tin:
          </Text>
          <View
            style={{ padding: 20, backgroundColor: "#fff", borderRadius: 15 }}
          >
            <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
              Chúng tôi cam kết không bán hoặc chia sẻ dữ liệu cá nhân nếu không
              có sự đồng ý từ người dùng. Trường hợp chia sẻ bao gồm: hợp tác
              với nhà tuyển dụng, hoặc theo yêu cầu từ cơ quan pháp luật.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SecurityDetail;
