import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import TheFoolContent from "../../../components/NotiDetail/Extracurricular.jsx/TheFoolContent";

const detail = [
  {
    id: 1,
    title: "Link form đăng ký",
    description: "https://forms.gle?sH1rSdRsJmgNEF1U6",
  },
  {
    id: 2,
    title: "Thời gian",
    description: "17h30 - 21h00, thứ Sáu, ngày 10/05/2024",
  },
  {
    id: 3,
    title: "Địa điểm",
    description:
      "Hoàng Gia Coffee - 220 Đường Vành Đai ĐHQG, Bình An, Dĩ An, Bình Dương: https://maps.app.goo.gl/vdgFpjy148TgjHhU9",
  },
  {
    id: 4,
    title: "Giá vé",
    description: "59.000 VNĐ (đã bao gồm một phần nước uống)",
  },
  {
    id: 5,
    title: "Phương thức thanh toán",
    description: "VCB - Huynh Anh Dung - 9327150072",
  },
];

const note = [
  "Để đảm bảo chất lượng phục vụ cũng như mong muốn các bạn có thể thưởng thức đêm nhạc một cách trọn vẹn, chúng mình chỉ mở đăng ký với số lượng có hạn.",
  "Nhằm để kiểm soát số lượng và tạo thêm nhiều cơ hội mọi người có thể mua được vé, 1 email chỉ được phép ĐĂNG KÝ TỐI ĐA 5 VÉ.",
];

const contact = ["IG: @csac_uit", "Email: uitcsac@gmail.com"];

const TheFool = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <TheFoolContent
        title="CSAC Acoustic Show: The Fool"
        createdAt="T5, 08/05/2024 - 20:00"
        detail={detail}
        note={note}
        contact={contact}
      />
    </>
  );
};

export default TheFool;
