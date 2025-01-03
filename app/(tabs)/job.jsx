import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
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
      <ScrollView
        style={{
          padding: 20,
          height: 710,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            marginBottom: 150,
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
      </ScrollView>
    </View>
  );
};

export default Job;
