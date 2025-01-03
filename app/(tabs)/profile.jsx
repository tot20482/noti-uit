import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { COLORS, FONT, icons, images } from "./../../constants";
import { useRouter } from "expo-router";
import { useState } from "react";
import DeleteJob from "../../components/profile/JobFair/DeleteJob";
import SignOut from "../../components/profile/signOut/SignOut";
const Profile = () => {
  const [isSignOut, setIsSignOut] = useState(false);
  const router = useRouter();
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.primary,
          height: 243,
          paddingTop: 30,
        }}
      >
        <Image
          source={images.Avatar}
          resizeMode="contain"
          style={{ width: 112, height: 112, marginBottom: 10 }}
        />
        <Text style={{ fontFamily: FONT.bold, fontSize: 24, color: "#fff" }}>
          Nguyễn Duy Tân
        </Text>
        <Text
          style={{
            fontFamily: FONT.medium,
            fontSize: 15,
            color: "#fff",
          }}
        >
          22521304 - KHMT2022.4
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => router.push("(profileDetail)/userProfile")}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
            width: "80%",
            padding: 10,
            backgroundColor: "#fff",
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontFamily: FONT.semibold,
              fontSize: 16,
              color: COLORS.primary,
            }}
          >
            Hồ sơ cá nhân
          </Text>
          <Image
            source={icons.right}
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("(profileDetail)/Saved")}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
            width: "80%",
            padding: 10,
            backgroundColor: "#fff",
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontFamily: FONT.semibold,
              fontSize: 16,
              color: COLORS.primary,
            }}
          >
            Đã lưu
          </Text>
          <Image
            source={icons.right}
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("(profileDetail)/helpCenter")}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
            width: "80%",
            padding: 10,
            backgroundColor: "#fff",
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontFamily: FONT.semibold,
              fontSize: 16,
              color: COLORS.primary,
            }}
          >
            Trung tâm hỗ trợ
          </Text>
          <Image
            source={icons.right}
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/(profileDetail)/contact");
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
            width: "80%",
            padding: 10,
            backgroundColor: "#fff",
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontFamily: FONT.semibold,
              fontSize: 16,
              color: COLORS.primary,
            }}
          >
            Liên hệ chúng tôi
          </Text>
          <Image
            source={icons.right}
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/(profileDetail)/setting");
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
            width: "80%",
            padding: 10,
            backgroundColor: "#fff",
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontFamily: FONT.semibold,
              fontSize: 16,
              color: COLORS.primary,
            }}
          >
            Cài đặt
          </Text>
          <Image
            source={icons.right}
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsSignOut(true);
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
            width: "80%",
            padding: 10,
            backgroundColor: "#fff",
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontFamily: FONT.semibold,
              fontSize: 16,
              color: COLORS.primary,
            }}
          >
            Đăng xuất
          </Text>
          <Image
            source={icons.right}
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
      <Modal
        visible={isSignOut}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsSignOut(false)}
      >
        <SignOut setIsSignOut={setIsSignOut} />
      </Modal>
    </View>
  );
};

export default Profile;
