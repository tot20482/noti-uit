import { Stack } from "expo-router";
import React from "react";
import Header from "../../../components/library/Header/StudyResearch/Header";
import { MockDissertation } from "../../../mocks/library/Research";
import Research from "../../../components/library/Research";
import { View } from "react-native";

const Dissertation = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Luận án" />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
          paddingTop: 30,
        }}
      >
        {MockDissertation.map((item, index) => (
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

export default Dissertation;
