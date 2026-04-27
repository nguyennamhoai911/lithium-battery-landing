export type InquiryKey =
  | "quote"
  | "dealer"
  | "oem"
  | "tech"
  | "warranty"
  | "partnership";

export const INQUIRIES: {
  key: InquiryKey;
  title: string;
  titleVi: string;
  desc: string;
  iconKey: string;
  cta: string;
  microcopy: string;
}[] = [
  {
    key: "quote",
    title: "Request a Quote",
    titleVi: "Yêu cầu báo giá",
    desc: "For bulk purchase, project supply and product pricing.",
    iconKey: "calculator",
    cta: "Get My Quote",
    microcopy:
      "PKGbattery sales team will contact you with product recommendation and quotation details.",
  },
  {
    key: "dealer",
    title: "Become a Dealer",
    titleVi: "Đăng ký đại lý",
    desc: "For distributors, shops and regional partners in Vietnam.",
    iconKey: "store",
    cta: "Apply as a Dealer",
    microcopy:
      "Our team will review your region and contact you for dealer policy details.",
  },
  {
    key: "oem",
    title: "OEM / ODM Project",
    titleVi: "Dự án OEM/ODM",
    desc: "Custom battery pack design and manufacturing.",
    iconKey: "cpu",
    cta: "Start OEM Consultation",
    microcopy:
      "Our technical team will review your requirement and suggest the next step.",
  },
  {
    key: "tech",
    title: "Technical Support",
    titleVi: "Hỗ trợ kỹ thuật",
    desc: "Installation, compatibility, troubleshooting and usage support.",
    iconKey: "wrench",
    cta: "Request Technical Support",
    microcopy:
      "Provide your product and issue, our engineers will call you back at your preferred time.",
  },
  {
    key: "warranty",
    title: "Warranty Claim",
    titleVi: "Bảo hành sản phẩm",
    desc: "Product issue, serial number, purchase proof and after-sales service.",
    iconKey: "shield",
    cta: "Submit Warranty Request",
    microcopy:
      "Please include your serial number and purchase channel for faster verification.",
  },
  {
    key: "partnership",
    title: "Partnership / Other",
    titleVi: "Hợp tác khác",
    desc: "Media, business partnership, procurement or general inquiry.",
    iconKey: "handshake",
    cta: "Send Inquiry",
    microcopy:
      "Tell us briefly about your organization and the topic you'd like to discuss.",
  },
];

export const DEALERS = [
  {
    id: "hn",
    name: "PKGbattery Dealer Hà Nội",
    region: "north",
    regionLabel: "Miền Bắc",
    address: "123 Thái Hà, Đống Đa, Hà Nội",
    phone: "0989 120 088",
    email: "hanoi@pkgbattery.com",
    coverage: "Hà Nội & khu vực miền Bắc",
    hours: "T2–T7, 8:00–18:00",
    x: 52,
    y: 18,
  },
  {
    id: "hp",
    name: "PKGbattery Dealer Hải Phòng",
    region: "north",
    regionLabel: "Miền Bắc",
    address: "88 Lạch Tray, Ngô Quyền, Hải Phòng",
    phone: "0989 120 089",
    email: "haiphong@pkgbattery.com",
    coverage: "Hải Phòng, Quảng Ninh, Thái Bình",
    hours: "T2–T7, 8:00–18:00",
    x: 62,
    y: 22,
  },
  {
    id: "tn",
    name: "PKGbattery Dealer Thanh Hóa",
    region: "north",
    regionLabel: "Miền Bắc",
    address: "215 Lê Lợi, TP. Thanh Hóa",
    phone: "0989 120 090",
    email: "thanhhoa@pkgbattery.com",
    coverage: "Thanh Hóa, Nghệ An, Hà Tĩnh",
    hours: "T2–T7, 8:00–18:00",
    x: 48,
    y: 36,
  },
  {
    id: "dn",
    name: "PKGbattery Dealer Đà Nẵng",
    region: "central",
    regionLabel: "Miền Trung",
    address: "80 Trần Hưng Đạo, Sơn Trà, Đà Nẵng",
    phone: "0909 220 011",
    email: "danang@pkgbattery.com",
    coverage: "Đà Nẵng, Huế, Quảng Nam",
    hours: "T2–T7, 8:00–18:00",
    x: 60,
    y: 50,
  },
  {
    id: "nt",
    name: "PKGbattery Dealer Nha Trang",
    region: "central",
    regionLabel: "Miền Trung",
    address: "152 Trần Phú, Lộc Thọ, Nha Trang",
    phone: "0909 220 012",
    email: "nhatrang@pkgbattery.com",
    coverage: "Khánh Hòa, Phú Yên, Ninh Thuận",
    hours: "T2–T7, 8:00–18:00",
    x: 66,
    y: 64,
  },
  {
    id: "bmt",
    name: "PKGbattery Dealer Buôn Ma Thuột",
    region: "central",
    regionLabel: "Miền Trung",
    address: "45 Lê Duẩn, Buôn Ma Thuột, Đắk Lắk",
    phone: "0909 220 013",
    email: "bmt@pkgbattery.com",
    coverage: "Tây Nguyên",
    hours: "T2–T7, 8:00–18:00",
    x: 56,
    y: 70,
  },
  {
    id: "hcm",
    name: "PKGbattery Dealer TP. Hồ Chí Minh",
    region: "south",
    regionLabel: "Miền Nam",
    address: "123 Điện Biên Phủ, Bình Thạnh, TP.HCM",
    phone: "0988 330 077",
    email: "hcm@pkgbattery.com",
    coverage: "TP.HCM & Đông Nam Bộ",
    hours: "T2–T7, 8:00–18:00",
    x: 54,
    y: 84,
  },
  {
    id: "ct",
    name: "PKGbattery Dealer Cần Thơ",
    region: "south",
    regionLabel: "Miền Nam",
    address: "210 Trần Hưng Đạo, Ninh Kiều, Cần Thơ",
    phone: "0988 330 078",
    email: "cantho@pkgbattery.com",
    coverage: "Đồng bằng Sông Cửu Long",
    hours: "T2–T7, 8:00–18:00",
    x: 46,
    y: 90,
  },
];

export const PRODUCT_OPTIONS = [
  "Lithium Battery (LiFePO4)",
  "Energy Storage Battery (ESS)",
  "Golf Cart Battery",
  "EV Battery Pack",
  "UPS Battery",
  "Custom Battery Pack",
];

export const APPLICATIONS = [
  "Solar storage",
  "Electric vehicle",
  "Golf cart",
  "UPS / data center",
  "Industrial equipment",
  "Marine / RV",
  "Khác / Other",
];
