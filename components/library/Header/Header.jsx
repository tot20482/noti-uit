import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { COLORS, FONT, icons } from "../../../constants";
import LibTab from "./LibTab";
import { LibraryTab } from "../../../mocks/library";

const Header = ({ isSelected, setIsSelected }) => {
  return (
    <View
      style={{ height: 170, width: "100%", backgroundColor: COLORS.primary }}
    >
      <View
        style={{
          marginTop: 70,
          height: 40,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: FONT.bold,
            color: "#fff",
            textAlign: "center",
          }}
        >
          Thư viện điện tử
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {LibraryTab.map((item, index) => (
          <LibTab
            key={index}
            type={item.type}
            title={item.title}
            isSelected={isSelected}
            onClick={() => {
              setIsSelected(item.title);
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Header;
