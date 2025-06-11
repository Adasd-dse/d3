import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language, LanguageOption } from '../types/language';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: LanguageOption[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ro', name: 'Română', flag: '🇷🇴' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-2 px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 hover:border-red-500/50 rounded-lg transition-all duration-300 backdrop-blur-sm"
      >
        <Globe className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors" />
        <span className="text-white text-sm font-medium">{currentLanguage.flag}</span>
        <span className="text-white text-sm font-medium hidden sm:block">{currentLanguage.name}</span>
        <ChevronDown 
          className={`w-4 h-4 text-gray-400 group-hover:text-red-400 transition-all duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-md border border-gray-600/50 rounded-lg shadow-2xl z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 ${
                language === lang.code
                  ? 'bg-red-600/20 text-red-400 border-l-2 border-red-500'
                  : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
              {language === lang.code && (
                <div className="ml-auto w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;