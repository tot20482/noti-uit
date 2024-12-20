import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import HeaderMore from "../../components/profile/JobFair/HeaderMore";
import NotiContent from "../../components/notification/NotiContent";

const mockSaveNotification = [
  {
    id: "1",
    title: "Đăng ký đề tài đồ án 1 và đồ án 2 học kỳ 1 năm học 2024 - 2025",
    description:
      "Khoa Công nghệ Phần mềm thông báo các sinh viên đăng ký học phần thực tập doanh nghiệp học kỳ 1 năm học 2024 - 2025 lớp SE501.P11 và SE501.P11.PMCL cập nhật thông tin thực tập doanh nghiệp vào các file sau...",
    createdAt: "T2, 22/07/2024 - 09:45",
  },
];

const SavedNotification = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <HeaderMore title="Thông báo đã lưu" type="thông báo" />
      <View
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        {mockSaveNotification.map((item) => (
          <NotiContent
            key={item.id}
            title={item.title}
            type={item.type}
            address={item.address}
            createdAt={item.createdAt}
            imgUrl={item.imgUrl}
            routerPath={item.routerPath}
          />
        ))}
      </View>
    </>
  );
};

export default SavedNotification;
