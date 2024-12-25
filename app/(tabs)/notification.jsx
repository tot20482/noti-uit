import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Header from "../../components/notification/Header/Header";
import {
  mockAdministrative,
  mockExtracurricular,
  mockStudy,
} from "./../../mocks/notification";
import Extracurricular from "../../components/notification/Extracurricular";

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
        {/* {renderData.map((item) => (
          <NotiContent
            key={item.id}
            title={item.title}
            description={item.description}
            createdAt={item.createdAt}
          />
        ))} */}
        {isSelected === "Ngoại khóa" &&
          sourceData.map((item) => (
            <Extracurricular
              key={item.id}
              title={item.title}
              image1={item.image1}
              image2={item.image2}
              address={item.address}
              time={item.time}
              createdAt={item.createdAt}
              routerPath={item.routerPath}
              object={item.object}
              fields={item.fields}
              steps={item.steps}
            />
          ))}
      </View>
    </View>
  );
};

export default Notification;
