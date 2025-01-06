import { images } from "@/constants";

export const headerTab = [
  {
    type: "Hành chính",
    title: "Hành chính",
  },
  {
    type: "Học tập",
    title: "Học tập",
  },
  {
    type: "Ngoại khóa",
    title: "Ngoại khóa",
  },
];

export const mockAdministrative = [
  {
    id: 1,
    title: `Đăng ký tham gia khảo sát hỗ trợ đề tài "Nghiên cứu, đánh giá tổng thể về bình đẳng giới phục vụ phát triển bền vững"`,
    time: "11h00, thứ Ba, ngày 24/10/2023",
    address: "Phòng B1.14, trường Đại học Công nghệ Thông tin",
    desc: "Sinh viên tham gia khảo sát vui lòng đăng ký theo link",
    link: "https://link.uit.edu.vn/geCUN",
    createdAt: "T5, 02/01/2025 - 09:49",
    routerPath: "(notiDetail)/administrative/survey",
  },
  {
    id: 2,
    title: "Thông báo nộp hồ sơ chế độ chính sách HK1 năm học 2024-2025",
    time: "đến 16h30 ngày 31/10/2024",
    address: "Phòng Công tác Sinh viên (Phòng A.101).",
    desc: "Mọi thắc mắc sinh viên liên hệ qua forum",
    link: "https://forum.uit.edu.vn/node/563771",
    createdAt: "T5, 03/10/2024 - 15:19",
  },
  {
    id: 3,
    title:
      "Thông báo về việc phát Thẻ sinh viên, Giấy báo nhập học và Quà tặng cho sinh viên khóa 2024",
    time: "từ ngày 30/08/2024 - 13/09/2024. ( Sáng từ 8h00-11h30, Chiều từ 14h00- 16h30. Thứ 7 , Chủ nhật và ngày lễ không làm việc)",
    address: "Trước Thư viện (tầng trệt Tòa nhà A).",
    desc: "",
    link: "",
    createdAt: "T6, 30/08/2024 - 11:04",
  },
  {
    id: 4,
    title: "Thông báo gia hạn học phí HK2 năm học 2024-2025",
    time: "từ ngày 02/01/2025 đến hết ngày 06/01/2025.",
    address: "",
    desc: "Form đăng ký của SV",
    link: "https://student.uit.edu.vn/sinhvien/dkgiahanhp",
    createdAt: "T5, 02/01/2025 - 14:37",
  },
];

export const mockStudy = [
  {
    id: 1,
    title: "Lịch học HT2 Nhập môn thị giác máy tính",
    classId: "CS231.P11.1",
    room: "B1.18",
    time: "Tiết 123, Thứ 2 - 30/12/2024",
    description: "Thực hành về các đặc trưng cạnh",
    createdAt: "T2, 22/07/2024 - 09:45",
    routerPath: "(notiDetail)/study/study",
  },
  {
    id: 2,
    title: "Lịch học HT2 Tư duy tính toán",
    classId: "CS117.P11.1",
    room: "B2.08",
    time: "Tiết 678910, Thứ 2 - 30/12/2024",
    description: "Group Assignment",
    createdAt: "T2, 22/07/2024 - 09:45",
    routerPath: "(notiDetail)/study/study",
  },
  {
    id: 3,
    title: "Lịch học bù Xử lý ngôn ngữ tự nhiên",
    classId: "CS221.P11",
    room: "B3.10",
    time: "Tiết 678910, Thứ 77 - 7/12/2024",
    description: "Báo cáo đồ án",
    createdAt: "T2, 22/07/2024 - 09:45",
    routerPath: "(notiDetail)/study/study",
  },
];

export const mockExtracurricular = [
  {
    id: 1,
    title: "Csac casting call 2024: Treat or treat",
    createdAt: "T2, 22/07/2024 - 09:45",
    time: "30/10/2024 - 7/11/2024",
    image1: images.csacPink,
    routerPath: "(notiDetail)/extracurricular/csacCastingCall",
    address: "Phòng B1.2, Trường Đại học Công nghệ Thông tin",
  },
  {
    id: 2,
    title: "CSAC Acoustic Show: The Fool",
    createdAt: "T5, 08/05/2024 - 20:00",
    time: "17h30 - 21h00, thứ Sáu, ngày 10/05/2024",
    image1: images.thefool,
    routerPath: "(notiDetail)/extracurricular/theFool",
    address:
      "Hoàng Gia Coffee - 220 Đường Vành Đai ĐHQG, Bình An, Dĩ An, Bình Dương",
  },
  {
    id: 3,
    title: "CSAC x C.MC Minishow: See you show",
    createdAt: "T5, 08/05/2024 - 20:00",
    time: "18h30 - ngày 17/10/2024",
    image1: images.seeyou,
    address:
      "Sân chào cờ tòa A2 - Trung tâm GDQP Dĩ An, đường Nguyễn Du, Đông Hòa, Dĩ An, Bình Dương",
  },
  {
    id: 4,
    title:
      "Seminar: Sinh viên với nghiên cứu khoa học - Tăng cường phát triển ứng dụng với AI",
    createdAt: "T5, 08/05/2024 - 20:00",
    time: "9h15 -11h30, ngày 04/12/2024",
    image1: images.seminar,
    address: "Hội trường tòa E, tầng 12, Trường Đại học Công nghệ Thông tin.",
  },
];
