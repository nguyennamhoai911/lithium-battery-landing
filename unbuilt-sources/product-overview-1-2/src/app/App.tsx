import { useState, useEffect } from 'react';
import { 
  Battery, 
  Zap, 
  Shield, 
  Clock, 
  Gauge, 
  Wrench,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const products = [
    {
      id: 1,
      name: 'PKG-EV48-200',
      image: 'https://images.unsplash.com/photo-1737878324814-fe33c4179815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRoaXVtJTIwYmF0dGVyeSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc2NDA1NDA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      voltage: '48V',
      capacity: '200Ah',
      application: 'Resort Standard',
      cycleLife: '3000+ cycles',
      chargingTime: '4-6 giờ',
      tags: ['Fast Charging', 'Industrial Grade']
    },
    {
      id: 2,
      name: 'PKG-EV48-280',
      image: 'https://images.unsplash.com/photo-1767990495521-95cceb571125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBiYXR0ZXJ5JTIwcGFja3xlbnwxfHx8fDE3NzY0MDM5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      voltage: '48V',
      capacity: '280Ah',
      application: 'Resort Premium',
      cycleLife: '3500+ cycles',
      chargingTime: '5-7 giờ',
      tags: ['High Capacity', 'Extended Range']
    },
    {
      id: 3,
      name: 'PKG-EV72-200',
      image: 'https://images.unsplash.com/photo-1521372557841-004496c23b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXR0ZXJ5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzY0MDU0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      voltage: '72V',
      capacity: '200Ah',
      application: 'Golf Course',
      cycleLife: '3000+ cycles',
      chargingTime: '4-6 giờ',
      tags: ['High Performance', 'Modular']
    },
    {
      id: 4,
      name: 'PKG-EV72-300',
      image: 'https://images.unsplash.com/photo-1737878324814-fe33c4179815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRoaXVtJTIwYmF0dGVyeSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc2NDA1NDA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      voltage: '72V',
      capacity: '300Ah',
      application: 'Heavy Duty',
      cycleLife: '4000+ cycles',
      chargingTime: '6-8 giờ',
      tags: ['Ultra Capacity', 'Industrial Grade']
    },
    {
      id: 5,
      name: 'PKG-EV60-150',
      image: 'https://images.unsplash.com/photo-1767990495521-95cceb571125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBiYXR0ZXJ5JTIwcGFja3xlbnwxfHx8fDE3NzY0MDM5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      voltage: '60V',
      capacity: '150Ah',
      application: 'Compact',
      cycleLife: '2800+ cycles',
      chargingTime: '3-5 giờ',
      tags: ['Compact Design', 'Fast Charging']
    },
    {
      id: 6,
      name: 'PKG-EV80-250',
      image: 'https://images.unsplash.com/photo-1521372557841-004496c23b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXR0ZXJ5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzY0MDU0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      voltage: '80V',
      capacity: '250Ah',
      application: 'Premium Resort',
      cycleLife: '3500+ cycles',
      chargingTime: '5-7 giờ',
      tags: ['High Voltage', 'Extended Range']
    }
  ];

  const applications = [
    {
      title: 'Resort & Khách Sạn',
      description: 'Giải pháp di chuyển êm ái, thân thiện môi trường cho khu nghỉ dưỡng cao cấp',
      image: 'https://images.unsplash.com/photo-1758551938825-20da1d087834?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGdvbGYlMjBjYXJ0JTIwcmVzb3J0fGVufDF8fHx8MTc3NjQwNTQwNnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Sân Golf',
      description: 'Pin hiệu suất cao, tuổi thọ vượt trội cho xe golf và phương tiện sân cỏ',
      image: 'https://images.unsplash.com/photo-1620870426721-9f9e4d11d550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xmJTIwY291cnNlJTIwcmVzb3J0JTIwdmVoaWNsZXxlbnwxfHx8fDE3NzY0MDU0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Khu Du Lịch Sinh Thái',
      description: 'Giải pháp năng lượng xanh, không khí thải cho phương tiện du lịch',
      image: 'https://images.unsplash.com/photo-1774031528911-608cd7a0cc70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBlbGVjdHJpYyUyMHZlaGljbGV8ZW58MXx8fHwxNzc2NDA1NDA4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Khu Công Nghiệp',
      description: 'Pin bền bỉ cho xe điện vận chuyển nội bộ nhà máy, kho bãi',
      image: 'https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NzYzNDE3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const technologies = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'BMS Thông Minh',
      description: 'Hệ thống quản lý pin tiên tiến giám sát và bảo vệ pin 24/7, đảm bảo an toàn tối đa'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Charging',
      description: 'Công nghệ sạc nhanh, tiết kiệm thời gian, tối ưu hóa hiệu suất vận hành'
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: 'Stable Output',
      description: 'Dòng điện ổn định trong suốt chu kỳ xả, đảm bảo hiệu suất đồng đều'
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: 'High Cycle Life',
      description: 'Tuổi thọ vượt trội với 3000+ chu kỳ sạc/xả, giảm chi phí vận hành dài hạn'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Modular Design',
      description: 'Thiết kế module linh hoạt, dễ dàng bảo trì, thay thế và mở rộng'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Thermal Safety',
      description: 'Hệ thống quản lý nhiệt tiên tiến, đảm bảo an toàn trong mọi điều kiện'
    }
  ];

  const faqs = [
    {
      question: 'Làm thế nào để chọn cấu hình pin phù hợp?',
      answer: 'Cấu hình pin phụ thuộc vào loại xe, trọng tải, quãng đường hoạt động và tần suất sử dụng. Đội ngũ kỹ thuật PKG Battery sẽ tư vấn chi tiết dựa trên yêu cầu cụ thể của bạn.'
    },
    {
      question: 'PKG Battery có hỗ trợ tùy chỉnh sản phẩm không?',
      answer: 'Có. Chúng tôi cung cấp dịch vụ OEM/ODM với khả năng tùy chỉnh điện áp, dung lượng, kích thước và các tính năng kỹ thuật theo yêu cầu dự án.'
    },
    {
      question: 'Pin lithium có an toàn cho môi trường resort không?',
      answer: 'Hoàn toàn an toàn. Pin lithium PKG Battery được trang bị BMS thông minh với nhiều lớp bảo vệ, đạt chuẩn công nghiệp, phù hợp sử dụng tại resort, khách sạn và khu du lịch.'
    },
    {
      question: 'Thời gian bảo hành và hỗ trợ kỹ thuật?',
      answer: 'PKG Battery cung cấp bảo hành tiêu chuẩn 3-5 năm tùy model, kèm dịch vụ hỗ trợ kỹ thuật 24/7 và chương trình bảo trì định kỳ.'
    },
    {
      question: 'So với pin acid, pin lithium có lợi thế gì?',
      answer: 'Pin lithium nhẹ hơn 50-60%, tuổi thọ gấp 3-4 lần, sạc nhanh hơn, không cần bảo trì, hiệu suất ổn định và thân thiện môi trường hơn pin acid truyền thống.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758551938825-20da1d087834?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGdvbGYlMjBjYXJ0JTIwcmVzb3J0fGVufDF8fHx8MTc3NjQwNTQwNnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Electric Vehicle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/30 text-red-500 text-sm tracking-wider mb-6">
              LITHIUM BATTERY SOLUTION
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Bình Ắc Quy Lithium<br />
              <span className="text-red-600">Cho Xe Điện Du Lịch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Giải pháp năng lượng cao cấp, bền bỉ và thân thiện môi trường cho resort, sân golf và khu du lịch sinh thái
            </p>
            
            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <div className="text-3xl font-bold text-red-600">3000+</div>
                <div className="text-sm text-gray-400">Chu kỳ sạc</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">6+</div>
                <div className="text-sm text-gray-400">Dòng model</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">50%</div>
                <div className="text-sm text-gray-400">Nhẹ hơn acid</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">24/7</div>
                <div className="text-sm text-gray-400">Hỗ trợ kỹ thuật</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center gap-2 group">
                Nhận Tư Vấn Kỹ Thuật
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
              >
                Xem Sản Phẩm
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className={`sticky top-0 z-50 bg-white border-b transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center text-white font-bold">
                PKG
              </div>
              <span className="text-sm text-gray-500">Xe Điện Du Lịch</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['overview', 'products', 'applications', 'technology', 'faq', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wide transition-colors relative ${
                    activeSection === section 
                      ? 'text-red-600 font-semibold' 
                      : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  {section === 'overview' && 'Tổng Quan'}
                  {section === 'products' && 'Sản Phẩm'}
                  {section === 'applications' && 'Ứng Dụng'}
                  {section === 'technology' && 'Công Nghệ'}
                  {section === 'faq' && 'FAQ'}
                  {section === 'contact' && 'Liên Hệ'}
                  {activeSection === section && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
                  )}
                </button>
              ))}
            </div>

            <button className="text-sm text-gray-600 hover:text-red-600 flex items-center gap-1">
              Dòng SP khác
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overview Section */}
      <section id="overview" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tại Sao Chọn Pin Lithium PKG Battery?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Giải pháp năng lượng tiên tiến, được thiết kế riêng cho nhu cầu vận hành xe điện du lịch tại resort, sân golf và khu du lịch sinh thái
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Battery className="w-10 h-10" />,
                title: 'Tuổi Thọ Vượt Trội',
                description: '3000-4000 chu kỳ sạc/xả, gấp 3-4 lần pin acid truyền thống, giảm chi phí thay thế dài hạn'
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: 'Sạc Nhanh, Hiệu Quả',
                description: 'Thời gian sạc đầy chỉ 4-8 giờ, sạc opportunity charging không ảnh hưởng tuổi thọ'
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: 'An Toàn Tuyệt Đối',
                description: 'BMS thông minh với bảo vệ quá sạc, quá xả, ngắn mạch, kiểm soát nhiệt độ tự động'
              },
              {
                icon: <Gauge className="w-10 h-10" />,
                title: 'Hiệu Suất Ổn Định',
                description: 'Duy trì 80% công suất đến hết chu kỳ xả, không sụt áp đột ngột như pin acid'
              },
              {
                icon: <Wrench className="w-10 h-10" />,
                title: 'Không Cần Bảo Trì',
                description: 'Không cần đổ nước cất, không rò rỉ acid, tiết kiệm thời gian và chi phí vận hành'
              },
              {
                icon: <CheckCircle2 className="w-10 h-10" />,
                title: 'Tùy Chỉnh OEM/ODM',
                description: 'Hỗ trợ thiết kế và sản xuất theo yêu cầu, phù hợp mọi loại xe và ứng dụng'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 border border-gray-200 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Danh Sách Sản Phẩm
              </h2>
              <p className="text-lg text-gray-600">
                Đa dạng cấu hình từ 48V đến 80V, dung lượng từ 150Ah đến 300Ah
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <span className="text-sm text-gray-500">Lọc theo:</span>
              <select className="px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:border-red-600">
                <option>Tất cả điện áp</option>
                <option>48V</option>
                <option>60V</option>
                <option>72V</option>
                <option>80V</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:border-red-600">
                <option>Tất cả ứng dụng</option>
                <option>Resort</option>
                <option>Golf Course</option>
                <option>Heavy Duty</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group bg-white border border-gray-200 hover:border-black transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.application}</p>
                    </div>
                    <div className="px-3 py-1 bg-red-600 text-white text-xs font-semibold">
                      {product.voltage}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Dung lượng:</span>
                      <span className="font-semibold text-gray-900">{product.capacity}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Tuổi thọ:</span>
                      <span className="font-semibold text-gray-900">{product.cycleLife}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Thời gian sạc:</span>
                      <span className="font-semibold text-gray-900">{product.chargingTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-red-600 text-white text-sm hover:bg-red-700 transition-colors">
                      Xem Chi Tiết
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm hover:border-red-600 hover:text-red-600 transition-colors">
                      Báo Giá
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Ứng Dụng Thực Tế
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Pin lithium PKG Battery được tin dùng tại các dự án lớn trong lĩnh vực du lịch, giải trí và công nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden aspect-[4/3]"
              >
                <ImageWithFallback
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-12 h-1 bg-red-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{app.title}</h3>
                  <p className="text-gray-300">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="inline-block px-4 py-2 bg-red-600/10 text-red-600 text-sm tracking-wider mb-6">
                TECHNOLOGY
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Công Nghệ Lithium Tiên Tiến
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                PKG Battery ứng dụng công nghệ pin lithium-ion tiên tiến nhất, kết hợp BMS thông minh và hệ thống quản lý nhiệt hiệu quả, đảm bảo hiệu suất tối ưu và an toàn tuyệt đối.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">LiFePO4 Chemistry</div>
                    <div className="text-sm text-gray-600">Hóa học ổn định nhất, an toàn cao, tuổi thọ dài</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Smart BMS Integration</div>
                    <div className="text-sm text-gray-600">Giám sát từng cell, cân bằng tự động, bảo vệ đa lớp</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Thermal Management</div>
                    <div className="text-sm text-gray-600">Kiểm soát nhiệt độ thông minh, hoạt động ổn định -20°C đến 60°C</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1772734462696-9c04c258a904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3NjMzMDU3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="p-6 border-l-4 border-red-600 bg-gray-50"
              >
                <div className="text-red-600 mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PKG Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Vì Sao Khách Hàng Tin Chọn PKG Battery?
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Không chỉ là nhà cung cấp pin, PKG Battery là đối tác công nghệ đồng hành cùng doanh nghiệp của bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Tùy Chỉnh Linh Hoạt',
                description: 'OEM/ODM theo yêu cầu, từ điện áp, dung lượng đến kích thước và connector'
              },
              {
                number: '02',
                title: 'Đội Ngũ Kỹ Thuật',
                description: 'Hỗ trợ tư vấn, thiết kế, integration và commissioning chuyên nghiệp'
              },
              {
                number: '03',
                title: 'Quy Trình Bài Bản',
                description: 'Sản xuất theo tiêu chuẩn ISO, kiểm tra chất lượng 100% trước xuất xưởng'
              },
              {
                number: '04',
                title: 'Hỗ Trợ Dài Hạn',
                description: 'Bảo hành 3-5 năm, hỗ trợ kỹ thuật 24/7, phụ tùng thay thế sẵn sàng'
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="text-6xl font-bold text-red-600/20 group-hover:text-red-600/40 transition-colors mb-4">
                  {item.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Câu Hỏi Thường Gặp
            </h2>
            <p className="text-lg text-gray-600">
              Giải đáp những thắc mắc phổ biến về pin lithium cho xe điện du lịch
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group border border-gray-200 hover:border-red-600 transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-red-600 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-6">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Không Chắc Cấu Hình Nào Phù Hợp?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Hãy để đội ngũ kỹ thuật PKG Battery tư vấn giải pháp phù hợp với ứng dụng cụ thể của bạn
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center justify-center gap-2 group">
              <Phone className="w-5 h-5" />
              Gọi Tư Vấn Ngay
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Yêu Cầu Báo Giá
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-gray-800">
            <div>
              <div className="text-red-600 font-semibold mb-2">Hotline</div>
              <div className="text-gray-400">1900 xxxx</div>
            </div>
            <div>
              <div className="text-red-600 font-semibold mb-2">Email</div>
              <div className="text-gray-400">sales@pkgbattery.com</div>
            </div>
            <div>
              <div className="text-red-600 font-semibold mb-2">Giờ Làm Việc</div>
              <div className="text-gray-400">T2-T6: 8:00 - 17:30</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center text-white font-bold">
                  PKG
                </div>
                <span className="text-white font-semibold">PKG Battery</span>
              </div>
              <p className="text-sm">
                Giải pháp năng lượng lithium công nghiệp hàng đầu Việt Nam
              </p>
            </div>
            
            <div>
              <div className="text-white font-semibold mb-4">Sản Phẩm</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-600 transition-colors">Xe Nâng Điện</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Xe Điện Du Lịch</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">AGV/Robot</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">ESS</a></li>
              </ul>
            </div>
            
            <div>
              <div className="text-white font-semibold mb-4">Hỗ Trợ</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-600 transition-colors">Tư Vấn Kỹ Thuật</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Tài Liệu</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Bảo Hành</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <div className="text-white font-semibold mb-4">Công Ty</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-600 transition-colors">Về PKG Battery</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Dự Án</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Tin Tức</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Liên Hệ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-sm text-center">
            © 2026 PKG Battery. All rights reserved. Designed with industrial excellence.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
