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
    routerPath: "(library)/(libraryDetail)/Study/outline2",
  },
  {
    id: 3,
    title: "Truy vấn thông tin đa phương tiện",
    topic: "Khoa học máy tính",
    subject: "CS256",
    publishYear: "2024",
    imgUrl: images.study1,
    routerPath: "(library)/(libraryDetail)/Study/outline3",
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
    routerPath: "(library)/(libraryDetail)/Study/document1",
  },
  {
    id: 2,
    title: "Giáo trình nhập môn bảo đảm và an ninh thông tin",
    Keywords: " An toàn thông tin",
    Pulisher: "Đại học Quốc gia TP.HCM",
    publishYear: "2022",
    imgUrl: images.study3,
    routerPath: "(library)/(libraryDetail)/Study/document2",
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
    routerPath: "(library)/(libraryDetail)/Study/book1",
  },
  {
    id: 2,
    title: "Handbook of dynamic system modeling",
    Keywords: " An toàn thông tin",
    Pulisher: "Đại học Quốc gia TP.HCM",
    publishYear: "2022",
    imgUrl: images.study3,
    routerPath: "(library)/(libraryDetail)/Study/book2",
  },
];

export const MockOutline2 = [
  {
    imgUrl: images.study1,
    title: "Tư duy thiết kế",
    year: "2024",
    topic: "Khoa học và Kỹ thuật thông tin",
    object: "Sinh viên trên địa bàn TP.HCM",
    uri: [
      "https://perpus.univpancasila.ac.id/repository/EBUPT200915.pdf",
      "https://opac.vnulib.edu.vn/record=b1417488~S1*vie",
      "https://s3.amazonaws.com/designco-web-assets/uploads/2019/05/InVision_DesignThinkingHandbook.pdf",
      "https://ir.vnulib.edu.vn/handle/VNUHCM/34012",
    ],
    relative: [
      {
        title:
          "Lewrick, Michael, Patrick Link, and Larry Leifer. The design thinking playbook",
        link: "Mindful digital transformation of teams, products, services, businesses and ecosystems. John Wiley & Sons, 2018.",
      },
      {
        title: "Lewrick, Michael. Design thinking for business growth",
        link: "how to design and scale business models and business ecosystems. John Wiley & Sons, 2022.",
      },
      {
        title: "Woolery, Eli. Design thinking handbook",
        link: "InVision, 2019.",
      },
    ],
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

export const MockOutline3 = [
  {
    imgUrl: images.study1,
    title: "Truy vấn thông tin đa phương tiện",
    year: "2024",
    topic: "Khoa học máy tính",
    object: "Sinh viên trên địa bàn TP.HCM",
    uri: [
      "http://www.pamitc.org/",
      "https://ir.vnulib.edu.vn/handle/VNUHCM/34021",
    ],
    relative: [
      {
        title:
          "Multimedia database management systems --GuojinLu. Publication Details Boston, MA",
        link: "Artech House, 1999.",
      },
      {
        title:
          "Introduction to MPEG-7: multimedia content description interface -- edited by B.S. Manjunath, Phillipe Salembier, Thomas Sikora. Publication Details Chichester; Milton (Qld.)",
        link: "technological fundamentals and applications /DavidDagan Feng, Wan-Chi Siu, Hong-Jiang Zhang. Publication ",
      },
      {
        title: "Multimedia information retrieval and managemen",
        link: "technological fundamentals and applications /DavidDagan Feng, Wan-Chi Siu, Hong-Jiang Zhang. Publication Details Berlin; New York : Springer, 2003.",
      },
    ],
  },
];

export const MockDocument1 = [
  {
    imgUrl: images.study2,
    title: "Giáo trình nhập môn Internet và công nghệ Web",
    size: "29,19 MB",
    format: "PDF",
    year: "2024",
    keywords: "Khoa học máy tính",
    publisher: "Sinh viên trên địa bàn TP.HCM",
    uri: ["https://ir.vnulib.edu.vn/handle/VNUHCM/32859"],
    relative: [
      {
        title: "Mozilla Developer Networks website ",
        link: "https://developer.mozilla.org/en-US",
      },
      {
        title: "NodeJs Documentation",
        link: " https://nodejs.org/en/docs",
      },
      {
        title: "React Native documentation",
        link: "https://reactnative.dev/docs/getting-started#how-to-use-these-docs",
      },
    ],
    authors: [
      "Nguyễn Hoàng Tú Anh",
      "Võ Tấn Khoa",
      "Nguyễn Thị Anh Thư",
      "Võ Ngọc Tân",
    ],
  },
];

export const MockDocument2 = [
  {
    imgUrl: images.study2,
    title: "Giáo trình nhập môn bảo đảm và an ninh thông tin",
    size: "16,59 MB",
    format: "PDF",
    year: "2022",
    keywords: "An toàn Thông tin",
    publisher: "Đại học Quốc gia TP.HCM",
    uri: ["https://ir.vnulib.edu.vn/handle/VNUHCM/32857"],
    relative: [],
    authors: ["Nguyễn Tấn Cầm"],
  },
];

export const MockBook1 = [
  {
    imgUrl: images.study2,
    title: "Báo cáo chỉ số thương mại điện tử 2023",
    size: "10,19 MB",
    format: "PDF",
    year: "2024",
    keywords: "Thương mại Điện tử",
    publisher: "Hiệp hội Thương mại điện tử Việt Nam",
    uri: ["http://ir.vnulib.edu.vn/handle/VNUHCM/17926"],
    relative: [],
    authors: ["Nguyễn Tấn Cầm"],
  },
];

export const MockBook2 = [
  {
    imgUrl: images.study2,
    title: "Handbook of dynamic system modeling",
    size: "8,58 MB",
    format: "PDF",
    year: "2024",
    keywords: "Công nghệ phần mềm",
    publisher: "Hiệp hội Thương mại điện tử Việt Nam",
    uri: ["http://ir.vnulib.edu.vn/handle/VNUHCM/16366"],
    relative: [],
    authors: ["A. Fishwick, Paul"],
  },
];
