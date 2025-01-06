import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import Header from "../../../components/library/Header/StudyResearch/Header";
import StudyResearch2 from "../../../components/library/StudyResearch2";
import { MockOutline } from "../../../mocks/library/Study";
import OutlineContent2 from "../../../components/library/Study/OutlineContent2";

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
          <OutlineContent2
            key={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            topic={item.topic}
            subject={item.subject}
            publishYear={item.publishYear}
            routerPath={item.routerPath}
          />
        ))}
      </View>
    </>
  );
};

export default Outline;
