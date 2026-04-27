import { Dealer, SocialPost } from './types';

export const dealers: Dealer[] = [
  {
    id: "d1",
    name: "PKGbattery Hà Nội - Head Office",
    address: "123 Thái Hà, Đống Đa, Hà Nội",
    phone: "0989 000 001",
    email: "hanoi@pkgbattery.com",
    region: "North",
    description: "Trung tâm điều hành và hỗ trợ kỹ thuật khu vực phía Bắc.",
    lat: 21.0116,
    lng: 105.8208
  },
  {
    id: "d2",
    name: "PKGbattery TP. Hồ Chí Minh",
    address: "123 Điện Biên Phủ, Bình Thạnh, TP.HCM",
    phone: "0988 000 002",
    email: "hcm@pkgbattery.com",
    region: "South",
    description: "Văn phòng đại diện và kho vận khu vực miền Nam.",
    lat: 10.7961,
    lng: 106.7017
  },
  {
    id: "d3",
    name: "PKGbattery Đà Nẵng",
    address: "80 Trần Hưng Đạo, Sơn Trà, Đà Nẵng",
    phone: "0909 000 003",
    region: "Central",
    description: "Đại lý ủy quyền và trung tâm bảo hành miền Trung.",
    lat: 16.0544,
    lng: 108.2022
  },
  {
    id: "d4",
    name: "PKGbattery Hải Phòng",
    address: "45 Lạch Tray, Ngô Quyền, Hải Phòng",
    phone: "0912 000 004",
    region: "North",
    description: "Phân phối giải pháp pin lithium công nghiệp.",
    lat: 20.8449,
    lng: 106.6881
  },
  {
    id: "d5",
    name: "PKGbattery Cần Thơ",
    address: "20 mậu Thân, Ninh Kiều, Cần Thơ",
    phone: "0939 000 005",
    region: "South",
    description: "Hỗ trợ khách hàng khu vực Miền Tây.",
    lat: 10.0452,
    lng: 105.7469
  },
  {
    id: "d6",
    name: "PKGbattery Bình Dương",
    address: "15 Đại Lộ Bình Dương, Thuận An, Bình Dương",
    phone: "0977 000 006",
    region: "South",
    description: "Chuyên dụng cho các khu công nghiệp và OEM.",
    lat: 10.9126,
    lng: 106.6661
  },
  {
    id: "d7",
    name: "PKGbattery Nghệ An",
    address: "68 Lê Lợi, TP. Vinh, Nghệ An",
    phone: "0944 000 007",
    region: "Central",
    description: "Điểm phân phối và bảo hành khu vực Bắc Trung Bộ.",
    lat: 18.6733,
    lng: 105.6813
  },
  {
    id: "d8",
    name: "PKGbattery Bắc Ninh",
    address: "10 Nguyễn Văn Cừ, TP. Bắc Ninh",
    phone: "0966 000 008",
    region: "North",
    description: "Phục vụ chuỗi cung ứng linh kiện điện tử.",
    lat: 21.1868,
    lng: 106.0763
  }
];

export const socialPosts: SocialPost[] = [
  {
    id: "s1",
    type: "Video",
    title: "Thử nghiệm độ bền Cell pin LiFePO4 tại phòng Lab",
    thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=400",
    link: "#",
    category: "Product Test"
  },
  {
    id: "s2",
    type: "Update",
    title: "Hợp tác cung cấp hệ thống lưu trữ ESS 2MWh cho KCN Bắc Giang",
    thumbnail: "https://images.unsplash.com/photo-1548333341-9c3f0da87675?auto=format&fit=crop&q=80&w=400",
    link: "#",
    category: "Dealer Activity"
  },
  {
    id: "s3",
    type: "Video",
    title: "Quy trình kiểm soát chất lượng chuẩn ISO 9001 tại nhà máy",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
    link: "#",
    category: "Factory Insight"
  },
  {
    id: "s4",
    type: "Post",
    title: "Hướng dẫn cài đặt BMS cho xe Golf điện chuyên dụng",
    thumbnail: "https://images.unsplash.com/photo-1533038595360-15f1873c38cc?auto=format&fit=crop&q=80&w=400",
    link: "#",
    category: "Technical Guide"
  }
];
