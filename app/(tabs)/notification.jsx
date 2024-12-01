import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Header from "../../components/notification/Header/Header";
import NotiContent from "../../components/notification/NotiContent";
import {
  mockAdministrative,
  mockExtracurricular,
  mockJob,
  mockStudy,
} from "./../../mocks/notification";

const Notification = () => {
  const [isSelected, setIsSelected] = useState("Hành chính");

  let sourceData = [];
  switch (isSelected) {
    case "Hành chính":
      sourceData = mockAdministrative;
      break;
    case "Học tập":
      sourceData = mockStudy;
      break;
    case "Ngoại khóa":
      sourceData = mockExtracurricular;
      break;
    case "Làm việc":
      sourceData = mockJob;
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
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
          marginTop: 20,
        }}
      >
        {renderData.map((item) => (
          <NotiContent
            key={item.id}
            title={item.title}
            description={item.description}
            createdAt={item.createdAt}
          />
        ))}
      </View>
    </View>
  );
};

export default Notification;
