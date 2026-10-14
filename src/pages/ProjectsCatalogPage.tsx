import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  Search,
  Sparkles,
  X,
  Building,
  Calendar,
  ExternalLink,
  Tag,
  Star,
  SlidersHorizontal,
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { useApp } from '../context/AppContext';
import { Project, ProjectCategory } from '../types';
import { MakroButton } from '../components/ui/MakroButton';

const CATEGORIES: { label: string; value: ProjectCategory }[] = [
  { label: 'Toutes les réalisations', value: 'all' },
  { label: 'Sites Web & Apps', value: 'web' },
  { label: 'Vidéos & Réseaux', value: 'video' },
  { label: 'Graphisme & Identité', value: 'design' },
];

export const ProjectsCatalogPage: React.FC = () => {
  const { projects } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects by category and search
  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.client && p.client.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#d9ff5c] selection:text-[#101828]">
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-[#d9ff5c] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l'accueil</span>
          </Link>
        </div>

        {/* Page Hero Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#d9ff5c] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Catalogue Complet ({projects.length} Réalisations)</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Toutes mes créations & activités.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/60 max-w-2xl">
            Explorez l'ensemble de mes travaux en développement web, applications SaaS, formats vidéos courts et identités de marque.
          </p>
        </div>

        {/* Search & Filters Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Categories Pill Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#d9ff5c] text-[#101828] font-bold shadow-md'
                      : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:w-80">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher (ex: React, Fruithé, Luxe...)"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#d9ff5c] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Grid of All Projects */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center rounded-3xl bg-white/[0.02] border border-white/5">
            <p className="text-white/50 text-sm">
              Aucune réalisation ne correspond à votre recherche « {searchQuery} ».
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#101828] cursor-pointer hover:border-white/25 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(217,255,92,0.1)] flex flex-col"
              >
                {/* Media */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101828] via-transparent to-transparent opacity-80" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#d9ff5c]">
                      {project.categoryLabel}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded-full bg-[#d9ff5c]/20 border border-[#d9ff5c]/40 text-[10px] font-bold text-[#d9ff5c] flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 fill-[#d9ff5c]" />
                        <span>À la une</span>
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:bg-[#d9ff5c] group-hover:text-[#101828] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                      {project.client || 'Activité'}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#d9ff5c] transition-colors mt-0.5">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/60 mt-1.5 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Drawer for project details */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#101828] border border-white/20 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)] text-white"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <img
                    src={selectedProject.coverImage}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-[#d9ff5c]">
                      {selectedProject.categoryLabel}
                    </span>
                    {selectedProject.featured && (
                      <span className="px-3 py-1 rounded-full bg-[#d9ff5c]/20 border border-[#d9ff5c]/40 text-xs font-bold text-[#d9ff5c]">
                        ★ À la une sur l'accueil
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-white/50 font-mono">
                    {selectedProject.client && (
                      <span className="flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-[#d9ff5c]" />
                        {selectedProject.client}
                      </span>
                    )}
                    {selectedProject.year && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#d9ff5c]" />
                        {selectedProject.year}
                      </span>
                    )}
                    {selectedProject.metrics && (
                      <span className="text-[#d9ff5c] font-semibold">
                        • {selectedProject.metrics}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm font-medium text-[#d9ff5c]">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <div className="mt-6 space-y-4 text-sm sm:text-base text-white/75 leading-relaxed border-t border-white/10 pt-6">
                  <p>{selectedProject.fullDescription || selectedProject.description}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="text-xs uppercase tracking-wider font-mono text-white/40 mb-3">
                    Technologies & Outils Mobilisés
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <MakroButton
                    text="Réserver pour un projet similaire"
                    href="/#contact"
                  />
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                    >
                      <span>Consulter la démo en ligne</span>
                      <ExternalLink className="w-4 h-4 text-[#d9ff5c]" />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};
