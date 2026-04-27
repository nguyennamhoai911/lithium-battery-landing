import { useState, useMemo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Download, 
  FileText, 
  ChevronRight, 
  Filter as FilterIcon, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  PhoneCall, 
  ExternalLink,
  ChevronDown,
  Monitor,
  ShieldCheck,
  Cpu,
  Settings,
  Truck,
  Database,
  ArrowRight,
  Wrench
} from 'lucide-react';
import { 
  DOCUMENTS, 
  PRODUCT_CATEGORIES, 
  FAQS, 
  Document 
} from './constants';

// --- UI Components ---
interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'red' | 'gray';
  key?: string | number;
}

const Badge = ({ children, variant = 'default' }: BadgeProps) => {
  const styles = {
    default: 'bg-slate-100 text-slate-700',
    red: 'bg-brand-red/10 text-brand-red',
    gray: 'bg-slate-50 text-technical-gray border border-slate-200'
  };
  return (
    <span className={`px-2 py-0.5 rounded-sm text-[10px] font-mono font-medium uppercase tracking-wider ${styles[variant]}`}>
      {children}
    </span>
  );
};

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}: ButtonProps) => {
  const styles = {
    primary: 'bg-brand-red text-white hover:bg-red-700',
    secondary: 'bg-industry-black text-white hover:bg-black/80',
    outline: 'border border-slate-200 text-industry-black hover:border-brand-red hover:text-brand-red',
    ghost: 'text-technical-gray hover:text-industry-black'
  };
  return (
    <button 
      onClick={onClick}
      className={`px-5 py-2.5 transition-all text-sm font-medium flex items-center justify-center gap-2 group ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// --- Main App ---
export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDocType, setSelectedDocType] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'preparing' | 'success' | 'error'>('idle');
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  // Filter Logic
  const filteredDocs = useMemo(() => {
    return DOCUMENTS.filter(doc => {
      const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           doc.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCat = selectedCategory ? doc.category === selectedCategory : true;
      const matchesType = selectedDocType ? doc.label === selectedDocType : true;
      return matchesSearch && matchesCat && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedDocType]);

  const handleDownload = (docTitle: string) => {
    setDownloadStatus('preparing');
    setTimeout(() => {
      setDownloadStatus('success');
      setTimeout(() => setDownloadStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-red/20 selection:text-brand-red">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center text-white font-bold text-xl">P</div>
              <span className="text-xl font-bold tracking-tighter">PKG BATTERY</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {['Sản phẩm', 'Giải pháp', 'Công nghệ', 'Tài liệu', 'Về chúng tôi'].map((item) => (
                <a key={item} href="#" className={`text-sm font-medium hover:text-brand-red transition-colors relative group py-2 ${item === 'Tài liệu' ? 'text-brand-red' : 'text-industry-black'}`}>
                  {item}
                  {item === 'Tài liệu' && <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red" />}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors"><Search size={20} /></button>
            <div className="h-4 w-px bg-slate-200 mx-2" />
            <Button variant="outline" className="hidden sm:flex">Liên hệ Sales</Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-slate-50 opacity-50" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-red/5 to-transparent z-0" />
          <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-[1px] bg-brand-red" />
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-red uppercase">Tài liệu kỹ thuật của PKG Battery</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                Trung tâm <br />
                <span className="text-brand-red">Tài liệu Kỹ thuật</span>
              </h1>
              <p className="text-lg text-technical-gray mb-10 max-w-xl leading-relaxed">
                Truy cập catalogue, datasheet, manual, phần mềm BMS, firmware và chứng chỉ sản phẩm chính thức cho các hệ thống pin lithium công nghiệp PKG.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-red transition-colors">
                  <Search size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="Tìm theo mã sản phẩm, điện áp, loại tài liệu..."
                  className="w-full h-16 pl-14 pr-32 bg-white border border-slate-200 outline-none focus:border-brand-red transition-all shadow-sm group-focus-within:shadow-xl text-lg font-medium"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 right-2 flex items-center p-2">
                  <Button variant="primary" className="h-full">Tìm kiếm</Button>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-technical-gray">
                <span className="font-medium">Từ khóa phổ biến:</span>
                {['Pin xe nâng 48V', 'Manual AGV', 'Phần mềm BMS', 'Chứng chỉ UN38.3'].map(tag => (
                  <button key={tag} onClick={() => setSearchQuery(tag)} className="hover:text-brand-red transition-colors underline decoration-slate-300 underline-offset-4 pointer-events-auto">
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Access Intent */}
        <section className="bg-white py-24 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-2xl font-bold tracking-tight">Truy cập nhanh theo nhu cầu</h2>
              <div className="flex-grow h-px bg-slate-100" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { 
                  title: 'Tôi muốn đánh giá sản phẩm', 
                  desc: 'So sánh thông số, catalogue và các tài liệu đánh giá năng lực kỹ thuật.', 
                  icon: FileText,
                  cta: 'Xem Datasheets'
                },
                { 
                  title: 'Tôi muốn lắp đặt & vận hành', 
                  desc: 'Tìm hướng dẫn sử dụng, sơ đồ đấu nối và tài liệu xử lý sự cố vận hành.', 
                  icon: Wrench,
                  cta: 'Xem Manuals'
                },
                { 
                  title: 'Tôi cần phần mềm BMS & Firmware', 
                  desc: 'Tải công cụ cấu hình, giám sát và các bản cập nhật hệ thống quản lý pin.', 
                  icon: Monitor,
                  cta: 'Vào Software Center'
                },
                { 
                  title: 'Tôi cần chứng chỉ vận chuyển', 
                  desc: 'Truy cập UN38.3, SDS và các chứng nhận tuân thủ an toàn quốc tế.', 
                  icon: ShieldCheck,
                  cta: 'Xem Chứng chỉ'
                }
              ].map((item, idx) => (
                <motion.div 
                  key={item.title}
                  whileHover={{ y: -4 }}
                  className="p-8 border border-slate-100 bg-slate-50 relative group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white flex items-center justify-center text-brand-red mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-4 pr-10">{item.title}</h3>
                  <p className="text-sm text-technical-gray mb-8 leading-relaxed">{item.desc}</p>
                  <div className="flex items-center text-brand-red text-sm font-bold group">
                    {item.cta}
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="absolute top-0 left-0 w-1 h-0 bg-brand-red group-hover:h-full transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Navigation */}
        <section className="bg-slate-50 py-12">
          <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
            <div className="flex gap-4 min-w-max">
              <button 
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-3 text-sm font-bold border transition-all ${selectedCategory === null ? 'bg-industry-black text-white border-industry-black' : 'bg-white text-technical-gray border-slate-200 hover:border-brand-red'}`}
              >
                Tất cả tài liệu
              </button>
              {PRODUCT_CATEGORIES.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-3 text-sm font-bold border transition-all flex items-center gap-3 ${selectedCategory === cat.id ? 'bg-industry-black text-white border-industry-black' : 'bg-white text-technical-gray border-slate-200 hover:border-brand-red'}`}
                >
                  <cat.icon size={16} />
                  {cat.name}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${selectedCategory === cat.id ? 'bg-white/20' : 'bg-slate-100'}`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Resource Library */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar Filters */}
              <aside className="w-full lg:w-64 flex-shrink-0 sticky top-24 self-start">
                <div className="mb-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                    <FilterIcon size={14} /> Bộ lọc thông minh
                  </h4>
                  
                  <div className="space-y-8">
                    <div>
                      <span className="block text-sm font-bold mb-4">Loại tài liệu</span>
                      <div className="space-y-2">
                        {['CATALOGUE', 'DATASHEET', 'MANUAL', 'CERTIFICATE', 'SOFTWARE'].map(type => (
                          <label key={type} className="flex items-center gap-3 cursor-pointer group">
                            <input 
                              type="radio" 
                              name="docType"
                              className="w-4 h-4 accent-brand-red"
                              checked={selectedDocType === type}
                              onChange={() => setSelectedDocType(type)}
                            />
                            <span className={`text-sm transition-colors ${selectedDocType === type ? 'text-brand-red font-bold' : 'text-technical-gray group-hover:text-industry-black'}`}>{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="block text-sm font-bold mb-4">Điện áp</span>
                      <div className="grid grid-cols-2 gap-2">
                        {['24V', '48V', '80V', '96V'].map(v => (
                          <button key={v} className="px-3 py-2 border border-slate-200 text-xs font-mono hover:border-brand-red hover:text-brand-red transition-all">
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>

                    {(selectedCategory || selectedDocType || searchQuery) && (
                      <button 
                        onClick={() => {
                          setSelectedCategory(null);
                          setSelectedDocType(null);
                          setSearchQuery('');
                        }}
                        className="text-xs font-bold text-brand-red hover:underline flex items-center gap-2"
                      >
                        <X size={12} /> Xóa tất cả bộ lọc
                      </button>
                    )}
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-100">
                  <h5 className="text-sm font-bold mb-3">Bạn cần giúp đỡ?</h5>
                  <p className="text-xs text-technical-gray leading-relaxed mb-4">Đội ngũ kỹ thuật của chúng tôi sẵn sàng hỗ trợ bạn tìm đúng tài liệu.</p>
                  <a href="#" className="text-xs font-bold text-brand-red hover:underline">Liên hệ kỹ sư →</a>
                </div>
              </aside>

              {/* Results List */}
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <span className="text-sm font-medium text-technical-gray">Tìm thấy <span className="text-industry-black font-bold">{filteredDocs.length}</span> tài liệu phù hợp</span>
                  <div className="flex items-center gap-4">
                    <select className="text-sm border-none bg-transparent outline-none cursor-pointer font-medium hover:text-brand-red">
                      <option>Sắp xếp: Mới nhất</option>
                      <option>Tên A-Z</option>
                      <option>Được tải nhiều nhất</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <AnimatePresence mode="popLayout">
                    {filteredDocs.length > 0 ? filteredDocs.map((doc) => (
                      <motion.div 
                        key={doc.id}
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="p-6 transition-all hover:bg-slate-50 group border-l-2 border-transparent hover:border-brand-red relative"
                      >
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-3">
                              <Badge variant={doc.label === 'DATASHEET' ? 'red' : 'default'}>{doc.label}</Badge>
                              <span className="text-[10px] text-technical-gray font-mono uppercase tracking-tighter">Cập nhật: {doc.updatedAt}</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-brand-red transition-colors">{doc.title}</h3>
                            <p className="text-sm text-technical-gray max-w-2xl mb-4 line-clamp-2">{doc.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {doc.tags.map(tag => (
                                <Badge key={tag} variant="gray">#{tag}</Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex md:flex-col items-center md:items-end gap-4 min-w-[140px]">
                            <div className="text-right hidden md:block">
                              <div className="text-[10px] text-technical-gray font-mono">{doc.type} · {doc.size}</div>
                              <div className="text-[10px] text-technical-gray font-mono">v{doc.version}</div>
                            </div>
                            <Button 
                              onClick={() => handleDownload(doc.title)}
                              className="w-full md:w-auto"
                            >
                              <Download size={16} /> Tải xuống
                            </Button>
                            <button className="text-xs font-bold text-technical-gray hover:text-industry-black underline underline-offset-4 hidden md:block">
                              Xem trước
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )) : (
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="py-20 text-center"
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 text-slate-300 rounded-full mb-6">
                          <Search size={32} />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Không tìm thấy tài liệu phù hợp</h4>
                        <p className="text-technical-gray mb-8">Thử thay đổi từ khóa hoặc bộ lọc của bạn.</p>
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            setSelectedCategory(null);
                            setSelectedDocType(null);
                            setSearchQuery('');
                          }}
                        >
                          Xóa tất cả bộ lọc
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {filteredDocs.length >= 5 && (
                  <div className="mt-12 text-center">
                    <Button variant="outline" className="px-10">Xem toàn bộ tài liệu</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* BMS & Software Zone (Dark Section) */}
        <section className="bg-industry-black text-white py-32 overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(225,29,72,0.1) 1px, transparent 1px), linear-gradient(90(rgba(225,29,72,0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-12 h-[2px] bg-brand-red" />
                  <span className="text-xs font-mono font-bold tracking-widest text-brand-red">PHẦN MỀM & BMS CENTER</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                  Hệ điều hành cho <br />
                  <span className="text-brand-red">Năng lượng sạch</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                  Tải các công cụ cấu hình, giám sát thời gian thực và các bản cập nhật firmware mới nhất cho hệ thống quản lý pin PKG. Chúng tôi cung cấp khả năng kiểm soát tuyệt đối các thông số tế bào pin.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {[
                    { title: 'PKG BMS Configurator', v: 'v3.2', type: 'Phần mềm', icon: Settings },
                    { title: 'BMS Monitor Pro', v: 'v2.5', type: 'Giám sát', icon: Monitor }
                  ].map((s, i) => (
                    <div key={i} className="p-6 bg-white/5 border border-white/10 group hover:border-brand-red transition-colors">
                      <div className="flex items-center justify-between mb-4">
                        <s.icon size={20} className="text-brand-red" />
                        <span className="text-[10px] font-mono text-slate-500 uppercase">{s.type}</span>
                      </div>
                      <h4 className="font-bold mb-1">{s.title}</h4>
                      <div className="text-xs text-slate-500 mb-6">Phiên bản {s.v} · Windows 10/11</div>
                      <button className="text-xs font-bold text-brand-red hover:underline">Tải xuống ZIP →</button>
                    </div>
                  ))}
                </div>

                <div className="p-6 border border-brand-red/30 bg-brand-red/5 flex items-start gap-4">
                  <AlertCircle size={24} className="text-brand-red shrink-0" />
                  <div>
                    <h5 className="text-sm font-bold text-brand-red mb-1">Lưu ý trước khi nâng cấp Firmware</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Luôn kiểm tra mã Serial Number và khả năng tương thích của phần cứng trước khi tiến hành flash firmware. Việc cài sai có thể dẫn tới khóa hệ thống pin.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className="relative aspect-square max-w-[400px] mx-auto">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 border-[40px] border-white/5 rounded-full border-t-brand-red/20" 
                  />
                  <div className="absolute inset-10 border border-white/10 rounded-full flex items-center justify-center">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-brand-red"
                    >
                      <Cpu size={120} strokeWidth={1} />
                    </motion.div>
                  </div>
                  {/* Energy Pulses */}
                  {[0, 1, 2].map(i => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 3, delay: i, repeat: Infinity }}
                      className="absolute inset-0 border border-brand-red/20 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Câu hỏi thường gặp</h2>
              <p className="text-technical-gray">Giải đáp nhanh các vấn đề liên quan đến tài liệu và kỹ thuật PKG.</p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border border-slate-100 overflow-hidden">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold pr-8">{faq.q}</span>
                    <ChevronDown size={20} className={`text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: activeFaq === idx ? 'auto' : 0, opacity: activeFaq === idx ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-sm text-technical-gray leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Support */}
        <section className="py-24 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="p-12 md:p-20 bg-industry-black relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red opacity-10 skew-x-12 translate-x-32" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-grow text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white mb-6">Bạn không tìm thấy tài liệu mình cần?</h2>
                  <p className="text-slate-400 text-lg mb-0 max-w-xl">
                    Hãy cho chúng tôi biết mã sản phẩm, đội ngũ kỹ sư sẽ hỗ trợ bạn ngay lập tức.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" onClick={() => setIsRequestModalOpen(true)} className="px-10 h-14 text-base">Gửi yêu cầu tài liệu</Button>
                  <Button variant="outline" className="px-10 h-14 text-base border-white/20 text-white hover:bg-white/10 hover:text-white">Liên hệ kỹ thuật</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center text-white font-bold text-xl">P</div>
                <span className="text-xl font-bold tracking-tighter">PKG BATTERY</span>
              </div>
              <p className="text-sm text-technical-gray leading-relaxed mb-8 max-w-xs">
                PKG Battery — Doanh nghiệp dẫn đầu về giải pháp năng lượng lithium công nghiệp, tiên phong trong công nghệ pin hiệu suất cao.
              </p>
              <div className="flex items-center gap-6">
                {['Mạng xã hội 1', 'Mạng xã hội 2', 'Mạng xã hội 3'].map(i => (
                  <div key={i} className="w-5 h-5 bg-slate-200 rounded-full" />
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-sm">Sản phẩm</h5>
              <ul className="space-y-4 text-sm text-technical-gray">
                <li><a href="#" className="hover:text-brand-red">Pin xe nâng</a></li>
                <li><a href="#" className="hover:text-brand-red">Pin AGV / Robot</a></li>
                <li><a href="#" className="hover:text-brand-red">Lưu trữ ESS</a></li>
                <li><a href="#" className="hover:text-brand-red">Hệ thống sạc</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-sm">Tài nguyên</h5>
              <ul className="space-y-4 text-sm text-technical-gray">
                <li><a href="#" className="text-brand-red font-bold underline">Trung tâm Tài liệu</a></li>
                <li><a href="#" className="hover:text-brand-red">Catalogue 2026</a></li>
                <li><a href="#" className="hover:text-brand-red">Phần mềm BMS</a></li>
                <li><a href="#" className="hover:text-brand-red">Manuals</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-sm">Hỗ trợ</h5>
              <ul className="space-y-4 text-sm text-technical-gray">
                <li><a href="#" className="hover:text-brand-red">Gửi hỗ trợ kỹ thuật</a></li>
                <li><a href="#" className="hover:text-brand-red">Yêu cầu tài liệu</a></li>
                <li><a href="#" className="hover:text-brand-red">Bảo hành</a></li>
                <li><a href="#" className="hover:text-brand-red">Đào tạo vận hành</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
            <p>© 2026 PKG Battery Co., Ltd. Bảo lưu mọi quyền.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-industry-black">Chính sách bảo mật</a>
              <a href="#" className="hover:text-industry-black">Điều khoản sử dụng</a>
              <a href="#" className="hover:text-industry-black">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast Notification for Download */}
      <AnimatePresence>
        {downloadStatus !== 'idle' && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] px-6 py-4 bg-industry-black text-white rounded-sm shadow-2xl flex items-center gap-4 border border-white/10"
          >
            {downloadStatus === 'preparing' && (
              <div className="w-5 h-5 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
            )}
            {downloadStatus === 'success' && <CheckCircle2 size={20} className="text-green-500" />}
            <span className="text-sm font-medium">
              {downloadStatus === 'preparing' ? 'Đang chuẩn bị phiên bản tải xuống...' : 'Tải xuống thành công'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Request Modal (Simplified) */}
      <AnimatePresence>
        {isRequestModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsRequestModalOpen(false)}
              className="absolute inset-0 bg-industry-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white p-10 border border-slate-200 shadow-2xl"
            >
              <button 
                onClick={() => setIsRequestModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-industry-black"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold mb-4">Gửi yêu cầu tài liệu</h3>
              <p className="text-sm text-technical-gray mb-8">Nếu tài liệu bạn cần không có sẵn, hãy cung cấp thông tin model sản phẩm để chúng tôi hỗ trợ.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Mã sản phẩm / Serial Number</label>
                  <input type="text" className="w-full p-3 border border-slate-200 outline-none focus:border-brand-red" placeholder="Ví dụ: F48-200-PKG" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Loại tài liệu cần thiết</label>
                  <select className="w-full p-3 border border-slate-200 outline-none focus:border-brand-red bg-white">
                    <option>Datasheet sản phẩm</option>
                    <option>Hướng dẫn sử dụng (Manual)</option>
                    <option>Chứng chỉ UN38.3/SDS</option>
                    <option>Firmware nâng cấp</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Tên của bạn</label>
                    <input type="text" className="w-full p-3 border border-slate-200 outline-none focus:border-brand-red" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email hỗ trợ</label>
                    <input type="email" className="w-full p-3 border border-slate-200 outline-none focus:border-brand-red" />
                  </div>
                </div>
                <Button className="w-full h-14 text-base" onClick={() => {
                  alert('Yêu cầu đã được gửi thành công!');
                  setIsRequestModalOpen(false);
                }}>Gửi yêu cầu ngay</Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
