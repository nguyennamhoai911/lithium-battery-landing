import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const projects = [
  {
    title: 'Lithium Sightseeing',
    description: 'React + Tailwind App for Lithium Battery Sightseeing Vehicles.',
    url: './lithium-sightseeing.html',
    badge: 'Vite React',
    color: 'bg-blue-600'
  },
  {
    title: 'Warranty Policy v1',
    description: 'Original legacy version of the warranty policy page.',
    url: './warranty-policy/index.html',
    badge: 'Vanilla HTML/CSS',
    color: 'bg-yellow-600'
  },
  {
    title: 'Warranty Policy v2',
    description: 'Dark mode standard version of the warranty policy.',
    url: './warranty-policy-v2/index.html',
    badge: 'Vanilla HTML/CSS',
    color: 'bg-yellow-600'
  },
  {
    title: 'Warranty Policy v3',
    description: 'Updated layout with different card structure.',
    url: './warranty-policy-v3/index.html',
    badge: 'Vanilla HTML/CSS',
    color: 'bg-yellow-600'
  },
  {
    title: 'Warranty Policy v4',
    description: 'Cinematic premium version of the warranty policy.',
    url: './warranty-policy-v4/index.html',
    badge: 'Vanilla HTML/CSS',
    color: 'bg-emerald-600'
  },
  {
    title: 'Warranty Policy v1.1',
    description: 'Alternate React layout from source bundle.',
    url: './warranty-policy-1-1/index.html',
    badge: 'Vite React',
    color: 'bg-fuchsia-600'
  },
  {
    title: 'Warranty Policy v1.2',
    description: 'Alternate React layout from source bundle.',
    url: './warranty-policy-1-2/index.html',
    badge: 'Vite React',
    color: 'bg-fuchsia-600'
  },
  {
    title: 'Warranty Policy v1.3',
    description: 'Alternate React layout from source bundle.',
    url: './warranty-policy-1-3/index.html',
    badge: 'Vite React',
    color: 'bg-fuchsia-600'
  },
  {
    title: 'Warranty Policy v1.4',
    description: 'Alternate React layout from source bundle.',
    url: './warranty-policy-1-4/index.html',
    badge: 'Vite React',
    color: 'bg-fuchsia-600'
  },
  {
    title: 'Product Overview v1.1',
    description: 'Interactive product overview layout from source bundle.',
    url: './product-overview-1-1/index.html',
    badge: 'Vite React',
    color: 'bg-cyan-600'
  },
  {
    title: 'Product Overview v1.2',
    description: 'Interactive product overview layout from source bundle.',
    url: './product-overview-1-2/index.html',
    badge: 'Vite React',
    color: 'bg-cyan-600'
  },
  {
    title: 'Product Overview v1.3',
    description: 'Interactive product overview layout from source bundle.',
    url: './product-overview-1-3/index.html',
    badge: 'Vite React',
    color: 'bg-cyan-600'
  },
  {
    title: 'Product Overview v1.4',
    description: 'Interactive product overview layout from source bundle.',
    url: './product-overview-1-4/index.html',
    badge: 'Vite React',
    color: 'bg-cyan-600'
  },
  {
    title: 'AeroStream Stratos Series',
    description: 'Flagship landing page for AeroStream Stratos Series.',
    url: './aerostream-stratos/index.html',
    badge: 'Vite React',
    color: 'bg-indigo-600'
  },
  {
    title: 'Premium Warranty Experience',
    description: 'PKG Battery premium warranty experience page.',
    url: './premium-warranty-experience/index.html',
    badge: 'Vite React',
    color: 'bg-rose-600'
  },
  {
    title: 'Warranty System',
    description: 'PKG Battery warranty system interface.',
    url: './warranty-system/index.html',
    badge: 'Vite React',
    color: 'bg-violet-600'
  },
  {
    title: 'Warranty Premium Service',
    description: 'PKG Battery warranty premium service page.',
    url: './warranty-premium-service/index.html',
    badge: 'Vite React',
    color: 'bg-amber-600'
  },
  {
    title: 'Warranty Policy (New)',
    description: 'PKG Battery warranty policy — new version.',
    url: './warranty-policy-new/index.html',
    badge: 'Vite React',
    color: 'bg-teal-600'
  },
  {
    title: 'Premium Industrial Experience',
    description: 'PKG Warranty premium industrial experience page.',
    url: './warranty-premium-industrial/index.html',
    badge: 'Vite React',
    color: 'bg-orange-600'
  }
];

const Hub = () => {
  return (
    <div className="min-h-screen bg-[#070707] text-white p-6 md:p-12 font-sans selection:bg-blue-500/30">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-16 border-b border-neutral-800/50 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              Demo Gallery
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
              PKG Battery Themes
            </h1>
            <p className="text-lg text-neutral-400 max-w-2xl">
              Explore our collection of high-performance landing pages and interactive demonstrators.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="text-right">
                <div className="text-3xl font-bold text-white">{projects.length}</div>
                <div className="text-sm text-neutral-500">Templates</div>
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group flex flex-col rounded-2xl overflow-hidden bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1"
            >
              {/* Thumbnail / Iframe Preview Section */}
              <div className="relative h-72 overflow-hidden bg-[#0A0A0A] border-b border-neutral-800/50 block">
                <div className="w-full h-full relative">
                   {/* Browser Mockup Header */}
                   <div className="absolute top-0 left-0 right-0 h-7 bg-neutral-900/80 backdrop-blur-md z-10 flex items-center px-4 gap-2 border-b border-neutral-800">
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-600 group-hover:bg-red-400 transition-colors"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-600 group-hover:bg-yellow-400 transition-colors"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-600 group-hover:bg-green-400 transition-colors"></div>
                      <div className="mx-auto text-[10px] text-neutral-500 font-mono font-medium truncate px-8 max-w-full opacity-0 group-hover:opacity-100 transition-opacity">
                         {project.url.replace('./', '')}
                      </div>
                   </div>
                   {/* Preview Iframe */}
                   <div className="absolute top-7 left-0 right-0 bottom-0 overflow-hidden pointer-events-none bg-white">
                      <iframe 
                        src={project.url}
                        className="w-[400%] h-[400%] origin-top-left scale-[0.25] border-none"
                        tabIndex={-1}
                        scrolling="no"
                        title={project.title}
                      />
                   </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20 backdrop-blur-[2px]">
                    <a href={project.url} className="px-6 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-neutral-200 hover:scale-105 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl flex items-center gap-2">
                       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                       Live Preview
                    </a>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6 flex-1 flex flex-col bg-neutral-900/20">
                <div className="flex justify-between items-start mb-3">
                    <a href={project.url} className="text-xl font-bold text-neutral-100 group-hover:text-white transition-colors">{project.title}</a>
                </div>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-auto flex justify-between items-center pt-5 border-t border-neutral-800/60">
                   <div className="flex items-center gap-2.5">
                       <div className={`w-2 h-2 rounded-full ${project.color} shadow-[0_0_8px_currentColor]`}></div>
                       <span className="text-xs font-semibold text-neutral-300 tracking-wide">{project.badge}</span>
                   </div>
                   <a href={project.url} className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-white text-neutral-400 hover:text-black flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <footer className="mt-24 pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500 pb-8">
          <p>&copy; 2026 PKG Battery. All rights reserved.</p>
          <div className="flex gap-6">
             <span className="hover:text-white cursor-pointer transition-colors">Documentation</span>
             <span className="hover:text-white cursor-pointer transition-colors">UI Kit</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Hub />);
}
