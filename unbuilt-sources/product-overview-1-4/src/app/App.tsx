import React, { useState, useEffect } from 'react';
import { ChevronRight, Battery, Zap, Settings, Cpu, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('forklift');

  const categories = [
    { id: 'forklift', label: 'Xe Nâng Điện', icon: Battery },
    { id: 'golf-cart', label: 'Xe Điện Du Lịch', icon: Zap },
    { id: 'agv', label: 'AGV/Robot', icon: Cpu },
    { id: 'charger', label: 'Bộ Sạc - Trạm Sạc', icon: Settings },
    { id: 'ess', label: 'ESS', icon: Battery }
  ];

  const forkliftProducts = [
    {
      id: 1,
      name: 'PKG Forklift Battery 24V 200Ah',
      specs: '24V / 200Ah / 4,800Wh',
      tags: ['24V', 'Fast Charging', 'High Cycle Life'],
      image: 'https://images.unsplash.com/photo-1732030373864-d37573915751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRoaXVtJTIwYmF0dGVyeSUyMG1vZHVsZSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc2NDA1MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true
    },
    {
      id: 2,
      name: 'PKG Forklift Battery 48V 300Ah',
      specs: '48V / 300Ah / 14,400Wh',
      tags: ['48V', 'Modular System'],
      image: 'https://images.unsplash.com/photo-1714627798569-b3e36d409c4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZm9ya2xpZnQlMjBlbGVjdHJpY3xlbnwxfHx8fDE3NzY0MDUyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'PKG Forklift Battery 80V 400Ah',
      specs: '80V / 400Ah / 32,000Wh',
      tags: ['80V', 'Heavy Duty'],
      image: 'https://images.unsplash.com/photo-1626084232696-132206a844ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwdGVjaG5vbG9neSUyMGNsb3NldXB8ZW58MXx8fHwxNzc2MzkzNzY4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      name: 'PKG Forklift Battery 48V 500Ah',
      specs: '48V / 500Ah / 24,000Wh',
      tags: ['48V', 'Extended Range'],
      image: 'https://images.unsplash.com/photo-1732030373864-d37573915751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwY2VsbHMlMjBpbmR1c3RyaWFsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzY0MDUyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const golfCartProducts = [
    {
      id: 5,
      name: 'PKG Golf Cart Battery 48V 100Ah',
      specs: '48V / 100Ah / 4,800Wh',
      tags: ['48V', 'Lightweight', 'Fast Charging'],
      image: 'https://images.unsplash.com/photo-1684599994855-ab66cf03b106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGdvbGYlMjBjYXJ0JTIwYmF0dGVyeXxlbnwxfHx8fDE3NzY0MDM5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 6,
      name: 'PKG Golf Cart Battery 72V 150Ah',
      specs: '72V / 150Ah / 10,800Wh',
      tags: ['72V', 'Extended Range'],
      image: 'https://images.unsplash.com/photo-1767990495521-95cceb571125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBiYXR0ZXJ5JTIwcGFja3xlbnwxfHx8fDE3NzY0MDM5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 7,
      name: 'PKG Golf Cart Battery 60V 120Ah',
      specs: '60V / 120Ah / 7,200Wh',
      tags: ['60V', 'Compact Design'],
      image: 'https://images.unsplash.com/photo-1732030373864-d37573915751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRoaXVtJTIwYmF0dGVyeSUyMG1vZHVsZSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc2NDA1MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const agvProducts = [
    {
      id: 8,
      name: 'PKG AGV Battery 24V 150Ah',
      specs: '24V / 150Ah / 3,600Wh',
      tags: ['24V', 'AGV Ready', 'Smart BMS'],
      image: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBhdXRvbWF0aW9uJTIwcm9ib3R8ZW58MXx8fHwxNzc2NDA1MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true
    },
    {
      id: 9,
      name: 'PKG AGV Battery 48V 200Ah',
      specs: '48V / 200Ah / 9,600Wh',
      tags: ['48V', 'Robot Ready'],
      image: 'https://images.unsplash.com/photo-1626084232696-132206a844ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwdGVjaG5vbG9neSUyMGNsb3NldXB8ZW58MXx8fHwxNzc2MzkzNzY4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 10,
      name: 'PKG AGV Battery 36V 180Ah',
      specs: '36V / 180Ah / 6,480Wh',
      tags: ['36V', 'Compact'],
      image: 'https://images.unsplash.com/photo-1732030373864-d37573915751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwY2VsbHMlMjBpbmR1c3RyaWFsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzY0MDUyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const chargerProducts = [
    {
      id: 11,
      name: 'PKG Fast Charger 48V 50A',
      specs: '48V / 50A / 2,400W',
      tags: ['Fast Charging', 'Smart Control'],
      image: 'https://images.unsplash.com/photo-1694889649834-91ff242d1763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNoYXJnaW5nJTIwcGx1ZyUyMG1vZGVybnxlbnwxfHx8fDE3NzY0MDUyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 12,
      name: 'PKG Charging Station 80V 100A',
      specs: '80V / 100A / 8,000W',
      tags: ['High Power', 'Multi-Port'],
      image: 'https://images.unsplash.com/photo-1763542950623-725ca5be52ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNoYXJnaW5nJTIwc3RhdGlvbiUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc2NDA1MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true
    },
    {
      id: 13,
      name: 'PKG Smart Charger 24V 30A',
      specs: '24V / 30A / 720W',
      tags: ['24V', 'Portable'],
      image: 'https://images.unsplash.com/photo-1694889649834-91ff242d1763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNoYXJnaW5nJTIwcGx1ZyUyMG1vZGVybnxlbnwxfHx8fDE3NzY0MDUyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const essProducts = [
    {
      id: 14,
      name: 'PKG ESS 100kWh Modular System',
      specs: '384V / 260Ah / 100kWh',
      tags: ['Modular', 'Grid-Tied', 'Scalable'],
      image: 'https://images.unsplash.com/photo-1766507679641-51002768af6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBzdG9yYWdlJTIwc3lzdGVtJTIwYmF0dGVyeXxlbnwxfHx8fDE3NzY0MDM5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true
    },
    {
      id: 15,
      name: 'PKG ESS 50kWh Commercial',
      specs: '384V / 130Ah / 50kWh',
      tags: ['Commercial', 'Backup Power'],
      image: 'https://images.unsplash.com/photo-1766507679611-60fb2b5bc5d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHN0YXRpb24lMjBlbmVyZ3klMjBzdG9yYWdlfGVufDF8fHx8MTc3NjQwNTI0NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 16,
      name: 'PKG ESS 200kWh Industrial',
      specs: '768V / 260Ah / 200kWh',
      tags: ['Industrial', 'High Capacity'],
      image: 'https://images.unsplash.com/photo-1766507679641-51002768af6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBzdG9yYWdlJTIwc3lzdGVtJTIwYmF0dGVyeXxlbnwxfHx8fDE3NzY0MDM5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveCategory(id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-neutral-400 mb-8">
            <span>Trang chủ</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Tất cả sản phẩm</span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl">
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <h1 className="text-5xl lg:text-6xl mb-6">
              Giải pháp pin lithium cho<br />nhiều ứng dụng công nghiệp
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              PKG Battery cung cấp hệ sinh thái hoàn chỉnh từ pin lithium đến trạm sạc cho các ứng dụng công nghiệp, logistics và năng lượng.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div>
                <div className="text-4xl text-red-600 mb-2">5</div>
                <div className="text-sm text-neutral-400">Nhóm sản phẩm</div>
              </div>
              <div>
                <div className="text-4xl text-red-600 mb-2">50+</div>
                <div className="text-sm text-neutral-400">Cấu hình tùy chỉnh</div>
              </div>
              <div>
                <div className="text-4xl text-red-600 mb-2">10+</div>
                <div className="text-sm text-neutral-400">Ngành ứng dụng</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Category Navigation */}
      <div className="sticky top-0 z-40 bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm whitespace-nowrap transition-all border-b-2 ${
                    activeCategory === cat.id
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section 1: Forklift Batteries - Featured + Grid */}
      <section id="forklift" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <div className="w-12 h-1 bg-red-600 mb-4"></div>
              <h2 className="text-4xl mb-4">
                Bình Ắc Quy Pin Lithium<br />Cho Xe Nâng Điện
              </h2>
              <p className="text-neutral-600 mb-6">
                Giải pháp pin lithium cao cấp cho xe nâng điện, đảm bảo hiệu suất vượt trội, tuổi thọ cao và khả năng sạc nhanh, phù hợp với mọi môi trường logistics và sản xuất.
              </p>
              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <span className="flex items-center gap-2">
                  <Battery className="w-4 h-4" />
                  12 sản phẩm
                </span>
                <span>|</span>
                <span>24V - 80V</span>
              </div>
            </div>

            {/* Featured Product */}
            {forkliftProducts
              .filter((p) => p.featured)
              .map((product) => (
                <ProductCard key={product.id} product={product} large />
              ))}
          </div>

          {/* Secondary Products Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {forkliftProducts
              .filter((p) => !p.featured)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          <div className="flex justify-end">
            <button className="group flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white hover:bg-red-600 transition-colors">
              Khám phá dòng sản phẩm
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: Golf Cart - Horizontal Layout */}
      <section id="golf-cart" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <div className="w-12 h-1 bg-red-600 mb-4"></div>
              <h2 className="text-4xl mb-4">
                Bình Ắc Quy Lithium Cho Xe Điện Du Lịch
              </h2>
              <p className="text-neutral-600">
                Pin lithium nhẹ, hiệu suất cao cho xe điện golf, xe du lịch, xe sân bay. Thiết kế tối ưu cho độ bền và khả năng vận hành liên tục.
              </p>
            </div>
            <div className="text-sm text-neutral-500">9 sản phẩm</div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {golfCartProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-end">
            <button className="group flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white hover:bg-red-600 transition-colors">
              Xem chi tiết
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: AGV/Robot - Dark Contrast */}
      <section id="agv" className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Featured Product - Left */}
            {agvProducts
              .filter((p) => p.featured)
              .map((product) => (
                <ProductCard key={product.id} product={product} large dark />
              ))}

            <div>
              <div className="w-12 h-1 bg-red-600 mb-4"></div>
              <h2 className="text-4xl mb-4">
                Pin Cho Xe AGV/Robot
              </h2>
              <p className="text-neutral-300 mb-6">
                Giải pháp năng lượng thông minh cho AGV và robot công nghiệp với BMS tiên tiến, khả năng sạc nhanh và thiết kế modular linh hoạt.
              </p>
              <div className="flex items-center gap-4 text-sm text-neutral-400 mb-8">
                <span className="flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  8 sản phẩm
                </span>
                <span>|</span>
                <span>Smart BMS</span>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-red-600 pl-4">
                  <div className="text-sm text-neutral-400 mb-1">Cycle Life</div>
                  <div className="text-2xl">3000+ cycles</div>
                </div>
                <div className="border-l-2 border-red-600 pl-4">
                  <div className="text-sm text-neutral-400 mb-1">Communication</div>
                  <div className="text-2xl">CAN / RS485</div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Products Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {agvProducts
              .filter((p) => !p.featured)
              .map((product) => (
                <ProductCard key={product.id} product={product} dark />
              ))}
          </div>

          <div className="flex justify-end">
            <button className="group flex items-center gap-2 px-6 py-3 bg-red-600 text-white hover:bg-red-700 transition-colors">
              Tìm hiểu thêm
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Chargers - Modular Layout */}
      <section id="charger" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="w-12 h-1 bg-red-600 mb-4 mx-auto"></div>
            <h2 className="text-4xl mb-4">
              Bộ Sạc - Trạm Sạc
            </h2>
            <p className="text-neutral-600">
              Hệ thống sạc thông minh với công nghệ tiên tiến, đảm bảo sạc nhanh an toàn và tối ưu tuổi thọ pin.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {chargerProducts.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                large={product.featured}
                className={product.featured ? 'lg:col-span-2 lg:row-span-1' : ''}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <button className="group flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white hover:bg-red-600 transition-colors">
              Xem tất cả giải pháp sạc
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: ESS - Large Scale Energy */}
      <section id="ess" className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <div className="w-12 h-1 bg-red-600 mb-4"></div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl mb-4">
                  Hệ thống pin lưu trữ năng lượng ESS
                </h2>
                <p className="text-neutral-600">
                  Giải pháp lưu trữ năng lượng quy mô lớn cho doanh nghiệp, nhà máy và hệ thống lưới điện. Thiết kế modular, có thể mở rộng theo nhu cầu.
                </p>
              </div>
              <div className="flex items-baseline gap-8">
                <div>
                  <div className="text-3xl text-red-600 mb-1">50-200kWh</div>
                  <div className="text-sm text-neutral-500">Dung lượng</div>
                </div>
                <div>
                  <div className="text-3xl text-red-600 mb-1">6000+</div>
                  <div className="text-sm text-neutral-500">Cycles</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {essProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                large={product.featured}
                className={product.featured ? 'lg:col-span-2' : ''}
              />
            ))}
          </div>

          <div className="flex justify-end">
            <button className="group flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white hover:bg-red-600 transition-colors">
              Khám phá giải pháp ESS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Không chắc dòng pin nào phù hợp?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Hãy để đội ngũ kỹ thuật của PKG Battery tư vấn giải pháp phù hợp cho ứng dụng của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-red-600 text-white hover:bg-red-700 transition-colors">
              Liên hệ tư vấn
            </button>
            <button className="px-8 py-4 border border-neutral-600 text-white hover:border-white transition-colors">
              Tải catalogue
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-neutral-400 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-2xl text-white mb-4">PKG Battery</div>
          <p className="text-sm">© 2026 PKG Battery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Product Card Component
function ProductCard({
  product,
  large = false,
  dark = false,
  className = ''
}: {
  product: any;
  large?: boolean;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden ${
        dark ? 'bg-neutral-800' : 'bg-white'
      } ${className}`}
    >
      <div className={`relative ${large ? 'h-96' : 'h-64'} overflow-hidden`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
      </div>

      <div className={`p-6 ${dark ? 'bg-neutral-800' : 'bg-white'} border ${dark ? 'border-neutral-700' : 'border-neutral-100'}`}>
        <h3 className={`text-lg mb-2 ${dark ? 'text-white' : 'text-neutral-900'}`}>
          {product.name}
        </h3>
        <p className={`text-sm mb-4 ${dark ? 'text-neutral-400' : 'text-neutral-600'}`}>
          {product.specs}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.map((tag: string) => (
            <span
              key={tag}
              className={`text-xs px-3 py-1 border ${
                dark
                  ? 'border-neutral-600 text-neutral-300'
                  : 'border-neutral-300 text-neutral-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          className={`text-sm flex items-center gap-2 group-hover:gap-3 transition-all ${
            dark ? 'text-red-500' : 'text-red-600'
          }`}
        >
          View Details
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
