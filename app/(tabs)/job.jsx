import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Header from "../../components/job/Header/Header";
import JobContent from "../../components/job/JobContent";
import {
  mockAll,
  mockFullTime,
  mockIntership,
  mockPartTime,
} from "../../mocks/job";

const Job = () => {
  const [isSelected, setIsSelected] = useState("Tất cả");

  let sourceData = [];
  switch (isSelected) {
    case "Tất cả":
      sourceData = mockAll;
      break;
    case "Full-time":
      sourceData = mockFullTime;
      break;
    case "Part-Time":
      sourceData = mockPartTime;
      break;
    case "Thực tập":
      sourceData = mockIntership;
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
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        {renderData.map((item) => (
          <JobContent
            key={item.id}
            title={item.title}
            type={item.type}
            address={item.address}
            createdAt={item.createdAt}
            imgUrl={item.imgUrl}
            routerPath={item.routerPath}
          />
        ))}
      </View>
    </View>
  );
};

export default Job;
