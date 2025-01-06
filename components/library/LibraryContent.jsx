import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { COLORS, FONT, icons } from "../../constants";
import { useRouter } from "expo-router";
import OutlineContent from "./Study/OutlineContent";
import StudyResearch from "./StudyResearch";

const LibraryContent = ({ title, routerPath, document1 }) => {
  const router = useRouter();

  // Lấy chiều rộng màn hình
  const screenWidth = Dimensions.get("window").width;

  // Tính chiều rộng của mỗi item dựa trên chiều rộng màn hình
  const itemWidth = screenWidth * 0.8; // Sử dụng 90% chiều rộng màn hình cho mỗi item

  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: FONT.bold,
              color: COLORS.primary,
            }}
          >
            {title}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            router.push(routerPath);
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONT.regular,
              color: COLORS.primary,
            }}
          >
            Xem tất cả
          </Text>
          <Image
            source={icons.right}
            resizeMode="contain"
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>

      {/* ScrollView để kéo ngang */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 15 }}
        contentContainerStyle={{
          flexDirection: "row",
          gap: 20,
        }}
      >
        {title === "Đề cương, bài giảng" &&
          document1.map((item, index) => (
            <OutlineContent
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              topic={item.topic}
              subject={item.subject}
              publishYear={item.publishYear}
              routerPath={item.routerPath}
              itemWidth={itemWidth} // Truyền itemWidth từ ngoài vào
            />
          ))}
        {title === "Giáo trình" &&
          document1.map((item, index) => (
            <StudyResearch
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              Keywords={item.Keywords}
              Pushlisher={item.Pushlisher}
              publishYear={item.publishYear}
              routerPath={item.routerPath}
              itemWidth={itemWidth} // Truyền itemWidth từ ngoài vào
            />
          ))}
        {title === "Sách tham khảo" &&
          document1.map((item, index) => (
            <StudyResearch
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              Keywords={item.Keywords}
              Pushlisher={item.Pushlisher}
              publishYear={item.publishYear}
              routerPath={item.routerPath}
              itemWidth={itemWidth} // Truyền itemWidth từ ngoài vào
            />
          ))}
        {title === "Khóa luận tốt nghiệp" &&
          document1.map((item, index) => (
            <StudyResearch
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              Keywords={item.Keywords}
              Pushlisher={item.Pushlisher}
              publishYear={item.publishYear}
              routerPath={item.routerPath}
              itemWidth={itemWidth} // Truyền itemWidth từ ngoài vào
            />
          ))}
        {title === "Luận án" &&
          document1.map((item, index) => (
            <StudyResearch
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              Keywords={item.Keywords}
              Pushlisher={item.Pushlisher}
              publishYear={item.publishYear}
              routerPath={item.routerPath}
              itemWidth={itemWidth} // Truyền itemWidth từ ngoài vào
            />
          ))}
        {title === "Luận văn thạc sĩ" &&
          document1.map((item, index) => (
            <StudyResearch
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              Keywords={item.Keywords}
              Pushlisher={item.Pushlisher}
              publishYear={item.publishYear}
              routerPath={item.routerPath}
              itemWidth={itemWidth} // Truyền itemWidth từ ngoài vào
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default LibraryContent;
