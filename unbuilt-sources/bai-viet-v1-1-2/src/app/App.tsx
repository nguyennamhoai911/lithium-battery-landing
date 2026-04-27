import { Header } from "./components/article/Header";
import { Hero } from "./components/article/Hero";
import { KeyTakeaways } from "./components/article/KeyTakeaways";
import { TOC } from "./components/article/TOC";
import { ArticleBody } from "./components/article/ArticleBody";
import { RelatedProducts, RelatedArticles } from "./components/article/Related";
import { FinalCTA, Footer } from "./components/article/CTAFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black antialiased selection:bg-[#E11D2A] selection:text-white">
      <Header />

      <main className="pt-28">
        <Hero />
        <KeyTakeaways />

        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-28 lg:mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <TOC />
            </div>
            <div className="lg:col-span-9 lg:pl-6 lg:border-l border-black/10">
              <ArticleBody />
            </div>
          </div>
        </section>

        <RelatedProducts />
        <RelatedArticles />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
