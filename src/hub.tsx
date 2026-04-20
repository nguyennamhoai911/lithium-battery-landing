import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { 
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects
} from '@dnd-kit/core';
import { 
  arrayMove, 
  SortableContext, 
  sortableKeyboardCoordinates, 
  rectSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  badge: string;
  color: string;
  rating?: number;
  flagged?: boolean;
  prompt?: string;
}

const COLORS = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-neutral-500'];

const EditableTitle = ({ title, onSave, small }: { title: string, onSave: (v: string) => void, small?: boolean }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [value, setValue] = React.useState(title);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => { if (isEditing) inputRef.current?.select(); }, [isEditing]);
  React.useEffect(() => { setValue(title); }, [title]);

  const handleBlur = () => {
    setIsEditing(false);
    if (value.trim() !== title) onSave(value.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleBlur();
    if (e.key === 'Escape') { setValue(title); setIsEditing(false); }
  };

  const textClass = small ? 'text-sm font-medium text-neutral-300 group-hover/title:text-white' : 'text-xl font-bold text-neutral-100 group-hover/title:text-white';
  const inputClass = small ? 'w-full bg-neutral-800 text-white border border-blue-500/50 rounded px-2 py-0.5 outline-none text-sm font-medium' : 'w-full bg-neutral-800 text-white border border-blue-500/50 rounded px-2 py-1 outline-none text-xl font-bold';

  if (isEditing) {
    return (
      <input ref={inputRef} type="text" value={value} onChange={(e) => setValue(e.target.value)} onBlur={handleBlur} onKeyDown={handleKeyDown} className={inputClass} />
    );
  }

  return (
    <div className="group/title flex items-center gap-1.5 cursor-pointer" onClick={(e) => { e.stopPropagation(); setIsEditing(true); }}>
      <span className={`transition-colors truncate ${textClass}`}>{title}</span>
      <svg className="w-3 h-3 opacity-0 group-hover/title:opacity-60 text-neutral-500 hover:text-blue-400 transition-all shrink-0 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    </div>
  );
};


const ProjectCard = React.forwardRef<HTMLDivElement, any>(({ project, style, isOverlay, isDragging, updateProject, updateTitle, onOpenPrompt, isSelected, onToggleSelect, isSelectionMode, dragListeners, dragAttributes, onDragStart, onDragEnd }, ref) => {
  const rating = project.rating || 0;
  const flagged = project.flagged || false;
  const hasPrompt = !!project.prompt && project.prompt.trim().length > 0;

  const handleCardClick = (e: React.MouseEvent) => {
    if (!isSelectionMode) return;
    e.stopPropagation();
    onToggleSelect && onToggleSelect(project.id, e.shiftKey);
  };

  return (
    <div
      ref={ref}
      style={style}
      onClick={handleCardClick}
      className={`group flex flex-col rounded-2xl overflow-hidden bg-neutral-900/40 border transition-all duration-300 ${isSelectionMode ? 'cursor-pointer select-none' : ''} ${isSelected ? 'border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.2)]' : isOverlay ? 'shadow-2xl shadow-blue-500/10 border-blue-500/30 scale-105 z-50 cursor-grabbing bg-neutral-900/90 backdrop-blur-xl' : isDragging ? 'opacity-30 border-blue-500/30 scale-95 border-dashed cursor-grabbing relative z-0' : 'border-neutral-800 hover:border-neutral-700 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 relative z-10'}`}
    >
      <div 
        {...(!isSelectionMode ? dragListeners : {})}
        {...(!isSelectionMode ? dragAttributes : {})}
        onClick={(e) => { if (isSelectionMode) { e.stopPropagation(); onToggleSelect && onToggleSelect(project.id, e.shiftKey); } }}
        className={`relative h-72 overflow-hidden bg-[#0A0A0A] border-b border-neutral-800/50 block ${isSelectionMode ? 'cursor-pointer' : 'cursor-grab active:cursor-grabbing'}`}
      >
        <div className="w-full h-full relative pointer-events-none">
           <div className="absolute top-0 left-0 right-0 h-7 bg-neutral-900/80 backdrop-blur-md z-10 flex items-center px-4 gap-2 border-b border-neutral-800">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-600 group-hover:bg-red-400 transition-colors"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-600 group-hover:bg-yellow-400 transition-colors"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-600 group-hover:bg-green-400 transition-colors"></div>
              <div className="mx-auto text-[10px] text-neutral-500 font-mono font-medium truncate px-8 max-w-full opacity-0 group-hover:opacity-100 transition-opacity">
                 {project.url.replace('./', '')}
              </div>
           </div>
           <div className="absolute top-7 left-0 right-0 bottom-0 overflow-hidden bg-white pointer-events-none">
              <iframe 
                src={project.url}
                className="w-[400%] h-[400%] origin-top-left scale-[0.25] border-none"
                tabIndex={-1}
                scrolling="no"
                title={project.title}
              />
           </div>
        </div>
        
        <button
           onClick={(e) => { e.stopPropagation(); onToggleSelect && onToggleSelect(project.id, e.shiftKey); }}
           className={`absolute top-10 left-3 z-30 p-1.5 rounded-full backdrop-blur-md transition-all ${isSelected ? 'bg-purple-600 text-white shadow-lg scale-110' : 'bg-black/60 text-white/50 border border-white/20 hover:bg-white/20 hover:scale-110 opacity-0 group-hover:opacity-100'}`}
         >
           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             {isSelected ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /> : <circle cx="12" cy="12" r="9" strokeWidth={2} />}
           </svg>
         </button>

        {!isOverlay && !isDragging && (
           <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20 backdrop-blur-[2px]">
               <a href={project.url} onPointerDown={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black text-sm font-bold rounded-full cursor-pointer hover:bg-neutral-200 hover:scale-105 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  Live Preview
               </a>
           </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col bg-neutral-900/20">
        <div className="flex justify-between items-start mb-2 relative z-20 pointer-events-auto">
            <EditableTitle title={project.title} onSave={(val) => updateTitle(project.id, val)} />
        </div>
        {/* Drag-to-folder handle — only when selected */}
        {isSelected && isSelectionMode && (
          <div
            draggable={true}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onClick={e => e.stopPropagation()}
            className="mb-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs font-semibold cursor-grab active:cursor-grabbing w-fit select-none"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" /></svg>
            Drag to folder
          </div>
        )}
        

        <p className="text-neutral-400 text-sm mb-6 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="mt-auto flex justify-between items-center pt-4 border-t border-neutral-800/60 relative z-20 pointer-events-auto">
           {/* Left: Stars + Flag */}
           <div className="flex items-center gap-2">
               {/* Rating Stars */}
               <div className="flex gap-0.5 group/rating">
                 {[1, 2, 3, 4, 5].map(star => (
                   <svg key={star}
                     onClick={(e) => { e.stopPropagation(); updateProject(project.id, { rating: rating === star ? 0 : star }); }}
                     className={`w-4 h-4 cursor-pointer transition-colors ${rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-700 hover:text-yellow-400 group-hover/rating:text-neutral-600'}`}
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                   </svg>
                 ))}
               </div>
               {/* Flag Button */}
               <button
                 title={flagged ? 'Unflag' : 'Flag'}
                 onClick={(e) => { e.stopPropagation(); updateProject(project.id, { flagged: !flagged }); }}
                 onPointerDown={(e) => e.stopPropagation()}
                 className={`w-7 h-7 rounded-full flex items-center justify-center transition-all border ${
                   flagged
                     ? 'bg-red-500/20 border-red-500/40 text-red-400'
                     : 'bg-neutral-800 border-neutral-700 text-neutral-600 hover:text-red-400 hover:border-red-500/40'
                 }`}
               >
                 <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                   <path fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.836.886l-3.111-.732a9.75 9.75 0 01-6.585-.77l-.108-.054a8.25 8.25 0 00-5.58-.652l-1.838.46V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clipRule="evenodd" />
                 </svg>
               </button>
           </div>
           {/* Right: Prompt + Live Preview */}
           <div className="flex items-center gap-2">
               <button 
                  title="AI Prompt"
                  onPointerDown={(e) => e.stopPropagation()} 
                  onClick={() => onOpenPrompt && onOpenPrompt(project)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-sm border ${hasPrompt ? 'bg-purple-900/40 border-purple-500/50 text-purple-400 hover:bg-purple-600 hover:text-white' : 'bg-neutral-800 border-neutral-700 text-neutral-400 hover:bg-white hover:text-purple-600'}`}
               >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
               </button>
               <a href={project.url} title="Live Preview" onPointerDown={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 hover:bg-white text-neutral-400 hover:text-black flex items-center justify-center transition-colors shadow-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
               </a>
           </div>
        </div>
      </div>
    </div>
  );
});

const SortableProjectItem = ({ project, updateTitle, updateProject, onOpenPrompt, isSelected, onToggleSelect, isSelectionMode, onDragStart, onDragEnd }: any) => {
   const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: project.id, data: { category: project.category } });
   const style = { transform: CSS.Transform.toString(transform), transition };
   return <ProjectCard ref={setNodeRef} style={style} isDragging={isDragging} project={project} updateTitle={updateTitle} updateProject={updateProject} onOpenPrompt={onOpenPrompt} isSelected={isSelected} onToggleSelect={onToggleSelect} isSelectionMode={isSelectionMode} dragListeners={listeners} dragAttributes={attributes} onDragStart={onDragStart} onDragEnd={onDragEnd} />;
}

const Hub = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Filter States
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [flagFilter, setFlagFilter] = useState<boolean | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [promptModalData, setPromptModalData] = useState<Project | null>(null);

  // Folder / Category
  const [activeFolderFilter, setActiveFolderFilter] = useState<string | null>(null);
  const [isAddingFolder, setIsAddingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [dragOverFolder, setDragOverFolder] = useState<string | null>(null);
  const [isDraggingSelection, setIsDraggingSelection] = useState(false);
  const [dropSuccessFolder, setDropSuccessFolder] = useState<string | null>(null);
  const [editingFolder, setEditingFolder] = useState<string | null>(null);
  const [editingFolderValue, setEditingFolderValue] = useState('');

  // Bulk Selection
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const lastSelectedIdRef = useRef<string | null>(null);
  const filteredProjectsRef = useRef<Project[]>([]);

  const toggleSelection = (id: string, shiftKey = false) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (shiftKey && lastSelectedIdRef.current && next.size > 0) {
        const visibleIds = filteredProjectsRef.current.map(p => p.id);
        const anchorIdx = visibleIds.indexOf(lastSelectedIdRef.current);
        const targetIdx = visibleIds.indexOf(id);
        if (anchorIdx !== -1 && targetIdx !== -1) {
          const [from, to] = anchorIdx < targetIdx ? [anchorIdx, targetIdx] : [targetIdx, anchorIdx];
          for (let i = from; i <= to; i++) next.add(visibleIds[i]);
          return next;
        }
      }
      if (next.has(id)) next.delete(id); else { next.add(id); lastSelectedIdRef.current = id; }
      return next;
    });
  };

  const clearSelection = () => { setSelectedIds(new Set()); lastSelectedIdRef.current = null; };

  const handleSelectionDragStart = (e: React.DragEvent) => {
    if (selectedIds.size === 0) return;
    setIsDraggingSelection(true);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', 'bulk-move');
    // Custom ghost shows how many cards
    const ghost = document.createElement('div');
    ghost.innerHTML = `<div style="display:flex;align-items:center;gap:8px"><span style="font-size:20px">📁</span><span>${selectedIds.size} card${selectedIds.size > 1 ? 's' : ''}</span></div>`;
    ghost.style.cssText = 'position:fixed;top:-200px;left:-200px;background:linear-gradient(135deg,#7c3aed,#6d28d9);color:white;padding:10px 18px;border-radius:12px;font-family:system-ui;font-weight:700;font-size:14px;white-space:nowrap;box-shadow:0 8px 32px rgba(124,58,237,0.5);border:1px solid rgba(255,255,255,0.2)';
    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(ghost, ghost.offsetWidth / 2, 24);
    requestAnimationFrame(() => { if (document.body.contains(ghost)) document.body.removeChild(ghost); });
  };

  const handleSelectionDragEnd = () => {
    setIsDraggingSelection(false);
    setDragOverFolder(null);
  };

  const handleDropToFolder = async (cat: string) => {
    setDragOverFolder(null);
    setIsDraggingSelection(false);
    if (selectedIds.size === 0) return;
    setDropSuccessFolder(cat);
    setTimeout(() => setDropSuccessFolder(null), 800);
    await bulkMoveCategory(cat);
  };

  const bulkMoveCategory = async (targetCategory: string) => {
     if (selectedIds.size === 0) return;
     const updated = projects.map(p => selectedIds.has(p.id) ? { ...p, category: targetCategory } : p);
     setProjects(updated);
     setSelectedIds(new Set());
     saveProjectsRemote(updated);
  };

  const bulkToggleFlag = async (value: boolean) => {
     if (selectedIds.size === 0) return;
     const updated = projects.map(p => selectedIds.has(p.id) ? { ...p, flagged: value } : p);
     setProjects(updated);
     setSelectedIds(new Set());
     saveProjectsRemote(updated);
  };

  const addCategory = async () => {
     const name = newFolderName.trim();
     if (!name || categories.includes(name)) { setIsAddingFolder(false); setNewFolderName(''); return; }
     const newCats = [...categories, name];
     setCategories(newCats);
     setIsAddingFolder(false);
     setNewFolderName('');
     setActiveFolderFilter(name);
     setIsSaving(true);
     try { await fetch('/api/categories', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newCats) }); }
     catch(e) {} finally { setTimeout(() => setIsSaving(false), 500); }
  };

  const deleteCategory = async (name: string) => {
     const UNCATEGORIZED = 'Uncategorized';
     const newCats = categories.filter(c => c !== name);
     if (!newCats.includes(UNCATEGORIZED)) newCats.push(UNCATEGORIZED);
     const newProjects = projects.map(p => p.category === name ? { ...p, category: UNCATEGORIZED } : p);
     setCategories(newCats);
     setProjects(newProjects);
     if (activeFolderFilter === name) setActiveFolderFilter(null);
     setIsSaving(true);
     try {
       await Promise.all([
         fetch('/api/categories', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newCats) }),
         fetch('/api/projects', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newProjects) })
       ]);
     } catch(e) {} finally { setTimeout(() => setIsSaving(false), 500); }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  useEffect(() => {
    Promise.all([
      fetch('/api/projects').then(r => r.json()),
      fetch('/api/categories').then(r => r.json())
    ]).then(([projData, catData]) => {
      setProjects(projData);
      setCategories(catData);
    }).catch(err => console.error("Could not load data", err));
  }, []);

  const saveProjectsRemote = async (data: Project[]) => {
    setIsSaving(true);
    try {
      await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch (err) { } 
    finally { setTimeout(() => setIsSaving(false), 500); }
  }

  const updateTitle = async (id: string, newTitle: string) => {
    const updated = projects.map(p => p.id === id ? { ...p, title: newTitle } : p);
    setProjects(updated);
    saveProjectsRemote(updated);
  };

  const updateProject = async (id: string, updates: Partial<Project>) => {
    const updated = projects.map(p => p.id === id ? { ...p, ...updates } : p);
    setProjects(updated);
    saveProjectsRemote(updated);
  };

  const moveCategory = async (index: number, direction: -1 | 1) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= categories.length) return;
    const newCat = [...categories];
    [newCat[index], newCat[newIndex]] = [newCat[newIndex], newCat[index]];
    setCategories(newCat);
    
    setIsSaving(true);
    try {
      await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCat)
      });
    } catch(err) { }
    finally { setTimeout(() => setIsSaving(false), 500) }
  };

  const renameCategory = async (oldName: string, newName: string) => {
    if (oldName === newName) return;
    const newCategories = categories.map(c => c === oldName ? newName : c);
    setCategories(newCategories);

    const newProjects = projects.map(p => p.category === oldName ? { ...p, category: newName } : p);
    setProjects(newProjects);

    setIsSaving(true);
    try {
      await Promise.all([
        fetch('/api/categories', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newCategories) }),
        fetch('/api/projects', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newProjects) })
      ]);
    } catch (err) {} finally { setTimeout(() => setIsSaving(false), 500); }
  };

  const handleDragStart = (e: any) => setActiveId(e.active.id);

  const handleDragOver = (e: any) => {
    const { active, over } = e;
    if (!over) return;
    const overId = over.id;
    const isOverCategoryContainer = categories.includes(String(overId));

    setProjects(prev => {
       const activeIndex = prev.findIndex(p => p.id === active.id);
       const overIndex = prev.findIndex(p => p.id === overId);
       
       if (activeIndex === -1) return prev;
       const activeItem = prev[activeIndex];
       let newCategory = activeItem.category;

       if (isOverCategoryContainer) { newCategory = String(overId); }
       else if (overIndex !== -1) { newCategory = prev[overIndex].category; }

       if (activeItem.category !== newCategory) {
           const newItems = [...prev];
           newItems[activeIndex] = { ...activeItem, category: newCategory };
           return arrayMove<Project>(newItems, activeIndex, overIndex !== -1 ? overIndex : newItems.length - 1);
       }
       return prev;
    });
  };

  const handleDragEnd = (e: any) => {
    const { active, over } = e;
    if (over && active.id !== over.id) {
       setProjects(prev => {
          const oldIndex = prev.findIndex(p => p.id === active.id);
          const newIndex = prev.findIndex(p => p.id === over.id);
          const newArray = arrayMove<Project>(prev, oldIndex, newIndex);
          saveProjectsRemote(newArray);
          return newArray;
       });
    }
    setActiveId(null);
  };

  // Derive filtered array (respects folder + other filters)
  const filteredProjects = projects.filter(p => {
    if (activeFolderFilter !== null && p.category !== activeFolderFilter) return false;
    if (ratingFilter > 0 && (p.rating || 0) < ratingFilter) return false;
    if (flagFilter === true && !p.flagged) return false;
    if (flagFilter === false && p.flagged) return false;
    if (searchQuery && !p.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });
  filteredProjectsRef.current = filteredProjects; // keep ref in sync for shift-range select

  const groupedProjects = filteredProjects.reduce((acc, project) => {
    const cat = project.category || 'Uncategorized';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  const sortedCategories = Object.keys(groupedProjects).sort((a, b) => {
    let indexA = categories.indexOf(a);
    let indexB = categories.indexOf(b);
    indexA = indexA === -1 ? 999 : indexA;
    indexB = indexB === -1 ? 999 : indexB;
    return indexA - indexB;
  });

  // Count per folder (unfiltered by other criteria, just folder = category)
  const countByFolder = (cat: string | null) =>
    cat === null ? projects.length : projects.filter(p => p.category === cat).length;

  const activeProject = activeId ? projects.find(p => p.id === activeId) : null;

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
      <div className="min-h-screen bg-[#070707] text-white flex font-sans selection:bg-blue-500/30">

        {/* === FOLDER SIDEBAR === */}
        <aside className="w-60 shrink-0 border-r border-neutral-800/60 bg-[#0c0c0c] flex flex-col sticky top-0 h-screen overflow-y-auto">
          {/* Logo area */}
          <div className="px-5 py-5 border-b border-neutral-800/60">
            <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              Demo Gallery Hub
            </div>
            <h1 className="text-lg font-bold mt-2 text-white">PKG Battery</h1>
          </div>

          {/* Folder list */}
          <div className={`flex-1 px-3 py-4 flex flex-col gap-1 transition-all duration-300 ${isDraggingSelection ? 'bg-purple-500/5' : ''}`}>
            {/* All */}
            <button
              onClick={() => setActiveFolderFilter(null)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFolderFilter === null
                  ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              <span className="flex-1 text-left truncate">All Templates</span>
              <span className="text-xs bg-neutral-700/60 px-1.5 py-0.5 rounded-md font-mono">{countByFolder(null)}</span>
            </button>

            {/* Divider */}
            <div className="my-2 border-t border-neutral-800/60" />

            {/* Category folders */}
            {categories.map(cat => {
              const isOver = dragOverFolder === cat;
              const isSuccess = dropSuccessFolder === cat;
              return (
              <div
                key={cat}
                className="group/folder relative flex items-center gap-1"
                onDragOver={(e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; setDragOverFolder(cat); }}
                onDragLeave={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setDragOverFolder(null); }}
                onDrop={(e) => { e.preventDefault(); handleDropToFolder(cat); }}
              >
                <button
                  onClick={() => setActiveFolderFilter(cat)}
                  onDoubleClick={(e) => { e.stopPropagation(); setEditingFolder(cat); setEditingFolderValue(cat); }}
                  className={`flex-1 flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 min-w-0 ${
                    isSuccess
                      ? 'bg-green-500/20 text-green-300 border border-green-500/40 scale-[1.02]'
                      : isOver
                        ? 'bg-purple-500/20 text-purple-200 border border-purple-400/60 scale-[1.02] shadow-lg shadow-purple-500/20'
                        : activeFolderFilter === cat
                          ? 'bg-neutral-800 text-white border border-neutral-700/60'
                          : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60 border border-transparent'
                  }`}
                >
                  {/* Folder icon — open when drag-over */}
                  {isOver || isSuccess ? (
                    <svg className={`w-4 h-4 shrink-0 transition-all ${isSuccess ? 'text-green-400' : 'text-purple-400 animate-pulse'}`} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v2H2V6z" />
                      <path d="M2 10h20v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8z" />
                    </svg>
                  ) : (
                    <svg className={`w-4 h-4 shrink-0 transition-colors ${ activeFolderFilter === cat ? 'text-yellow-400' : 'text-neutral-600 group-hover/folder:text-neutral-400'}`} viewBox="0 0 24 24" fill="currentColor"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" /></svg>
                  )}
                  {/* Folder name — inline edit on double click */}
                  <span className="flex-1 text-left truncate">
                    {editingFolder === cat ? (
                      <input
                        autoFocus
                        type="text"
                        value={editingFolderValue}
                        onChange={e => setEditingFolderValue(e.target.value)}
                        onClick={e => e.stopPropagation()}
                        onDoubleClick={e => e.stopPropagation()}
                        onKeyDown={e => {
                          if (e.key === 'Enter') { renameCategory(cat, editingFolderValue.trim() || cat); setEditingFolder(null); }
                          if (e.key === 'Escape') setEditingFolder(null);
                          e.stopPropagation();
                        }}
                        onBlur={() => { renameCategory(cat, editingFolderValue.trim() || cat); setEditingFolder(null); }}
                        className="w-full bg-transparent text-white outline-none border-b border-blue-500/60 text-sm font-medium"
                      />
                    ) : (
                      <span className="truncate">{cat}</span>
                    )}
                  </span>
                  {isOver ? (
                    <span className="text-xs font-bold text-purple-300 shrink-0 animate-pulse">Drop!</span>
                  ) : isSuccess ? (
                    <span className="text-xs font-bold text-green-400 shrink-0">✓</span>
                  ) : (
                    <span className="text-xs bg-neutral-700/60 px-1.5 py-0.5 rounded-md font-mono shrink-0">{countByFolder(cat)}</span>
                  )}
                </button>
                {/* Delete folder button */}
                <button
                  title="Delete folder"
                  onClick={() => deleteCategory(cat)}
                  className="shrink-0 p-1.5 rounded-lg text-neutral-600 hover:text-red-400 hover:bg-red-500/10 opacity-0 group-hover/folder:opacity-100 transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
              </div>
            )})}

            {/* Add folder inline input */}
            {isAddingFolder ? (
              <div className="mt-2 flex items-center gap-2 px-3 py-2 bg-neutral-800/60 border border-neutral-700/60 rounded-lg">
                <svg className="w-4 h-4 text-yellow-400 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" /></svg>
                <input
                  autoFocus
                  type="text"
                  value={newFolderName}
                  onChange={e => setNewFolderName(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') addCategory(); if (e.key === 'Escape') { setIsAddingFolder(false); setNewFolderName(''); } }}
                  onBlur={addCategory}
                  placeholder="Folder name..."
                  className="flex-1 bg-transparent text-white text-sm outline-none placeholder-neutral-600"
                />
              </div>
            ) : (
              <button
                onClick={() => setIsAddingFolder(true)}
                className="mt-2 w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-neutral-500 hover:text-white hover:bg-neutral-800/60 transition-all border border-dashed border-neutral-800 hover:border-neutral-600"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                New Folder
              </button>
            )}
          </div>

          {/* Sidebar footer */}
          <div className="px-5 py-4 border-t border-neutral-800/60">
            <div className={`text-xs font-medium transition-all ${isSaving ? 'text-blue-400' : 'text-neutral-600'}`}>
              {isSaving ? '⏳ Saving...' : `${projects.length} templates total`}
            </div>
          </div>
        </aside>

        {/* === MAIN CONTENT === */}
        <main className="flex-1 min-w-0 p-8 md:p-12 overflow-y-auto">
          {/* Header */}
          <header className="mb-8 border-b border-neutral-800/50 pb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white">
                {activeFolderFilter ?? 'All Templates'}
              </h2>
              <p className="text-neutral-500 mt-1 text-sm">{filteredProjects.length} templates</p>
            </div>
          </header>

          {/* Filter Bar */}
          <div className="mb-10 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-3.5 flex flex-col md:flex-row gap-4 items-center justify-between shadow-xl backdrop-blur-md">
             <div className="flex flex-wrap items-center gap-3">
                {/* Flag Filter */}
                <div className="flex gap-1 p-1 bg-black/60 rounded-xl border border-neutral-800 shadow-inner">
                    <button onClick={() => setFlagFilter(null)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${flagFilter === null ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-300'}`}>All</button>
                    <button onClick={() => setFlagFilter(true)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${flagFilter === true ? 'bg-neutral-800 text-red-500 shadow-sm' : 'text-neutral-500 hover:text-red-400'}`}>
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.836.886l-3.111-.732a9.75 9.75 0 01-6.585-.77l-.108-.054a8.25 8.25 0 00-5.58-.652l-1.838.46V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clipRule="evenodd" /></svg>
                        Picked
                    </button>
                    <button onClick={() => setFlagFilter(false)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${flagFilter === false ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-300'}`}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.836.886l-3.111-.732a9.75 9.75 0 01-6.585-.77l-.108-.054a8.25 8.25 0 00-5.58-.652l-1.838.46V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" /><path strokeLinecap="round" d="M4 4l16 16" /></svg>
                        Unflagged
                    </button>
                </div>

                {/* Rating Filter */}
                <div className="flex items-center gap-1 px-3 py-1.5 bg-black/60 rounded-xl border border-neutral-800 shadow-inner">
                   <span className="text-xs font-bold text-neutral-500 mr-1 uppercase tracking-wider">Stars&ge;</span>
                   {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} onClick={() => setRatingFilter(ratingFilter === star ? 0 : star)}
                         className={`w-4 h-4 cursor-pointer transition-colors ${ratingFilter >= star ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-700 hover:text-neutral-500'}`}
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                   ))}
                </div>
             </div>

             <div className="relative w-full md:w-64">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input type="text" placeholder="Search templates..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full bg-black/40 border border-neutral-800 text-sm font-medium text-white rounded-xl pl-9 pr-4 py-2 outline-none focus:border-blue-500/50 transition-colors shadow-inner" />
             </div>
          </div>

          {/* Cards — flat (folder selected) OR grouped (All) */}
          {activeFolderFilter !== null ? (
            /* Single folder view — flat grid */
            filteredProjects.length === 0 ? (
              <div className="text-center py-32 border-2 border-dashed border-neutral-800 rounded-3xl">
                <svg className="w-16 h-16 mx-auto mb-4 text-neutral-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" /></svg>
                <h3 className="text-xl font-bold text-neutral-500">This folder is empty</h3>
                <p className="text-neutral-700 mt-2 text-sm">Drag cards here or use "Move to Group" from the floating bar</p>
              </div>
            ) : (
              <SortableContext id={activeFolderFilter} items={filteredProjects.map(p => p.id)} strategy={rectSortingStrategy}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
                  {filteredProjects.map(project => (
                    <SortableProjectItem key={project.id} project={project} updateTitle={updateTitle} updateProject={updateProject} onOpenPrompt={setPromptModalData} isSelected={selectedIds.has(project.id)} onToggleSelect={toggleSelection} isSelectionMode={selectedIds.size > 0} onDragStart={handleSelectionDragStart} onDragEnd={handleSelectionDragEnd} />
                  ))}
                </div>
              </SortableContext>
            )
          ) : (
            /* All view — grouped by folder */
            sortedCategories.length === 0 ? (
              <div className="text-center py-32 border-2 border-dashed border-neutral-800 rounded-3xl">
                <h3 className="text-xl font-bold text-neutral-400">No templates match filters</h3>
              </div>
            ) : (
              sortedCategories.map(category => {
                const catIndex = categories.indexOf(category);
                const categoryItems = groupedProjects[category];
                return (
                  <div key={category} className="group/category mb-16">
                    <div className="flex items-center gap-3 mb-5">
                      <svg className="w-5 h-5 text-yellow-400/70" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" /></svg>
                      <h3 className="text-lg font-semibold text-neutral-300">{category}</h3>
                      <span className="text-xs text-neutral-600 font-mono">{categoryItems.length}</span>
                      {catIndex !== -1 && (
                        <div className="flex bg-neutral-800/80 rounded border border-neutral-700 opacity-0 group-hover/category:opacity-100 transition-opacity">
                          <button onClick={() => moveCategory(catIndex, -1)} disabled={catIndex === 0} className={`p-1 transition-colors ${catIndex === 0 ? 'text-neutral-700' : 'text-neutral-400 hover:bg-neutral-700 hover:text-white'}`}><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg></button>
                          <div className="w-px bg-neutral-700"></div>
                          <button onClick={() => moveCategory(catIndex, 1)} disabled={catIndex === categories.length - 1} className={`p-1 transition-colors ${catIndex === categories.length - 1 ? 'text-neutral-700' : 'text-neutral-400 hover:bg-neutral-700 hover:text-white'}`}><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
                        </div>
                      )}
                      <div className="h-px bg-neutral-800/80 flex-1"></div>
                    </div>
                    <SortableContext id={category} items={categoryItems.map(p => p.id)} strategy={rectSortingStrategy}>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-6">
                        {categoryItems.map(project => (
                          <SortableProjectItem key={project.id} project={project} updateTitle={updateTitle} updateProject={updateProject} onOpenPrompt={setPromptModalData} isSelected={selectedIds.has(project.id)} onToggleSelect={toggleSelection} isSelectionMode={selectedIds.size > 0} onDragStart={handleSelectionDragStart} onDragEnd={handleSelectionDragEnd} />
                        ))}
                      </div>
                    </SortableContext>
                  </div>
                );
              })
            )
          )}

          <footer className="mt-16 pt-6 border-t border-neutral-800/50 flex items-center justify-between text-xs text-neutral-600 pb-8">
            <p>&copy; 2026 PKG Battery. All rights reserved.</p>
          </footer>
        </main>
      </div>

      <DragOverlay dropAnimation={{ duration: 250 }}>
         {activeProject ? <ProjectCard project={activeProject} isOverlay updateTitle={updateTitle} updateProject={updateProject} onOpenPrompt={() => {}} /> : null}
      </DragOverlay>

      {/* Prompt Modal */}
      {promptModalData && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
           <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col">
              <div className="p-4 border-b border-neutral-800 flex justify-between items-center bg-neutral-950">
                 <h3 className="font-bold text-white flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                    AI Prompt: {promptModalData.title}
                 </h3>
                 <button onClick={() => setPromptModalData(null)} className="text-neutral-500 hover:text-white transition-colors"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
              </div>
              <div className="p-6">
                 <textarea id="prompt-textarea" className="w-full h-64 bg-[#0A0A0A] text-neutral-300 p-4 rounded-xl border border-neutral-800 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 font-mono text-sm resize-none" placeholder="Dán AI prompt hoặc mô tả thiết kế của bạn vào đây..." defaultValue={promptModalData.prompt || ''}></textarea>
              </div>
              <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex justify-end gap-3">
                 <button onClick={() => setPromptModalData(null)} className="px-4 py-2 rounded-lg font-semibold text-neutral-400 hover:text-white transition-colors">Hủy</button>
                 <button onClick={() => { const el = document.getElementById('prompt-textarea') as HTMLTextAreaElement; if (el) { updateProject(promptModalData.id, { prompt: el.value }); setPromptModalData(null); } }} className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-purple-500/20">Lưu Prompt</button>
              </div>
           </div>
        </div>
      )}

      {/* Floating Bulk Action Bar */}
      {selectedIds.size > 0 && (
         <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900 border border-neutral-700/50 rounded-2xl px-6 py-4 shadow-2xl z-[90] flex items-center gap-6">
            <div className="flex items-center gap-2 text-white font-bold bg-purple-600/20 px-3 py-1.5 rounded-lg border border-purple-500/30">
               <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
               {selectedIds.size} selected
            </div>
            <div className="h-6 w-px bg-neutral-700"></div>
            <div className="flex items-center gap-3">
               <select className="bg-black/50 border border-neutral-700 text-sm font-medium text-white rounded-lg px-3 py-2 outline-none focus:border-purple-500" onChange={(e) => { if (e.target.value) bulkMoveCategory(e.target.value); e.target.value = ""; }} defaultValue="">
                  <option value="" disabled>Move to Folder...</option>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
               </select>
               <button onClick={() => bulkToggleFlag(true)} className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-sm font-semibold flex items-center gap-2 transition-colors">
                  <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.836.886l-3.111-.732a9.75 9.75 0 01-6.585-.77l-.108-.054a8.25 8.25 0 00-5.58-.652l-1.838.46V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clipRule="evenodd" /></svg>
                  Flag All
               </button>
               <button onClick={() => bulkToggleFlag(false)} className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-sm font-semibold transition-colors text-neutral-400 hover:text-white">Unflag All</button>
            </div>
            <button onClick={clearSelection} className="ml-4 p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
         </div>
      )}
    </DndContext>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Hub />);
}
