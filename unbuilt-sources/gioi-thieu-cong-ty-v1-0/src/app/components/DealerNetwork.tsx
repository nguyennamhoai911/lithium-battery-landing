import { motion } from "motion/react";
import { MapPin, Building2, Store, Wrench, Search, ArrowRight } from "lucide-react";
import { useState } from "react";

type LocationType = "branch" | "dealer" | "service";

interface Location {
  id: string;
  name: string;
  city: string;
  type: LocationType;
  address: string;
  phone: string;
  position: { top: string; left: string };
}

export function DealerNetwork() {
  const [selectedType, setSelectedType] = useState<LocationType | "all">("all");
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const locations: Location[] = [
    {
      id: "1",
      name: "PKG Battery Hà Nội",
      city: "Hà Nội",
      type: "branch",
      address: "Khu công nghiệp, Hà Nội",
      phone: "024 xxxx xxxx",
      position: { top: "20%", left: "58%" },
    },
    {
      id: "2",
      name: "PKG Battery TP.HCM",
      city: "TP.HCM",
      type: "branch",
      address: "Khu công nghiệp, TP.HCM",
      phone: "028 xxxx xxxx",
      position: { top: "82%", left: "55%" },
    },
    {
      id: "3",
      name: "Đại lý Đà Nẵng",
      city: "Đà Nẵng",
      type: "dealer",
      address: "Khu công nghiệp Hòa Khánh, Đà Nẵng",
      phone: "0236 xxxx xxx",
      position: { top: "52%", left: "65%" },
    },
    {
      id: "4",
      name: "Đại lý Cần Thơ",
      city: "Cần Thơ",
      type: "dealer",
      address: "Khu công nghiệp Trà Nóc, Cần Thơ",
      phone: "0292 xxxx xxx",
      position: { top: "88%", left: "52%" },
    },
    {
      id: "5",
      name: "Trung tâm dịch vụ Hải Phòng",
      city: "Hải Phòng",
      type: "service",
      address: "Khu công nghiệp Đình Vũ, Hải Phòng",
      phone: "0225 xxxx xxx",
      position: { top: "24%", left: "64%" },
    },
    {
      id: "6",
      name: "Đại lý Bình Dương",
      city: "Bình Dương",
      type: "dealer",
      address: "KCN Vsip, Bình Dương",
      phone: "0274 xxxx xxx",
      position: { top: "78%", left: "56%" },
    },
    {
      id: "7",
      name: "Đại lý Đồng Nai",
      city: "Đồng Nai",
      type: "dealer",
      address: "KCN Biên Hòa, Đồng Nai",
      phone: "0251 xxxx xxx",
      position: { top: "80%", left: "58%" },
    },
    {
      id: "8",
      name: "Trung tâm dịch vụ Hải Dương",
      city: "Hải Dương",
      type: "service",
      address: "KCN Nam Sách, Hải Dương",
      phone: "0220 xxxx xxx",
      position: { top: "22%", left: "62%" },
    },
  ];

  const filteredLocations = locations.filter((loc) => {
    const matchesType = selectedType === "all" || loc.type === selectedType;
    const matchesSearch = loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          loc.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const typeConfig = {
    branch: { icon: Building2, label: "Chi nhánh", color: "#D61F26" },
    dealer: { icon: Store, label: "Đại lý", color: "#B01A21" },
    service: { icon: Wrench, label: "Trung tâm dịch vụ", color: "#E5E5E5" },
  };

  const stats = [
    { value: "08+", label: "Điểm hiện diện toàn quốc" },
    { value: "24/7", label: "Hỗ trợ khách hàng" },
    { value: "100%", label: "Sản phẩm chính hãng" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#111111] to-[#2B2B2B] text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="w-12 h-1 bg-[#D61F26] mx-auto" />
          <h2 className="text-4xl md:text-5xl">
            Mạng lưới chi nhánh / đại lý toàn quốc
          </h2>
          <p className="text-white/70 leading-relaxed">
            PKG Battery đang xây dựng mạng lưới hiện diện trên toàn quốc nhằm mang giải pháp pin Lithium chất lượng cao đến gần hơn với doanh nghiệp tại nhiều khu vực. Hệ thống chi nhánh và đối tác phân phối giúp tăng tốc độ hỗ trợ, nâng cao trải nghiệm khách hàng và tạo nền tảng tăng trưởng bền vững trong tương lai.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center space-y-2"
            >
              <div className="text-4xl md:text-5xl text-[#D61F26]">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Filters & Location List */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Tìm theo tỉnh/thành..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder:text-white/40 focus:border-[#D61F26] focus:outline-none transition-colors"
              />
            </div>

            {/* Type Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedType("all")}
                className={`px-4 py-2 rounded-sm transition-all ${
                  selectedType === "all"
                    ? "bg-[#D61F26] text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                Tất cả
              </button>
              {Object.entries(typeConfig).map(([type, config]) => {
                const Icon = config.icon;
                return (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type as LocationType)}
                    className={`px-4 py-2 rounded-sm transition-all flex items-center gap-2 ${
                      selectedType === type
                        ? "bg-[#D61F26] text-white"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {config.label}
                  </button>
                );
              })}
            </div>

            {/* Location List */}
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {filteredLocations.map((location) => {
                const Icon = typeConfig[location.type].icon;
                return (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedLocation(location)}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      selectedLocation?.id === location.id
                        ? "bg-[#D61F26] shadow-lg"
                        : "bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 mt-1 flex-shrink-0" />
                      <div className="flex-1 space-y-1">
                        <h4 className="text-white">{location.name}</h4>
                        <p className="text-sm text-white/60">{location.city}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Interactive Map */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] bg-[#1a1a1a] rounded-lg overflow-hidden"
            >
              {/* Vietnam Map SVG Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg viewBox="0 0 100 200" className="h-full" fill="none" stroke="white" strokeWidth="0.5">
                  <path d="M 50 10 L 60 20 L 65 35 L 70 50 L 75 70 L 72 90 L 65 110 L 60 130 L 55 150 L 52 170 L 50 190 L 48 170 L 45 150 L 40 130 L 35 110 L 28 90 L 25 70 L 30 50 L 35 35 L 40 20 Z" />
                </svg>
              </div>

              {/* Network Connections */}
              <svg className="absolute inset-0 w-full h-full opacity-10">
                {filteredLocations.map((loc1, i) =>
                  filteredLocations.slice(i + 1).map((loc2, j) => (
                    <line
                      key={`${i}-${j}`}
                      x1={loc1.position.left}
                      y1={loc1.position.top}
                      x2={loc2.position.left}
                      y2={loc2.position.top}
                      stroke="#D61F26"
                      strokeWidth="0.5"
                    />
                  ))
                )}
              </svg>

              {/* Location Markers */}
              {filteredLocations.map((location, index) => {
                const Icon = typeConfig[location.type].icon;
                return (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedLocation(location)}
                    className="absolute cursor-pointer group"
                    style={{ top: location.position.top, left: location.position.left }}
                  >
                    {/* Pulsing Ring */}
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className="absolute inset-0 w-8 h-8 bg-[#D61F26] rounded-full -translate-x-1/2 -translate-y-1/2"
                    />

                    {/* Pin */}
                    <div
                      className={`relative z-10 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all ${
                        selectedLocation?.id === location.id
                          ? "bg-[#D61F26] scale-125 shadow-lg shadow-[#D61F26]/50"
                          : "bg-[#2B2B2B] border-2 border-[#D61F26] group-hover:bg-[#D61F26] group-hover:scale-110"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                      <div className="bg-[#111111] border border-[#D61F26] px-3 py-2 rounded whitespace-nowrap text-sm">
                        {location.name}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Selected Location Detail Popup */}
              {selectedLocation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-6 left-6 right-6 bg-[#111111] border border-[#D61F26] rounded-lg p-6 shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        {(() => {
                          const Icon = typeConfig[selectedLocation.type].icon;
                          return <Icon className="w-6 h-6 text-[#D61F26]" />;
                        })()}
                        <h3 className="text-xl text-white">{selectedLocation.name}</h3>
                      </div>
                      <div className="space-y-1 text-sm text-white/70">
                        <p>{selectedLocation.address}</p>
                        <p>Hotline: {selectedLocation.phone}</p>
                        <p className="text-[#D61F26]">{typeConfig[selectedLocation.type].label}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedLocation(null)}
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-[#D61F26] to-[#B01A21] text-white rounded-sm hover:shadow-lg hover:shadow-[#D61F26]/50 transition-all flex items-center gap-2"
          >
            Tìm điểm gần bạn
            <Search className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 border-2 border-white/20 text-white rounded-sm hover:bg-white/10 transition-all flex items-center gap-2"
          >
            Trở thành đối tác PKG Battery
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
