import React, { useEffect, useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/notification/Header/Header";
import {
  mockAdministrative,
  mockExtracurricular,
  mockStudy,
} from "./../../mocks/notification";
import Extracurricular from "../../components/notification/Extracurricular";
import Adminstrative from "../../components/notification/Adminstrative";
import Study from "../../components/notification/Study";
import { FONT } from "../../constants";
import DeleteAllNoti from "../../components/notification/DeleteAllNoti";
import SignOut from "../../components/profile/signOut/SignOut";

const Notification = () => {
  const [isSelected, setIsSelected] = useState("Hành chính");
  const [isDeleted, setIsDeleted] = useState(false);

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
    <>
      <View>
        <Header isSelected={isSelected} setIsSelected={setIsSelected} />
        <ScrollView>
          {/* {renderData.map((item) => (
          <NotiContent
            key={item.id}
            title={item.title}
            description={item.description}
            createdAt={item.createdAt}
          />
        ))} */}
          <View
            style={{
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={{ marginBottom: 10, padding: 4, marginRight: 20 }}
              onPress={() => setIsDeleted(true)}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: FONT.semibold,
                  color: "#2F6BFF",
                  textAlign: "right",
                  textDecorationLine: "underline",
                }}
              >
                Xóa tất cả thông báo
              </Text>
            </TouchableOpacity>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 200,
                gap: 15,
              }}
            >
              {isSelected === "Ngoại khóa" &&
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
              {isSelected === "Hành chính" &&
                renderData.map((item) => (
                  <Adminstrative
                    key={item.id}
                    title={item.title}
                    time={item.time}
                    address={item.address}
                    desc={item.desc}
                    link={item.link}
                    createdAt={item.createdAt}
                    routerPath={item.routerPath}
                  />
                ))}
              {isSelected === "Học tập" &&
                renderData.map((item) => (
                  <Study
                    key={item.id}
                    title={item.title}
                    classId={item.classId}
                    room={item.room}
                    time={item.time}
                    description={item.description}
                    createdAt={item.createdAt}
                    routerPath={item.routerPath}
                  />
                ))}
            </View>
          </View>
        </ScrollView>
      </View>
      <Modal
        visible={isDeleted}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsDeleted(false)}
      >
        <DeleteAllNoti setIsDeleted={setIsDeleted} />
      </Modal>
    </>
  );
};

export default Notification;
