import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Stack, Redirect } from "expo-router";
import { icons, FONT, COLORS } from "./../../constants";

const TabIcon = ({ icon, focused }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        width: 60,
        borderRadius: 99,
        backgroundColor: focused ? COLORS.primary : "#fff",
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={focused ? "#fff" : COLORS.primary}
        style={{ width: 30, height: 30 }}
      />
    </View>
  );
};

export default function TabLayout() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            height: 90,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          },
        }}
      >
        <Tabs.Screen
          name="job"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ icon, focused }) => (
              <TabIcon icon={icons.calendar} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ icon, focused }) => (
              <TabIcon icon={icons.person} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="notification"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ icon, focused }) => (
              <TabIcon icon={icons.mail} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="forum"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ icon, focused }) => (
              <TabIcon icon={icons.person} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ icon, focused }) => (
              <TabIcon icon={icons.calendar} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
