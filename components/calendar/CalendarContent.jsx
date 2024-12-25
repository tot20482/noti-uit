import { View, Text } from "react-native";
import React, { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import { COLORS } from "@/constants";
import CalendarNoti from "./CalendarNoti";

const CalendarContent = ({ sourceData }) => {
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
      <View style={{ width: "90%", marginTop: 20, display: "flex", gap: 15 }}>
        {selectedDate === "2024/12/26" &&
          sourceData.map((item) => (
            <CalendarNoti
              key={item.id}
              title={item.title}
              desc={item.desc}
              time={item.time}
              status={item.status}
              icon={item.icon}
            />
          ))}
      </View>
    </>
  );
};

export default CalendarContent;
