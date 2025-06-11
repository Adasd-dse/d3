import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('_lock', !isMenuOpen);
  };

  return (
    <header className={`header fixed w-full z-40 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-2xl border-b border-red-500/20' : 'bg-black/60 py-4'
    }`}>
      <div className="wrapper max-w-7xl mx-auto px-4">
        <div className="row flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="logo flex items-center space-x-2 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-red-500/50">
              <span className="text-white font-bold text-xl group-hover:text-gray-100 transition-colors">FS</span>
            </div>
            <div className="hidden md:block">
              <div className="text-white font-bold text-lg group-hover:text-red-400 transition-colors duration-300">Formula Student</div>
              <div className="text-red-500 text-sm group-hover:text-red-400 transition-colors duration-300">UTM</div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="navmenu desktop-nav hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="nav-link group relative">
              <span>{t('nav.home')}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link group relative">
              <span>{t('nav.about')}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link group relative">
              <span>{t('nav.projects')}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
            </button>
            <button onClick={() => scrollToSection('team')} className="nav-link group relative">
              <span>{t('nav.team')}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
            </button>
            <button onClick={() => scrollToSection('recruitment')} className="nav-link group relative">
              <span>{t('nav.recruitment')}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
            </button>
            <button onClick={() => scrollToSection('sponsors')} className="nav-link group relative">
              <span>{t('nav.sponsors')}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link group relative">
              <span>{t('nav.contact')}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
            </button>
          </nav>

          {/* Right side - Language Switcher, Social Links, Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Enhanced Social Links - Desktop */}
            <div className="social hidden lg:flex items-center space-x-4">
              <a href="https://www.instagram.com/fsteamutm" target="_blank" rel="noopener noreferrer" className="social-icon group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://www.facebook.com/fsteamutm" target="_blank" rel="noopener noreferrer" className="social-icon group">
                <Facebook size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="social-icon group">
                <Youtube size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/fsteamutm" target="_blank" rel="noopener noreferrer" className="social-icon group">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="menu-icon lg:hidden text-white p-2 relative z-50 group"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : ''}`} />
                <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`absolute top-5 left-0 w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <nav className={`mobile-nav lg:hidden transition-all duration-500 ${isMenuOpen ? '_active' : ''}`}>
          <div className="flex flex-col py-6 px-4 space-y-4">
            <button onClick={() => scrollToSection('hero')} className="mobile-nav-link group">
              <span className="group-hover:translate-x-2 transition-transform duration-300">{t('nav.home')}</span>
            </button>
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link group">
              <span className="group-hover:translate-x-2 transition-transform duration-300">{t('nav.about')}</span>
            </button>
            <button onClick={() => scrollToSection('projects')} className="mobile-nav-link group">
              <span className="group-hover:translate-x-2 transition-transform duration-300">{t('nav.projects')}</span>
            </button>
            <button onClick={() => scrollToSection('team')} className="mobile-nav-link group">
              <span className="group-hover:translate-x-2 transition-transform duration-300">{t('nav.team')}</span>
            </button>
            <button onClick={() => scrollToSection('recruitment')} className="mobile-nav-link group">
              <span className="group-hover:translate-x-2 transition-transform duration-300">{t('nav.recruitment')}</span>
            </button>
            <button onClick={() => scrollToSection('sponsors')} className="mobile-nav-link group">
              <span className="group-hover:translate-x-2 transition-transform duration-300">{t('nav.sponsors')}</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link group">
              <span className="group-hover:translate-x-2 transition-transform duration-300">{t('nav.contact')}</span>
            </button>
            
            {/* Enhanced Mobile Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a href="https://www.instagram.com/fsteamutm" target="_blank" rel="noopener noreferrer" className="social-icon group">
                <Instagram size={24} className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              </a>
              <a href="https://www.facebook.com/fsteamutm" target="_blank" rel="noopener noreferrer" className="social-icon group">
                <Facebook size={24} className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              </a>
              <a href="#" className="social-icon group">
                <Youtube size={24} className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/fsteamutm" target="_blank" rel="noopener noreferrer" className="social-icon group">
                <Linkedin size={24} className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;