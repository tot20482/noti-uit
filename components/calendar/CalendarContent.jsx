import { COLORS } from "@/constants";
import {
  MockFirstDay,
  MockFourthDay,
  MockSecondDay,
  MockThirdDay,
} from "@/mocks/calendar";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import CalendarNoti from "./CalendarNoti";

const CalendarContent = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const today = getFormatedDate(new Date(), "YYYY/MM/DD");

  const handleChangeDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <View
        style={{
          width: "90%", // Đặt chiều rộng cụ thể cho lịch
          padding: 6, // Padding tổng quát của lịch
          backgroundColor: "#ffffff",
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        }}
      >
        <DatePicker
          mode="calendar"
          minimumDate={today}
          selected={selectedDate || today}
          onDateChange={handleChangeDate}
          options={{
            backgroundColor: "#ffffff",
            textHeaderColor: COLORS.primary,
            textDefaultColor: "#333",
            selectedTextColor: "#ffffff",
            mainColor: COLORS.primary, // Màu chính cho ngày được chọn
            textSecondaryColor: "#b6b6b6",
            // borderColor: "rgba(0, 0, 0, 0.1)",
            textFontSize: 12,
            headerFontSize: 12,
            textFontWeight: "500",
            borderRadius: 8, // Bo góc cho lịch
            // dayPaddingVertical: 2, // Điều chỉnh padding dọc giữa các ngày
            dayWidth: 8, // Đặt chiều rộng cho mỗi ô ngày
            dayHeight: 8, // Đặt chiều cao cho mỗi ô ngày
            // dayPaddingHorizontal: 2, // Padding giữa các ngày
            boderWidth: 0,
          }}
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
          {(selectedDate === today) === "2025/01/11" &&
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
          {selectedDate === "2025/01/12" &&
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
          {selectedDate === "2025/01/13" &&
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
          {selectedDate === "2025/01/19" &&
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
