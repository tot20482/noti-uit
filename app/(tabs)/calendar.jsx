import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "../../components/calendar/Header/Header";
import CalendarContent from "../../components/calendar/CalendarContent";
import { MockAll } from "@/mocks/calendar";

const Calendar = () => {
  return (
    <View>
      <Header />
      <ScrollView style={{ marginBottom: 20 }}>
        <View
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <CalendarContent />
        </View>
      </ScrollView>
    </View>
  );
};

export default Calendar;
