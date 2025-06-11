import React from 'react';
import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Recruitment', href: '#recruitment' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer bg-gray-900 border-t border-gray-800">
      <div className="footer__container container-padding max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="footer__container1 flex items-center space-x-3 mb-6">
              <div className="footer-logo w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">FS</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Formula Student</div>
                <div className="text-red-500 text-sm">UTM</div>
              </div>
            </div>
            <p className="footer-text text-gray-400 leading-relaxed mb-6">
              Engineering excellence through innovation, teamwork, and passion for automotive technology.
            </p>
            <div className="flex space-x-4">
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
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-400">contact@fsteam.utm.md</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-400">+373 22 509 999</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <div>Technical University of Moldova</div>
                  <div>168 Stefan cel Mare Blvd</div>
                  <div>Chisinau, Moldova</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on our projects and competitions.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
              />
              <button className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Formula Student UTM. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;