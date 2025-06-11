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

      {/* F1 Car SVG */}
      <div className="mb-8 relative">
        <div 
          className="f1-car-container relative transition-transform duration-300"
          style={{ transform: `translateX(${(progress - 50) * 2}px)` }}
        >
          <svg 
            width="160" 
            height="80" 
            viewBox="0 0 160 80" 
            className="f1-car drop-shadow-2xl"
          >
            {/* Car body */}
            <path 
              d="M20 35 L140 35 L145 40 L145 45 L140 50 L20 50 L15 45 L15 40 Z" 
              fill="url(#carGradient)" 
              className="animate-pulse"
            />
            
            {/* Front wing */}
            <path 
              d="M5 38 L20 38 L20 42 L5 42 Z" 
              fill="#dc2626" 
              className="animate-pulse delay-100"
            />
            
            {/* Rear wing */}
            <path 
              d="M140 32 L155 32 L155 36 L140 36 Z" 
              fill="#dc2626" 
              className="animate-pulse delay-200"
            />
            
            {/* Cockpit */}
            <ellipse 
              cx="80" 
              cy="42.5" 
              rx="25" 
              ry="7.5" 
              fill="#1f2937" 
              className="animate-pulse delay-75"
            />
            
            {/* Front wheels */}
            <circle 
              cx="30" 
              cy="55" 
              r="8" 
              fill="#374151" 
              className="wheel-spin"
            />
            <circle 
              cx="30" 
              cy="55" 
              r="5" 
              fill="#6b7280"
            />
            
            {/* Rear wheels */}
            <circle 
              cx="130" 
              cy="55" 
              r="8" 
              fill="#374151" 
              className="wheel-spin"
            />
            <circle 
              cx="130" 
              cy="55" 
              r="5" 
              fill="#6b7280"
            />
            
            {/* Speed lines */}
            <g className="speed-lines opacity-60">
              <line x1="0" y1="25" x2="15" y2="25" stroke="#dc2626" strokeWidth="2" className="animate-pulse" />
              <line x1="0" y1="30" x2="12" y2="30" stroke="#dc2626" strokeWidth="1.5" className="animate-pulse delay-100" />
              <line x1="0" y1="35" x2="18" y2="35" stroke="#dc2626" strokeWidth="2" className="animate-pulse delay-200" />
              <line x1="0" y1="50" x2="15" y2="50" stroke="#dc2626" strokeWidth="2" className="animate-pulse delay-75" />
              <line x1="0" y1="55" x2="12" y2="55" stroke="#dc2626" strokeWidth="1.5" className="animate-pulse delay-150" />
              <line x1="0" y1="60" x2="18" y2="60" stroke="#dc2626" strokeWidth="2" className="animate-pulse delay-300" />
            </g>
            
            {/* Gradients */}
            <defs>
              <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="50%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Exhaust flames */}
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
            <div className="w-8 h-2 bg-gradient-to-r from-orange-500 to-transparent rounded-full animate-pulse opacity-80" />
            <div className="w-6 h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full animate-pulse delay-100 mt-1" />
          </div>
        </div>
      </div>
      
      {/* Enhanced progress bar */}
      <div className="w-96 h-4 bg-gray-800 rounded-full overflow-hidden mb-6 border border-gray-700 shadow-2xl">
        <div 
          className="h-full bg-gradient-to-r from-red-500 via-red-400 to-red-600 transition-all duration-300 ease-out relative overflow-hidden"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          <div className="absolute right-0 top-0 w-4 h-full bg-gradient-to-l from-white/50 to-transparent" />
        </div>
      </div>
      
      {/* Progress percentage with enhanced styling */}
      <div className="text-white text-3xl font-black mb-4 tracking-wider">
        <span className="bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
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
      
      {/* Loading dots */}
      <div className="flex space-x-2 mt-6">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" />
        <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-100" />
        <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-200" />
      </div>
    </div>
  );
};

export default Preloader;