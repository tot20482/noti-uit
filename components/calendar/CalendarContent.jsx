import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { COLORS } from "@/constants";
import CalendarNoti from "./CalendarNoti";
import {
  MockFirstDay,
  MockSecondDay,
  MockThirdDay,
  MockFourthDay,
} from "@/mocks/calendar";

const CalendarContent = () => {
  const [selectedDate, setSelectedDate] = useState("2025-01-11");

  // Danh sách các ngày cần đánh dấu
  const markedDates = {
    "2025-01-11": { marked: true, dotColor: COLORS.primary },
    "2025-01-12": { marked: true, dotColor: COLORS.primary },
    "2025-01-13": { marked: true, dotColor: COLORS.primary },
    "2025-01-19": { marked: true, dotColor: COLORS.primary },
  };

  // Thêm ngày đã chọn với style
  const selectedStyle = {
    [selectedDate]: {
      selected: true,
      selectedColor: COLORS.primary,
      selectedTextColor: "#ffffff",
    },
  };

  const handleDateChange = (date) => {
    setSelectedDate(date.dateString);
  };

  return (
    <>
      <View
        style={{
          width: "90%",
          padding: 6,
          backgroundColor: "#ffffff",
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          marginBottom: 20,
        }}
      >
        <Calendar
          onDayPress={handleDateChange}
          markedDates={{ ...markedDates, ...selectedStyle }}
          theme={{
            todayTextColor: "#000",
            selectedDayBackgroundColor: COLORS.primary,
            selectedDayTextColor: "#ffffff",
            dotColor: COLORS.primary,
            arrowColor: COLORS.primary,
            textDayFontWeight: "bold",
            textMonthFontWeight: "bold",
            monthTextColor: COLORS.primary,
          }}
          // Custom tiếng Việt
          monthNames={[
            "Tháng 1",
            "Tháng 2",
            "Tháng 3",
            "Tháng 4",
            "Tháng 5",
            "Tháng 6",
            "Tháng 7",
            "Tháng 8",
            "Tháng 9",
            "Tháng 10",
            "Tháng 11",
            "Tháng 12",
          ]}
          dayNames={["CN", "T2", "T3", "T4", "T5", "T6", "T7"]}
          firstDay={1} // Bắt đầu từ thứ 2
        />
      </View>
      <ScrollView
        style={{
          width: "100%",
          paddingLeft: 20,
          minHeight: 350,
          marginBottom: 50,
        }}
      >
        <View
          style={{
            width: "95%",
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 15,
          }}
        >
          {selectedDate === "2025-01-11" &&
            MockFirstDay.map((item) => (
              <CalendarNoti
                key={item.id}
                title={item.title}
                desc={item.desc}
                room={item.room}
                time={item.time}
                status={item.status}
                icon={item.icon}
              />
            ))}
          {selectedDate === "2025-01-12" &&
            MockSecondDay.map((item) => (
              <CalendarNoti
                key={item.id}
                title={item.title}
                desc={item.desc}
                room={item.room}
                time={item.time}
                status={item.status}
                icon={item.icon}
              />
            ))}
          {selectedDate === "2025-01-13" &&
            MockThirdDay.map((item) => (
              <CalendarNoti
                key={item.id}
                title={item.title}
                desc={item.desc}
                room={item.room}
                time={item.time}
                status={item.status}
                icon={item.icon}
              />
            ))}
          {selectedDate === "2025-01-19" &&
            MockFourthDay.map((item) => (
              <CalendarNoti
                key={item.id}
                title={item.title}
                desc={item.desc}
                room={item.room}
                time={item.time}
                status={item.status}
                icon={item.icon}
              />
            ))}
        </View>
      </ScrollView>
    </>
  );
};

export default CalendarContent;
