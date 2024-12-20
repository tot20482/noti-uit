import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT, icons } from "../../../constants";

const btn = [
  {
    iconUrl: icons.name,
    label: "Họ và tên:",
    des: "Nguyễn Duy Tân",
  },
  {
    iconUrl: icons.mssv,
    label: "MSSV:",
    des: "22521304",
  },
  {
    iconUrl: icons.khoa,
    label: "Khoa:",
    des: "Khoa học máy tính",
  },
  {
    iconUrl: icons.lopsh,
    label: "Lớp sinh hoạt:",
    des: "KHMT2022.4",
  },
  {
    iconUrl: icons.email,
    label: "Email:",
    des: "22521304@gm.uit.edu.vn",
  },
];

const HoSoCaNhan = () => {
  return (
    <View
      style={{
        marginTop: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      {btn.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 4,
            justifyContent: "flex-start",
            alignItems: "center",
            width: "80%",
            padding: 12,
            backgroundColor: "#fff",
            borderRadius: 15,
          }}
        >
          <Image
            source={item.iconUrl}
            resizeMode="contain"
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
          <Text
            style={{
              fontSize: 14,
              fontFamily: FONT.bold,
              color: COLORS.primary,
            }}
          >
            {item.label}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: FONT.medium,
            }}
          >
            {item.des}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HoSoCaNhan;
