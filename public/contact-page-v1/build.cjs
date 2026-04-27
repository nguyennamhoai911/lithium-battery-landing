const fs=require('fs');
const top=`<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Liên hệ PKGbattery | Tư vấn pin lithium, OEM/ODM, Đại lý</title>
<meta name="description" content="Liên hệ đội ngũ PKGbattery để nhận tư vấn giải pháp pin lithium, báo giá dự án, đăng ký đại lý, OEM/ODM, bảo hành và hỗ trợ kỹ thuật.">
<link rel="stylesheet" href="styles.css">
</head>
<body>`;
const header=`
<header class="site-header" id="site-header">
<div class="header-inner">
<a href="/" class="logo"><span class="logo-icon">PKG</span> PKG Battery</a>
<nav class="header-nav">
<a href="#">Trang chủ</a><a href="#">Sản phẩm</a><a href="#">Giải pháp</a><a href="#">Kiến thức</a><a href="#">Về chúng tôi</a><a href="#" class="active">Liên hệ</a>
</nav>
<div class="header-actions"><a href="tel:0989000111" class="btn-contact-header">📞 Gọi ngay</a></div>
<button class="mobile-toggle" id="mobile-toggle"><span></span><span></span><span></span></button>
</div>
</header>`;
const hero=`
<section class="hero">
<div class="hero-grid"></div>
<div class="container hero-content">
<div class="hero-left">
<div class="hero-label reveal">Contact PKGbattery</div>
<h1 class="reveal">Liên hệ đội ngũ<br>PKGbattery</h1>
<p class="hero-sub reveal">Nhận tư vấn nhanh về giải pháp pin lithium, báo giá dự án, đăng ký đại lý, OEM/ODM, bảo hành và hỗ trợ kỹ thuật.</p>
<div class="hero-ctas reveal">
<a href="tel:0989000111" class="btn-primary">📞 Gọi Sale Ngay</a>
<a href="https://zalo.me/0989000111" class="btn-secondary">💬 Chat Zalo</a>
</div>
<div class="hero-secondary-links reveal">
<a href="#inquiry" class="btn-outline">📝 Gửi yêu cầu</a>
<a href="#dealers" class="btn-outline">📍 Tìm đại lý gần bạn</a>
</div>
<p class="hero-micro reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> Đội ngũ sale phản hồi nhanh — T2–T7, 8:00–18:00</p>
</div>
<div class="hero-visual reveal"><img src="battery-closeup.png" alt="PKG Battery Pack"></div>
</div>
</section>`;
const panel=`
<section class="contact-panel">
<div class="container">
<div class="panel-grid">
<div class="panel-item priority">
<div class="panel-icon red">📞</div>
<div class="panel-label">Hotline tư vấn</div>
<div class="panel-value"><a href="tel:0989000111">0989 000 111</a></div>
<div class="panel-micro">Phù hợp khi cần báo giá hoặc tư vấn nhanh.</div>
</div>
<div class="panel-item priority">
<div class="panel-icon dark">💬</div>
<div class="panel-label">Zalo Support</div>
<div class="panel-value"><a href="https://zalo.me/0989000111">Chat với PKGbattery</a></div>
<div class="panel-micro">Phản hồi nhanh trong giờ làm việc.</div>
</div>
<div class="panel-item">
<div class="panel-icon gray">✉️</div>
<div class="panel-label">Email chính thức</div>
<div class="panel-value"><a href="mailto:contact@pkgbattery.com">contact@pkgbattery.com</a></div>
<div class="panel-micro">Dành cho đề xuất, hồ sơ và yêu cầu chính thức.</div>
</div>
<div class="panel-item">
<div class="panel-icon gray">🏢</div>
<div class="panel-label">Văn phòng chính</div>
<div class="panel-value"><a href="#office">Hà Nội, Việt Nam</a></div>
<div class="panel-micro">Xem bản đồ Google Map bên dưới.</div>
</div>
</div>
</div>
</section>`;
fs.writeFileSync(__dirname+'/index.html', top+header+hero+panel, 'utf-8');
console.log('Part 1 written');
