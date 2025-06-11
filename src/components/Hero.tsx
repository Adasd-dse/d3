import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900">
        <div className="absolute inset-0 bg-black/50" />
        {/* Interactive background pattern */}
        <div 
          className="absolute inset-0 bg-mesh opacity-20 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse hover:scale-150 transition-transform cursor-pointer" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-ping hover:scale-200 transition-transform cursor-pointer" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse hover:scale-150 transition-transform cursor-pointer" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-red-300 rounded-full animate-ping delay-1000 hover:scale-200 transition-transform cursor-pointer" />
        
        {/* Racing lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-pulse delay-500" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-6 animate-fade-in-up">
          <span className="inline-block px-6 py-3 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium tracking-wider backdrop-blur-sm hover:bg-red-600/30 transition-all duration-300 cursor-default">
            FORMULA STUDENT TEAM
          </span>
        </div>
        
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-shadow animate-fade-in-up delay-200">
          <span className="bg-gradient-to-r from-white via-gray-200 to-red-400 bg-clip-text text-transparent hover:from-red-400 hover:to-white transition-all duration-1000 cursor-default">
            RACING
          </span>
          <br />
          <span className="text-red-500 hover:text-red-400 transition-colors duration-500 cursor-default">EXCELLENCE</span>
        </h1>
        
        <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
          Pushing the boundaries of engineering and innovation at the Technical University of Moldova
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-600">
          <button 
            onClick={scrollToAbout}
            className="group px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover-lift relative overflow-hidden"
          >
            <span className="relative z-10">Discover Our Story</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 border-2 border-white/30 hover:border-red-500 text-white hover:text-red-400 font-bold rounded-lg transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout} 
          className="group text-white/70 hover:text-red-400 transition-all duration-300 p-4 rounded-full hover:bg-red-500/10 backdrop-blur-sm"
        >
          <ChevronDown size={32} className="group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>

      {/* Speed lines animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="speed-line absolute top-1/4 -left-full w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-speed-line" />
        <div className="speed-line absolute top-1/2 -left-full w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-speed-line delay-1000" />
        <div className="speed-line absolute top-3/4 -left-full w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-speed-line delay-2000" />
      </div>
    </section>
  );
};

export default Hero;