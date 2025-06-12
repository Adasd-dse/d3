import React, { useState, useEffect } from 'react';

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="preloader" className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-mesh opacity-10 animate-pulse" />
      
      {/* Racing track lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-pulse" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -mt-4" />
      </div>

      {/* F1 Car SVG - Exact replica of UTM team car from image */}
      <div className="mb-8 relative">
        <div 
          className="f1-car-container relative transition-transform duration-300"
          style={{ transform: `translateX(${(progress - 50) * 2}px)` }}
        >
          <svg 
            width="240" 
            height="120" 
            viewBox="0 0 240 120" 
            className="f1-car drop-shadow-2xl"
          >
            {/* Main car chassis - White base */}
            <path 
              d="M30 45 L210 45 L215 50 L215 65 L210 70 L30 70 L25 65 L25 50 Z" 
              fill="white" 
              stroke="#ddd"
              strokeWidth="1"
              className="animate-pulse"
            />
            
            {/* Front nose - Blue section (Romanian flag) */}
            <path 
              d="M8 50 L30 50 L30 65 L8 65 L12 57.5 Z" 
              fill="#002B7F" 
              className="animate-pulse delay-100"
            />
            
            {/* Front wing elements */}
            <rect x="5" y="47" width="25" height="3" fill="#002B7F" rx="1" />
            <rect x="5" y="70" width="25" height="3" fill="#002B7F" rx="1" />
            
            {/* Yellow center section (Romanian flag) */}
            <rect x="80" y="45" width="80" height="25" fill="#FCD116" />
            
            {/* Red rear section (Romanian flag) */}
            <rect x="160" y="45" width="50" height="25" fill="#CE1126" />
            
            {/* Rear wing - Red */}
            <rect x="210" y="40" width="25" height="5" fill="#CE1126" rx="2" />
            <rect x="210" y="75" width="25" height="5" fill="#CE1126" rx="2" />
            
            {/* Cockpit opening */}
            <ellipse 
              cx="120" 
              cy="57.5" 
              rx="35" 
              ry="12" 
              fill="#1a1a1a" 
              className="animate-pulse delay-75"
            />
            
            {/* Driver helmet */}
            <circle 
              cx="120" 
              cy="57.5" 
              r="8" 
              fill="#333"
            />
            <circle 
              cx="120" 
              cy="57.5" 
              r="6" 
              fill="#555"
            />
            
            {/* Side decorative elements - Romanian coat of arms inspired */}
            <g className="animate-pulse delay-200">
              {/* Left side decorations */}
              <circle cx="90" cy="52" r="3" fill="#FCD116" />
              <circle cx="100" cy="52" r="3" fill="#FCD116" />
              <circle cx="110" cy="52" r="3" fill="#FCD116" />
              <circle cx="130" cy="52" r="3" fill="#FCD116" />
              <circle cx="140" cy="52" r="3" fill="#FCD116" />
              <circle cx="150" cy="52" r="3" fill="#FCD116" />
              
              {/* Right side decorations */}
              <circle cx="90" cy="63" r="3" fill="#FCD116" />
              <circle cx="100" cy="63" r="3" fill="#FCD116" />
              <circle cx="110" cy="63" r="3" fill="#FCD116" />
              <circle cx="130" cy="63" r="3" fill="#FCD116" />
              <circle cx="140" cy="63" r="3" fill="#FCD116" />
              <circle cx="150" cy="63" r="3" fill="#FCD116" />
            </g>
            
            {/* Front wheels */}
            <circle 
              cx="40" 
              cy="85" 
              r="15" 
              fill="#1a1a1a" 
              className="wheel-spin"
            />
            <circle cx="40" cy="85" r="12" fill="#333" />
            <circle cx="40" cy="85" r="8" fill="#555" />
            <circle cx="40" cy="85" r="4" fill="#777" />
            
            {/* Rear wheels */}
            <circle 
              cx="200" 
              cy="85" 
              r="15" 
              fill="#1a1a1a" 
              className="wheel-spin"
            />
            <circle cx="200" cy="85" r="12" fill="#333" />
            <circle cx="200" cy="85" r="8" fill="#555" />
            <circle cx="200" cy="85" r="4" fill="#777" />
            
            {/* UTM Team text */}
            <text 
              x="120" 
              y="62" 
              textAnchor="middle" 
              fill="#000" 
              fontSize="10" 
              fontWeight="bold"
              className="animate-pulse delay-300"
            >
              team UTM
            </text>
            
            {/* Speed lines in Romanian flag colors */}
            <g className="speed-lines opacity-60">
              <line x1="0" y1="35" x2="25" y2="35" stroke="#002B7F" strokeWidth="3" className="animate-pulse" />
              <line x1="0" y1="40" x2="20" y2="40" stroke="#FCD116" strokeWidth="2" className="animate-pulse delay-100" />
              <line x1="0" y1="45" x2="28" y2="45" stroke="#CE1126" strokeWidth="3" className="animate-pulse delay-200" />
              <line x1="0" y1="75" x2="25" y2="75" stroke="#002B7F" strokeWidth="3" className="animate-pulse delay-75" />
              <line x1="0" y1="80" x2="20" y2="80" stroke="#FCD116" strokeWidth="2" className="animate-pulse delay-150" />
              <line x1="0" y1="85" x2="28" y2="85" stroke="#CE1126" strokeWidth="3" className="animate-pulse delay-300" />
            </g>
            
            {/* Additional details */}
            <rect x="35" y="48" width="8" height="2" fill="#002B7F" />
            <rect x="35" y="65" width="8" height="2" fill="#002B7F" />
            <rect x="197" y="48" width="8" height="2" fill="#CE1126" />
            <rect x="197" y="65" width="8" height="2" fill="#CE1126" />
          </svg>
          
          {/* Enhanced exhaust flames */}
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
            <div className="w-12 h-4 bg-gradient-to-r from-orange-500 to-transparent rounded-full animate-pulse opacity-80" />
            <div className="w-10 h-3 bg-gradient-to-r from-yellow-400 to-transparent rounded-full animate-pulse delay-100 mt-1" />
            <div className="w-8 h-2 bg-gradient-to-r from-red-500 to-transparent rounded-full animate-pulse delay-200 mt-1" />
          </div>
        </div>
      </div>
      
      {/* Enhanced progress bar with Romanian flag colors */}
      <div className="w-96 h-4 bg-gray-800 rounded-full overflow-hidden mb-6 border border-gray-700 shadow-2xl">
        <div 
          className="h-full bg-gradient-to-r from-blue-800 via-yellow-400 to-red-600 transition-all duration-300 ease-out relative overflow-hidden"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          <div className="absolute right-0 top-0 w-4 h-full bg-gradient-to-l from-white/50 to-transparent" />
        </div>
      </div>
      
      {/* Progress percentage with Romanian flag colors */}
      <div className="text-white text-3xl font-black mb-4 tracking-wider">
        <span className="bg-gradient-to-r from-blue-600 via-yellow-400 to-red-600 bg-clip-text text-transparent">
          {progress}%
        </span>
      </div>
      
      {/* Team branding */}
      <div className="text-center">
        <div className="text-red-500 text-lg font-bold tracking-widest mb-2 animate-pulse">
          FORMULA STUDENT UTM
        </div>
        <div className="text-gray-400 text-sm tracking-wider">
          RACING EXCELLENCE
        </div>
      </div>
      
      {/* Loading dots with Romanian flag colors */}
      <div className="flex space-x-2 mt-6">
        <div className="w-2 h-2 bg-blue-800 rounded-full animate-bounce" />
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-100" />
        <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce delay-200" />
      </div>
    </div>
  );
};

export default Preloader;