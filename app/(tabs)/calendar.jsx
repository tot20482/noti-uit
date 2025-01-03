import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "../../components/calendar/Header/Header";
import CalendarContent from "../../components/calendar/CalendarContent";
import { MockAll } from "@/mocks/calendar";

const Calendar = () => {
  const [isSelected, setIsSelected] = useState("Tất cả");

  let sourceData = [];
  switch (isSelected) {
    case "Tất cả":
      sourceData = MockAll;
      break;
    case "Lịch học":
      // sourceData = MockResearch;
      break;
    case "Deadline":
      // sourceData = MockResearch;
      break;
    case "Khác":
      // sourceData = MockResearch;
      break;
    default:
      break;
  }

  useEffect(() => {
    setRenderData(sourceData);
  }, [isSelected]);

  const [renderData, setRenderData] = useState(sourceData);

  return (
    <View>
      <Header isSelected={isSelected} setIsSelected={setIsSelected} />
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
          {isSelected === "Tất cả" && <CalendarContent sourceData={MockAll} />}
        </View>
      </ScrollView>
    </View>
  );
};

export default Calendar;
