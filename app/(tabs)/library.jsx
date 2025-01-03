import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "../../components/library/Header/Header";
import { MockResearch, MockStudy } from "../../mocks/library";
import LibraryContent from "../../components/library/LibraryContent";

const Library = () => {
  const [isSelected, setIsSelected] = useState("Học tập");

  let sourceData = [];
  switch (isSelected) {
    case "Học tập":
      sourceData = MockStudy;
      break;
    case "Nghiên cứu":
      sourceData = MockResearch;
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
      <ScrollView>
        <View
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            height: 700,
            marginBottom: 150,
          }}
        >
          {renderData.map((item) => (
            <LibraryContent
              key={item.id}
              title={item.title}
              document1={item.document1}
              routerPath={item.routerPath}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Library;
