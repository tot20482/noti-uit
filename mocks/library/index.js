import { images } from "../../constants";

export const LibraryTab = [
  {
    type: "Học tập",
    title: "Học tập",
  },
  {
    type: "Nghiên cứu",
    title: "Nghiên cứu",
  },
];

export const MockStudy = [
  {
    id: 1,
    title: "Đề cương, bài giảng",
    routerPath: "(library)/Study/outline",
    document1: [
      {
        imgUrl: images.study1,
        title: "Phát triển ứng dụng đa phương tiện trên thiết bị di động",
        Keywords: "Khoa học máy tính",
        Pushlisher: "CS526",
        publishYear: "2024",
      },
    ],
  },
  {
    id: 2,
    title: "Giáo trình",
    routerPath: "(library)/Study/document",
    document1: [
      {
        imgUrl: images.study2,
        title: "Giáo trình nhập môn internet & công nghệ web",
        Keywords: "Công nghệ Web",
        Pushlisher: "Đại học Quốc gia TP.HCM",
        publishYear: "2023",
      },
    ],
  },
  {
    id: 3,
    title: "Sách tham khảo",
    routerPath: "(library)/Study/book",
    document1: [
      {
        imgUrl: images.study3,
        title: "Báo cáo chỉ số thương mại điện tử 2023",
        Keywords: "Thương mại điện tử",
        Pushlisher: "Hiệp hội Thương mại điện tử Việt Nam",
        publishYear: "2024",
      },
    ],
  },
];

export const MockResearch = [
  {
    id: 1,
    title: "Khóa luận tốt nghiệp",
    routerPath: "(library)/Research/thesis",
    document1: [
      {
        imgUrl: images.research1,
        title:
          "Phát hiện giao dịch bất thường trong mạng đa chuỗi sử dụng mạng đối kháng tạo sinh bán giám sát và lý thuyết đa đồ thị",
        Keywords: "",
        Pushlisher: "Mạng máy tính",
        publishYear: "2024",
      },
    ],
  },
  {
    id: 2,
    title: "Luận án",
    routerPath: "(library)/Research/dissertation",
    document1: [
      {
        imgUrl: images.study1,
        title: "Giáo trình nhập môn internet & công nghệ web",
        Keywords: "Công nghệ Web",
        Pushlisher: "Đại học Quốc gia TP.HCM",
        publishYear: "2023",
      },
    ],
  },
  {
    id: 3,
    title: "Luận văn thạc sĩ",
    routerPath: "(library)/Research/masterThesis",
    document1: [
      {
        imgUrl: images.study2,
        title: "Báo cáo chỉ số thương mại điện tử 2023",
        Keywords: "Thương mại điện tử",
        Pushlisher: "Hiệp hội Thương mại điện tử Việt Nam",
        publishYear: "2024",
      },
    ],
  },
];
