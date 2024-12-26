import { images } from "../../../constants";

export const MockOutline = [
  {
    id: 1,
    title: "Phát triển ứng dụng đa phương tiện trên thiết bị di động",
    topic: "Khoa học máy tính",
    subject: "CS256",
    publishYear: "2024",
    imgUrl: images.study1,
    routerPath: "(library)/(libraryDetail)/Study/outline1",
  },
  {
    id: 2,
    title: "Tư duy thiết kế",
    topic: "Khoa học và kỹ thuật thông tin",
    subject: "IE310",
    publishYear: "2024",
    imgUrl: images.study1,
  },
  {
    id: 3,
    title: "Truy vấn thông tin đa phương tiện",
    topic: "Khoa học máy tính",
    subject: "CS256",
    publishYear: "2024",
    imgUrl: images.study1,
  },
];

export const MockDocument = [
  {
    id: 1,
    title: "Giáo trình nhập môn internet & công nghệ web",
    Keywords: "Công nghệ web",
    Pulisher: "Đại học Quốc gia TP.HCM",
    publishYear: "2023",
    imgUrl: images.study2,
  },
  {
    id: 2,
    title: "Giáo trình nhập môn bảo đảm và an ninh thông tin",
    Keywords: " An toàn thông tin",
    Pulisher: "Đại học Quốc gia TP.HCM",
    publishYear: "2022",
    imgUrl: images.study3,
  },
];

export const MockBook = [
  {
    id: 1,
    title: "Báo cáo chỉ số thương mại điện tử 2023",
    Keywords: "Thương mại Điện tử",
    Pulisher: "Hiệp hội Thương mại điện tử Việt Nam",
    publishYear: "2024",
    imgUrl: images.study2,
  },
  {
    id: 2,
    title: "Handbook of dynamic system modeling",
    Keywords: " An toàn thông tin",
    Pulisher: "Đại học Quốc gia TP.HCM",
    publishYear: "2022",
    imgUrl: images.study3,
  },
];

export const MockOutline1 = [
  {
    imgUrl: images.study1,
    title: "Phát triển ứng dụng đa phương tiện trên thiết bị di động",
    year: "2024",
    topic: "Khoa học máy tính",
    object: "Sinh viên trên địa bàn TP.HCM",
    uri: [
      "https://developer.mozilla.org/en-US",
      "https://nodejs.org/en/docs",
      "https://reactnative.dev/docs/getting-started#how-to-use-these-docs",
      "https://ir.vnulib.edu.vn/handle/VNUHCM/34022",
    ],
    relative: [
      {
        title: "Mozilla Developer Networks website",
        link: "https://developer.mozilla.org/en-US",
      },
      {
        title: "NodeJs Documentation",
        link: "https://nodejs.org/en/docs",
      },
      {
        title: "React Native documentation",
        link: "https://reactnative.dev/docs/getting-started#how-to-use-these-docs",
      },
    ],
  },
];
