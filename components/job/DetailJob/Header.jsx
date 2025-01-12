import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT, icons } from "../../../constants";
import {
  InformationFullTime,
  jobDetailTab,
  NeedFullTime,
  PriorityFullTime,
} from "../../../mocks/job";
import JobTab from "../Header/JobTab";
import Information from "./TabDetail/Information";
import Need from "./TabDetail/Need";
import Benefit from "./TabDetail/Benefit";
import Button from "./Button";
import { useRouter } from "expo-router";
import ButtonFavorited from "../../NotiDetail/ButtonFavorited";
const Header = () => {
  const router = useRouter();
  const [isSelected, setIsSelected] = useState("Thông tin chung");
  switch (isSelected) {
    case "Thông tin chung":
      break;
    case "Yêu cầu":
      break;
    case "Quyền lợi":
      break;
    default:
      break;
  }
  return (
    <>
      <View
        style={{
          height: 170,
          width: "100%",
          backgroundColor: COLORS.primary,
        }}
      >
        <View
          style={{
            marginTop: 70,
            height: 40,
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 60,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <TouchableOpacity
            style={{ width: 32, height: 32 }}
            onPress={() => {
              router.back();
            }}
          >
            <Image source={icons.left} />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontFamily: FONT.bold, color: "#fff" }}>
            Chi tiết tuyển dụng
          </Text>
        </View>
        <View
          style={{
            marginTop: 4,
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {jobDetailTab.map((item, index) => (
            <JobTab
              key={index}
              type={item.type}
              title={item.title}
              isSelected={isSelected}
              onClick={() => {
                setIsSelected(item.title);
              }}
            />
          ))}
        </View>
      </View>
      <View
        style={{
          width: "100%",
          paddingTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isSelected === "Thông tin chung" ? (
          <Information
            title={InformationFullTime.title}
            createdAt={InformationFullTime.createdAt}
            type={InformationFullTime.type}
            address={InformationFullTime.address}
            description={InformationFullTime.description}
            list={InformationFullTime.list}
          />
        ) : isSelected === "Yêu cầu" ? (
          <Need
            title={NeedFullTime.title}
            need={NeedFullTime.need}
            priority={NeedFullTime.priority}
          />
        ) : (
          <Benefit
            title={PriorityFullTime.title}
            benefit={PriorityFullTime.benefit}
            advantage={PriorityFullTime.advantage}
          />
        )}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "85%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <ButtonFavorited />
        </View>
      </View>
    </>
  );
};

export default Header;
