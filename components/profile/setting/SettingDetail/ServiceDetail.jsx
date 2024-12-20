import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONT } from "../../../../constants";

const ServiceDetail = () => {
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
            Giới thiệu
          </Text>
          <View
            style={{ padding: 20, backgroundColor: "#fff", borderRadius: 15 }}
          >
            <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
              Chào mừng bạn đến với Noti-UIT – nền tảng hỗ trợ sinh viên quản lý
              thông báo, lịch trình, và cơ hội việc làm. Khi sử dụng ứng dụng,
              bạn mặc nhiên đồng ý với những điều khoản dưới đây.
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
            Quyền và trách nhiệm của người dùng:
          </Text>
          <View
            style={{ padding: 20, backgroundColor: "#fff", borderRadius: 15 }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>•</Text>
              <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
                Không sử dụng ứng dụng để vi phạm pháp luật, lan truyền nội dung
                xấu, hoặc mạo danh người khác.
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>•</Text>
              <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
                Người dùng chịu trách nhiệm bảo mật thông tin tài khoản và không
                chia sẻ tài khoản với bên thứ ba.
              </Text>
            </View>
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
            Quyền và trách nhiệm của chúng tôi:
          </Text>
          <View
            style={{ padding: 20, backgroundColor: "#fff", borderRadius: 15 }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>•</Text>
              <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
                Cam kết cung cấp dịch vụ ổn định và liên tục, tuy nhiên chúng
                tôi không chịu trách nhiệm với các sự cố ngoài tầm kiểm soát
                (như mất kết nối, hệ thống bị gián đoạn).
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
              }}
            >
              <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>•</Text>
              <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
                Chúng tôi có quyền cập nhật, thay đổi nội dung và điều khoản sử
                dụng bất cứ lúc nào.
              </Text>
            </View>
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
            Giới hạn trách nhiệm
          </Text>
          <View
            style={{ padding: 20, backgroundColor: "#fff", borderRadius: 15 }}
          >
            <Text style={{ fontSize: 14, fontFamily: FONT.medium }}>
              Cam kết cung cấp dịch vụ ổn định và liên tục, tuy nhiên chúng tôi
              không chịu trách nhiệm với các sự cố ngoài tầm kiểm soát (như mất
              kết nối, hệ thống bị gián đoạn).
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ServiceDetail;
