import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, FONT, icons } from "../../../constants";
import Tab from "./Tab";
import { headerTab } from "../../../mocks/notification";
import Filter from "./Filter";
import { useState } from "react";
import Search from "./SearchNoti";
import { useRouter } from "expo-router";

const Header = ({ isSelected, setIsSelected }) => {
  const router = useRouter();
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  return (
    <View
      style={{ height: 170, width: "100%", backgroundColor: COLORS.primary }}
    >
      <View
        style={{
          marginTop: 70,
          height: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <TouchableOpacity
          style={{ width: 32, height: 32 }}
          onPress={() => {
            router.push("/(notiDetail)/search");
          }}
        >
          <Image source={icons.search} />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontFamily: FONT.bold, color: "#fff" }}>
          Thông báo
        </Text>
        <TouchableOpacity
          onPress={() => {
            setFilterVisible(true);
          }}
          style={{ height: 32, width: 32 }}
        >
          <Image source={icons.filter} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 10,
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {headerTab.map((item, index) => (
          <Tab
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
      <Filter
        isFilterVisible={isFilterVisible}
        setFilterVisible={setFilterVisible}
      />
    </View>
  );
};

export default Header;
