import { Stack } from "expo-router";
import React, { useState } from "react";
import HeaderMore from "../../components/profile/JobFair/HeaderMore";
import JobContent from "../../components/job/JobContent";
import { images } from "../../constants";
import { View } from "react-native";

const mockSaveJob = [
  {
    id: 1,
    title: "Backend Developer",
    type: "Full-time",
    address:
      "Tầng 11, Tòa Taisei Square, 289 Khuất Duy Tiến, Phường Trung Hòa, Cầu Giấy",
    createdAt: "T2, 22/07/2024 - 09:45",
    imgUrl: images.company1,
    routerPath: "(jobDetail)/full-time/fullTime",
  },
];

const JobFair = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <HeaderMore title="Chi tiết tuyển dụng" type="tin" />
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
        {mockSaveJob.map((item) => (
          <JobContent
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

export default JobFair;
