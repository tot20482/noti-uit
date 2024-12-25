import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Header from "../../../components/library/Header/StudyResearch/Header";
import { MockOutline } from "../../../mocks/library/Study";
import OutlineContent from "../../../components/library/Study/OutlineContent";

const Outline = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Đề cương bài giảng" />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
          paddingTop: 30,
        }}
      >
        {MockOutline.map((item) => (
          <OutlineContent
            key={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            topic={item.topic}
            subject={item.subject}
            publishYear={item.publishYear}
          />
        ))}
      </View>
    </>
  );
};

export default Outline;
