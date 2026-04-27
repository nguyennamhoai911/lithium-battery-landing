const fs=require('fs');
const existing=fs.readFileSync(__dirname+'/index.html','utf-8');
const js=`
<script>
// Header scroll
const header=document.getElementById('site-header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>50));

// Scroll reveal
const obs=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
},{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// Inquiry selector
const formConfigs={
quote:{title:'Yêu cầu báo giá',sub:'Đội ngũ sale PKGbattery sẽ liên hệ bạn với thông tin sản phẩm và báo giá chi tiết.',btn:'📩 Nhận báo giá',fields:\`
<div class="form-group"><label class="form-label">Sản phẩm quan tâm</label><select class="form-select"><option>Lithium Battery</option><option>Energy Storage Battery</option><option>Golf Cart Battery</option><option>EV Battery</option><option>UPS Battery</option><option>Custom Battery Pack</option></select></div>
<div class="form-row"><div class="form-group"><label class="form-label">Số lượng dự kiến</label><input class="form-input" placeholder="VD: 50 bộ"></div><div class="form-group"><label class="form-label">Ứng dụng sử dụng</label><select class="form-select"><option>Solar storage</option><option>Xe điện</option><option>Golf cart</option><option>UPS</option><option>Industrial equipment</option><option>Khác</option></select></div></div>\`},
dealer:{title:'Đăng ký đại lý',sub:'Đội ngũ PKGbattery sẽ xem xét khu vực và liên hệ bạn về chính sách đại lý.',btn:'🏪 Đăng ký làm đại lý',fields:\`
<div class="form-row"><div class="form-group"><label class="form-label">Tên doanh nghiệp / cửa hàng <span class="req">*</span></label><input class="form-input" required placeholder="Tên cửa hàng"></div><div class="form-group"><label class="form-label">Tỉnh/thành muốn phân phối</label><input class="form-input" placeholder="VD: TP. Hồ Chí Minh"></div></div>
<div class="form-row"><div class="form-group"><label class="form-label">Kinh nghiệm kinh doanh</label><select class="form-select"><option>Dưới 1 năm</option><option>1–3 năm</option><option>Trên 3 năm</option></select></div><div class="form-group"><label class="form-label">Kênh bán hiện tại</label><select class="form-select"><option>Showroom</option><option>Online</option><option>Dự án</option><option>Đại lý kỹ thuật</option><option>Khác</option></select></div></div>\`},
oem:{title:'Dự án OEM / ODM',sub:'Đội ngũ kỹ thuật sẽ đánh giá yêu cầu và đề xuất giải pháp phù hợp.',btn:'⚙️ Nhận tư vấn OEM/ODM',fields:\`
<div class="form-row"><div class="form-group"><label class="form-label">Loại pin mong muốn</label><select class="form-select"><option>LiFePO4</option><option>NMC</option><option>LTO</option><option>Chưa rõ — cần tư vấn</option></select></div><div class="form-group"><label class="form-label">Điện áp yêu cầu</label><input class="form-input" placeholder="VD: 48V"></div></div>
<div class="form-row"><div class="form-group"><label class="form-label">Dung lượng yêu cầu</label><input class="form-input" placeholder="VD: 100Ah"></div><div class="form-group"><label class="form-label">Số lượng dự kiến</label><input class="form-input" placeholder="VD: 100–500 bộ/năm"></div></div>
<div class="form-group"><label class="form-label">Upload bản vẽ / thông số (nếu có)</label><div class="form-file" onclick="this.querySelector('input').click()"><input type="file" hidden multiple><div class="form-file-label">📎 Kéo thả hoặc click để upload file</div></div></div>\`},
tech:{title:'Hỗ trợ kỹ thuật',sub:'Đội ngũ kỹ thuật sẽ liên hệ bạn để hỗ trợ xử lý.',btn:'🔧 Gửi yêu cầu hỗ trợ',fields:\`
<div class="form-row"><div class="form-group"><label class="form-label">Sản phẩm đang sử dụng</label><input class="form-input" placeholder="VD: Pin LiFePO4 48V 100Ah"></div><div class="form-group"><label class="form-label">Serial number (nếu có)</label><input class="form-input" placeholder="VD: PKG-2026-XXXX"></div></div>
<div class="form-group"><label class="form-label">Vấn đề đang gặp <span class="req">*</span></label><textarea class="form-textarea" required placeholder="Mô tả chi tiết vấn đề..."></textarea></div>
<div class="form-group"><label class="form-label">Upload ảnh/video lỗi (nếu có)</label><div class="form-file" onclick="this.querySelector('input').click()"><input type="file" hidden multiple accept="image/*,video/*"><div class="form-file-label">📎 Kéo thả hoặc click để upload</div></div></div>\`},
warranty:{title:'Bảo hành sản phẩm',sub:'Vui lòng cung cấp thông tin để đội ngũ xử lý yêu cầu bảo hành.',btn:'🛡️ Gửi yêu cầu bảo hành',fields:\`
<div class="form-row"><div class="form-group"><label class="form-label">Sản phẩm <span class="req">*</span></label><input class="form-input" required placeholder="Tên sản phẩm"></div><div class="form-group"><label class="form-label">Serial number <span class="req">*</span></label><input class="form-input" required placeholder="PKG-XXXX-XXXX"></div></div>
<div class="form-row"><div class="form-group"><label class="form-label">Ngày mua</label><input class="form-input" type="date"></div><div class="form-group"><label class="form-label">Mua tại</label><select class="form-select"><option>PKGbattery trực tiếp</option><option>Đại lý ủy quyền</option><option>Khác</option></select></div></div>
<div class="form-group"><label class="form-label">Mô tả lỗi <span class="req">*</span></label><textarea class="form-textarea" required placeholder="Mô tả chi tiết tình trạng lỗi..."></textarea></div>
<div class="form-group"><label class="form-label">Upload ảnh/video/serial</label><div class="form-file" onclick="this.querySelector('input').click()"><input type="file" hidden multiple><div class="form-file-label">📎 Kéo thả hoặc click để upload</div></div></div>\`},
other:{title:'Liên hệ chung',sub:'Đội ngũ PKGbattery sẽ chuyển yêu cầu đến bộ phận phù hợp.',btn:'📩 Gửi liên hệ',fields:\`
<div class="form-row"><div class="form-group"><label class="form-label">Công ty / tổ chức</label><input class="form-input" placeholder="Tên tổ chức"></div><div class="form-group"><label class="form-label">Loại yêu cầu</label><select class="form-select"><option>Hợp tác thương mại</option><option>Truyền thông</option><option>Cung ứng</option><option>Tuyển dụng</option><option>Khác</option></select></div></div>\`}
};
function selectInquiry(el){
document.querySelectorAll('.inquiry-tile').forEach(t=>t.classList.remove('active'));
el.classList.add('active');
const type=el.dataset.type;
const cfg=formConfigs[type];
document.getElementById('form-title').textContent=cfg.title;
document.getElementById('form-sub').textContent=cfg.sub;
document.getElementById('form-submit').innerHTML=cfg.btn;
document.getElementById('dynamic-fields').innerHTML=cfg.fields;
document.getElementById('form-content').classList.remove('hidden');
document.getElementById('form-success').classList.add('hidden');
document.getElementById('contact-form-wrapper').scrollIntoView({behavior:'smooth',block:'start'});
}

function handleSubmit(e){
e.preventDefault();
document.getElementById('form-content').classList.add('hidden');
document.getElementById('form-success').classList.remove('hidden');
}

// Dealers
const dealersData=[
{name:'PKGbattery Dealer Hà Nội',addr:'123 Thái Hà, Đống Đa, Hà Nội',phone:'0989 000 111',region:'north',area:'Hà Nội và khu vực miền Bắc',hours:'T2–T7: 8:00–18:00'},
{name:'PKGbattery Dealer Hải Phòng',addr:'45 Lạch Tray, Ngô Quyền, Hải Phòng',phone:'0989 000 222',region:'north',area:'Hải Phòng và vùng Đông Bắc',hours:'T2–T7: 8:00–17:30'},
{name:'PKGbattery Dealer Bắc Ninh',addr:'78 Lý Thái Tổ, TP. Bắc Ninh',phone:'0989 000 333',region:'north',area:'Bắc Ninh, Bắc Giang, KCN phía Bắc',hours:'T2–T7: 8:00–17:30'},
{name:'PKGbattery Dealer Đà Nẵng',addr:'80 Trần Hưng Đạo, Sơn Trà, Đà Nẵng',phone:'0909 000 444',region:'central',area:'Miền Trung từ Huế đến Quảng Ngãi',hours:'T2–T7: 8:00–17:30'},
{name:'PKGbattery Dealer Nha Trang',addr:'56 Trần Phú, Lộc Thọ, Nha Trang',phone:'0909 000 555',region:'central',area:'Khánh Hòa và Nam Trung Bộ',hours:'T2–T7: 8:00–17:30'},
{name:'PKGbattery Dealer TP. Hồ Chí Minh',addr:'123 Điện Biên Phủ, Bình Thạnh, TP.HCM',phone:'0988 000 666',region:'south',area:'TP.HCM và Đông Nam Bộ',hours:'T2–T7: 8:00–18:00'},
{name:'PKGbattery Dealer Bình Dương',addr:'KCN VSIP, Thuận An, Bình Dương',phone:'0988 000 777',region:'south',area:'Bình Dương, Đồng Nai, Long An',hours:'T2–T7: 8:00–17:30'},
{name:'PKGbattery Dealer Cần Thơ',addr:'200 Nguyễn Văn Cừ, Ninh Kiều, Cần Thơ',phone:'0988 000 888',region:'south',area:'ĐBSCL và Tây Nam Bộ',hours:'T2–T7: 8:00–17:30'}
];
function renderDealers(region){
const list=document.getElementById('dealer-list');
const filtered=region==='all'?dealersData:dealersData.filter(d=>d.region===region);
list.innerHTML=filtered.map((d,i)=>\`
<div class="dealer-card" onmouseenter="this.classList.add('active')" onmouseleave="this.classList.remove('active')">
<div class="dealer-name">\${d.name}<span class="badge">\${d.region==='north'?'Bắc':d.region==='central'?'Trung':'Nam'}</span></div>
<div class="dealer-address">📍 \${d.addr}</div>
<div class="dealer-meta">📞 \${d.phone} · \${d.hours}<br>Phụ trách: \${d.area}</div>
<div class="dealer-actions">
<a href="tel:\${d.phone.replace(/\\s/g,'')}" class="dealer-btn call">📞 Gọi đại lý</a>
<a href="https://maps.google.com/?q=\${encodeURIComponent(d.addr)}" target="_blank" class="dealer-btn dir">📍 Chỉ đường</a>
</div>
</div>\`).join('');
}
function filterDealers(region,btn){
document.querySelectorAll('.dealer-filter-btn').forEach(b=>b.classList.remove('active'));
btn.classList.add('active');
renderDealers(region);
}
renderDealers('all');

// Init default form fields
document.getElementById('dynamic-fields').innerHTML=formConfigs.quote.fields;
<\/script>
</body>
</html>`;
fs.writeFileSync(__dirname+'/index.html', existing+js, 'utf-8');
console.log('Part 4 (JS) written - COMPLETE');
