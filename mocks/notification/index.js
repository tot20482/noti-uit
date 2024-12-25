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
    id: "1",
    title: "Đăng ký đề tài đồ án 1 và đồ án 2 học kỳ 1 năm học 2024 - 2025",
    description:
      "Khoa Công nghệ Phần mềm thông báo các sinh viên đăng ký học phần thực tập doanh nghiệp học kỳ 1 năm học 2024 - 2025 lớp SE501.P11 và SE501.P11.PMCL cập nhật thông tin thực tập doanh nghiệp vào các file sau...",
    createdAt: "T2, 22/07/2024 - 09:45",
  },
  {
    id: "2",
    title: "Đăng ký đề tài đồ án 1 và đồ án 2 học kỳ 1 năm học 2024 - 2025",
    description:
      "Khoa Công nghệ Phần mềm thông báo các sinh viên đăng ký học phần thực tập doanh nghiệp học kỳ 1 năm học 2024 - 2025 lớp SE501.P11 và SE501.P11.PMCL cập nhật thông tin thực tập doanh nghiệp vào các file sau...",
    createdAt: "T2, 22/07/2024 - 09:45",
  },
];

export const mockStudy = [
  {
    id: "1",
    title: "Đăng ký đề tài đồ án 1 và đồ án 2 học kỳ 1 năm học 2024 - 2025",
    description:
      "Khoa Công nghệ Phần mềm thông báo các sinh viên đăng ký học phần thực tập doanh nghiệp học kỳ 1 năm học 2024 - 2025 lớp SE501.P11 và SE501.P11.PMCL cập nhật thông tin thực tập doanh nghiệp vào các file sau...",
    createdAt: "T2, 22/07/2024 - 09:45",
  },
  {
    id: "2",
    title: "Đăng ký đề tài đồ án 1 và đồ án 2 học kỳ 1 năm học 2024 - 2025",
    description:
      "Khoa Công nghệ Phần mềm thông báo các sinh viên đăng ký học phần thực tập doanh nghiệp học kỳ 1 năm học 2024 - 2025 lớp SE501.P11 và SE501.P11.PMCL cập nhật thông tin thực tập doanh nghiệp vào các file sau...",
    createdAt: "T2, 22/07/2024 - 09:45",
  },
];

export const mockExtracurricular = [
  {
    id: "1",
    title: "Csac casting call 2024: Treat or treat",
    createdAt: "T2, 22/07/2024 - 09:45",
    time: "30/10/2024 - 7/11/2024",
    image1: images.csacPink,
    image2: images.csacBlue,
    routerPath: "(notiDetail)/extracurricular/csacCastingCall",
    address:
      "Tầng 11, Tòa Taisei Square, 289 Khuất Duy Tiến, Phường Trung Hòa, Cầu Giấy",
    object: "Sinh viên trên địa bàn TP.HCM",
    fields: [
      "Ca hát và rap",
      "Nhạc cụ",
      "Truyền thông: Content Creator, Content Writer, Design and Video Editor, Photographer",
      "Sự kiện - Hậu cần: MC, Tổ chức, Hậu cần, Kỹ thuật",
    ],
    steps: [
      {
        id: 1,
        description: "Đọc yêu cầu casting",
        link: "TẠI ĐÂY",
      },
      {
        id: 2,
        description: "Điền form đăng ký casting",
        link: "TẠI ĐÂY",
      },
      {
        id: 3,
        description:
          "Chờ email từ CSAC và tham gia buổi casting trực tiếp (Sẽ có thông báo sau)",
      },
    ],
  },
];
