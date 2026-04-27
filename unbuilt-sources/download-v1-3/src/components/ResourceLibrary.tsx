/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Download, FileText, ExternalLink, ChevronDown, Filter, X, Search } from 'lucide-react';
import { useState } from 'react';
import { DOCUMENTS, DOCUMENT_TYPES, CATEGORIES, VOLTAGES, Document } from '../lib/data';

export default function ResourceLibrary({ searchQuery }: { searchQuery: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedVoltage, setSelectedVoltage] = useState<string[]>([]);

  const filteredDocs = DOCUMENTS.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory || (selectedCategory === 'General' && doc.category === 'General');
    const matchesType = selectedType.length === 0 || selectedType.includes(doc.label.charAt(0) + doc.label.slice(1).toLowerCase().replace('certificate', 'Certificate').replace('manual', 'Manual'));
    const matchesVoltage = selectedVoltage.length === 0 || (doc.voltage && selectedVoltage.includes(doc.voltage));
    
    return matchesSearch && matchesCategory && (matchesCategory || selectedCategory === 'All') ;
  });

  const toggleFilter = (list: string[], setList: (val: string[]) => void, item: string) => {
    if (list.includes(item)) setList(list.filter(i => i !== item));
    else setList([...list, item]);
  };

  return (
    <section className="py-24 bg-white border-t border-industrial-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Resource Library</h2>
          <p className="text-industrial-black/60 max-w-2xl">Browse technical documents by product type, voltage and category.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filter */}
          <aside className="lg:w-1/4 space-y-10 lg:sticky lg:top-32 h-fit">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                  <Filter size={16} /> Filters
                </h4>
                {(selectedCategory !== 'All' || selectedType.length > 0 || selectedVoltage.length > 0) && (
                   <button 
                    onClick={() => {setSelectedCategory('All'); setSelectedType([]); setSelectedVoltage([]);}}
                    className="text-xs text-brand-red font-bold hover:underline"
                   >Clear All</button>
                )}
              </div>

              {/* Categories */}
              <div className="space-y-2 mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-industrial-black/40 mb-4">Category</p>
                <button 
                  onClick={() => setSelectedCategory('All')}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-all ${selectedCategory === 'All' ? 'bg-industrial-black text-white' : 'hover:bg-industrial-gray-50'}`}
                >All Resources</button>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-all ${selectedCategory === cat ? 'bg-industrial-black text-white' : 'hover:bg-industrial-gray-50'}`}
                  >{cat}</button>
                ))}
              </div>

              {/* Doc Types */}
              <div className="mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-industrial-black/40 mb-4">Document Type</p>
                <div className="space-y-2">
                  {DOCUMENT_TYPES.slice(0, 5).map(type => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={selectedType.includes(type)}
                        onChange={() => toggleFilter(selectedType, setSelectedType, type)}
                        className="w-4 h-4 accent-brand-red"
                      />
                      <span className="text-sm font-medium group-hover:text-brand-red transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Voltage */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-industrial-black/40 mb-4">Voltage</p>
                <div className="flex flex-wrap gap-2">
                  {VOLTAGES.map(v => (
                    <button 
                      key={v}
                      onClick={() => toggleFilter(selectedVoltage, setSelectedVoltage, v)}
                      className={`px-3 py-1.5 text-xs font-bold border transition-all ${selectedVoltage.includes(v) ? 'bg-brand-red border-brand-red text-white' : 'border-industrial-gray-200 hover:border-brand-red text-industrial-black/60'}`}
                    >{v}</button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Doc List */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-industrial-gray-100">
               <span className="text-sm font-medium text-industrial-black/40">{filteredDocs.length} Documents Found</span>
               <div className="flex items-center gap-4">
                 <span className="text-xs font-bold uppercase tracking-widest text-industrial-black/40">Sort By</span>
                 <button className="flex items-center gap-1 text-sm font-bold">Newest <ChevronDown size={14} /></button>
               </div>
            </div>

            <div className="space-y-1">
              {filteredDocs.map((doc, idx) => (
                <motion.div 
                  key={doc.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative p-6 -mx-6 md:mx-0 hover:bg-industrial-gray-50 transition-colors border-b border-industrial-gray-100"
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-brand-red transition-all duration-300 group-hover:h-full" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-0.5 bg-industrial-black text-white text-[9px] font-bold tracking-widest uppercase">{doc.label}</span>
                        <span className="text-[10px] text-industrial-black/30 font-bold uppercase tracking-tight italic">v{doc.version}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">{doc.title}</h3>
                      <p className="text-sm text-industrial-black/50 mb-4 max-w-2xl leading-relaxed">{doc.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {doc.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-industrial-gray-100 text-[10px] font-bold text-industrial-black/40 uppercase tracking-wider">{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex md:flex-col items-center md:items-end gap-3 shrink-0">
                      <div className="hidden md:block text-right mb-4">
                        <p className="text-[10px] font-black text-industrial-black/20 uppercase tracking-[0.2em]">{doc.fileType} · {doc.fileSize}</p>
                        <p className="text-[10px] font-bold text-industrial-black/40 uppercase tracking-wider">Updated: {doc.updatedAt}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex items-center justify-center w-12 h-12 bg-white border border-industrial-gray-200 hover:border-brand-red hover:text-brand-red transition-all">
                          <ExternalLink size={18} />
                        </button>
                        <button className="flex items-center justify-center gap-3 px-6 h-12 bg-industrial-black text-white font-bold text-sm tracking-wider uppercase hover:bg-brand-red transition-all relative overflow-hidden">
                          <Download size={18} />
                          <span className="hidden sm:inline">Download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredDocs.length === 0 && (
                <div className="py-20 text-center">
                  <div className="w-20 h-20 bg-industrial-gray-50 flex items-center justify-center mx-auto mb-6 rounded-full">
                    <Search className="text-industrial-black/20" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">No documents found</h3>
                  <p className="text-industrial-black/40 max-w-sm mx-auto mb-8">Try adjusting your filters or search terms for better results.</p>
                  <button onClick={() => {setSelectedCategory('All'); setSelectedType([]); setSelectedVoltage([]);}} className="text-brand-red font-bold uppercase tracking-widest text-sm underline decoration-2 underline-offset-8">Reset all filters</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
