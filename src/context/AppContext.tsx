import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, Appointment, AppointmentStatus } from '../types';
import { INITIAL_PROJECTS } from '../data/projectsData';
import { INITIAL_APPOINTMENTS } from '../data/initialAppointments';

interface AppContextType {
  projects: Project[];
  featuredProjects: Project[];
  appointments: Appointment[];
  addProject: (project: Omit<Project, 'id' | 'order'>) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  toggleProjectFeatured: (id: string) => void;
  addAppointment: (appointment: {
    fullName: string;
    email: string;
    phone: string;
    projectType: string;
    budget: string;
    message: string;
  }) => void;
  updateAppointmentStatus: (id: string, status: AppointmentStatus) => void;
  updateAppointmentNotes: (id: string, notes: string) => void;
  deleteAppointment: (id: string) => void;
  resetToDefaults: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY_PROJECTS = 'mehdi_portfolio_projects_v1';
const STORAGE_KEY_APPOINTMENTS = 'mehdi_portfolio_appointments_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROJECTS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading projects from localStorage', e);
    }
    return INITIAL_PROJECTS;
  });

  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_APPOINTMENTS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading appointments from localStorage', e);
    }
    return INITIAL_APPOINTMENTS;
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(projects));
    } catch (e) {
      console.error('Failed to save projects to localStorage', e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_APPOINTMENTS, JSON.stringify(appointments));
    } catch (e) {
      console.error('Failed to save appointments to localStorage', e);
    }
  }, [appointments]);

  // Featured projects shown on the landing page ("menus promotionnels")
  const featuredProjects = projects.filter(p => p.featured);

  const addProject = (newProjData: Omit<Project, 'id' | 'order'>) => {
    const newProject: Project = {
      ...newProjData,
      id: `proj-${Date.now()}`,
      order: projects.length + 1,
    };
    setProjects(prev => [newProject, ...prev]);
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    setProjects(prev => prev.map(p => (p.id === id ? { ...p, ...updates } : p)));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const toggleProjectFeatured = (id: string) => {
    setProjects(prev =>
      prev.map(p => (p.id === id ? { ...p, featured: !p.featured } : p))
    );
  };

  const addAppointment = (data: {
    fullName: string;
    email: string;
    phone: string;
    projectType: string;
    budget: string;
    message: string;
  }) => {
    const newApt: Appointment = {
      ...data,
      id: `apt-${Date.now()}`,
      status: 'nouveau',
      createdAt: new Date().toISOString(),
      notes: '',
    };
    setAppointments(prev => [newApt, ...prev]);
  };

  const updateAppointmentStatus = (id: string, status: AppointmentStatus) => {
    setAppointments(prev =>
      prev.map(a => (a.id === id ? { ...a, status } : a))
    );
  };

  const updateAppointmentNotes = (id: string, notes: string) => {
    setAppointments(prev =>
      prev.map(a => (a.id === id ? { ...a, notes } : a))
    );
  };

  const deleteAppointment = (id: string) => {
    setAppointments(prev => prev.filter(a => a.id !== id));
  };

  const resetToDefaults = () => {
    setProjects(INITIAL_PROJECTS);
    setAppointments(INITIAL_APPOINTMENTS);
    localStorage.removeItem(STORAGE_KEY_PROJECTS);
    localStorage.removeItem(STORAGE_KEY_APPOINTMENTS);
  };

  return (
    <AppContext.Provider
      value={{
        projects,
        featuredProjects,
        appointments,
        addProject,
        updateProject,
        deleteProject,
        toggleProjectFeatured,
        addAppointment,
        updateAppointmentStatus,
        updateAppointmentNotes,
        deleteAppointment,
        resetToDefaults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
