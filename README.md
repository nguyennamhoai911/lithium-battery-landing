<div align="center">
  <img src="https://images.unsplash.com/photo-1620916566398-35f114fec649?w=1200&q=80" alt="Corporate Technology" width="100%" style="border-radius: 12px; margin-bottom: 20px;"/>
  
  <h1>
    <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/layers-fill.svg" width="28" height="28" style="vertical-align: middle; margin-right: 8px;" />
    Demo UI Hub
  </h1>
  
  <strong>Trung tâm Quản lý & Hiển thị các Template Giao diện (Landing Pages)</strong>
  
  <br/><br/>
  <a href="#">Tài liệu</a> • <a href="#">Báo lỗi</a>

</div>

---

## <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/book-fill.svg" width="20" height="20" style="vertical-align: text-bottom;" /> Giới thiệu (Overview)

**Demo UI Hub** là kho lưu trữ tập trung (Centralized Hub) chứa toàn bộ mã nguồn cũng như bản build của các trang Landing Pages, Template giới thiệu sản phẩm và hồ sơ năng lực doanh nghiệp.

Hệ thống được thiết kế dạng **Marketplace Hub**, đóng vai trò là nơi:
- Xem trước (Live Preview) tương tác các giao diện ngay lập tức.
- Lưu trữ các source code độc lập cho từng landing page (`unbuilt-sources`).
- Cung cấp cổng demo tập trung thông qua `Vite` và `React`.

---

## <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/stars.svg" width="20" height="20" style="vertical-align: text-bottom;" /> Tính năng nổi bật (Features)

- <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/lightning-charge-fill.svg" width="16" height="16" style="vertical-align: middle;" /> **Tốc độ cao**: Sử dụng Vite/React để hiển thị trang Hub mượt mà và tối ưu hóa tài nguyên.
- <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/box-seam-fill.svg" width="16" height="16" style="vertical-align: middle;" /> **Cấu trúc Độc lập (Isolations)**: Mỗi landing page là một dự án ứng dụng hoàn chỉnh nằm riêng biệt trong thư mục `unbuilt-sources`.
- <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/tools.svg" width="16" height="16" style="vertical-align: middle;" /> **Figma Tích hợp**: Hỗ trợ quy trình làm việc xuất và triển khai giao diện từ bản thiết kế sang mã nguồn một cách nhanh chóng.
- <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/palette-fill.svg" width="16" height="16" style="vertical-align: middle;" /> **UI/UX Premium**: Hệ thống thiết kế đồng nhất theo phong cách hiện đại và chuẩn công nghiệp tiên tiến.
- <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/grid-1x2-fill.svg" width="16" height="16" style="vertical-align: middle;" /> **Marketplace Layout**: Giao diện chính của Hub đóng vai trò như một kho giao diện trực quan, liệt kê dự án kèm preview iframe.

---

## <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/folder-fill.svg" width="20" height="20" style="vertical-align: text-bottom;" /> Kiến trúc Thư mục (Directory Structure)

```text
demo-ui/
├── public/                 # Chứa các bản build tĩnh (Static Assets) của từng landing page
│   ├── gioi-thieu-cong-ty-v1-x/
│   ├── lithium-sightseeing/
│   └── ...
├── src/                    # Source code trang Hub chính (Demo Marketplace)
│   ├── App.tsx             
│   ├── hub.tsx             
│   └── index.css           
├── unbuilt-sources/        # Mã nguồn gốc chưa build của từng landing page
│   ├── gioi-thieu-cong-ty-v1-x/  # Từng thư mục là một project độc lập
│   ├── product-overview/
│   └── warranty-policy/
└── package.json            # Cấu hình dự án Hub
```

---

## <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/rocket-takeoff-fill.svg" width="20" height="20" style="vertical-align: text-bottom;" /> Hướng dẫn Cài đặt & Chạy (Getting Started)

### Yêu cầu hệ thống
- <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/check-circle-fill.svg" width="16" height="16" style="vertical-align: text-top;" /> **Node.js** >= 18.x
- <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/check-circle-fill.svg" width="16" height="16" style="vertical-align: text-top;" /> **Trình quản lý gói**: `pnpm` hoặc `npm`

### Các bước thực hiện

1. **Clone repository và cài đặt Dependencies cho Hub chính:**
   ```bash
   pnpm install
   ```

2. **Chạy giao diện Hub Demo ở môi trường Dev (Port 3115):**
   ```bash
   pnpm run dev
   ```
   *Truy cập: `http://localhost:3115/` để xem tất cả Demo UI.*

3. **Chạy hoặc Build một dự án Landing Page độc lập:**
   Mỗi landing page trong `unbuilt-sources` là dự án độc lập, bạn cần vào đúng thư mục để cài đặt và build:
   ```bash
   cd unbuilt-sources/gioi-thieu-cong-ty-v1-1
   pnpm install
   pnpm run build
   ```
   *(Sau khi build, bạn có thể copy nội dung từ thư mục `dist` sang `public/<tên-dự-án>` của Hub chính để hiển thị trên marketplace)*

---

## <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/terminal-fill.svg" width="20" height="20" style="vertical-align: text-bottom;" /> Các lệnh có sẵn (Available Scripts)

- `pnpm dev`: Khởi chạy Vite server cho Hub.
- `pnpm build`: Build trang Hub.
- `pnpm preview`: Xem trước bản build của Hub.
- `pnpm clean`: Xóa thủ công thư mục `dist`.

---

## <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/shield-lock-fill.svg" width="20" height="20" style="vertical-align: text-bottom;" /> Về Bản Quyền (Proprietary & Confidential)

> **LƯU Ý QUAN TRỌNG VỀ BẢO MẬT**
> 
> Toàn bộ mã nguồn, thiết kế UI/UX, tài nguyên đồ họa và nội dung trong repository này là **tài sản trí tuệ và thuộc quyền sở hữu độc quyền** của công ty chủ quản. 
> 
> Nghiêm cấm sao chép, tái sử dụng, chia sẻ, phân phối lại hoặc sử dụng cho mục đích thương mại/cá nhân bên ngoài phạm vi các công việc được ủy quyền. Mọi vi phạm có thể dẫn tới các biện pháp xử lý pháp lý.

---

<div align="center">
  <p><i>Maintainer & Developer Team</i></p>
</div>
