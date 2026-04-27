import Link from "next/link"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-background border-t border-hairline" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Thông tin chân trang PKGBattery
      </h2>

      <div className="mx-auto max-w-[1280px] px-5 lg:px-10 py-14 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5" aria-label="PKGBattery">
              <span className="relative inline-flex h-8 w-8 items-center justify-center">
                <span className="absolute inset-0 rounded-sm bg-ink" aria-hidden />
                <span className="absolute -right-0.5 -bottom-0.5 h-2 w-2 rounded-[2px] bg-brand" aria-hidden />
                <span className="relative font-mono text-[12px] font-semibold tracking-tight text-ink-foreground">
                  PKG
                </span>
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-[16px] font-semibold tracking-tight">PKGBattery</span>
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  Industrial Lithium · OEM/ODM
                </span>
              </div>
            </Link>
            <p className="mt-5 text-[14px] leading-relaxed text-foreground/65 max-w-md">
              Nhà máy sản xuất pin lithium công nghiệp tại Việt Nam — đồng hành cùng doanh nghiệp từ
              tư vấn kỹ thuật đến bàn giao sản phẩm hoàn thiện.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">
                Năng lực
              </h3>
              <ul className="space-y-2.5 text-[14px]">
                <li><Link href="#oem-odm" className="text-foreground/80 hover:text-brand transition-colors">OEM/ODM</Link></li>
                <li><Link href="#nang-luc" className="text-foreground/80 hover:text-brand transition-colors">Năng lực sản xuất</Link></li>
                <li><Link href="#chat-luong" className="text-foreground/80 hover:text-brand transition-colors">Kiểm soát chất lượng</Link></li>
                <li><Link href="#ung-dung" className="text-foreground/80 hover:text-brand transition-colors">Ứng dụng công nghiệp</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">
                Doanh nghiệp
              </h3>
              <ul className="space-y-2.5 text-[14px]">
                <li><Link href="#nha-may" className="text-foreground/80 hover:text-brand transition-colors">Nhà máy & con người</Link></li>
                <li><Link href="#quy-trinh" className="text-foreground/80 hover:text-brand transition-colors">Quy trình hợp tác</Link></li>
                <li><Link href="#lien-he" className="text-foreground/80 hover:text-brand transition-colors">Tư vấn dự án</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">
                Liên hệ
              </h3>
              <ul className="space-y-2.5 text-[14px]">
                <li><a href="tel:+842871000000" className="text-foreground/80 hover:text-brand transition-colors">+84 28 7100 0000</a></li>
                <li><a href="mailto:hello@pkgbattery.com" className="text-foreground/80 hover:text-brand transition-colors">hello@pkgbattery.com</a></li>
                <li className="text-foreground/65">Khu công nghiệp · Việt Nam</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-[12px] text-foreground/55">
            © {year} PKGBattery. Bản quyền thuộc về công ty.
          </p>
          <div className="flex items-center gap-5 text-[12px] text-foreground/55">
            <Link href="#" className="hover:text-foreground transition-colors">Chính sách bảo mật</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Điều khoản</Link>
            <span className="font-mono uppercase tracking-[0.22em]">Made in Vietnam</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
