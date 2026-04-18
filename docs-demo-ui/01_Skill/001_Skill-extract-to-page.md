# Skill: Extract ZIP Project → Build → Add to Demo Hub

## Mục đích

Skill này mô tả quy trình từ A→Z để lấy một file `.zip` chứa source code dự án (React + Vite hoặc HTML tĩnh), giải nén → build thành file tĩnh → đưa vào thư mục `public/` → đăng ký trong trang Hub điều hướng. Sau khi hoàn tất, trang mới sẽ xuất hiện dưới dạng một "template card" trên trang chủ Hub với live preview iframe.

---

## Cấu trúc thư mục quan trọng

```
demo-ui/
├── source-zip/              ← Nơi chứa các file .zip gốc (input)
├── unbuilt-sources/         ← Nơi giải nén source code ra để build
├── public/                  ← Nơi chứa output tĩnh (đã build) — Vite sẽ copy nguyên vào dist
│   ├── aerostream-stratos/
│   ├── warranty-policy/
│   └── ...
├── src/
│   └── hub.tsx              ← Trang Hub điều hướng — danh sách projects nằm ở đây
├── build-zips.cjs           ← Script tự động: patch → install → build → copy
├── index.html               ← Entry point cho trang Hub
└── lithium-sightseeing.html ← Entry point cho trang Lithium (React MPA)
```

---

## Quy trình thực hiện

### Bước 1: Đặt file ZIP vào `source-zip/`

Copy file `.zip` vào thư mục `source-zip/`. Ví dụ:

```
source-zip/
  my-new-landing-page.zip
```

### Bước 2: Giải nén vào `unbuilt-sources/`

Chạy lệnh PowerShell (hoặc tương đương trên hệ điều hành khác):

```powershell
Expand-Archive -Force -Path "source-zip\my-new-landing-page.zip" -DestinationPath "unbuilt-sources\my-new-landing"
```

> **Lưu ý đặt tên thư mục đích:**
> - Dùng chữ thường, không dấu, dùng dấu gạch ngang `-` thay khoảng trắng.
> - Tên này sẽ trở thành URL path: `http://localhost:PORT/my-new-landing/index.html`

### Bước 3: Chạy script build tự động

```bash
node build-zips.cjs
```

Script này **tự động** thực hiện cho **tất cả** thư mục con trong `unbuilt-sources/`:

1. **Patch `vite.config.ts`** — Tự thêm `base: './'` nếu chưa có. Điều này bắt buộc để các đường dẫn asset (CSS, JS) sử dụng đường dẫn tương đối thay vì tuyệt đối. Nếu không patch, trang sẽ trắng xóa khi nhúng trong subfolder.
   - Hỗ trợ 2 pattern phổ biến:
     - `export default defineConfig({` → chèn `base: './'` ngay sau
     - `return {` (dạng function) → chèn `base: './'` ngay sau
2. **`npm install`** — Cài dependencies (bỏ qua nếu đã có `node_modules/`)
3. **`npm run build`** — Build ra thư mục `dist/`
4. **Copy `dist/` → `public/<tên-thư-mục>`** — Xóa output cũ nếu có, rồi copy mới

### Bước 4: Thêm vào danh sách Hub

Mở file `src/hub.tsx`, tìm mảng `projects` và thêm một object mới:

```tsx
const projects = [
  // ... các project cũ ...
  {
    title: 'My New Landing',                          // Tên hiển thị trên card
    description: 'Mô tả ngắn về trang.',             // Mô tả dưới title
    url: './my-new-landing/index.html',               // Đường dẫn tương đối đến trang
    badge: 'Vite React',                              // Loại công nghệ (hiển thị badge)
    color: 'bg-indigo-600'                            // Màu badge (Tailwind class)
  }
];
```

**Các màu badge gợi ý:**
| Màu | Class | Dùng cho |
|-----|-------|----------|
| Xanh dương | `bg-blue-600` | React apps (Lithium) |
| Vàng | `bg-yellow-600` | Vanilla HTML/CSS |
| Xanh lá | `bg-emerald-600` | Premium versions |
| Tím hồng | `bg-fuchsia-600` | Figma Make exports |
| Xanh cyan | `bg-cyan-600` | Product Overview |
| Indigo | `bg-indigo-600` | Landing pages |
| Hồng đỏ | `bg-rose-600` | Premium Experience |
| Tím | `bg-violet-600` | System UI |
| Cam | `bg-amber-600` | Service pages |
| Teal | `bg-teal-600` | Policy pages |
| Cam đậm | `bg-orange-600` | Industrial |

### Bước 5: Kiểm tra

```bash
npm run dev
```

Mở trình duyệt tại `http://localhost:<PORT>/` để xem trang Hub. Card mới sẽ xuất hiện với live preview iframe bên trong.

---

## Xử lý 2 loại source code khác nhau

### Loại 1: Dự án React + Vite (có `package.json`, `vite.config.ts`, `src/`)

Đây là loại phổ biến nhất. Script `build-zips.cjs` sẽ tự động:
- Patch `base: './'`
- `npm install` + `npm run build`
- Copy `dist/` → `public/`

### Loại 2: HTML tĩnh thuần (có `index.html`, `styles.css`, `script.js`)

Không cần build. **Copy thẳng** thư mục vào `public/`:

```powershell
# Copy trực tiếp, không cần giải nén vào unbuilt-sources
Copy-Item -Recurse -Force "source-zip\my-static-page\" "public\my-static-page\"
```

---

## Lỗi thường gặp & cách xử lý

### Lỗi 1: Trang trắng xóa (blank page)

**Nguyên nhân:** File `index.html` trong thư mục build trỏ asset bằng đường dẫn tuyệt đối (`/assets/...`) thay vì tương đối (`./assets/...`).

**Cách fix:** Đảm bảo `vite.config.ts` của dự án có dòng `base: './'`. Script `build-zips.cjs` tự patch, nhưng nếu cấu trúc Vite config quá khác biệt, phải sửa thủ công:

```ts
// vite.config.ts
export default defineConfig({
  base: './',   // ← BẮT BUỘC
  // ...
});
```

### Lỗi 2: Script patch bỏ lỡ (không thêm được `base`)

**Nguyên nhân:** Vite config có cấu trúc không khớp 2 pattern regex trong script.

**Cách fix thủ công:** Mở `unbuilt-sources/<tên>/vite.config.ts`, thêm `base: './'` bằng tay, rồi chạy lại `node build-zips.cjs`.

### Lỗi 3: Port bị chiếm

**Cách fix:** Sửa port trong `package.json` dòng `"dev"`:

```json
"dev": "vite --port=<PORT_MỚI> --host=0.0.0.0"
```

---

## Script tham khảo: `build-zips.cjs`

```js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sourceDir = path.join(__dirname, 'unbuilt-sources');
const publicDir = path.join(__dirname, 'public');

const folders = fs.readdirSync(sourceDir)
  .filter(f => fs.statSync(path.join(sourceDir, f)).isDirectory());

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    entry.isDirectory() ? copyDir(srcPath, destPath) : fs.copyFileSync(srcPath, destPath);
  }
}

for (const folder of folders) {
  const folderPath = path.join(sourceDir, folder);
  const viteConfigPath = path.join(folderPath, 'vite.config.ts');
  console.log(`\n=== Building ${folder} ===`);

  try {
    // 1. Patch vite.config.ts to add base: './'
    if (fs.existsSync(viteConfigPath)) {
      let config = fs.readFileSync(viteConfigPath, 'utf-8');
      if (!config.includes("base:")) {
        if (/export default defineConfig\(\{/.test(config)) {
          config = config.replace(
            /export default defineConfig\(\{/,
            "export default defineConfig({\n  base: './',"
          );
        } else if (/return \{/.test(config)) {
          config = config.replace(/return \{/, "return {\n    base: './',");
        }
        fs.writeFileSync(viteConfigPath, config, 'utf-8');
        console.log(`  Patched vite.config.ts with base: './'`);
      }
    }

    // 2. Install dependencies (skip if already done)
    const hasNodeModules = fs.existsSync(path.join(folderPath, 'node_modules'));
    if (!hasNodeModules) {
      console.log(`  Installing dependencies...`);
      execSync('npm install', { cwd: folderPath, stdio: 'inherit' });
    } else {
      console.log(`  node_modules exists, skipping install.`);
    }

    // 3. Build
    console.log(`  Building...`);
    execSync('npm run build', { cwd: folderPath, stdio: 'inherit' });

    // 4. Copy dist → public
    const distPath = path.join(folderPath, 'dist');
    const targetPath = path.join(publicDir, folder);
    if (fs.existsSync(targetPath)) {
      fs.rmSync(targetPath, { recursive: true, force: true });
    }
    console.log(`  Copying dist -> public/${folder}`);
    copyDir(distPath, targetPath);
    console.log(`  ✔ Done: ${folder}`);
  } catch (err) {
    console.error(`  ❌ Failed: ${folder}:`, err.message);
  }
}

console.log('\n=== All done! ===');
```

---

## Tóm tắt nhanh (Cheat Sheet)

```bash
# 1. Giải nén
Expand-Archive -Force -Path "source-zip\ten-file.zip" -DestinationPath "unbuilt-sources\ten-thu-muc"

# 2. Build tất cả
node build-zips.cjs

# 3. Thêm vào hub.tsx → mảng projects[]

# 4. Chạy dev server
npm run dev

# 5. Push lên git
git add . && git commit -m "feat: Add ten-thu-muc template" && git push
```
