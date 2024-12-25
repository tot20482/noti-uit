import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import CsacContent from "../../../components/NotiDetail/Extracurricular.jsx/CsacContent";
import { useLocalSearchParams } from "expo-router/build/hooks";

const CsacCastingCall = () => {
  const params = useLocalSearchParams(); // Lấy các params được truyền qua

  // Deserialize fields và steps
  const fields = params.fields ? JSON.parse(params.fields) : [];
  const steps = params.steps ? JSON.parse(params.steps) : [];

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <CsacContent
        image2={params.image2}
        title={params.title}
        createdAt={params.createdAt}
        time={params.time}
        object={params.object}
        fields={fields} // Truyền mảng fields
        steps={steps} // Truyền mảng steps
      />
    </>
  );
};

export default CsacCastingCall;
