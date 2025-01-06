import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
import { COLORS, FONT, icons } from "../../../constants";
import { CalendarTab } from "../../../mocks/calendar";
import CalTab from "./CalTab";

const Header = () => {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  return (
    <View
      style={{ height: 130, width: "100%", backgroundColor: COLORS.primary }}
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
        {isSearched ? (
          <Search isSearched={isSearched} setIsSearched={setIsSearched} />
        ) : (
          <>
            <TouchableOpacity
              style={{ width: 32, height: 32 }}
              onPress={() => {
                setIsSearched(!isSearched);
              }}
            >
              <Image source={icons.search} />
            </TouchableOpacity>
            <Text
              style={{ fontSize: 24, fontFamily: FONT.bold, color: "#fff" }}
            >
              Lịch trình
            </Text>
          </>
        )}
        <TouchableOpacity
          onPress={() => {
            setFilterVisible(true);
          }}
          style={{ height: 32, width: 32 }}
        >
          <Image source={icons.filter} />
        </TouchableOpacity>
      </View>
      <Filter
        isFilterVisible={isFilterVisible}
        setFilterVisible={setFilterVisible}
      />
    </View>
  );
};

export default Header;
