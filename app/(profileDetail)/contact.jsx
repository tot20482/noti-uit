import { Stack } from "expo-router";
import React from "react";
import Header from "../../components/profile/Header";
import ContactUs from "../../components/profile/contactUs/ContactUs";

const Contact = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Liên hệ chúng tôi" />
      <ContactUs />
    </>
  );
};

export default Contact;
