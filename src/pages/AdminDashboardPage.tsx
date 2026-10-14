import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Calendar,
  Layers,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  ExternalLink,
  Lock,
  Unlock,
  Star,
  ArrowLeft,
  Search,
  MessageSquare,
  AlertCircle,
  Save,
  X,
  RefreshCw,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Appointment, AppointmentStatus, Project, ProjectCategory } from '../types';
import { MakroButton } from '../components/ui/MakroButton';

export const AdminDashboardPage: React.FC = () => {
  const {
    projects,
    appointments,
    addProject,
    updateProject,
    deleteProject,
    toggleProjectFeatured,
    updateAppointmentStatus,
    updateAppointmentNotes,
    deleteAppointment,
    resetToDefaults,
  } = useApp();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('admin_authenticated') === 'true';
  });
  const [pinCode, setPinCode] = useState('');
  const [authError, setAuthError] = useState('');

  // Tab State: 'appointments' or 'cms'
  const [activeTab, setActiveTab] = useState<'appointments' | 'cms'>('appointments');

  // Search & Filters in Appointments
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [aptSearch, setAptSearch] = useState('');

  // CMS Modal State (Add / Edit Project)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [projectFormData, setProjectFormData] = useState<Omit<Project, 'id' | 'order'>>({
    title: '',
    subtitle: '',
    category: 'web',
    categoryLabel: 'Sites Web & Apps',
    description: '',
    fullDescription: '',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    tags: ['React', 'Tailwind'],
    metrics: '',
    client: '',
    year: '2026',
    liveUrl: '',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinCode === '2026' || pinCode === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      setAuthError('');
    } else {
      setAuthError('Code PIN invalide. (Astuce: le code par défaut est 2026)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_authenticated');
  };

  // Open Project Modal for Create
  const handleOpenCreateModal = () => {
    setEditingProjectId(null);
    setProjectFormData({
      title: '',
      subtitle: '',
      category: 'web',
      categoryLabel: 'Sites Web & Apps',
      description: '',
      fullDescription: '',
      coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      featured: true,
      tags: ['React', 'Tailwind'],
      metrics: '',
      client: '',
      year: '2026',
      liveUrl: '',
    });
    setIsProjectModalOpen(true);
  };

  // Open Project Modal for Edit
  const handleOpenEditModal = (proj: Project) => {
    setEditingProjectId(proj.id);
    setProjectFormData({
      title: proj.title,
      subtitle: proj.subtitle,
      category: proj.category,
      categoryLabel: proj.categoryLabel,
      description: proj.description,
      fullDescription: proj.fullDescription || '',
      coverImage: proj.coverImage,
      featured: proj.featured,
      tags: proj.tags,
      metrics: proj.metrics || '',
      client: proj.client || '',
      year: proj.year || '2026',
      liveUrl: proj.liveUrl || '',
    });
    setIsProjectModalOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProjectId) {
      updateProject(editingProjectId, projectFormData);
    } else {
      addProject(projectFormData);
    }
    setIsProjectModalOpen(false);
  };

  // Filter Appointments
  const filteredAppointments = appointments.filter((apt) => {
    const matchesStatus = statusFilter === 'all' || apt.status === statusFilter;
    const matchesSearch =
      apt.fullName.toLowerCase().includes(aptSearch.toLowerCase()) ||
      apt.email.toLowerCase().includes(aptSearch.toLowerCase()) ||
      apt.phone.toLowerCase().includes(aptSearch.toLowerCase()) ||
      apt.message.toLowerCase().includes(aptSearch.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Security Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center items-center px-4">
        <div className="w-full max-w-md p-8 rounded-3xl bg-[#101828] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#d9ff5c]/10 text-[#d9ff5c] border border-[#d9ff5c]/20 flex items-center justify-center mx-auto mb-6">
            <Lock className="w-7 h-7" />
          </div>

          <h1 className="text-2xl font-bold text-white tracking-tight">
            Espace Administrateur
          </h1>
          <p className="text-xs text-white/60 mt-2 mb-6">
            Accès sécurisé réservé à Méhdi Traoré pour gérer les rendez-vous et le catalogue d'activités.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                placeholder="Entrez le code PIN (ex: 2026)"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-center text-lg tracking-widest text-white focus:outline-none focus:border-[#d9ff5c]"
                autoFocus
              />
            </div>

            {authError && (
              <p className="text-xs text-red-400 bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#d9ff5c] text-[#101828] font-bold text-sm hover:bg-[#1aff75] transition-colors shadow-lg shadow-[#d9ff5c]/20"
            >
              Déverrouiller le Dashboard
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/5">
            <Link
              to="/"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              ← Retour au site public
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#d9ff5c] selection:text-[#101828]">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-[#101828]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              title="Voir le site en direct"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="font-bold text-base text-white flex items-center gap-2">
                <span>Dashboard Méhdi Traoré</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-[#d9ff5c]/10 text-[#d9ff5c] border border-[#d9ff5c]/20 font-mono">
                  ADMIN v1.0
                </span>
              </h1>
              <span className="text-[11px] text-white/50">
                Gestion des rendez-vous & CMS des activités
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleLogout}
              className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs text-white/70 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5"
            >
              <Unlock className="w-3.5 h-3.5 text-red-400" />
              <span>Verrouiller</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab('appointments')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'appointments'
                ? 'bg-[#d9ff5c] text-[#101828] shadow-md'
                : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Rendez-vous & Leads ({appointments.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('cms')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'cms'
                ? 'bg-[#d9ff5c] text-[#101828] shadow-md'
                : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Gestion des Activités & Projets ({projects.length})</span>
          </button>
        </div>

        {/* TAB 1: GESTION DES RENDEZ-VOUS */}
        {activeTab === 'appointments' && (
          <div className="space-y-6">
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-[#101828] border border-white/10">
                <span className="text-xs text-white/50 block">Total Demandes</span>
                <span className="text-2xl font-black text-white mt-1 block">
                  {appointments.length}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#101828] border border-white/10">
                <span className="text-xs text-white/50 block">À Traiter (Nouveaux)</span>
                <span className="text-2xl font-black text-[#d9ff5c] mt-1 block">
                  {appointments.filter((a) => a.status === 'nouveau').length}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#101828] border border-white/10">
                <span className="text-xs text-white/50 block">Confirmés / En cours</span>
                <span className="text-2xl font-black text-blue-400 mt-1 block">
                  {appointments.filter((a) => a.status === 'confirmé').length}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#101828] border border-white/10">
                <span className="text-xs text-white/50 block">Terminés / Convertis</span>
                <span className="text-2xl font-black text-emerald-400 mt-1 block">
                  {appointments.filter((a) => a.status === 'terminé').length}
                </span>
              </div>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#101828]/60 border border-white/5">
              <div className="flex flex-wrap items-center gap-2">
                {['all', 'nouveau', 'contacté', 'confirmé', 'terminé', 'annulé'].map(
                  (st) => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                        statusFilter === st
                          ? 'bg-white text-[#101828] font-bold'
                          : 'bg-white/5 text-white/60 hover:text-white'
                      }`}
                    >
                      {st === 'all' ? 'Tous' : st}
                    </button>
                  )
                )}
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={aptSearch}
                  onChange={(e) => setAptSearch(e.target.value)}
                  placeholder="Filtrer par nom, email..."
                  className="w-full pl-9 pr-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#d9ff5c]"
                />
              </div>
            </div>

            {/* Appointments List */}
            {filteredAppointments.length === 0 ? (
              <div className="py-16 text-center rounded-3xl bg-white/[0.02] border border-white/5">
                <Calendar className="w-8 h-8 text-white/20 mx-auto mb-2" />
                <p className="text-sm text-white/50">Aucun rendez-vous trouvé.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredAppointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="p-5 sm:p-6 rounded-2xl bg-[#101828] border border-white/10 hover:border-white/20 transition-all space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-base font-bold text-white">
                            {apt.fullName}
                          </h3>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold ${
                              apt.status === 'nouveau'
                                ? 'bg-[#d9ff5c]/20 text-[#d9ff5c] border border-[#d9ff5c]/30'
                                : apt.status === 'confirmé'
                                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                : apt.status === 'terminé'
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                : apt.status === 'contacté'
                                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                : 'bg-red-500/20 text-red-400 border border-red-500/30'
                            }`}
                          >
                            {apt.status}
                          </span>
                        </div>
                        <span className="text-xs text-white/50 font-mono mt-0.5 block">
                          Reçu le {new Date(apt.createdAt).toLocaleString('fr-FR')}
                        </span>
                      </div>

                      {/* Status Selector & Actions */}
                      <div className="flex items-center gap-2">
                        <select
                          value={apt.status}
                          onChange={(e) =>
                            updateAppointmentStatus(
                              apt.id,
                              e.target.value as AppointmentStatus
                            )
                          }
                          className="px-3 py-1.5 rounded-lg bg-[#0d131f] border border-white/15 text-xs text-white font-mono focus:outline-none focus:border-[#d9ff5c]"
                        >
                          <option value="nouveau">Nouveau</option>
                          <option value="contacté">Contacté</option>
                          <option value="confirmé">Confirmé</option>
                          <option value="terminé">Terminé</option>
                          <option value="annulé">Annulé</option>
                        </select>

                        <button
                          onClick={() => deleteAppointment(apt.id)}
                          className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                          title="Supprimer la demande"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Contact Badges & Details */}
                    <div className="flex flex-wrap gap-3 text-xs text-white/70">
                      <a
                        href={`mailto:${apt.email}`}
                        className="flex items-center gap-1.5 hover:text-[#d9ff5c] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#d9ff5c]" />
                        <span>{apt.email}</span>
                      </a>
                      <a
                        href={`https://wa.me/${apt.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[#d9ff5c] hover:underline"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{apt.phone} (WhatsApp)</span>
                      </a>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-white/60">
                        Projet : {apt.projectType}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-white/60">
                        Budget : {apt.budget}
                      </span>
                    </div>

                    {/* Message Body */}
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-white/80 leading-relaxed">
                      {apt.message}
                    </div>

                    {/* Internal Notes */}
                    <div className="pt-2">
                      <label className="block text-[11px] font-mono uppercase text-white/40 mb-1">
                        Notes internes de suivi (sauvegardées automatiquement) :
                      </label>
                      <input
                        type="text"
                        defaultValue={apt.notes || ''}
                        onBlur={(e) => updateAppointmentNotes(apt.id, e.target.value)}
                        placeholder="Ex: Premier contact passé, rdv fixé jeudi 15h..."
                        className="w-full px-3 py-2 rounded-lg bg-[#0d131f] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#d9ff5c]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: CMS GESTION DES ACTIVITÉS & PROJETS */}
        {activeTab === 'cms' && (
          <div className="space-y-6">
            {/* Header with Add Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#101828] border border-white/10">
              <div>
                <h2 className="text-lg font-bold text-white">
                  Gestionnaire d'Activités & Showcase
                </h2>
                <p className="text-xs text-white/60 mt-0.5">
                  Gérez vos réalisations et activez le switch « À la une » pour choisir les projets affichés sur votre page d'accueil (menus promotionnels).
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={resetToDefaults}
                  className="px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs text-white/60 hover:text-white transition-colors flex items-center gap-1.5"
                  title="Restaurer les données initiales"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Réinitialiser</span>
                </button>
                <button
                  onClick={handleOpenCreateModal}
                  className="px-5 py-2 rounded-full bg-[#d9ff5c] text-[#101828] font-bold text-xs hover:bg-[#1aff75] transition-colors flex items-center gap-2 shadow-lg shadow-[#d9ff5c]/20"
                >
                  <Plus className="w-4 h-4" />
                  <span>Ajouter une activité</span>
                </button>
              </div>
            </div>

            {/* Projects Table / Cards */}
            <div className="space-y-3">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 sm:p-5 rounded-2xl bg-[#101828] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={proj.coverImage}
                      alt={proj.title}
                      className="w-16 h-12 rounded-lg object-cover flex-shrink-0 border border-white/10"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-white">
                          {proj.title}
                        </h3>
                        <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-white/50">
                          {proj.categoryLabel}
                        </span>
                      </div>
                      <p className="text-xs text-white/60 line-clamp-1 mt-0.5">
                        {proj.subtitle || proj.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions & Featured Toggle */}
                  <div className="flex items-center gap-3">
                    {/* Toggle Button for Landing Page Showcase ("Menu Promotionnel") */}
                    <button
                      onClick={() => toggleProjectFeatured(proj.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        proj.featured
                          ? 'bg-[#d9ff5c]/20 text-[#d9ff5c] border border-[#d9ff5c]/40'
                          : 'bg-white/5 text-white/40 border border-white/5 hover:text-white'
                      }`}
                      title="Activer ou désactiver l'affichage sur la landing page"
                    >
                      <Star
                        className={`w-3.5 h-3.5 ${
                          proj.featured ? 'fill-[#d9ff5c]' : ''
                        }`}
                      />
                      <span>
                        {proj.featured ? 'À la une (Accueil)' : 'Non affiché sur accueil'}
                      </span>
                    </button>

                    <button
                      onClick={() => handleOpenEditModal(proj)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                      title="Modifier"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => deleteProject(proj.id)}
                      className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                      title="Supprimer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* MODAL: ADD / EDIT PROJECT */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#101828] border border-white/15 p-6 sm:p-8 text-white shadow-2xl">
            <button
              onClick={() => setIsProjectModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-bold text-white mb-6">
              {editingProjectId ? "Modifier l'activité" : 'Ajouter une nouvelle activité'}
            </h3>

            <form onSubmit={handleSaveProject} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-white/60 mb-1">
                    Titre du projet *
                  </label>
                  <input
                    type="text"
                    required
                    value={projectFormData.title}
                    onChange={(e) =>
                      setProjectFormData({ ...projectFormData, title: e.target.value })
                    }
                    placeholder="Ex: BioGroup Africa"
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#d9ff5c]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-white/60 mb-1">
                    Sous-titre / Rôle *
                  </label>
                  <input
                    type="text"
                    required
                    value={projectFormData.subtitle}
                    onChange={(e) =>
                      setProjectFormData({ ...projectFormData, subtitle: e.target.value })
                    }
                    placeholder="Ex: Portail Médical Panafricain"
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#d9ff5c]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-white/60 mb-1">
                    Catégorie *
                  </label>
                  <select
                    value={projectFormData.category}
                    onChange={(e) => {
                      const cat = e.target.value as ProjectCategory;
                      const labels: Record<ProjectCategory, string> = {
                        all: 'Toutes les catégories',
                        web: 'Sites Web & Apps',
                        video: 'Vidéos & Réseaux',
                        design: 'Graphisme',
                      };
                      setProjectFormData({
                        ...projectFormData,
                        category: cat,
                        categoryLabel: labels[cat],
                      });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-[#0d131f] border border-white/10 text-xs text-white focus:outline-none focus:border-[#d9ff5c]"
                  >
                    <option value="web">Sites Web & Apps</option>
                    <option value="video">Vidéos & Réseaux</option>
                    <option value="design">Graphisme</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white/60 mb-1">
                    Métrique clé (Impact)
                  </label>
                  <input
                    type="text"
                    value={projectFormData.metrics || ''}
                    onChange={(e) =>
                      setProjectFormData({ ...projectFormData, metrics: e.target.value })
                    }
                    placeholder="Ex: +185% de réservations"
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#d9ff5c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-white/60 mb-1">
                  URL de l'image de couverture *
                </label>
                <input
                  type="url"
                  required
                  value={projectFormData.coverImage}
                  onChange={(e) =>
                    setProjectFormData({ ...projectFormData, coverImage: e.target.value })
                  }
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#d9ff5c]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-white/60 mb-1">
                  Description courte *
                </label>
                <textarea
                  rows={2}
                  required
                  value={projectFormData.description}
                  onChange={(e) =>
                    setProjectFormData({
                      ...projectFormData,
                      description: e.target.value,
                    })
                  }
                  placeholder="Description succincte pour la carte..."
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#d9ff5c]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-white/60 mb-1">
                  Description détaillée (Modale)
                </label>
                <textarea
                  rows={4}
                  value={projectFormData.fullDescription || ''}
                  onChange={(e) =>
                    setProjectFormData({
                      ...projectFormData,
                      fullDescription: e.target.value,
                    })
                  }
                  placeholder="Histoire du projet, défis relevés, résultats..."
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#d9ff5c]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-white/60 mb-1">
                    Tags (séparés par des virgules)
                  </label>
                  <input
                    type="text"
                    value={projectFormData.tags.join(', ')}
                    onChange={(e) =>
                      setProjectFormData({
                        ...projectFormData,
                        tags: e.target.value.split(',').map((t) => t.trim()),
                      })
                    }
                    placeholder="React, Figma, Node"
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#d9ff5c]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-white/60 mb-1">
                    Client
                  </label>
                  <input
                    type="text"
                    value={projectFormData.client || ''}
                    onChange={(e) =>
                      setProjectFormData({ ...projectFormData, client: e.target.value })
                    }
                    placeholder="Ex: BioGroup"
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#d9ff5c]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-white/60 mb-1">
                    Lien Démo (Live URL)
                  </label>
                  <input
                    type="text"
                    value={projectFormData.liveUrl || ''}
                    onChange={(e) =>
                      setProjectFormData({ ...projectFormData, liveUrl: e.target.value })
                    }
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-[#d9ff5c]"
                  />
                </div>
              </div>

              {/* Featured checkbox */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="featured-check"
                  checked={projectFormData.featured}
                  onChange={(e) =>
                    setProjectFormData({ ...projectFormData, featured: e.target.checked })
                  }
                  className="w-4 h-4 rounded text-[#d9ff5c] focus:ring-0"
                />
                <label
                  htmlFor="featured-check"
                  className="text-xs text-white/80 cursor-pointer font-medium"
                >
                  Mettre à la une sur l'accueil (Menu promotionnel)
                </label>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsProjectModalOpen(false)}
                  className="px-4 py-2 rounded-full bg-white/5 text-xs text-white/70 hover:text-white"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-[#d9ff5c] text-[#101828] font-bold text-xs hover:bg-[#1aff75] transition-colors"
                >
                  {editingProjectId ? 'Enregistrer les modifications' : 'Créer le projet'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
