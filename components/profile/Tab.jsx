import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONT } from "../../constants";

const Tab = ({ type, title, isSelected, onClick = () => {} }) => {
  return (
    <>
      <TouchableOpacity onPress={onClick}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: FONT.medium,
            color: "#fff",
            borderWidth: 1,
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 12,
            paddingLeft: 12,
            borderRadius: 30,
            borderColor: isSelected === title ? "#fff" : COLORS.primary,
            backgroundColor:
              isSelected === title ? "rgba(255, 255, 255, 0.2)" : "transparent",
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Tab;
