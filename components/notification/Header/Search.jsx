import {
  View,
  Text,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, icons } from "../../../constants";

const Search = ({ setIsSearched }) => {
  return (
    <View
      style={{
        height: 40,
        width: "85%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        gap: 10,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#F5F5F5",
          height: "100%",
          paddingLeft: 8,
          paddingRight: 8,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          flexDirection: "column",
          justifyContent: "center",
        }}
        onPress={() => {
          setIsSearched(false);
        }}
      >
        <Image
          source={icons.searched}
          style={{
            tintColor: "#6C757D",
            height: 28,
            width: 28,
          }}
        />
      </TouchableOpacity>
      <TextInput placeholder="Tìm kiếm thông báo" style={{ width: "70%" }} />
    </View>
  );
};

export default Search;
