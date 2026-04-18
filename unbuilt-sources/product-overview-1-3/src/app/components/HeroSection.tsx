import { ChevronDown, Zap, Shield, Clock, Settings } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761195696518-6384573549ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBmb3JrbGlmdHxlbnwxfHx8fDE3NzY0MDYyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern warehouse operations"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/70 to-zinc-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              <span className="text-red-500 text-sm tracking-wide uppercase">Lithium Battery Technology</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Bình Ắc Quy Pin Lithium
                <span className="block text-red-600 mt-2">Cho Xe Nâng Điện</span>
              </h1>
              <p className="text-xl lg:text-2xl text-zinc-300 leading-relaxed max-w-2xl">
                Giải pháp năng lượng hiệu suất cao, bền bỉ và thông minh cho mọi ứng dụng công nghiệp
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 hover:scale-105">
                Nhận Tư Vấn Kỹ Thuật
              </button>
              <button 
                onClick={scrollToProducts}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded backdrop-blur-sm transition-all duration-300"
              >
                Xem Sản Phẩm
              </button>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="space-y-2">
                <div className="w-10 h-10 bg-red-600/10 rounded flex items-center justify-center">
                  <Zap className="w-5 h-5 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-zinc-400">Models</div>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 bg-red-600/10 rounded flex items-center justify-center">
                  <Clock className="w-5 h-5 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-white">2-3h</div>
                <div className="text-sm text-zinc-400">Fast Charging</div>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 bg-red-600/10 rounded flex items-center justify-center">
                  <Shield className="w-5 h-5 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-white">5000+</div>
                <div className="text-sm text-zinc-400">Cycles</div>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 bg-red-600/10 rounded flex items-center justify-center">
                  <Settings className="w-5 h-5 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-white">OEM</div>
                <div className="text-sm text-zinc-400">ODM Ready</div>
              </div>
            </div>
          </div>

          {/* Right - Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1732030373864-d37573915751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRoaXVtJTIwYmF0dGVyeSUyMGluZHVzdHJpYWwlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NjM5NzYyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Lithium battery technology"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button 
          onClick={scrollToProducts}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
