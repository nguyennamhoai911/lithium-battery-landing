import { useState, useEffect } from 'react';
import { ProductCard } from './components/ProductCard';
import { CategoryNav } from './components/CategoryNav';
import { ChevronRight, Zap, Package, Shield, ArrowRight } from 'lucide-react';

const categories = [
  { id: 'forklift', name: 'Xe Nâng Điện' },
  { id: 'golf-cart', name: 'Xe Điện Du Lịch' },
  { id: 'agv', name: 'AGV / Robot' },
  { id: 'charger', name: 'Bộ Sạc - Trạm Sạc' },
  { id: 'ess', name: 'Hệ Thống ESS' },
];

const products = {
  forklift: [
    {
      id: 1,
      name: 'Pin Lithium 48V 420Ah',
      description: 'Giải pháp năng lượng cao cấp cho xe nâng điện, tuổi thọ vượt trội',
      specs: ['48V', '420Ah', '3000+ Cycles', 'IP54'],
      image: 'https://images.unsplash.com/photo-1678812560391-c52e328657ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbGl0aGl1bSUyMGJhdHRlcnklMjBmb3JrbGlmdHxlbnwxfHx8fDE3NzY0MDM5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      name: 'Pin Lithium 24V 280Ah',
      description: 'Thiết kế nhỏ gọn, hiệu suất ổn định cho xe nâng trọng tải nhẹ',
      specs: ['24V', '280Ah', 'Fast Charge', 'BMS Smart'],
      image: 'https://images.unsplash.com/photo-1763665814546-27c2c003317e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JrbGlmdCUyMHdhcmVob3VzZSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc2MzYwMDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      name: 'Pin Lithium 80V 560Ah',
      description: 'Sức mạnh tối ưu cho xe nâng hạng nặng công nghiệp',
      specs: ['80V', '560Ah', 'Heavy Duty', '5000+ Cycles'],
      image: 'https://images.unsplash.com/photo-1661997608910-da43d46039a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRoaXVtJTIwYmF0dGVyeSUyMHRlY2hub2xvZ3klMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NjQwMzkxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      name: 'Pin Lithium 48V 300Ah',
      description: 'Giải pháp tiết kiệm chi phí với hiệu suất cao',
      specs: ['48V', '300Ah', 'Compact', 'Modular'],
      image: 'https://images.unsplash.com/photo-1678812560391-c52e328657ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbGl0aGl1bSUyMGJhdHRlcnklMjBmb3JrbGlmdHxlbnwxfHx8fDE3NzY0MDM5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ],
  golfCart: [
    {
      id: 5,
      name: 'Pin Lithium 48V 150Ah',
      description: 'Dung lượng tối ưu cho xe điện du lịch, golf cart',
      specs: ['48V', '150Ah', 'Lightweight', 'Long Range'],
      image: 'https://images.unsplash.com/photo-1684599994855-ab66cf03b106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGdvbGYlMjBjYXJ0JTIwYmF0dGVyeXxlbnwxfHx8fDE3NzY0MDM5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 6,
      name: 'Pin Lithium 72V 200Ah',
      description: 'Hiệu suất cao cho xe điện thương mại cao cấp',
      specs: ['72V', '200Ah', 'Premium', 'Smart BMS'],
      image: 'https://images.unsplash.com/photo-1767990495521-95cceb571125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBiYXR0ZXJ5JTIwcGFja3xlbnwxfHx8fDE3NzY0MDM5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 7,
      name: 'Pin Lithium 48V 100Ah',
      description: 'Thiết kế nhỏ gọn cho xe điện sân golf',
      specs: ['48V', '100Ah', 'Compact', '2500+ Cycles'],
      image: 'https://images.unsplash.com/photo-1684599994855-ab66cf03b106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGdvbGYlMjBjYXJ0JTIwYmF0dGVyeXxlbnwxfHx8fDE3NzY0MDM5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ],
  agv: [
    {
      id: 8,
      name: 'Pin AGV 24V 100Ah',
      description: 'Chuyên dụng cho robot AGV, AMR công nghiệp',
      specs: ['24V', '100Ah', 'AGV Ready', 'CAN Protocol'],
      image: 'https://images.unsplash.com/photo-1697057914230-320d7c251f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBR1YlMjByb2JvdCUyMHdhcmVob3VzZSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzc2NDAzOTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 9,
      name: 'Pin Robot 48V 60Ah',
      description: 'Năng lượng bền bỉ cho robot công nghiệp 24/7',
      specs: ['48V', '60Ah', 'Modular', 'Hot Swap'],
      image: 'https://images.unsplash.com/photo-1715059250871-08786b8a884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3QlMjBhcm0lMjBmYWN0b3J5fGVufDF8fHx8MTc3NjM0MDU2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 10,
      name: 'Pin AMR 36V 80Ah',
      description: 'Tối ưu cho mobile robot tự hành',
      specs: ['36V', '80Ah', 'Smart Charge', 'IoT Ready'],
      image: 'https://images.unsplash.com/photo-1697057914230-320d7c251f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBR1YlMjByb2JvdCUyMHdhcmVob3VzZSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzc2NDAzOTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 11,
      name: 'Pin Đổi Nhanh 24V 50Ah',
      description: 'Giải pháp đổi pin nhanh cho hệ thống robot',
      specs: ['24V', '50Ah', 'Quick Swap', 'Fleet Ready'],
      image: 'https://images.unsplash.com/photo-1715059250871-08786b8a884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3QlMjBhcm0lMjBmYWN0b3J5fGVufDF8fHx8MTc3NjM0MDU2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ],
  charger: [
    {
      id: 12,
      name: 'Bộ Sạc 48V 30A',
      description: 'Sạc nhanh, thông minh cho pin lithium 48V',
      specs: ['48V', '30A', 'Smart Charge', 'Multi-Protocol'],
      image: 'https://images.unsplash.com/photo-1634255068148-f2c820a5ab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFViUyMGNoYXJnaW5nJTIwc3RhdGlvbiUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc2NDAzOTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 13,
      name: 'Trạm Sạc Đa Năng 4 Cổng',
      description: 'Quản lý sạc nhiều pin đồng thời',
      specs: ['4 Ports', 'Fleet Charge', 'Cloud Monitor', 'Auto Balance'],
      image: 'https://images.unsplash.com/photo-1634255068148-f2c820a5ab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFViUyMGNoYXJnaW5nJTIwc3RhdGlvbiUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc2NDAzOTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 14,
      name: 'Bộ Sạc 80V 50A',
      description: 'Sạc công suất cao cho xe nâng hạng nặng',
      specs: ['80V', '50A', 'High Power', 'Efficiency 95%'],
      image: 'https://images.unsplash.com/photo-1634255068148-f2c820a5ab2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFViUyMGNoYXJnaW5nJTIwc3RhdGlvbiUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc2NDAzOTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ],
  ess: [
    {
      id: 15,
      name: 'ESS 100kWh Industrial',
      description: 'Hệ thống lưu trữ năng lượng cho nhà máy, doanh nghiệp',
      specs: ['100kWh', 'Modular', 'Grid Tied', '10+ Years'],
      image: 'https://images.unsplash.com/photo-1766507679641-51002768af6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBzdG9yYWdlJTIwc3lzdGVtJTIwYmF0dGVyeXxlbnwxfHx8fDE3NzY0MDM5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 16,
      name: 'ESS 250kWh Commercial',
      description: 'Giải pháp năng lượng quy mô lớn cho thương mại',
      specs: ['250kWh', 'Scalable', 'Peak Shaving', 'Smart Grid'],
      image: 'https://images.unsplash.com/photo-1766507679659-30076abc8c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMHN0b3JhZ2UlMjBncmlkfGVufDF8fHx8MTc3NjQwMzkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 17,
      name: 'ESS 500kWh Utility Scale',
      description: 'Hệ thống lưu trữ công suất lớn cho nhà máy điện',
      specs: ['500kWh', 'Utility Grade', 'Container', 'Turnkey'],
      image: 'https://images.unsplash.com/photo-1766507679641-51002768af6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBzdG9yYWdlJTIwc3lzdGVtJTIwYmF0dGVyeXxlbnwxfHx8fDE3NzY0MDM5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ],
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState('forklift');

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map(cat => ({
        id: cat.id,
        element: document.getElementById(cat.id)
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        setActiveCategory(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
        {/* Technical background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px),
                             repeating-linear-gradient(90deg, transparent, transparent 2px, #fff 2px, #fff 4px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-neutral-400 mb-8">
            <span>Trang chủ</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Tất cả sản phẩm</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Giải pháp pin lithium
                <span className="block text-[#DC2626]">cho mọi ứng dụng công nghiệp</span>
              </h1>
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                PKG Battery cung cấp hệ sinh thái hoàn chỉnh các giải pháp năng lượng lithium cho doanh nghiệp,
                từ xe nâng điện đến hệ thống lưu trữ năng lượng quy mô lớn.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="border-l-2 border-[#DC2626] pl-4">
                  <div className="text-3xl font-bold text-[#DC2626] mb-1">5</div>
                  <div className="text-sm text-neutral-400">Nhóm sản phẩm</div>
                </div>
                <div className="border-l-2 border-[#DC2626] pl-4">
                  <div className="text-3xl font-bold text-[#DC2626] mb-1">50+</div>
                  <div className="text-sm text-neutral-400">Cấu hình</div>
                </div>
                <div className="border-l-2 border-[#DC2626] pl-4">
                  <div className="text-3xl font-bold text-[#DC2626] mb-1">100%</div>
                  <div className="text-sm text-neutral-400">Tùy chỉnh</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-sm">
                  <Zap className="w-8 h-8 text-[#DC2626] mb-3" />
                  <div className="text-sm font-medium">Sạc nhanh</div>
                  <div className="text-xs text-neutral-400 mt-1">Tiết kiệm thời gian 50%</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-sm">
                  <Package className="w-8 h-8 text-[#DC2626] mb-3" />
                  <div className="text-sm font-medium">Modular</div>
                  <div className="text-xs text-neutral-400 mt-1">Linh hoạt mở rộng</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-sm">
                  <Shield className="w-8 h-8 text-[#DC2626] mb-3" />
                  <div className="text-sm font-medium">An toàn</div>
                  <div className="text-xs text-neutral-400 mt-1">BMS thông minh</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DC2626] to-transparent" />
      </section>

      {/* Category Navigation */}
      <CategoryNav 
        categories={categories} 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Products Sections */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Section 1: Forklift - Featured Layout */}
        <section id="forklift" className="mb-32 scroll-mt-24">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Bình Ắc Quy Pin Lithium Cho Xe Nâng Điện
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-[#DC2626] to-transparent" />
            </div>
            <p className="text-neutral-600 text-lg max-w-3xl">
              Giải pháp năng lượng hiệu suất cao cho xe nâng công nghiệp, tối ưu thời gian vận hành và giảm chi phí bảo trì.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <ProductCard
              {...products.forklift[0]}
              featured
              className="lg:row-span-2"
            />
            <div className="grid gap-6">
              <ProductCard {...products.forklift[1]} />
              <ProductCard {...products.forklift[2]} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <ProductCard {...products.forklift[3]} />
          </div>

          <div className="flex justify-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white hover:bg-[#DC2626] transition-colors">
              <span className="font-medium">Khám phá dòng xe nâng điện</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Section 2: Golf Cart - Horizontal Layout */}
        <section id="golf-cart" className="mb-32 scroll-mt-24 bg-neutral-50 -mx-4 md:-mx-8 px-4 md:px-8 py-16">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Bình Ắc Quy Lithium Cho Xe Điện Du Lịch
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-[#DC2626] to-transparent" />
            </div>
            <p className="text-neutral-600 text-lg max-w-3xl">
              Pin lithium cao cấp cho xe điện golf, xe buýt du lịch, với khả năng sạc nhanh và tuổi thọ vượt trội.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {products.golfCart.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="flex justify-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors">
              <span className="font-medium">Xem chi tiết xe điện du lịch</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Section 3: AGV - Dark Contrast */}
        <section id="agv" className="mb-32 scroll-mt-24 bg-neutral-900 text-white -mx-4 md:-mx-8 px-4 md:px-8 py-16 relative overflow-hidden">
          {/* Tech pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, transparent 25%, #fff 25%, #fff 50%, transparent 50%, transparent 75%, #fff 75%, #fff)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Pin Cho Xe AGV / Robot
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-[#DC2626] to-transparent" />
              </div>
              <p className="text-neutral-300 text-lg max-w-3xl">
                Chuyên dụng cho robot công nghiệp, AGV, AMR với khả năng đổi pin nhanh và hoạt động liên tục 24/7.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {products.agv.map(product => (
                <ProductCard 
                  key={product.id} 
                  {...product}
                  className="bg-neutral-800 border-neutral-700"
                />
              ))}
            </div>

            <div className="flex justify-center">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors">
                <span className="font-medium">Tìm hiểu giải pháp AGV</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Section 4: Charger - Modular Grid */}
        <section id="charger" className="mb-32 scroll-mt-24">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Bộ Sạc - Trạm Sạc
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-[#DC2626] to-transparent" />
            </div>
            <p className="text-neutral-600 text-lg max-w-3xl">
              Hệ thống sạc thông minh, quản lý năng lượng tối ưu cho đội xe và thiết bị công nghiệp.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {products.charger.map((product, index) => (
              <ProductCard 
                key={product.id} 
                {...product}
                className={index === 1 ? 'md:col-span-2 lg:col-span-1' : ''}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white hover:bg-[#DC2626] transition-colors">
              <span className="font-medium">Khám phá hệ thống sạc</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Section 5: ESS - System Scale */}
        <section id="ess" className="mb-32 scroll-mt-24 border-2 border-neutral-200 p-8 md:p-12">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Hệ Thống Pin Lưu Trữ Năng Lượng ESS
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-[#DC2626] to-transparent" />
            </div>
            <p className="text-neutral-600 text-lg max-w-3xl">
              Giải pháp lưu trữ năng lượng quy mô công nghiệp, tối ưu chi phí điện và ổn định lưới điện.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {products.ess.map(product => (
              <ProductCard 
                key={product.id} 
                {...product}
              />
            ))}
          </div>

          <div className="bg-neutral-50 p-8 border-l-4 border-[#DC2626] mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              Giải pháp ESS tùy chỉnh
            </h3>
            <p className="text-neutral-600 mb-4">
              Chúng tôi thiết kế và triển khai hệ thống lưu trữ năng lượng theo nhu cầu riêng của doanh nghiệp,
              từ 50kWh đến hàng MWh, phù hợp với mọi quy mô ứng dụng.
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-neutral-700">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#DC2626]" />
                <span>Peak shaving & Load leveling</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#DC2626]" />
                <span>Tích hợp năng lượng tái tạo</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#DC2626]" />
                <span>Backup nguồn dự phòng</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#DC2626]" />
                <span>Microgrid & Off-grid</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors">
              <span className="font-medium">Tư vấn giải pháp ESS</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Không chắc dòng pin nào phù hợp?
          </h2>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Hãy để đội ngũ kỹ thuật của PKG Battery tư vấn giải pháp pin lithium phù hợp 
            với ứng dụng và nhu cầu cụ thể của doanh nghiệp bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors font-medium">
              Liên hệ tư vấn
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-neutral-900 transition-colors font-medium">
              Download Catalogue
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-100 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 text-center text-sm text-neutral-600">
          <p>© 2026 PKG Battery. Giải pháp pin lithium công nghiệp hàng đầu Việt Nam.</p>
        </div>
      </footer>
    </div>
  );
}
