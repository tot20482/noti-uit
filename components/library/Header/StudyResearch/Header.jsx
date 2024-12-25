import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, FONT, icons } from "../../../../constants";
import { router } from "expo-router";

const Header = ({ title }) => {
  return (
    <View
      style={{
        height: 170,
        width: "100%",
        backgroundColor: COLORS.primary,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          marginTop: 50,
          height: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 20,
          paddingRight: 20,
          marginBottom: 10,
        }}
      >
        <>
          <TouchableOpacity
            style={{ width: 32, height: 32 }}
            onPress={() => {
              router.back();
            }}
          >
            <Image source={icons.left} />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontFamily: FONT.bold, color: "#fff" }}>
            {title}
          </Text>
        </>

        <TouchableOpacity style={{ height: 32, width: 32 }}>
          <Image source={icons.filter} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "90%",
          backgroundColor: "#fff",
          marginLeft: 20,
          marginRight: 20,
          height: 42,
          borderRadius: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 4,
        }}
      >
        <TouchableOpacity style={{ width: "12%" }}>
          <Image source={icons.searched} />
        </TouchableOpacity>
        <TextInput style={{ width: "85%" }} />
      </View>
    </View>
  );
};

export default Header;
