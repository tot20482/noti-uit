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
        routerPath: "(library)/(libraryDetail)/Study/document1",
      },
      {
        imgUrl: images.study3,
        title: "Giáo trình nhập môn bảo đảm và an ninh thông tin",
        Keywords: " An toàn thông tin",
        Pulisher: "Đại học Quốc gia TP.HCM",
        publishYear: "2022",
        routerPath: "(library)/(libraryDetail)/Study/document2",
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
        routerPath: "(library)/(libraryDetail)/Study/book1",
      },
      {
        imgUrl: images.study2,
        title: "Handbook of dynamic system modeling",
        Keywords: " An toàn thông tin",
        Pulisher: "Đại học Quốc gia TP.HCM",
        publishYear: "2022",
        routerPath: "(library)/(libraryDetail)/Study/book2",
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
        title: "Phần mềm nhắn tin tức thời cho các tổ chức nhỏ",
        Keywords: "Công nghệ phần mềm",
        Pushlisher: "Trường Đại học Công nghệ Thông tin",
        publishYear: "2024",
        routerPath: "(library)/(libraryDetail)/Research/research1",
      },
      {
        imgUrl: images.research2,
        title: "Nhận diện tư thế người tập cho chương trình giáo viên Yoga ảo",
        Keywords: "Kỹ thuật thông tin",
        Pushlisher: "Trường Đại học Công nghệ Thông tin",
        publishYear: "2023",
        routerPath: "(library)/(libraryDetail)/Research/research2",
      },
    ],
  },
  {
    id: 2,
    title: "Luận án",
    routerPath: "(library)/Research/dissertation",
    document1: [
      {
        imgUrl: images.research3,
        title: "Phylogenomics in the pandemic era",
        Keywords: "Khoa học máy tính",
        Pushlisher: "Australian National University",
        publishYear: "2024",
        routerPath: "(library)/(libraryDetail)/Research/research3",
      },
      {
        imgUrl: images.research4,
        title:
          "Nghiên cứu xây dựng mô hình đọc hiểu tự động cho văn bản Tiếng Việt",
        Keywords: "Khoa học máy tính",
        Pushlisher: "Trường Đại học Công nghệ Thông tin",
        publishYear: "2024",
        routerPath: "(library)/(libraryDetail)/Research/research4",
      },
    ],
  },
  {
    id: 3,
    title: "Luận văn thạc sĩ",
    routerPath: "(library)/Research/masterThesis",
    document1: [
      {
        imgUrl: images.research5,
        title: "Phát hiện thư rác tiếng Việt sử dụng các mô hình học sâu",
        Keywords: "Khoa học máy tính",
        Pushlisher: "Trường Đại học Công nghệ Thông tin",
        publishYear: "2024",
        routerPath: "(library)/(libraryDetail)/Research/research5",
      },
      {
        imgUrl: images.research6,
        title: "Phục hồi hình ảnh cũ sử dụng mô hình GANs",
        Keywords: "Khoa học máy tính",
        Pushlisher: "Trường Đại học Công nghệ Thông tin",
        publishYear: "2024",
        routerPath: "(library)/(libraryDetail)/Research/research6",
      },
    ],
  },
];
