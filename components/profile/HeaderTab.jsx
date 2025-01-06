import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT, icons } from "../../constants";
import { mockFullTime } from "../../mocks/job";
import { MockOutline } from "../../mocks/library/Study";
import { mockExtracurricular } from "../../mocks/notification";
import JobContent from "../job/JobContent";
import StudyResearch2 from "../library/StudyResearch2";
import Extracurricular from "../notification/Extracurricular";
import JobFairMore from "./JobFair/JobFairMore";
import Search from "./Search";
import Tab from "./Tab";

const headerTab = [
  {
    type: "Thông báo",
    title: "Thông báo",
  },
  {
    type: "Tin tuyển dụng",
    title: "Tin tuyển dụng",
  },
  {
    type: "Thư viện",
    title: "Thư viện",
  },
];

const HeaderTab = () => {
  const [isMore, setIsMore] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [isSelected, setIsSelected] = useState("Thông báo");
  let sourceData = [];
  switch (isSelected) {
    case "Thông báo":
      sourceData = mockExtracurricular;
      break;
    case "Tin tuyển dụng":
      sourceData = mockFullTime;
      break;
    case "Thư viện":
      sourceData = MockOutline;
      break;
    default:
      break;
  }

  useEffect(() => {
    setRenderData(sourceData);
  }, [isSelected]);

  const [renderData, setRenderData] = useState(sourceData);
  return (
    <>
      <View
        style={{ height: 170, width: "100%", backgroundColor: COLORS.primary }}
      >
        <View
          style={{
            marginTop: 70,
            height: 40,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          {isSearched ? (
            <Search isSearched={isSearched} setIsSearched={setIsSearched} />
          ) : (
            <>
              <TouchableOpacity
                style={{ width: 32, height: 32 }}
                onPress={() => {
                  setIsSearched(!isSearched);
                }}
              >
                <Image source={icons.search} />
              </TouchableOpacity>
              <Text
                style={{ fontSize: 24, fontFamily: FONT.bold, color: "#fff" }}
              >
                Đã lưu
              </Text>
            </>
          )}
          <TouchableOpacity
            onPress={() => {
              setIsMore(!isMore);
            }}
            style={{ height: 32, width: 32 }}
          >
            <Image source={icons.more} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 10,
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {headerTab.map((item, index) => (
            <Tab
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
        {isSelected === "Thông báo" && (
          <JobFairMore isMore={isMore} setIsMore={setIsMore} type="Thông báo" />
        )}
        {isSelected === "Tin tuyển dụng" && (
          <JobFairMore
            isMore={isMore}
            setIsMore={setIsMore}
            type="Tin tuyển dụng"
          />
        )}
        {isSelected === "Thư viện" && (
          <JobFairMore isMore={isMore} setIsMore={setIsMore} type="Sách" />
        )}
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
          marginTop: 20,
          marginBottom: 200,
        }}
      >
        {isSelected === "Thông báo" &&
          renderData.map((item) => (
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
        {isSelected === "Tin tuyển dụng" &&
          renderData.map((item) => (
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
        {isSelected === "Thư viện" &&
          renderData.map((item, index) => (
            <StudyResearch2
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              Keywords={item.Keywords}
              Pushlisher={item.Pushlisher}
              publishYear={item.publishYear}
              routerPath={item.routerPath}
            />
          ))}
      </View>
    </>
  );
};

export default HeaderTab;
