import { Stack } from "expo-router";
import Header from "../../../components/job/DetailJob/Header";

const FullTime = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />
    </>
  );
};

export default FullTime;
