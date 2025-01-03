import { images } from "../../constants";

export const headerTab = [
  {
    type: "Tất cả",
    title: "Tất cả",
  },
  {
    type: "Full-time",
    title: "Full-time",
  },
  {
    type: "Part-Time",
    title: "Part-Time",
  },
  {
    type: "Thực tập",
    title: "Thực tập",
  },
];
export const jobDetailTab = [
  {
    type: "Thông tin chung",
    title: "Thông tin chung",
  },
  {
    type: "Yêu cầu",
    title: "Yêu cầu",
  },
  {
    type: "Quyền lợi",
    title: "Quyền lợi",
  },
];

export const mockAll = [
  {
    id: 1,
    title: "Backend Developer",
    type: "Full-time",
    address:
      "Tầng 11, Tòa Taisei Square, 289 Khuất Duy Tiến, Phường Trung Hòa, Cầu Giấy",
    createdAt: "T2, 22/07/2024 - 09:45",
    imgUrl: images.company1,
    routerPath: "(jobDetail)/full-time/fullTime",
  },
  {
    id: 2,
    title: "Frontend Developer",
    type: "Intership",
    address:
      "Địa chỉ: Tầng 7, Toà nhà Phú Mỹ Hưng, số 8 Hoàng Văn Thái, Phường Tân Phú, Quận 7, Tp Hồ Chí Minh",
    createdAt: "T2, 22/07/2024 - 09:45",
    imgUrl: images.company2,
    routerPath: "(jobDetail)/full-time/fullTime",
  },
  {
    id: 3,
    title: "Backend Developer",
    type: "Part-time",
    address:
      "Tòa nhà City Tower, Tower, Đường A2, Phường Linh Trung, Thủ Đức, Hồ Chí Minh",
    createdAt: "T2, 22/07/2024 - 09:45",
    imgUrl: images.company3,
  },
  {
    id: 4,
    title: "Mobile Developer",
    type: "Intership",
    address:
      "Charmington La Pointe, 181 Đ. Cao Thắng, Phường 12, Quận 10, Hồ Chí Minh 70000",
    createdAt: "T2, 22/07/2024 - 09:45",
    imgUrl: images.citynow,
  },
  {
    id: 5,
    title: "DevOps Engineer",
    type: "Full-time",
    address: "Z06, đường số 13, P. Tân Thuận Đông, Quận 7, TP. Hồ Chí Minh",
    createdAt: "T2, 22/07/2024 - 09:45",
    imgUrl: images.vng,
  },
];

export const mockFullTime = [
  {
    id: 1,
    title: "Backend Developer",
    type: "Full-time",
    address:
      "Tầng 11, Tòa Taisei Square, 289 Khuất Duy Tiến, Phường Trung Hòa, Cầu Giấy",
    createdAt: "T2, 22/07/2024 - 09:45",
    imgUrl: images.company1,
    routerPath: "(jobDetail)/full-time/fullTime",
  },
  {
    id: 2,
    title: "DevOps Engineer",
    type: "Full-time",
    address: "Z06, đường số 13, P. Tân Thuận Đông, Quận 7, TP. Hồ Chí Minh",
    createdAt: "T2, 22/07/2024 - 09:45",
    imgUrl: images.vng,
  },
];
export const mockPartTime = [
  {
    id: 1,
    title: "Backend Developer",
    type: "Part-time",
    address:
      "Tòa nhà City Tower, Tower, Đường A2, Phường Linh Trung, Thủ Đức, Hồ Chí Minh",
    createdAt: "T2, 22/07/2024 - 09:45",
    imgUrl: images.company3,
  },
];
export const mockIntership = [
  {
    id: 1,
    title: "Frontend Developer",
    type: "Intership",
    address:
      "Địa chỉ: Tầng 7, Toà nhà Phú Mỹ Hưng, số 8 Hoàng Văn Thái, Phường Tân Phú, Quận 7, Tp Hồ Chí Minh",
    createdAt: "T2, 22/07/2024 - 09:45",
    imgUrl: images.company2,
    routerPath: "(jobDetail)/full-time/fullTime",
  },
  {
    id: 2,
    title: "Mobile Developer",
    type: "Intership",
    address:
      "Charmington La Pointe, 181 Đ. Cao Thắng, Phường 12, Quận 10, Hồ Chí Minh 70000",
    createdAt: "T2, 22/07/2024 - 09:45",
    imgUrl: images.citynow,
  },
];

export const InformationFullTime = {
  title: "Thông tin chung",
  createdAt: "T2, 22/07/2024 - 09:45",
  type: "Full-time",
  address:
    "Tầng 11, Tòa Taisei Square, 289 Khuất Duy Tiến, Phường Trung Hòa, Cầu Giấy, Hà Nội",
  description:
    "Công ty hiện đang tìm kiếm những backend Java fresher, junior tài năng, nhiệt huyết tham gia phát triển các dự án đa dạng với quy mô lớn.",
  list: [
    "Phát triển hệ thống cho các sự kiện game quy mô lớn.",
    "Xây dựng phát triển các dự án phục vụ cho nội bộ công ty.",
  ],
};

export const NeedFullTime = {
  title: "Yêu cầu ứng viên",
  need: [
    "Ứng viên có nền tảng tư duy logic tốt.",
    "Nắm vững Java core, thuật toán cơ bản, HTML, CSS, Js cơ bản.",
    "Nắm vững SQL.",
    "Có sự nhiệt huyết, tinh thần trách nhiệm cao trong công việc.",
    "Có khả năng tự học hỏi, trau dồi.",
  ],
  priority: [
    "Ứng viên có kinh nghiệm về Spring boot, Spring MVC.",
    "Ứng viên có kinh nghiệm làm việc với các hệ thống với số lượng người dùng lớn.",
    "Ứng viên có kinh nghiệm phát triển các hệ thống đa luồng (mutithreading).",
    "Ứng viên có kiến thức về Front Framework (React, Vue.js, Angular).",
    "Ứng viên có kinh nghiệm làm việc với HĐH Linux, Cloud Computing (AWS, GCP, Azure).",
    "Ứng viên có khả năng giao tiếp (kỹ năng đọc, viết tốt, giao tiếp cơ bản) bằng tiếng Anh.",
  ],
};

export const PriorityFullTime = {
  title: "Quyền lợi",
  benefit: [
    "Thu nhập : package 14 tháng lương 1 năm ( bao gồm thưởng lễ tết+ lương tháng 13).",
    "Lương: Thỏa thuận khi phỏng vấn",
    "Đóng bảo hiểm Full lương theo quy định của luật lao động (BHXH,BHYT,BHTN).",
    "Gói bảo hiểm sức khỏe nâng cao MIC.",
    "Các khóa đào tạo về chuyên môn, kỹ năng mềm theo nhu cầu của cá nhân và đội nhóm hàng năm.",
    "Dự án đa đạng, lô trình phát triển rõ ràng, cơ hôi thăng tiến cao.",
    "Có cơ hội đào tạo + du lich nước ngoài hàng năm đối với nhân viên xuất sắc.",
    "Review tăng lương 2 lần/ năm.",
    "Môi trường trẻ trung, năng động chuyên nghiệp,văn phòng hiện đại.",
  ],
  advantage: [
    "Có nền tảng vững chắc về backend, front end.",
    "Có kinh nghiệm phát triển hệ thống quy mô lớn.",
    "Được tiếp xúc và hiểu biết về quy trình phát triển phần mềm, DevOps, Infrastructure, Cloud Computing.",
  ],
};
