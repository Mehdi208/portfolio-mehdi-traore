import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, ArrowUpRight } from 'lucide-react';
import { MakroButton } from '../ui/MakroButton';

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
    { name: 'Expertises', href: isHomePage ? '#piliers' : '/#piliers' },
    { name: 'Showcase', href: isHomePage ? '#showcase' : '/#showcase' },
    { name: 'Projets', href: '/projets', highlight: true },
    { name: 'Tarifs', href: isHomePage ? '#tarifs' : '/#tarifs' },
    { name: 'FAQ', href: isHomePage ? '#faq' : '/#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
          scrolled ? 'top-3' : 'top-5'
        }`}
      >
        <nav
          className={`flex items-center justify-between gap-6 px-4 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#0a0a0a]/85 backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.8)]'
              : 'bg-[#101828]/70 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
          } max-w-5xl w-full`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-[#101828] border border-white/20 flex items-center justify-center font-bold text-sm tracking-tighter text-white group-hover:border-[#d9ff5c] transition-colors">
              M<span className="text-[#d9ff5c]">.</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-[#d9ff5c] transition-colors">
                Méhdi Traoré
              </span>
              <span className="text-[10px] text-white/50 tracking-wider uppercase font-medium">
                Concepteur & Dev
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1.5 bg-black/30 border border-white/5 px-3 py-1.5 rounded-full">
            {navLinks.map((link) => {
              const isInternalRoute = link.href.startsWith('/');
              if (isInternalRoute && !link.href.includes('#')) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                      location.pathname === link.href
                        ? 'bg-white/15 text-white'
                        : link.highlight
                        ? 'text-[#d9ff5c] hover:bg-[#d9ff5c]/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
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
                  className="px-3.5 py-1 text-xs font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Admin Link button */}
            <Link
              to="/admin"
              title="Espace Administrateur"
              className="p-2 rounded-full text-white/50 hover:text-[#d9ff5c] hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
            >
              <Shield className="w-4 h-4" />
            </Link>

            {/* CTA Button */}
            <MakroButton
              size="sm"
              text="Lancer mon projet"
              href={isHomePage ? '#contact' : '/#contact'}
              className="hidden sm:inline-flex text-xs py-2 px-4"
            />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl flex flex-col justify-center px-8 py-12 md:hidden">
          <div className="flex flex-col gap-6 text-center">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-white hover:text-[#d9ff5c] transition-colors"
            >
              Accueil
            </Link>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-medium transition-colors ${
                  link.highlight ? 'text-[#d9ff5c]' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/50 hover:text-[#d9ff5c] flex items-center justify-center gap-2"
            >
              <Shield className="w-4 h-4" /> Espace Administrateur
            </Link>
            <div className="pt-6">
              <MakroButton
                size="md"
                text="Prendre rendez-vous"
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
