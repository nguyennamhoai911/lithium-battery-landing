import { SiteHeader } from "@/components/oem/site-header"
import { Hero } from "@/components/oem/hero"
import { WhyUs } from "@/components/oem/why-us"
import { Capabilities } from "@/components/oem/capabilities"
import { Process } from "@/components/oem/process"
import { Applications } from "@/components/oem/applications"
import { Factory } from "@/components/oem/factory"
import { Quality } from "@/components/oem/quality"
import { Certifications } from "@/components/oem/certifications"
import { CtaForm } from "@/components/oem/cta-form"
import { SiteFooter } from "@/components/oem/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="relative">
        <Hero />
        <WhyUs />
        <Capabilities />
        <Process />
        <Applications />
        <Factory />
        <Quality />
        <Certifications />
        <CtaForm />
      </main>
      <SiteFooter />
    </>
  )
}
