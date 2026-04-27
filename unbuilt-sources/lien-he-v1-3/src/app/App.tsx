import { Header, StickyMobileBar } from "./components/contact/Header";
import { Hero } from "./components/contact/Hero";
import { QuickPanel } from "./components/contact/QuickPanel";
import { InquirySection } from "./components/contact/InquiryForm";
import { Dealers } from "./components/contact/Dealers";
import { Office, Social } from "./components/contact/OfficeAndSocial";
import {
  TrustStrip,
  Quotes,
  ROI,
  Downloads,
} from "./components/contact/Trust";
import {
  FAQSection,
  RelatedProducts,
  RelatedArticles,
  FinalCTA,
} from "./components/contact/Editorial";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 antialiased">
      <Header />
      <main>
        <Hero />
        <QuickPanel />
        <InquirySection />
        <Dealers />
        <Office />
        <Social />
        <TrustStrip />
        <Quotes />
        <ROI />
        <Downloads />
        <div id="faq">
          <FAQSection />
        </div>
        <RelatedProducts />
        <RelatedArticles />
        <FinalCTA />
      </main>

      <footer className="bg-neutral-950 text-neutral-400">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-4 lg:px-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center bg-red-600 text-white tracking-tight">
                PK
              </span>
              <span className="text-white tracking-tight">
                PKG<span className="text-red-500">battery</span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed">
              Lithium battery solutions, energy storage, EV pack, UPS và OEM/ODM
              cho doanh nghiệp và đại lý tại Việt Nam.
            </p>
          </div>
          <div>
            <div className="text-white tracking-tight">Sản phẩm</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>LiFePO4 Battery</li>
              <li>Energy Storage System</li>
              <li>EV / Golf Cart Pack</li>
              <li>UPS Battery</li>
              <li>Custom OEM Pack</li>
            </ul>
          </div>
          <div>
            <div className="text-white tracking-tight">Liên hệ</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Hotline: 0989 120 088</li>
              <li>Email: contact@pkgbattery.com</li>
              <li>Zalo: zalo.me/pkgbattery</li>
              <li>HQ: 123 Thái Hà, Đống Đa, Hà Nội</li>
            </ul>
          </div>
          <div>
            <div className="text-white tracking-tight">Theo dõi</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Facebook</li>
              <li>YouTube</li>
              <li>LinkedIn</li>
              <li>TikTok</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800">
          <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 py-6 text-xs md:flex-row md:items-center lg:px-12">
            <span>© 2026 PKGbattery JSC. All rights reserved.</span>
            <span>
              Privacy · Warranty Policy · Dealer Terms · MSDS · UN38.3
            </span>
          </div>
        </div>
      </footer>

      <StickyMobileBar />
      <div className="h-16 lg:hidden" />
    </div>
  );
}
