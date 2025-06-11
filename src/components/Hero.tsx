import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900">
        <div className="absolute inset-0 bg-black/50" />
        {/* Background pattern */}
        <div className="absolute inset-0 bg-mesh opacity-20" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-red-300 rounded-full animate-ping delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium tracking-wider">
            FORMULA STUDENT TEAM
          </span>
        </div>
        
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-shadow">
          <span className="bg-gradient-to-r from-white via-gray-200 to-red-400 bg-clip-text text-transparent">
            RACING
          </span>
          <br />
          <span className="text-red-500">EXCELLENCE</span>
        </h1>
        
        <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Pushing the boundaries of engineering and innovation at the Technical University of Moldova
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover-lift"
          >
            Discover Our Story
          </button>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-white/30 hover:border-red-500 text-white hover:text-red-400 font-bold rounded-lg transition-all duration-300"
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-white/70 hover:text-red-400 transition-colors">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;