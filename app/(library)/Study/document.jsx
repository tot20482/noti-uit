import { Stack } from "expo-router";
import React from "react";
import Header from "../../../components/library/Header/StudyResearch/Header";
import { MockDocument } from "../../../mocks/library/Study";
import StudyResearch from "../../../components/library/StudyResearch";
import { View } from "react-native";

const Document = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Giáo trình" />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
          paddingTop: 30,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        {MockDocument.map((item) => (
          <StudyResearch
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

export default Document;
