import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { Link, Stack, useRouter } from "expo-router";
import { initializeApp } from "firebase/app";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, FONT, icons } from "../../constants";

const firebaseConfig = {
  apiKey: "AIzaSyBxOwE73PGvhCwR00CgeqUKwwRNFMvfq3k",
  authDomain: "se215-app.firebaseapp.com",
  projectId: "se215-app",
  storageBucket: "se215-app.firebasestorage.app",
  messagingSenderId: "731276112284",
  appId: "1:731276112284:web:088bb7d07d51f0698a9859",
  measurementId: "G-JX3L0KEB00",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [isSecured, setIsSecure] = useState(true);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setUser(res.user);
      router.push("/(tabs)/notification"); // Điều hướng sang màn hình Home
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 180,
          backgroundColor: COLORS.primary,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontFamily: FONT.bold,
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          Noti uit
        </Text>
        <Text style={{ fontSize: 18, fontFamily: FONT.medium, color: "#fff" }}>
          Đơn giản - Hiệu quả - Gọn gàng
        </Text>
      </View>
      <View style={{ marginTop: 70, paddingLeft: 40, paddingRight: 40 }}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: FONT.bold,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Đăng nhập
        </Text>
        <View style={{ marginTop: 40 }}>
          <Text style={{ fontSize: 16, fontFamily: FONT.semibold }}>
            Email:
          </Text>
          <View
            style={{
              marginTop: 8,
              borderWidth: 2,
              borderColor: COLORS.primary,
              borderRadius: 8,
              flexDirection: "row",
              gap: 6,
              padding: 12,
            }}
          >
            <Image source={icons.person} style={{ width: 24, height: 24 }} />
            <TextInput
              placeholder="Nhập email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              style={{ flex: 1 }}
            />
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 16, fontFamily: FONT.semibold }}>
            Mật khẩu:
          </Text>
          <View
            style={{
              marginTop: 8,
              borderWidth: 2,
              borderColor: COLORS.primary,
              borderRadius: 8,
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 6,
              padding: 12,
            }}
          >
            <View style={{ flexDirection: "row", gap: 6 }}>
              <Image source={icons.lock} style={{ width: 24, height: 24 }} />
              <TextInput
                placeholder="Nhập mật khẩu"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={isSecured}
                style={{ width: "80%" }}
              />
            </View>
            <View>
              <TouchableOpacity onPress={() => setIsSecure(!isSecured)}>
                <Image source={icons.eye} style={{ width: 24, height: 24 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Link
          href="#"
          style={{
            marginTop: 10,
            textAlign: "right",
            color: COLORS.primary,
            textDecorationLine: "underline",
          }}
        >
          Quên mật khẩu
        </Link>
        <TouchableOpacity
          onPress={() => {
            handleLogin();
          }}
          style={{
            marginTop: 30,
            backgroundColor: COLORS.primary,
            borderRadius: 8,
            padding: 18,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: FONT.bold,
              textTransform: "uppercase",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignIn;
