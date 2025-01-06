import { icons } from "@/constants";

export const CalendarTab = [
  {
    type: "Tất cả",
    title: "Tất cả",
  },
  {
    type: "Lịch học",
    title: "Lịch học",
  },
  {
    type: "Deadline",
    title: "Deadline",
  },
  {
    type: "Khác",
    title: "Khác",
  },
];

export const MockFirstDay = [
  {
    id: 1,
    title: "CS231.P11.1",
    desc: "Lịch học HT2 Nhập môn Thị giác Máy tính",
    room: "Phòng B1.18",
    time: "Tiết 678(13h - 15h15)",
    status: "",
    icon: "",
  },
  {
    id: 2,
    title: "IE106.P12",
    desc: "Nộp đồ án cuối kì",
    room: "",
    time: "Thứ 2, 13/01/2025 23:59:00",
    status: "Chưa nộp bài",
    icon: icons.check,
  },
];

export const MockSecondDay = [
  {
    id: 1,
    title: "SE317.P11.1",
    desc: "Lịch học HT2 Công nghệ Web và ứng dụng",
    room: "Phòng B6.06",
    time: "Tiết 123(7h30 - 9h30)",
    status: "",
    icon: "",
  },
  {
    id: 2,
    title: "IE106.P12",
    desc: "Nộp đồ án cuối kì",
    room: "",
    time: "Thứ 2, 13/01/2025 23:59:00",
    status: "Chưa nộp bài",
    icon: icons.check,
  },
];

export const MockThirdDay = [
  {
    id: 1,
    title: "SE317.P11.1",
    desc: "Nộp báo cáo đồ án Xử lý ngôn ngữ tự nhiên",
    room: "",
    time: "Thứ 5, 15/01/2025 23:59:00",
    status: "Chưa nộp bài",
    icon: icons.check,
  },
  {
    id: 2,
    title: "IE106.P12",
    desc: "Nộp đồ án cuối kì",
    room: "",
    time: "Thứ 2, 13/01/2025 23:59:00",
    status: "Đã nộp bài",
    icon: icons.checked,
  },
];

export const MockFourthDay = [
  {
    id: 1,
    title: "CS336.P12",
    desc: "Truy vấn thông tin đa phương tiện",
    room: "Phòng B9.02",
    time: "Ca 2 (9h30)",
    status: "",
    icon: "",
  },
];
