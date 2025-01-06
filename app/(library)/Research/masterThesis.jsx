import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Header from "../../../components/library/Header/StudyResearch/Header";
import Research from "../../../components/library/Research";
import { MockMasterThesis } from "../../../mocks/library/Research";

const MasterThesis = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Luận văn thạc sĩ" />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
          paddingTop: 30,
        }}
      >
        {MockMasterThesis.map((item, index) => (
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

export default MasterThesis;
