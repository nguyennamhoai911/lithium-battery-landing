import { useState } from 'react';
import { Zap, Clock, Battery, ChevronRight } from 'lucide-react';

export function ProductList() {
  const [filter, setFilter] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const products = [
    // 24V Series
    {
      id: 'PKG-24V-100',
      name: 'PKG LiFePO4 24V 100Ah',
      voltage: '24V',
      capacity: '100Ah',
      energy: '2.56 kWh',
      cycleLife: '5000+',
      chargingTime: '2-3h',
      application: 'Light-duty forklift',
      tags: ['24V', 'Compact', 'Fast Charging'],
      category: '24V'
    },
    {
      id: 'PKG-24V-200',
      name: 'PKG LiFePO4 24V 200Ah',
      voltage: '24V',
      capacity: '200Ah',
      energy: '5.12 kWh',
      cycleLife: '5000+',
      chargingTime: '2-3h',
      application: 'Standard forklift',
      tags: ['24V', 'Industrial Grade', 'BMS'],
      category: '24V'
    },
    {
      id: 'PKG-24V-300',
      name: 'PKG LiFePO4 24V 300Ah',
      voltage: '24V',
      capacity: '300Ah',
      energy: '7.68 kWh',
      cycleLife: '6000+',
      chargingTime: '3h',
      application: 'Heavy-duty',
      tags: ['24V', 'High Capacity', 'OEM Ready'],
      category: '24V'
    },

    // 48V Series
    {
      id: 'PKG-48V-200',
      name: 'PKG LiFePO4 48V 200Ah',
      voltage: '48V',
      capacity: '200Ah',
      energy: '9.6 kWh',
      cycleLife: '5000+',
      chargingTime: '2.5h',
      application: 'Warehouse forklift',
      tags: ['48V', 'Popular', 'Smart BMS'],
      featured: true,
      category: '48V'
    },
    {
      id: 'PKG-48V-300',
      name: 'PKG LiFePO4 48V 300Ah',
      voltage: '48V',
      capacity: '300Ah',
      energy: '14.4 kWh',
      cycleLife: '6000+',
      chargingTime: '3h',
      application: 'Heavy forklift',
      tags: ['48V', 'High Performance', 'Modular'],
      category: '48V'
    },
    {
      id: 'PKG-48V-400',
      name: 'PKG LiFePO4 48V 400Ah',
      voltage: '48V',
      capacity: '400Ah',
      energy: '19.2 kWh',
      cycleLife: '6000+',
      chargingTime: '3-4h',
      application: 'Industrial heavy-duty',
      tags: ['48V', 'Ultra Capacity', 'Industrial'],
      category: '48V'
    },
    {
      id: 'PKG-48V-600',
      name: 'PKG LiFePO4 48V 600Ah',
      voltage: '48V',
      capacity: '600Ah',
      energy: '28.8 kWh',
      cycleLife: '7000+',
      chargingTime: '4h',
      application: 'Extra heavy-duty',
      tags: ['48V', 'Maximum Power', 'Custom'],
      category: '48V'
    },

    // 80V Series
    {
      id: 'PKG-80V-300',
      name: 'PKG LiFePO4 80V 300Ah',
      voltage: '80V',
      capacity: '300Ah',
      energy: '24 kWh',
      cycleLife: '6000+',
      chargingTime: '3-4h',
      application: 'Large forklift',
      tags: ['80V', 'High Voltage', 'Professional'],
      category: '80V'
    },
    {
      id: 'PKG-80V-400',
      name: 'PKG LiFePO4 80V 400Ah',
      voltage: '80V',
      capacity: '400Ah',
      energy: '32 kWh',
      cycleLife: '6000+',
      chargingTime: '4h',
      application: 'Heavy industrial',
      tags: ['80V', 'Premium', 'Long Life'],
      featured: true,
      category: '80V'
    },
    {
      id: 'PKG-80V-600',
      name: 'PKG LiFePO4 80V 600Ah',
      voltage: '80V',
      capacity: '600Ah',
      energy: '48 kWh',
      cycleLife: '7000+',
      chargingTime: '4-5h',
      application: 'Extra large capacity',
      tags: ['80V', 'Maximum', 'OEM/ODM'],
      category: '80V'
    },
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  const filters = [
    { id: 'all', label: 'Tất cả sản phẩm', count: products.length },
    { id: '24V', label: '24V Series', count: products.filter(p => p.category === '24V').length },
    { id: '48V', label: '48V Series', count: products.filter(p => p.category === '48V').length },
    { id: '80V', label: '80V Series', count: products.filter(p => p.category === '80V').length },
  ];

  return (
    <section id="products" className="py-24 lg:py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-12 bg-red-600 mb-4" />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
                Danh mục sản phẩm đa dạng
              </h2>
              <p className="text-xl text-zinc-600">
                Từ 24V đến 80V, từ 100Ah đến 600Ah - PKG Battery cung cấp đầy đủ các cấu hình 
                phù hợp với mọi loại xe nâng và ứng dụng công nghiệp.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-zinc-200">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                filter === f.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                  : 'bg-white text-zinc-700 border border-zinc-200 hover:border-red-600 hover:text-red-600'
              }`}
            >
              {f.label} <span className="ml-2 opacity-70">({f.count})</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className={`group relative bg-white border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                product.featured
                  ? 'border-red-600 shadow-lg shadow-red-600/10'
                  : 'border-zinc-200 hover:border-red-600 hover:shadow-xl'
              }`}
            >
              {/* Featured Badge */}
              {product.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                  PHỔ BIẾN
                </div>
              )}

              {/* Product Image Area */}
              <div className="relative h-48 bg-gradient-to-br from-zinc-100 to-zinc-50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Battery className="w-24 h-24 text-zinc-300 group-hover:text-red-600 transition-colors duration-300" />
                
                {/* Voltage Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-full">
                  <span className="text-sm font-bold text-zinc-900">{product.voltage}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                {/* Product Name */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-zinc-600">{product.application}</p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-zinc-100">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <Zap className="w-3 h-3" />
                      <span>Dung lượng</span>
                    </div>
                    <div className="font-bold text-zinc-900">{product.capacity}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <Battery className="w-3 h-3" />
                      <span>Năng lượng</span>
                    </div>
                    <div className="font-bold text-zinc-900">{product.energy}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <Clock className="w-3 h-3" />
                      <span>Sạc đầy</span>
                    </div>
                    <div className="font-bold text-zinc-900">{product.chargingTime}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-zinc-500">Tuổi thọ</div>
                    <div className="font-bold text-zinc-900">{product.cycleLife}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 px-4 py-3 bg-zinc-900 hover:bg-red-600 text-white rounded transition-all duration-300 group-hover:shadow-lg">
                    <span className="flex items-center justify-center gap-2">
                      Xem chi tiết
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </button>
                  <button className="px-4 py-3 border border-zinc-300 hover:border-red-600 hover:text-red-600 text-zinc-700 rounded transition-colors">
                    Báo giá
                  </button>
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-16 border-t border-zinc-200 text-center">
          <h3 className="text-2xl font-bold text-zinc-900 mb-4">
            Không tìm thấy cấu hình phù hợp?
          </h3>
          <p className="text-zinc-600 mb-6 max-w-2xl mx-auto">
            PKG Battery hỗ trợ tùy chỉnh OEM/ODM theo yêu cầu kỹ thuật cụ thể của bạn. 
            Liên hệ đội ngũ kỹ thuật để được tư vấn giải pháp tối ưu.
          </p>
          <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded transition-colors">
            Tư vấn OEM/ODM
          </button>
        </div>
      </div>
    </section>
  );
}
