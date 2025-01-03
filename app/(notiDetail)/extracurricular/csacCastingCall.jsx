import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import CsacContent from "../../../components/NotiDetail/Extracurricular.jsx/CsacContent";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { images } from "../../../constants";

const fields = [
  "Ca hát và rap",
  "Nhạc cụ",
  "Truyền thông: Content Creator, Content Writer, Design and Video Editor, Photographer",
  "Sự kiện - Hậu cần: MC, Tổ chức, Hậu cần, Kỹ thuật",
];

const steps = [
  {
    id: 1,
    description: "Đọc yêu cầu casting",
    link: "TẠI ĐÂY",
  },
  {
    id: 2,
    description: "Điền form đăng ký casting",
    link: "TẠI ĐÂY",
  },
  {
    id: 3,
    description:
      "Chờ email từ CSAC và tham gia buổi casting trực tiếp (Sẽ có thông báo sau)",
  },
];

const CsacCastingCall = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <CsacContent
        image2={images.csacBlue}
        title="Csac casting call 2024: Treat or treat"
        createdAt="T2, 22/07/2024 - 09:45"
        time="30/10/2024 - 7/11/2024"
        object="Sinh viên trên địa bàn TP.HCM"
        fields={fields} // Truyền mảng fields
        steps={steps} // Truyền mảng steps
      />
    </>
  );
};

export default CsacCastingCall;
