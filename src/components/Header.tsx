import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      isScrolled ? 'bg-black/90 backdrop-blur-sm py-3' : 'bg-black/60 py-4'
    }`}>
      <div className="wrapper max-w-7xl mx-auto px-4">
        <div className="row flex items-center justify-between">
          {/* Logo */}
          <div className="logo flex items-center space-x-2">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">FS</span>
            </div>
            <div className="hidden md:block">
              <div className="text-white font-bold text-lg">Formula Student</div>
              <div className="text-red-500 text-sm">UTM</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="navmenu desktop-nav hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('team')} className="nav-link">Team</button>
            <button onClick={() => scrollToSection('recruitment')} className="nav-link">Recruitment</button>
            <button onClick={() => scrollToSection('sponsors')} className="nav-link">Sponsors</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </nav>

          {/* Social Links - Desktop */}
          <div className="social hidden lg:flex items-center space-x-4">
            <a href="https://www.instagram.com/fsteamutm" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/fsteamutm" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-icon">
              <Youtube size={20} />
            </a>
            <a href="https://www.linkedin.com/in/fsteamutm" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="menu-icon lg:hidden text-white p-2 relative z-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <nav className={`mobile-nav lg:hidden ${isMenuOpen ? '_active' : ''}`}>
          <div className="flex flex-col py-6 px-4 space-y-4">
            <button onClick={() => scrollToSection('hero')} className="mobile-nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
            <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">Projects</button>
            <button onClick={() => scrollToSection('team')} className="mobile-nav-link">Team</button>
            <button onClick={() => scrollToSection('recruitment')} className="mobile-nav-link">Recruitment</button>
            <button onClick={() => scrollToSection('sponsors')} className="mobile-nav-link">Sponsors</button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
            
            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a href="https://www.instagram.com/fsteamutm" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/fsteamutm" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Facebook size={24} />
              </a>
              <a href="#" className="social-icon">
                <Youtube size={24} />
              </a>
              <a href="https://www.linkedin.com/in/fsteamutm" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;