/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { ArticleHero } from './components/ArticleHero';
import { KeyTakeaways } from './components/KeyTakeaways';
import { TOC } from './components/TOC';
import { ContentBlockView } from './components/ContentBlocks';
import { RelatedSection } from './components/RelatedItems';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { MOCK_ARTICLE, RELATED_PRODUCTS, RELATED_ARTICLES } from './constants';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <ArticleHero article={MOCK_ARTICLE} />

        {/* INSIGHTS SECTION */}
        <KeyTakeaways takeaways={MOCK_ARTICLE.takeaways} />

        {/* CONTENT SECTION */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col xl:flex-row items-start relative">
              
              {/* STICKY TOC */}
              <TOC />

              {/* MAIN CONTENT AREA */}
              <article className="reading-content w-full max-w-[720px] mx-auto xl:mx-0">
                {MOCK_ARTICLE.content.map((block, index) => (
                  <ContentBlockView key={index} block={block} />
                ))}

                {/* ENDING STATEMENT */}
                <div className="mt-24 pt-12 border-t border-zinc-100">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center text-zinc-300">
                      <span className="text-2xl font-serif">“</span>
                    </div>
                    <p className="text-xl font-medium text-zinc-500 italic leading-relaxed">
                      Lựa chọn PKG không chỉ là mua một sản phẩm pin, mà là đầu tư vào một giải pháp năng lượng có khả năng thay đổi hoàn toàn hiệu suất kinh tế cho chuỗi cung ứng của bạn.
                    </p>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* RELATED CONTENT SECTION */}
        <RelatedSection 
          products={RELATED_PRODUCTS} 
          articles={RELATED_ARTICLES} 
        />

        {/* FINAL CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
