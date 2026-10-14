import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projets', href: '/projets', isRoute: true },
    { name: 'Services', href: isHomePage ? '#piliers' : '/#piliers' },
    { name: 'Processus', href: isHomePage ? '#showcase' : '/#showcase' },
    { name: 'Tarifs', href: isHomePage ? '#tarifs' : '/#tarifs' },
  ];

  return (
    <>
      <header
        className={`fixed top-4 left-0 right-0 z-50 flex flex-col items-center px-4 transition-all duration-300 ${
          scrolled ? 'top-3' : 'top-5'
        }`}
      >
        {/* Floating Pill Navbar — Compact & Centered */}
        <nav
          className={`flex items-center justify-between gap-4 sm:gap-6 px-4 sm:px-5 py-2 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#0a0a0a]/92 backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.85)]'
              : 'bg-[#0d0d0d]/85 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
          } max-w-2xl w-full sm:w-auto`}
        >
          {/* Logo on Left */}
          <Link to="/" className="flex items-center focus:outline-none flex-shrink-0">
            <Logo size="sm" />
          </Link>

          {/* Center Navigation Links in French */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => {
              if (link.isRoute) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-xs font-medium transition-colors ${
                      location.pathname === link.href
                        ? 'text-white font-semibold'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action: Red Pill Button in French (Shield Icon removed) */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-[#ff2222] hover:bg-[#e61b1b] text-white text-xs font-bold tracking-wide transition-all shadow-[0_0_18px_rgba(255,34,34,0.35)] hover:shadow-[0_0_25px_rgba(255,34,34,0.55)] active:scale-[0.98] whitespace-nowrap"
            >
              Prendre RDV
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-white/80 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* CreatorCut Centered Glowing Red Dot Under Navbar */}
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff2222] shadow-[0_0_15px_#ff2222] mt-2.5 animate-pulse" />
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-center px-8 py-12 md:hidden">
          <div className="flex flex-col gap-6 text-center">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-white hover:text-[#ff2222] transition-colors"
            >
              Accueil
            </Link>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-3.5 rounded-full bg-[#ff2222] text-white text-center font-bold text-sm shadow-lg shadow-red-500/30"
              >
                Prendre Rendez-vous
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
