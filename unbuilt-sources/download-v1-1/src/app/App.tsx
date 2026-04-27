import { useState } from "react";
import { SiteHeader } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { QuickAccess } from "./components/QuickAccess";
import { CategoryNav } from "./components/CategoryNav";
import { Library } from "./components/Library";
import { Featured } from "./components/Featured";
import { BMSZone } from "./components/BMSZone";
import { Certifications } from "./components/Certifications";
import { HowTo } from "./components/HowTo";
import { RequestDocument } from "./components/RequestDocument";
import { SupportCTA } from "./components/SupportCTA";
import { RelatedProducts } from "./components/RelatedProducts";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { SiteFooter } from "./components/SiteFooter";
import { PreviewModal, ToastHost, SupportDrawer, FloatingActions, useAutoToast } from "./components/UIStates";

export default function App() {
  const [preview, setPreview] = useState(false);
  const [support, setSupport] = useState(false);
  const [toasts, push, dismiss] = useAutoToast();

  const triggerDownload = () => {
    push({ kind: "success", title: "Tải xuống thành công", desc: "Datasheet pin xe nâng 48V 200Ah đã được tải về thiết bị của bạn." });
  };

  return (
    <div className="min-h-screen bg-white text-black antialiased selection:bg-[#E11D2E] selection:text-white">
      <SiteHeader />
      <main>
        <Hero />
        <QuickAccess />
        <CategoryNav />
        <Library />
        <Featured />
        <BMSZone />
        <Certifications />
        <HowTo />
        <RequestDocument />
        <SupportCTA />
        <RelatedProducts />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />

      <FloatingActions
        onPreview={() => setPreview(true)}
        onDownload={triggerDownload}
        onSupport={() => setSupport(true)}
      />
      <PreviewModal open={preview} onClose={() => setPreview(false)} />
      <SupportDrawer open={support} onClose={() => setSupport(false)} />
      <ToastHost items={toasts} dismiss={dismiss} />
    </div>
  );
}
