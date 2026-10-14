import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, X, CheckCircle, ExternalLink, Calendar, Building, Tag } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Project, ProjectCategory } from '../../types';
import { MakroButton } from '../ui/MakroButton';

const FILTER_TABS: { label: string; value: ProjectCategory }[] = [
  { label: 'Tous', value: 'all' },
  { label: 'Sites Web & Apps', value: 'web' },
  { label: 'Vidéos & Réseaux', value: 'video' },
  { label: 'Graphisme', value: 'design' },
];

export const SelectedProjectsGrid: React.FC = () => {
  const { featuredProjects } = useApp();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = featuredProjects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projets" className="relative py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#d9ff5c] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sélection à la Une</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Réalisations choisies.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/60 max-w-xl">
            Une sélection de mes projets récents les plus percutants. Modulable à tout moment depuis mon espace administrateur.
          </p>
        </div>

        {/* Link to Full Catalog Page */}
        <div>
          <Link
            to="/projets"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-white transition-all hover:border-[#d9ff5c]/40 group"
          >
            <span>Voir tout le catalogue ({featuredProjects.length}+)</span>
            <ArrowUpRight className="w-4 h-4 text-[#d9ff5c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
        {FILTER_TABS.map((tab) => {
          const isActive = activeFilter === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? 'bg-white text-[#101828] font-bold shadow-md shadow-white/10'
                  : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#101828] cursor-pointer hover:border-white/25 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(217,255,92,0.1)] flex flex-col"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101828] via-transparent to-transparent opacity-80" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#d9ff5c]">
                    {project.categoryLabel}
                  </span>
                  {project.metrics && (
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[11px] text-white">
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Quick Expand Button */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:bg-[#d9ff5c] group-hover:text-[#101828] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-white/40">
                    {project.client || 'Projet Récent'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#d9ff5c] transition-colors mt-0.5">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Pop-in Modal / Drawer when a project is clicked */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#101828] border border-white/20 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)] text-white"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Cover Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-[#d9ff5c]">
                    {selectedProject.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Content Header */}
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

              {/* Descriptions */}
              <div className="mt-6 space-y-4 text-sm sm:text-base text-white/75 leading-relaxed border-t border-white/10 pt-6">
                <p>{selectedProject.fullDescription || selectedProject.description}</p>
              </div>

              {/* Tags & Stack */}
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

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <MakroButton
                  text="Demander un projet similaire"
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
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
    </section>
  );
};
