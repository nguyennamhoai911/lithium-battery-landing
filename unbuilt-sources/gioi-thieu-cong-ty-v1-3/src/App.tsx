import { useEffect, useState } from 'react';

export default function App() {
  const [isOnDark, setIsOnDark] = useState(true);

  useEffect(() => {
    // Nav logic
    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const bottom = heroEl.offsetTop + heroEl.offsetHeight;
        setIsOnDark(window.scrollY < bottom - 90);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Reveal logic
    const items = document.querySelectorAll('.rv');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('on');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
    
    items.forEach((el) => obs.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      items.forEach((el) => obs.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* NAV */}
      <nav id="nav" className={isOnDark ? 'on-dark' : ''}>
        <a href="#" className="logo">
          <div className="logo-mark">P</div>
          PKG BATTERY
        </a>
        <ul className="nav-links">
          <li><a href="#about">Về chúng tôi</a></li>
          <li><a href="#products">Sản phẩm</a></li>
          <li><a href="#why">Lợi thế</a></li>
          <li><a href="#quality">Chất lượng</a></li>
          <li><a href="#contact" className="nav-cta">Liên hệ ngay</a></li>
        </ul>
      </nav>

      <main>
        {/* ══════ HERO – DARK ══════ */}
        <section id="hero">
          <div className="hero-bg"></div>
          <div className="hero-grid"></div>
          <div className="hero-inner">
            <div>
              <div className="eyebrow">
                <div className="eyebrow-line"></div>
                <span>Giải Pháp Năng Lượng Lithium</span>
              </div>
              <h1 className="hero-h1">PKG<br /><em>BATTERY</em></h1>
              <p className="hero-sub">Tiên Phong Năng Lượng Lithium<br />Tại Việt Nam</p>
              <p className="hero-body">PKG Battery phát triển các giải pháp pin Lithium cho xe nâng điện, AGV, xe điện du lịch và hệ thống lưu trữ năng lượng – đáp ứng nhu cầu vận hành hiện đại của doanh nghiệp trong công nghiệp, logistics và năng lượng sạch.</p>
              <div className="ctas">
                <a href="#products" className="btn-red">
                  Khám phá năng lực
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#about" className="btn-ghost-light">Xem sản phẩm</a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="batt-wrap">
                <div className="batt-glow"></div>
                <div className="batt-top"></div>
                <div className="batt-body">
                  <div className="cell-row"><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div></div>
                  <div className="cell-row"><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div></div>
                  <div className="batt-lbl">LITHIUM</div>
                  <div className="batt-spec">IEC 62619 · UN38.3</div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-cue">
            <div className="scroll-cue-line"></div>
            <span>Scroll</span>
          </div>
        </section>

        {/* TRUST BAR – LIGHT */}
        <div id="trust-bar">
          <div style={{ overflow: 'hidden', display: 'flex' }}>
            <div className="t-marquee">
              <div className="t-item"><div className="t-dot"></div><span>IEC 62619 Certified</span></div>
              <div className="t-item"><div className="t-dot"></div><span>UN38.3 Compliant</span></div>
              <div className="t-item"><div className="t-dot"></div><span>ISO Quality Standard</span></div>
              <div className="t-item"><div className="t-dot"></div><span>MIC Insurance</span></div>
              <div className="t-item"><div className="t-dot"></div><span>Đại Lý Toàn Quốc</span></div>
              <div className="t-item"><div className="t-dot"></div><span>Hỗ Trợ Kỹ Thuật 24/7</span></div>
              <div className="t-item"><div className="t-dot"></div><span>OEM / ODM Solutions</span></div>
              <div className="t-item"><div className="t-dot"></div><span>IEC 62619 Certified</span></div>
              <div className="t-item"><div className="t-dot"></div><span>UN38.3 Compliant</span></div>
              <div className="t-item"><div className="t-dot"></div><span>ISO Quality Standard</span></div>
              <div className="t-item"><div className="t-dot"></div><span>MIC Insurance</span></div>
              <div className="t-item"><div className="t-dot"></div><span>Đại Lý Toàn Quốc</span></div>
              <div className="t-item"><div className="t-dot"></div><span>Hỗ Trợ Kỹ Thuật 24/7</span></div>
              <div className="t-item"><div className="t-dot"></div><span>OEM / ODM Solutions</span></div>
            </div>
          </div>
        </div>

        {/* ══════ ABOUT – LIGHT ══════ */}
        <section id="about" className="sec">
          <div className="inner">
            <div className="about-grid">
              <div className="img-wrap rv">
                <div className="img-main">
                  <img 
                    src="https://picsum.photos/seed/industrial-factory/800/600" 
                    alt="PKG Factory" 
                    className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="img-overlay"></div>
                </div>
                <div className="img-badge">
                  <div className="badge-n">5+</div>
                  <div className="badge-l">Năm kinh nghiệm</div>
                </div>
              </div>

              <div className="rv d1">
                <div className="sec-lbl"><div className="sec-lbl-line"></div><span>Về PKG Battery</span></div>
                <h2 className="sec-h2">Năng lực nội địa cho tương lai năng lượng Việt Nam</h2>
                <p className="sec-p">PKG Battery tập trung nghiên cứu, thiết kế và cung cấp các giải pháp pin Lithium cho môi trường công nghiệp hiện đại. Không chỉ cung cấp sản phẩm, PKG Battery hướng đến vai trò đối tác giải pháp – đồng hành cùng doanh nghiệp trong quá trình chuyển đổi sang nền tảng lưu trữ năng lượng hiện đại, sạch hơn và bền vững hơn.</p>
                <div className="stats-grid">
                  <div className="stat-box"><div className="stat-v"><em>5</em></div><div className="stat-l">Dòng sản phẩm chiến lược</div></div>
                  <div className="stat-box"><div className="stat-v">100<em>%</em></div><div className="stat-l">Tiêu chuẩn quốc tế</div></div>
                  <div className="stat-box"><div className="stat-v"><em>63</em></div><div className="stat-l">Tỉnh thành phủ sóng</div></div>
                  <div className="stat-box"><div className="stat-v">24<em>/7</em></div><div className="stat-l">Hỗ trợ kỹ thuật liên tục</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="sec-vision-light overflow-hidden">
          <div className="inner">
            <div className="rv mb-20">
              <div className="sec-lbl flex items-center gap-3">
                <div className="sec-lbl-line w-10 h-[2px] bg-[var(--red)]"></div>
                <span className="text-[11px] font-bold tracking-[4px] text-[var(--red)] uppercase">Khát Vọng PKG</span>
              </div>
              <h2 className="text-[clamp(40px,6vw,72px)] font-['Bebas_Neue'] text-[var(--text-1)] tracking-[1px] mt-6 leading-[0.9]">Định Hình Tương Lai<br /><span className="text-[var(--red)]">Năng Lượng Số</span></h2>
            </div>

            <div className="v-editorial space-y-32">
              {/* Tầm nhìn */}
              <div className="v-edi-row rv">
                <div className="v-edi-text">
                  <div className="v-edi-num">01</div>
                  <h3 className="v-edi-h3 font-['Bebas_Neue'] text-4xl mb-6 tracking-wide">Tầm Nhìn: Vượt Xa Khái Niệm "Pin"</h3>
                  <p className="v-edi-p text-lg text-[var(--text-2)] leading-relaxed font-light">
                    Chúng tôi không chỉ sản xuất thiết bị lưu trữ. PKG Battery hướng tới việc xây dựng một <strong>hệ sinh thái năng lượng tuần hoàn</strong>, nơi mọi tế bào Lithium đều đóng vai trò là một "nút thắt" trong hạ tầng sản xuất thông minh của Việt Nam.
                  </p>
                  <div className="v-edi-insight mt-8 flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-[var(--border-mid)]"></div>
                    <span className="text-[10px] font-bold tracking-[2px] text-[var(--text-3)] uppercase">Insight: Năng lượng là huyết mạch của chuyển đổi số</span>
                  </div>
                </div>
                <div className="v-edi-media">
                  <div className="v-edi-img-wrap-1">
                    <img src="https://picsum.photos/seed/tech-vision/1200/800" alt="Vision" className="v-edi-img" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              {/* Sứ mệnh */}
              <div className="v-edi-row flip rv d1">
                <div className="v-edi-media">
                  <div className="v-edi-img-wrap-2">
                    <img src="https://picsum.photos/seed/clean-energy-mission/1200/800" alt="Mission" className="v-edi-img" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="v-edi-text">
                  <div className="v-edi-num">02</div>
                  <h3 className="v-edi-h3 font-['Bebas_Neue'] text-4xl mb-6 tracking-wide">Sứ Mệnh: Giải Phóng Tiềm Năng Công Nghiệp</h3>
                  <p className="v-edi-p text-lg text-[var(--text-2)] leading-relaxed font-light">
                    Sứ mệnh của chúng tôi là xóa bỏ sự phụ thuộc vào các nguồn năng lượng kém hiệu quả. Bằng cách <strong>tối ưu hóa 99.9%</strong> mật độ năng lượng, PKG giúp doanh nghiệp vận hành không giới hạn, không downtime, không lo ngại về chi phí ẩn.
                  </p>
                  <div className="v-edi-insight mt-8 flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-[var(--border-mid)]"></div>
                    <span className="text-[10px] font-bold tracking-[2px] text-[var(--text-3)] uppercase">Insight: Hiệu suất năng lượng = Lợi thế cạnh tranh</span>
                  </div>
                </div>
              </div>

              {/* Giá trị */}
              <div className="v-edi-row rv d2">
                <div className="v-edi-text">
                  <div className="v-edi-num">03</div>
                  <h3 className="v-edi-h3 font-['Bebas_Neue'] text-4xl mb-6 tracking-wide">Giá Trị: Công Nghệ Vị Nhân Sinh</h3>
                  <p className="v-edi-p text-lg text-[var(--text-2)] leading-relaxed font-light">
                    PKG đặt sự <strong>Chính trực kỹ thuật</strong> lên hàng đầu. Mỗi giải pháp bàn giao là một lời hứa về sự an toàn tuyệt đối và trách nhiệm với môi trường, được bảo chứng qua từng chứng chỉ quốc tế khắc khe nhất.
                  </p>
                  <div className="v-edi-insight mt-8 flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-[var(--border-mid)]"></div>
                    <span className="text-[10px] font-bold tracking-[2px] text-[var(--text-3)] uppercase">Insight: Sự tử tế là nền tảng của công nghệ bền vững</span>
                  </div>
                </div>
                <div className="v-edi-media">
                  <div className="v-edi-img-wrap-3">
                    <img src="https://picsum.photos/seed/ethical-tech/1200/800" alt="Values" className="v-edi-img" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ PRODUCTS – EDITORIAL ══════ */}
        <section id="products" className="sec-products bg-white">
          <div className="inner">
            <div className="rv mb-16 px-4 md:px-0">
              <div className="sec-lbl flex items-center gap-3">
                <div className="sec-lbl-line w-10 h-[2px] bg-[var(--red)]"></div>
                <span className="text-[11px] font-bold tracking-[4px] text-[var(--red)] uppercase">Hệ Sinh Thái PKG</span>
              </div>
              <h2 className="text-[clamp(36px,5vw,64px)] font-['Bebas_Neue'] text-[var(--text-1)] tracking-[1px] mt-4 leading-tight">Giải Pháp Năng Lượng Đột Phá</h2>
            </div>

            <div className="product-editorial space-y-32">
              {/* Product 01 */}
              <div className="prod-feature-row rv">
                <div className="prod-feature-media">
                  <img src="https://picsum.photos/seed/lithium-forklift-pro/1200/800" alt="Forklift Battery" className="prod-feature-img" referrerPolicy="no-referrer" />
                  <div className="prod-feature-label">LOGISTICS SOLUTIONS</div>
                </div>
                <div className="prod-feature-info">
                  <div className="prod-feature-index">01</div>
                  <h3 className="prod-feature-title text-4xl font-['Bebas_Neue'] mb-6 tracking-wide">Lithium Forklift Series</h3>
                  <p className="prod-feature-desc text-[var(--text-2)] font-light text-lg leading-relaxed">
                    Dòng sản phẩm chủ lực thiết kế cho xe nâng điện cường độ cao. Công nghệ sạc nhanh trong 2 giờ giúp xóa bỏ hoàn toàn thời gian chờ đợi (idle time).
                  </p>
                  <div className="prod-feature-specs mt-8 grid grid-cols-2 gap-8 border-t border-[var(--border)] pt-8">
                    <div className="p-spec">
                      <span className="block text-[10px] font-bold tracking-[2px] text-[var(--text-3)] uppercase mb-2">Dung lượng</span>
                      <strong className="text-xl font-bold text-[var(--text-1)]">200Ah - 600Ah</strong>
                    </div>
                    <div className="p-spec">
                      <span className="block text-[10px] font-bold tracking-[2px] text-[var(--text-3)] uppercase mb-2">Chu kỳ sạc</span>
                      <strong className="text-xl font-bold text-[var(--text-1)]">&gt; 4000 Cycles</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 02 */}
              <div className="prod-feature-row flip rv d1">
                <div className="prod-feature-media">
                  <img src="https://picsum.photos/seed/golf-energy-pro/1201/801" alt="Golf Battery" className="prod-feature-img" referrerPolicy="no-referrer" />
                  <div className="prod-feature-label">RESORT & LEISURE</div>
                </div>
                <div className="prod-feature-info">
                  <div className="prod-feature-index">02</div>
                  <h3 className="prod-feature-title text-4xl font-['Bebas_Neue'] mb-6 tracking-wide">Golf & Resort Power</h3>
                  <p className="prod-feature-desc text-[var(--text-2)] font-light text-lg leading-relaxed">
                    Tối ưu hóa trải nghiệm khách hàng với nguồn năng lượng êm ái, không khí thải. Trọng lượng nhẹ giúp bảo vệ thảm cỏ và tăng quãng đường di chuyển.
                  </p>
                  <div className="prod-feature-specs mt-8 grid grid-cols-2 gap-8 border-t border-[var(--border)] pt-8">
                    <div className="p-spec">
                      <span className="block text-[10px] font-bold tracking-[2px] text-[var(--text-3)] uppercase mb-2">Trọng lượng</span>
                      <strong className="text-xl font-bold text-[var(--text-1)]">Giảm 70%</strong>
                    </div>
                    <div className="p-spec">
                      <span className="block text-[10px] font-bold tracking-[2px] text-[var(--text-3)] uppercase mb-2">Bảo trì</span>
                      <strong className="text-xl font-bold text-[var(--text-1)]">Zero Maintenance</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 03 */}
              <div className="prod-feature-row rv d2">
                <div className="prod-feature-media">
                  <img src="https://picsum.photos/seed/agv-smart-power/1202/802" alt="AGV Battery" className="prod-feature-img" referrerPolicy="no-referrer" />
                  <div className="prod-feature-label">AUTOMATION NEXT-GEN</div>
                </div>
                <div className="prod-feature-info">
                  <div className="prod-feature-index">03</div>
                  <h3 className="prod-feature-title text-4xl font-['Bebas_Neue'] mb-6 tracking-wide">AGV & Robotics Fleet</h3>
                  <p className="prod-feature-desc text-[var(--text-2)] font-light text-lg leading-relaxed">
                    Trái tim của nhà máy thông minh. Hệ thống BMS tích hợp cho phép trao đổi dữ liệu thời gian thực (Real-time monitoring) với trung tâm điều khiển.
                  </p>
                  <div className="prod-feature-specs mt-8 grid grid-cols-2 gap-8 border-t border-[var(--border)] pt-8">
                    <div className="p-spec">
                      <span className="block text-[10px] font-bold tracking-[2px] text-[var(--text-3)] uppercase mb-2">Giao tiếp</span>
                      <strong className="text-xl font-bold text-[var(--text-1)]">CAN/RS485/IoT</strong>
                    </div>
                    <div className="p-spec">
                      <span className="block text-[10px] font-bold tracking-[2px] text-[var(--text-3)] uppercase mb-2">An toàn</span>
                      <strong className="text-xl font-bold text-[var(--text-1)]">Dual Protection</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 04 */}
              <div className="prod-feature-row flip rv">
                <div className="prod-feature-media">
                  <img src="https://picsum.photos/seed/fast-charger-industrial/1203/803" alt="Charger" className="prod-feature-img" referrerPolicy="no-referrer" />
                  <div className="prod-feature-label">CHARGING INFRASTRUCTURE</div>
                </div>
                <div className="prod-feature-info">
                  <div className="prod-feature-index">04</div>
                  <h3 className="prod-feature-title text-4xl font-['Bebas_Neue'] mb-6 tracking-wide">Fast Charging Infrastructure</h3>
                  <p className="prod-feature-desc text-[var(--text-2)] font-light text-lg leading-relaxed">
                    Hệ thống trạm sạc công suất cao đồng bộ, giao tiếp thông minh với BMS để bảo vệ Cell pin và rút ngắn thời gian nạp điện xuống mức tối thiểu.
                  </p>
                  <div className="prod-feature-specs mt-8 grid grid-cols-2 gap-8 border-t border-[var(--border)] pt-8">
                    <div className="p-spec">
                      <span className="block text-[10px] font-bold tracking-[2px] text-[var(--text-3)] uppercase mb-2">Công suất</span>
                      <strong className="text-xl font-bold text-[var(--text-1)]">50A - 200A</strong>
                    </div>
                    <div className="p-spec">
                      <span className="block text-[10px] font-bold tracking-[2px] text-[var(--text-3)] uppercase mb-2">Hiệu suất</span>
                      <strong className="text-xl font-bold text-[var(--text-1)]">95% Efficiency</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 05 */}
              <div className="prod-feature-row rv d1">
                <div className="prod-feature-media">
                  <img src="https://picsum.photos/seed/ess-storage-system/1204/804" alt="ESS" className="prod-feature-img" referrerPolicy="no-referrer" />
                  <div className="prod-feature-label">RENEWABLE STORAGE</div>
                </div>
                <div className="prod-feature-info">
                  <div className="prod-feature-index">05</div>
                  <h3 className="prod-feature-title text-4xl font-['Bebas_Neue'] mb-6 tracking-wide">Industrial ESS Units</h3>
                  <p className="prod-feature-desc text-[var(--text-2)] font-light text-lg leading-relaxed">
                    Giải pháp lưu trữ năng lượng quy mô lớn cho KCN và nhà cao tầng, giúp tối ưu chi phí điện giờ cao điểm và tận dụng tối đa năng lượng mặt trời.
                  </p>
                  <div className="prod-feature-specs mt-8 grid grid-cols-2 gap-8 border-t border-[var(--border)] pt-8">
                    <div className="p-spec">
                      <span className="block text-[10px] font-bold tracking-[2px] text-[var(--text-3)] uppercase mb-2">Quy mô</span>
                      <strong className="text-xl font-bold text-[var(--text-1)]">50kWh - 1MWh</strong>
                    </div>
                    <div className="p-spec">
                      <span className="block text-[10px] font-bold tracking-[2px] text-[var(--text-3)] uppercase mb-2">Ứng dụng</span>
                      <strong className="text-xl font-bold text-[var(--text-1)]">Peak Shaving</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ WHY PKG – DARK ══════ */}
        <section id="why" className="sec">
          <div className="inner">
            <div className="why-head rv">
              <div className="sec-lbl"><div class="sec-lbl-line"></div><span>Lợi Thế Cạnh Tranh</span></div>
              <h2 className="sec-h2-light">Tại sao chọn PKG Battery?</h2>
            </div>
            <div className="adv-grid">
              <div className="adv rv"><div className="adv-n">01</div><div className="adv-h">Tuổi thọ vượt trội</div><p className="adv-p">Giải pháp pin Lithium giúp kéo dài chu kỳ sử dụng, giảm tần suất thay thế và tăng hiệu quả đầu tư dài hạn.</p></div>
              <div className="adv rv d1"><div className="adv-n">02</div><div className="adv-h">Sạc nhanh hơn</div><p className="adv-p">Rút ngắn thời gian chờ, tăng thời gian hoạt động của thiết bị trong vận hành cường độ cao liên tục.</p></div>
              <div className="adv rv d2"><div className="adv-n">03</div><div className="adv-h">An toàn vượt trội</div><p className="adv-p">Thiết kế và kiểm soát chất lượng theo tiêu chuẩn cao, phù hợp môi trường công nghiệp nghiêm ngặt.</p></div>
              <div className="adv rv"><div className="adv-n">04</div><div className="adv-h">Tối ưu chi phí dài hạn</div><p className="adv-p">Chi phí đầu tư được bù đắp bằng hiệu suất vận hành, tuổi thọ cao và giảm downtime đột xuất.</p></div>
              <div className="adv rv d1"><div className="adv-n">05</div><div className="adv-h">Hỗ trợ kỹ thuật nhanh</div><p className="adv-p">Đội ngũ kỹ thuật sẵn sàng đồng hành trong triển khai, vận hành và xử lý yêu cầu thực tế nhanh chóng.</p></div>
              <div className="adv rv d2"><div className="adv-n">06</div><div className="adv-h">OEM / ODM linh hoạt</div><p className="adv-p">Khả năng tùy biến giải pháp theo nhu cầu đặc thù, phù hợp nhiều mô hình ứng dụng và ngành nghề.</p></div>
            </div>
          </div>
        </section>

        {/* ══════ QUALITY – LIGHT (BG SOFT) ══════ */}
        <section id="quality" className="sec">
          <div className="inner">
            <div className="quality-grid">
              <div className="rv">
                <div className="sec-lbl"><div class="sec-lbl-line"></div><span>Năng Lực Sản Xuất</span></div>
                <h2 className="sec-h2">Chất lượng được kiểm soát từ thiết kế đến bàn giao</h2>
                <p className="sec-p">PKG Battery xây dựng năng lực vận hành dựa trên quy trình kiểm soát chất lượng chặt chẽ, từ nghiên cứu, thiết kế, lắp ráp đến kiểm định trước khi bàn giao tới khách hàng.</p>
                <div className="pillars">
                  <div className="pillar"><div className="p-n">01</div><div><div className="p-title">Quy trình kiểm tra nhiều lớp</div><p className="p-desc">Mỗi sản phẩm trải qua nhiều vòng kiểm định độc lập trước khi xuất xưởng, đảm bảo tính nhất quán và an toàn.</p></div></div>
                  <div className="pillar"><div className="p-n">02</div><div><div className="p-title">Tiêu chuẩn kỹ thuật rõ ràng</div><p className="p-desc">Toàn bộ quy trình R&D và sản xuất được chuẩn hóa theo tiêu chuẩn kỹ thuật nghiêm ngặt, có tài liệu và kiểm chứng.</p></div></div>
                  <div className="pillar"><div className="p-n">03</div><div><div className="p-title">Chứng nhận quốc tế</div><p className="p-desc">IEC 62619, UN38.3 và các tiêu chuẩn quốc tế khác xác nhận năng lực và chất lượng sản phẩm PKG Battery.</p></div></div>
                  <div className="pillar"><div className="p-n">04</div><div><div className="p-title">Định hướng cải tiến liên tục</div><p className="p-desc">Đội ngũ R&D thường xuyên nghiên cứu và cải tiến, đảm bảo PKG Battery luôn đi đầu về công nghệ.</p></div></div>
                </div>
              </div>
              <div className="qcards rv d1">
                <div className="qc"><div className="qc-icon">⚡</div><div className="qc-title">R&D & Thiết kế</div><p className="qc-body">Đội ngũ kỹ sư nghiên cứu và thiết kế giải pháp phù hợp yêu cầu đặc thù từng ngành.</p></div>
                <div className="qc"><div className="qc-icon">🔬</div><div className="qc-title">QC Kiểm định</div><p className="qc-body">Quy trình kiểm định nhiều lớp từ vật liệu đầu vào đến sản phẩm hoàn thiện trước xuất xưởng.</p></div>
                <div className="qc wide"><div className="qc-icon">🏆</div><div><div className="qc-title">Chứng nhận IEC 62619 · UN38.3 · ISO</div><p className="qc-body">Tiêu chuẩn quốc tế xác nhận chất lượng và độ an toàn của từng sản phẩm PKG Battery.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ APPLICATIONS – LIGHT ══════ */}
        <section id="applications" className="sec">
          <div className="inner">
            <div className="rv">
              <div className="sec-lbl"><div class="sec-lbl-line"></div><span>Ứng Dụng Thực Tế</span></div>
              <h2 className="sec-h2">Triển khai thực tế trong nhiều ngành</h2>
            </div>
            <div className="app-grid">
              <div className="app-card rv group h-full">
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                  <img src="https://picsum.photos/seed/warehouse-modern/400/300" alt="App 1" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="app-accent"></div>
                <span className="app-cat">Logistics & Kho vận</span>
                <div className="app-h3">Hệ thống xe nâng điện cho kho logistics quy mô lớn</div>
                <p className="app-p">Pin Lithium thay thế ắc quy chì, tăng thời gian hoạt động liên tục, giảm downtime và tối ưu quy trình vận hành trong kho.</p>
                <div className="app-metrics"><div><div class="app-mv">30<em>%</em></div><div class="app-ml">Tăng hiệu suất</div></div><div><div class="app-mv">50<em>%</em></div><div class="app-ml">Giảm thời gian sạc</div></div></div>
                <div className="app-num">01</div>
              </div>
              <div className="app-card rv d1 group h-full">
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                  <img src="https://picsum.photos/seed/robotics-smart/400/300" alt="App 2" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="app-accent"></div>
                <span className="app-cat">Tự động hóa</span>
                <div className="app-h3">AGV & Robot công nghiệp trong nhà máy thông minh</div>
                <p className="app-p">Hệ thống pin tối ưu cho AGV vận hành 24/7, hỗ trợ doanh nghiệp đạt mục tiêu tự động hóa và nâng cao năng suất.</p>
                <div className="app-metrics"><div><div class="app-mv">24<em>h</em></div><div class="app-ml">Vận hành liên tục</div></div><div><div class="app-mv">3000<em>+</em></div><div class="app-ml">Chu kỳ sạc</div></div></div>
                <div className="app-num">02</div>
              </div>
              <div className="app-card rv group h-full">
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                  <img src="https://picsum.photos/seed/resort-golf/400/300" alt="App 3" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="app-accent"></div>
                <span className="app-cat">Du lịch & Nghỉ dưỡng</span>
                <div className="app-h3">Xe điện golf & du lịch trong khu nghỉ dưỡng cao cấp</div>
                <p className="app-p">Giải pháp pin Lithium đảm bảo vận hành êm ái, bền bỉ, phù hợp tiêu chuẩn thẩm mỹ và dịch vụ cao cấp.</p>
                <div className="app-metrics"><div><div class="app-mv">80<em>km</em></div><div class="app-ml">Mỗi lần sạc</div></div><div><div class="app-mv">5<em>yr</em></div><div class="app-ml">Tuổi thọ đảm bảo</div></div></div>
                <div className="app-num">03</div>
              </div>
              <div className="app-card rv d1 group h-full">
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                  <img src="https://picsum.photos/seed/solar-industrial/400/300" alt="App 4" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="app-accent"></div>
                <span className="app-cat">Năng lượng tái tạo</span>
                <div className="app-h3">ESS lưu trữ kết hợp điện mặt trời cho nhà máy & hạ tầng</div>
                <p className="app-p">Hệ thống ESS giúp chủ động nguồn điện, giảm chi phí điện năng và tăng tỷ lệ khai thác điện mặt trời.</p>
                <div className="app-metrics"><div><div class="app-mv">40<em>%</em></div><div class="app-ml">Tiết kiệm điện</div></div><div><div class="app-mv">10<em>yr</em></div><div class="app-ml">Vòng đời hệ thống</div></div></div>
                <div className="app-num">04</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ NETWORK – LIGHT (BG SOFT) ══════ */}
        <section id="network" className="sec" style={{ background: 'var(--bg-soft)' }}>
          <div className="inner">
            <div className="rv">
              <div className="sec-lbl"><div class="sec-lbl-line"></div><span>Mạng Lưới Phân Phối</span></div>
              <h2 className="sec-h2">Đại lý và đối tác toàn quốc</h2>
            </div>
            <div className="net-grid">
              <div className="map-wrap rv">
                <svg className="vmap" viewBox="0 0 200 490" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M130,20 L140,30 L150,46 L155,62 L150,82 L145,102 L155,122 L160,142 L158,162 L155,177 L150,192 L140,202 L130,212 L120,222 L110,237 L105,252 L100,267 L95,282 L90,302 L85,322 L80,342 L75,362 L72,382 L70,402 L68,422 L65,442 L60,462 L55,472 L50,477 L45,472 L40,462 L38,447 L42,432 L48,417 L52,402 L55,387 L58,372 L60,357 L62,342 L65,327 L68,312 L70,297 L72,282 L75,267 L80,252 L85,237 L90,222 L95,207 L98,192 L100,177 L102,162 L100,147 L95,132 L90,117 L88,102 L90,87 L95,72 L100,57 L108,42 L115,30 L122,20 Z" fill="#EEECEA" stroke="#CCCAC5" strokeWidth="1.2" />
                  <path d="M130,20 L140,30 L150,46 L155,62 L150,82 L145,102 L155,122 L160,142 L158,162 L155,177 L150,192 L140,202 L130,212 L120,222 L110,237 L105,252 L100,267 L95,282 L90,302 L85,322 L80,342 L75,362 L72,382 L70,402 L68,422 L65,442 L60,462" stroke="rgba(214,31,38,0.22)" strokeWidth="1.5" fill="none" strokeDasharray="5 4" />
                  {/* Ha Noi */}
                  <g className="cp"><circle cx="108" cy="102" r="16" fill="rgba(214,31,38,0.06)" stroke="rgba(214,31,38,0.22)" strokeWidth="1" /><circle cx="108" cy="102" r="5" fill="#D61F26" /><circle cx="108" cy="102" r="9" fill="none" stroke="#D61F26" strokeWidth="0.8" opacity="0.35" /><text x="127" y="106" fontFamily="Manrope,sans-serif" fontSize="10" fill="#444" fontWeight="700">Hà Nội</text></g>
                  {/* Da Nang */}
                  <g className="cp"><circle cx="136" cy="232" r="12" fill="rgba(214,31,38,0.05)" stroke="rgba(214,31,38,0.18)" strokeWidth="1" /><circle cx="136" cy="232" r="4" fill="#D61F26" opacity="0.85" /><text x="152" y="236" fontFamily="Manrope,sans-serif" fontSize="9" fill="#555" fontWeight="600">Đà Nẵng</text></g>
                  {/* HCMC */}
                  <g className="cp"><circle cx="90" cy="393" r="18" fill="rgba(214,31,38,0.08)" stroke="rgba(214,31,38,0.28)" strokeWidth="1.2" /><circle cx="90" cy="393" r="6" fill="#D61F26" /><circle cx="90" cy="393" r="11" fill="none" stroke="#D61F26" strokeWidth="0.8" opacity="0.3" /><circle cx="90" cy="393" r="15" fill="none" stroke="#D61F26" strokeWidth="0.5" opacity="0.13" /><text x="112" y="397" fontFamily="Manrope,sans-serif" fontSize="10" fill="#333" fontWeight="700">TP.HCM</text></g>
                  {/* Can Tho */}
                  <g className="cp"><circle cx="72" cy="438" r="9" fill="rgba(214,31,38,0.04)" stroke="rgba(214,31,38,0.14)" strokeWidth="1" /><circle cx="72" cy="438" r="3" fill="#D61F26" opacity="0.65" /><text x="84" y="442" fontFamily="Manrope,sans-serif" fontSize="9" fill="#666" fontWeight="600">Cần Thơ</text></g>
                  <g><circle cx="126" cy="158" r="3" fill="rgba(214,31,38,0.45)" /><text x="131" y="162" fontFamily="Manrope,sans-serif" fontSize="8" fill="#aaa">KCN</text></g>
                  <g><circle cx="100" cy="322" r="3" fill="rgba(214,31,38,0.38)" /><text x="105" y="326" fontFamily="Manrope,sans-serif" fontSize="8" fill="#aaa">KCN</text></g>
                </svg>
              </div>
              <div className="rv d1">
                <p className="net-p">PKG Battery đang mở rộng mạng lưới đối tác và đại lý trên toàn quốc nhằm đưa giải pháp pin Lithium chất lượng cao đến gần hơn với doanh nghiệp tại nhiều tỉnh thành.</p>
                <ul className="net-list">
                  <li>Hà Nội và các tỉnh miền Bắc</li>
                  <li>TP. Hồ Chí Minh và vùng Đông Nam Bộ</li>
                  <li>Đà Nẵng và miền Trung</li>
                  <li>Đồng bằng sông Cửu Long</li>
                  <li>Các khu công nghiệp trọng điểm toàn quốc</li>
                </ul>
                <a href="#contact" className="btn-red">
                  Trở thành đại lý PKG Battery
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ CONTACT – LIGHT ══════ */}
        <section id="contact" className="sec">
          <div className="inner">
            <div className="contact-stripe"></div>
            <div className="contact-grid">
              <div className="rv">
                <div className="sec-lbl"><div class="sec-lbl-line"></div><span>Liên Hệ</span></div>
                <h2 className="contact-h2">Bắt đầu nâng cấp hệ thống năng lượng của bạn <em>hôm nay</em></h2>
                <p className="contact-p">Liên hệ với đội ngũ PKG Battery để được tư vấn giải pháp phù hợp với mô hình vận hành, nhu cầu kỹ thuật và định hướng đầu tư của doanh nghiệp. Từ giải pháp tiêu chuẩn đến tùy biến riêng, chúng tôi sẵn sàng đồng hành.</p>
                <div className="cinfo">
                  <div className="ci"><div className="ci-icon">📍</div><div><div class="ci-lbl">Địa chỉ</div><div class="ci-val">Thành phố Hồ Chí Minh, Việt Nam</div></div></div>
                  <div className="ci"><div className="ci-icon">📞</div><div><div class="ci-lbl">Hotline</div><div class="ci-val">1800 XXXX (Miễn phí)</div></div></div>
                  <div className="ci"><div className="ci-icon">✉️</div><div><div class="ci-lbl">Email</div><div class="ci-val">info@pkgbattery.vn</div></div></div>
                </div>
              </div>
              <div className="cform rv d1">
                <div className="frow">
                  <div className="fg"><label className="fl">Họ tên</label><input type="text" className="fi" placeholder="Nguyễn Văn A" /></div>
                  <div className="fg"><label className="fl">Công ty</label><input type="text" className="fi" placeholder="Tên doanh nghiệp" /></div>
                </div>
                <div className="frow">
                  <div className="fg"><label className="fl">Số điện thoại</label><input type="tel" className="fi" placeholder="0901 234 567" /></div>
                  <div className="fg"><label className="fl">Email</label><input type="email" className="fi" placeholder="email@congty.com" /></div>
                </div>
                <div className="fg">
                  <label className="fl">Nhu cầu</label>
                  <select className="fsel">
                    <option value="">Chọn nhu cầu của bạn</option>
                    <option>Pin xe nâng điện</option><option>Pin xe điện du lịch / golf</option>
                    <option>Pin AGV / Robot</option><option>Bộ sạc / Trạm sạc</option>
                    <option>ESS lưu trữ năng lượng</option><option>OEM / ODM tùy biến</option>
                    <option>Trở thành đại lý</option>
                  </select>
                </div>
                <div className="fg">
                  <label className="fl">Mô tả yêu cầu</label>
                  <textarea className="fta" placeholder="Mô tả ngắn về nhu cầu kỹ thuật, quy mô hoặc câu hỏi cụ thể của doanh nghiệp bạn..."></textarea>
                </div>
                <button className="fsub">Nhận tư vấn giải pháp →</button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ FOOTER – DARK ══════ */}
        <footer>
          <div className="foot-inner">
            <div className="foot-top">
              <div>
                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: "'Bebas Neue', sans-serif", fontSize: '23px', letterSpacing: '2px', textDecoration: 'none', color: '#fff' }}>
                  <div className="logo-mark">P</div>PKG BATTERY
                </a>
                <p className="foot-desc">Tiên phong giải pháp năng lượng Lithium tại Việt Nam. Từ nghiên cứu, thiết kế đến sản xuất và triển khai thực tế – PKG Battery là đối tác năng lượng tin cậy cho doanh nghiệp.</p>
              </div>
              <div>
                <div className="fcol-t">Sản phẩm</div>
                <ul className="flinks"><li><a href="#">Pin xe nâng điện</a></li><li><a href="#">Pin xe điện du lịch</a></li><li><a href="#">Pin AGV / Robot</a></li><li><a href="#">Bộ sạc nhanh</a></li><li><a href="#">ESS lưu trữ</a></li></ul>
              </div>
              <div>
                <div className="fcol-t">Doanh nghiệp</div>
                <ul className="flinks"><li><a href="#">Về PKG Battery</a></li><li><a href="#">Năng lực sản xuất</a></li><li><a href="#">Chứng nhận</a></li><li><a href="#">Đại lý</a></li><li><a href="#">OEM / ODM</a></li></ul>
              </div>
              <div>
                <div className="fcol-t">Liên hệ</div>
                <ul className="flinks"><li><a href="#">info@pkgbattery.vn</a></li><li><a href="#">1800 XXXX</a></li><li><a href="#">TP. Hồ Chí Minh</a></li><li><a href="#">Chính sách bảo mật</a></li><li><a href="#">Điều khoản sử dụng</a></li></ul>
              </div>
            </div>
            <div className="foot-bottom">
              <p className="foot-copy">© 2025 PKG Battery. All rights reserved. Tiên phong giải pháp năng lượng Lithium tại Việt Nam.</p>
              <div className="socials">
                <a href="#" className="soc">f</a><a href="#" className="soc">in</a><a href="#" className="soc">yt</a><a href="#" className="soc">zl</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
