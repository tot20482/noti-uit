import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONT, icons } from "@/constants";

const CalendarNoti = ({ title, room, desc, time, status, icon }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#fff",
        minHeight: 96,
        borderRadius: 15,
        padding: 15,
      }}
    >
      <Text
        style={{
          fontFamily: FONT.semibold,
          color: COLORS.primary,
          fontSize: 16,
        }}
      >
        {title}
      </Text>
      <Text style={{ fontFamily: FONT.italic, fontSize: 13 }}>{desc}</Text>
      {room === "" ? (
        ""
      ) : (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            marginTop: 6,
          }}
        >
          <Image
            source={icons.location}
            resizeMode="contain"
            style={{ width: 15, height: 15 }}
          />
          <Text style={{ fontFamily: FONT.semibold, fontSize: 13 }}>
            {room}
          </Text>
        </View>
      )}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          marginTop: 6,
        }}
      >
        <Image
          source={icons.clock}
          resizeMode="contain"
          style={{ width: 15, height: 15 }}
        />
        <Text style={{ fontFamily: FONT.semibold, fontSize: 13 }}>{time}</Text>
      </View>
      {status === "" ? (
        ""
      ) : (
        <>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
              marginTop: 6,
            }}
          >
            <Image
              source={icon}
              resizeMode="contain"
              style={{ width: 17, height: 17 }}
            />
            <Text style={{ fontFamily: FONT.semibold, fontSize: 13 }}>
              {status}
            </Text>
          </View>
          {status === "Chưa nộp bài" && (
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                padding: 4,
                width: "40%",
                marginTop: 8,
                paddingTop: 8,
                paddingBottom: 8,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontFamily: FONT.semibold,
                  fontSize: 14,
                }}
              >
                Nộp bài
              </Text>
            </TouchableOpacity>
          )}
          {status === "Đã nộp bài" && (
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                padding: 4,
                width: "50%",
                marginTop: 8,
                paddingTop: 8,
                paddingBottom: 8,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontFamily: FONT.semibold,
                  fontSize: 14,
                }}
              >
                Xem bài nộp
              </Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

export default CalendarNoti;
