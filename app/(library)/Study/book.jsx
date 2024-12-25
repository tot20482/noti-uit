import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Header from "../../../components/library/Header/StudyResearch/Header";
import { MockBook } from "../../../mocks/library/Study";
import StudyResearch from "../../../components/library/StudyResearch";

const Book = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Sách tham khảo" />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
          paddingTop: 30,
        }}
      >
        {MockBook.map((item) => (
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

export default Book;
