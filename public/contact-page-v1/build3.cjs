const fs=require('fs');
const existing=fs.readFileSync(__dirname+'/index.html','utf-8');
const dealers=`
<section class="dealer-section" id="dealers">
<div class="container">
<div class="section-label reveal">Dealer Network</div>
<h2 class="section-title reveal">Hệ thống đại lý PKGbattery tại Việt Nam</h2>
<p class="section-sub reveal">Tìm đại lý hoặc điểm hỗ trợ gần khu vực của bạn.</p>
<div class="dealer-filter reveal">
<button class="dealer-filter-btn active" onclick="filterDealers('all',this)">Tất cả</button>
<button class="dealer-filter-btn" onclick="filterDealers('north',this)">Miền Bắc</button>
<button class="dealer-filter-btn" onclick="filterDealers('central',this)">Miền Trung</button>
<button class="dealer-filter-btn" onclick="filterDealers('south',this)">Miền Nam</button>
</div>
<div class="dealer-layout reveal">
<div class="dealer-map"><img src="vietnam-map.png" alt="Bản đồ đại lý PKGbattery"></div>
<div class="dealer-list" id="dealer-list"></div>
</div>
</div>
</section>`;
const office=`
<section class="office-section" id="office">
<div class="container">
<div class="section-label reveal">Head Office</div>
<h2 class="section-title reveal">Văn phòng PKGbattery</h2>
<div class="office-layout reveal" style="margin-top:32px">
<iframe class="office-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6!2d105.82!3d21.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAwJzM2LjAiTiAxMDXCsDQ5JzEyLjAiRQ!5e0!3m2!1svi!2svn!4v1" allowfullscreen loading="lazy"></iframe>
<div class="office-overlay">
<h3>PKGbattery Head Office</h3>
<p>123 Thái Hà, Đống Đa, Hà Nội, Việt Nam<br>Giờ làm việc: Thứ 2 – Thứ 7, 8:00 – 18:00<br>Hotline: 0989 000 111<br>Email: contact@pkgbattery.com</p>
<a href="https://maps.google.com" target="_blank" class="btn-map">📍 Mở Google Maps</a>
</div>
</div>
<div class="office-images reveal" style="margin-top:20px">
<img src="office-showroom.png" alt="Showroom PKGbattery">
<img src="engineer-testing.png" alt="Kỹ sư kiểm tra pin">
<img src="warehouse-stock.png" alt="Kho hàng PKGbattery">
</div>
</div>
</section>`;
const social=`
<section class="social-section">
<div class="container">
<div class="section-label reveal">Stay Connected</div>
<h2 class="section-title reveal">Theo dõi hoạt động thực tế của PKGbattery</h2>
<p class="section-sub reveal">Cập nhật sản phẩm mới, hoạt động đại lý, video kỹ thuật và các dự án thực tế.</p>
<div class="social-grid reveal">
<div class="social-tile"><img src="engineer-testing.png" alt="Test pin"><div class="social-overlay"><span class="social-tag">Product Test</span><div class="social-title">Kiểm tra chất lượng pin LiFePO4 48V 100Ah</div></div></div>
<div class="social-tile"><img src="warehouse-stock.png" alt="Kho hàng"><div class="social-overlay"><span class="social-tag">Dealer Activity</span><div class="social-title">Giao hàng lô pin xe nâng cho đại lý miền Nam</div></div></div>
<div class="social-tile"><img src="hero-bg.png" alt="Nhà máy"><div class="social-overlay"><span class="social-tag">Factory Insight</span><div class="social-title">Dây chuyền sản xuất battery pack OEM</div></div></div>
<div class="social-tile"><img src="office-showroom.png" alt="Showroom"><div class="social-overlay"><span class="social-tag">Technical Guide</span><div class="social-title">Hướng dẫn chọn pin lithium cho xe nâng điện</div></div></div>
</div>
<div class="social-links reveal">
<a href="#" class="social-btn fb">📘 Facebook</a>
<a href="#" class="social-btn yt">▶️ YouTube</a>
<a href="#" class="social-btn li">💼 LinkedIn</a>
<a href="https://zalo.me/0989000111" class="social-btn zl">💬 Chat Zalo</a>
</div>
<p class="social-micro reveal">Chưa sẵn sàng liên hệ ngay? Theo dõi PKGbattery để xem thêm hoạt động thực tế, video sản phẩm và thông tin kỹ thuật trước khi đưa ra quyết định.</p>
</div>
</section>`;
const trust=`
<section class="trust-strip">
<div class="container">
<div class="trust-items">
<div class="trust-item"><div class="trust-number">10+</div><div class="trust-text">Năm kinh nghiệm sản xuất pin công nghiệp</div></div>
<div class="trust-item"><div class="trust-number">8</div><div class="trust-text">Đại lý ủy quyền trên toàn quốc</div></div>
<div class="trust-item"><div class="trust-number">OEM</div><div class="trust-text">Năng lực thiết kế battery pack theo yêu cầu</div></div>
<div class="trust-item"><div class="trust-number">24h</div><div class="trust-text">Phản hồi yêu cầu trong ngày làm việc</div></div>
<div class="trust-item"><div class="trust-number">ISO</div><div class="trust-text">Chứng nhận chất lượng quốc tế</div></div>
</div>
</div>
</section>`;
const finalCta=`
<section class="final-cta" id="final-cta">
<div class="container">
<h2 class="reveal">Sẵn sàng trao đổi về<br>nhu cầu pin của bạn?</h2>
<p class="reveal">Liên hệ đội ngũ PKGbattery để nhận tư vấn giải pháp phù hợp cho doanh nghiệp hoặc dự án của bạn.</p>
<div class="final-cta-buttons reveal">
<a href="tel:0989000111" class="btn-primary">📞 Gọi Sale Ngay</a>
<a href="https://zalo.me/0989000111" class="btn-secondary">💬 Chat Zalo</a>
<a href="#inquiry" class="btn-secondary">📝 Gửi yêu cầu</a>
</div>
</div>
</section>`;
const footer=`
<footer class="site-footer">
<div class="container">
<div class="footer-grid">
<div class="footer-brand"><div class="logo"><span class="logo-icon">PKG</span> PKG Battery</div><p class="footer-desc">Nhà sản xuất pin lithium công nghiệp tại Việt Nam. Giải pháp pin cho xe nâng, AGV, lưu trữ năng lượng và OEM/ODM battery pack.</p></div>
<div class="footer-col"><h4>Sản phẩm</h4><a href="#">Pin xe nâng</a><a href="#">Pin AGV / Robot</a><a href="#">Pin lưu trữ năng lượng</a><a href="#">OEM / ODM</a></div>
<div class="footer-col"><h4>Hỗ trợ</h4><a href="#">Kiến thức kỹ thuật</a><a href="#">Chính sách bảo hành</a><a href="#">Hỗ trợ kỹ thuật</a><a href="#">Tìm đại lý</a></div>
<div class="footer-col"><h4>Liên hệ</h4><a href="mailto:contact@pkgbattery.com">contact@pkgbattery.com</a><a href="tel:0989000111">0989 000 111</a><a href="#">123 Thái Hà, Đống Đa, Hà Nội</a></div>
</div>
<div class="footer-bottom"><span>© 2026 PKG Battery. All rights reserved.</span><span>Nhà sản xuất pin công nghiệp hàng đầu Việt Nam</span></div>
</div>
</footer>
<div class="mobile-sticky"><div class="mobile-sticky-inner"><a href="tel:0989000111" class="sticky-call">📞 Gọi Sale</a><a href="https://zalo.me/0989000111" class="sticky-zalo">💬 Chat Zalo</a></div></div>`;
fs.writeFileSync(__dirname+'/index.html', existing+dealers+office+social+trust+finalCta+footer, 'utf-8');
console.log('Part 3 written');
