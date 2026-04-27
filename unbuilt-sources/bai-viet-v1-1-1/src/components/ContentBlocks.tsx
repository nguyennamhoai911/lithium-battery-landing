import { motion } from 'motion/react';
import { Download, FileText, Play, ArrowRight } from 'lucide-react';
import { ContentBlock } from '../types';

export const ContentBlockView = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case 'paragraph':
      const id = block.headingLarge || block.headingSmall 
        ? (block.headingLarge || block.headingSmall)?.toLowerCase().replace(/[^\w\s]/gi, '').replace(/ /g, '-') 
        : undefined;
      return (
        <div id={id} className="mb-12 last:mb-0">
          {block.headingLarge && <h2>{block.headingLarge}</h2>}
          {block.headingSmall && <h3 className="text-xl font-bold text-zinc-900 mb-4">{block.headingSmall}</h3>}
          <p>{block.body}</p>
        </div>
      );

    case 'image':
      return (
        <figure className="my-16 -mx-6 lg:-mx-24 relative group">
          <div className={`aspect-[${block.ratio.replace(':', '/')}] bg-zinc-100 overflow-hidden`}>
            <img 
              src={block.url} 
              alt={block.caption || ''} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-4 px-6 lg:px-24 text-sm text-zinc-500 italic flex items-center gap-3">
              <span className="w-8 h-[1px] bg-zinc-300" />
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'video':
      const videoId = block.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/ /g, '-');
      return (
        <div id={videoId} className="my-16 bg-zinc-100 aspect-video relative group overflow-hidden">
          <iframe 
            src={block.url} 
            className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700" 
            title={block.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );

    case 'table':
      const tableId = block.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/ /g, '-');
      return (
        <div id={tableId} className="my-16 overflow-hidden">
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-brand-red rounded-full" />
            {block.title}
          </h4>
          <div className="overflow-x-auto border border-zinc-100 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead className="bg-zinc-50">
                <tr>
                  {block.headers.map((h, i) => (
                    <th key={i} className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-200">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {block.rows.map((row, i) => (
                  <tr key={i} className="group hover:bg-zinc-50/50 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className={`px-6 py-5 text-sm ${j === 0 ? 'font-semibold text-zinc-900' : 'text-zinc-600'} ${j === 1 && cell.includes('PKG') ? 'text-brand-red font-bold' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-[10px] text-zinc-400 uppercase tracking-widest text-right">
            Scroll to view full specs →
          </div>
        </div>
      );

    case 'file':
      return (
        <a 
          href={block.downloadUrl}
          className="flex items-center justify-between p-6 bg-white border border-zinc-100 shadow-sm hover:border-brand-red hover:shadow-md transition-all group my-12"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:text-brand-red transition-colors">
              <FileText size={24} />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-900 group-hover:text-brand-red transition-colors mb-1">{block.title}</div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">{block.format} • {block.size}</div>
            </div>
          </div>
          <div className="w-10 h-10 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all">
            <Download size={18} />
          </div>
        </a>
      );

    default:
      return null;
  }
};
