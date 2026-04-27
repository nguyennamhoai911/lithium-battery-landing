const fs=require('fs');
const existing=fs.readFileSync(__dirname+'/index.html','utf-8');
const inquiry=`
<section class="inquiry-section" id="inquiry">
<div class="container">
<div class="section-label reveal">Smart Inquiry</div>
<h2 class="section-title reveal">Bạn cần PKGbattery hỗ trợ điều gì?</h2>
<p class="section-sub reveal">Chọn đúng nhu cầu để đội ngũ phụ trách phản hồi bạn nhanh và chính xác hơn.</p>
<div class="inquiry-grid reveal" id="inquiry-grid">
<div class="inquiry-tile active" data-type="quote" onclick="selectInquiry(this)">
<div class="tile-icon">⚡</div>
<div class="tile-title">Yêu cầu báo giá</div>
<div class="tile-desc">Mua số lượng lớn, cung cấp dự án, báo giá sản phẩm.</div>
</div>
<div class="inquiry-tile" data-type="dealer" onclick="selectInquiry(this)">
<div class="tile-icon">🏪</div>
<div class="tile-title">Đăng ký đại lý</div>
<div class="tile-desc">Nhà phân phối, cửa hàng, đối tác khu vực tại Việt Nam.</div>
</div>
<div class="inquiry-tile" data-type="oem" onclick="selectInquiry(this)">
<div class="tile-icon">⚙️</div>
<div class="tile-title">Dự án OEM / ODM</div>
<div class="tile-desc">Thiết kế và sản xuất battery pack theo yêu cầu riêng.</div>
</div>
<div class="inquiry-tile" data-type="tech" onclick="selectInquiry(this)">
<div class="tile-icon">🔧</div>
<div class="tile-title">Hỗ trợ kỹ thuật</div>
<div class="tile-desc">Lắp đặt, tương thích, xử lý sự cố, hướng dẫn sử dụng.</div>
</div>
<div class="inquiry-tile" data-type="warranty" onclick="selectInquiry(this)">
<div class="tile-icon">🛡️</div>
<div class="tile-title">Bảo hành sản phẩm</div>
<div class="tile-desc">Lỗi sản phẩm, serial number, chứng từ mua hàng.</div>
</div>
<div class="inquiry-tile" data-type="other" onclick="selectInquiry(this)">
<div class="tile-icon">🤝</div>
<div class="tile-title">Hợp tác khác</div>
<div class="tile-desc">Truyền thông, cung ứng, tuyển dụng, yêu cầu chung.</div>
</div>
</div>
</div>
</section>`;
const form=`
<section class="form-section">
<div class="container">
<div class="form-wrapper reveal" id="contact-form-wrapper">
<div id="form-content">
<h3 class="form-title" id="form-title">Yêu cầu báo giá</h3>
<p class="form-sub" id="form-sub">Đội ngũ sale PKGbattery sẽ liên hệ bạn với thông tin sản phẩm và báo giá chi tiết.</p>
<form id="contact-form" onsubmit="handleSubmit(event)">
<div class="form-grid" id="form-fields">
<div class="form-row">
<div class="form-group"><label class="form-label">Họ và tên <span class="req">*</span></label><input class="form-input" required placeholder="Nguyễn Văn A"></div>
<div class="form-group"><label class="form-label">Số điện thoại <span class="req">*</span></label><input class="form-input" type="tel" required placeholder="0989 xxx xxx"></div>
</div>
<div class="form-row">
<div class="form-group"><label class="form-label">Email <span class="req">*</span></label><input class="form-input" type="email" required placeholder="email@company.com"></div>
<div class="form-group"><label class="form-label">Công ty</label><input class="form-input" placeholder="Tên doanh nghiệp"></div>
</div>
<div class="form-group full" id="dynamic-fields"></div>
<div class="form-group full"><label class="form-label">Ghi chú thêm</label><textarea class="form-textarea" placeholder="Mô tả thêm nhu cầu của bạn..."></textarea></div>
</div>
<button type="submit" class="form-submit" id="form-submit">📩 Nhận báo giá</button>
<p class="form-micro">PKGbattery cam kết bảo mật thông tin. Đội ngũ sale sẽ phản hồi trong 24h làm việc.</p>
</form>
</div>
<div class="form-success hidden" id="form-success">
<div style="font-size:48px;margin-bottom:16px">✅</div>
<h3>Yêu cầu đã được gửi thành công!</h3>
<p>Đội ngũ PKGbattery sẽ liên hệ bạn sớm nhất. Với yêu cầu khẩn, vui lòng gọi trực tiếp hotline sale.</p>
<div class="form-success-actions">
<a href="tel:0989000111" class="btn-primary">📞 Gọi Sale Ngay</a>
<a href="https://zalo.me/0989000111" class="btn-secondary" style="color:var(--black);border-color:var(--gray-300)">💬 Chat Zalo</a>
</div>
</div>
</div>
</div>
</section>`;
fs.writeFileSync(__dirname+'/index.html', existing+inquiry+form, 'utf-8');
console.log('Part 2 written');
