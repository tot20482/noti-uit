import { Stack } from "expo-router";
import React from "react";
import Header from "../../../components/library/Header/StudyResearch/Header";
import { MockResearch } from "../../../mocks/library";
import { View } from "react-native";
import StudyResearch from "../../../components/library/StudyResearch";
import StudyResearch2 from "../../../components/library/StudyResearch2";
import { MockThesis } from "../../../mocks/library/Research";
import Research from "../../../components/library/Research";

const Thesis = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Khóa luận" />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
          paddingTop: 30,
        }}
      >
        {MockThesis.map((item, index) => (
          <Research
            key={index}
            imgUrl={item.imgUrl}
            title={item.title}
            Keywords={item.Keywords}
            Pushlisher={item.Pushlisher}
            publishYear={item.publishYear}
            routerPath={item.routerPath}
          />
        ))}
      </View>
    </>
  );
};

export default Thesis;
