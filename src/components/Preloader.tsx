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

      {/* F1 Car SVG - Updated with UTM Team design */}
      <div className="mb-8 relative">
        <div 
          className="f1-car-container relative transition-transform duration-300"
          style={{ transform: `translateX(${(progress - 50) * 2}px)` }}
        >
          <svg 
            width="200" 
            height="100" 
            viewBox="0 0 200 100" 
            className="f1-car drop-shadow-2xl"
          >
            {/* Main car body - Romanian flag inspired */}
            <path 
              d="M25 40 L175 40 L180 45 L180 55 L175 60 L25 60 L20 55 L20 45 Z" 
              fill="url(#carBodyGradient)" 
              className="animate-pulse"
            />
            
            {/* Front nose - Blue section */}
            <path 
              d="M5 45 L25 45 L25 55 L5 55 L8 50 Z" 
              fill="#1e40af" 
              className="animate-pulse delay-100"
            />
            
            {/* Front wing */}
            <path 
              d="M2 42 L25 42 L25 46 L2 46 Z" 
              fill="#1e40af" 
              className="animate-pulse delay-150"
            />
            <path 
              d="M2 54 L25 54 L25 58 L2 58 Z" 
              fill="#1e40af" 
              className="animate-pulse delay-150"
            />
            
            {/* Rear wing - Red section */}
            <path 
              d="M175 35 L195 35 L195 39 L175 39 Z" 
              fill="#dc2626" 
              className="animate-pulse delay-200"
            />
            <path 
              d="M175 61 L195 61 L195 65 L175 65 Z" 
              fill="#dc2626" 
              className="animate-pulse delay-200"
            />
            
            {/* Cockpit */}
            <ellipse 
              cx="100" 
              cy="50" 
              rx="30" 
              ry="10" 
              fill="#1f2937" 
              className="animate-pulse delay-75"
            />
            
            {/* Driver helmet */}
            <circle 
              cx="100" 
              cy="50" 
              r="6" 
              fill="#374151"
            />
            
            {/* Side pods with Romanian flag colors */}
            <rect 
              x="60" 
              y="35" 
              width="80" 
              height="8" 
              fill="url(#flagGradient)" 
              rx="2"
              className="animate-pulse delay-100"
            />
            <rect 
              x="60" 
              y="57" 
              width="80" 
              height="8" 
              fill="url(#flagGradient)" 
              rx="2"
              className="animate-pulse delay-100"
            />
            
            {/* Front wheels */}
            <circle 
              cx="35" 
              cy="70" 
              r="12" 
              fill="#374151" 
              className="wheel-spin"
            />
            <circle 
              cx="35" 
              cy="70" 
              r="8" 
              fill="#6b7280"
            />
            <circle 
              cx="35" 
              cy="70" 
              r="4" 
              fill="#9ca3af"
            />
            
            {/* Rear wheels */}
            <circle 
              cx="165" 
              cy="70" 
              r="12" 
              fill="#374151" 
              className="wheel-spin"
            />
            <circle 
              cx="165" 
              cy="70" 
              r="8" 
              fill="#6b7280"
            />
            <circle 
              cx="165" 
              cy="70" 
              r="4" 
              fill="#9ca3af"
            />
            
            {/* UTM Logo elements */}
            <text 
              x="100" 
              y="52" 
              textAnchor="middle" 
              fill="white" 
              fontSize="8" 
              fontWeight="bold"
              className="animate-pulse delay-300"
            >
              UTM
            </text>
            
            {/* Speed lines */}
            <g className="speed-lines opacity-60">
              <line x1="0" y1="30" x2="20" y2="30" stroke="#1e40af" strokeWidth="2" className="animate-pulse" />
              <line x1="0" y1="35" x2="15" y2="35" stroke="#facc15" strokeWidth="1.5" className="animate-pulse delay-100" />
              <line x1="0" y1="40" x2="22" y2="40" stroke="#dc2626" strokeWidth="2" className="animate-pulse delay-200" />
              <line x1="0" y1="60" x2="20" y2="60" stroke="#1e40af" strokeWidth="2" className="animate-pulse delay-75" />
              <line x1="0" y1="65" x2="15" y2="65" stroke="#facc15" strokeWidth="1.5" className="animate-pulse delay-150" />
              <line x1="0" y1="70" x2="22" y2="70" stroke="#dc2626" strokeWidth="2" className="animate-pulse delay-300" />
            </g>
            
            {/* Gradients */}
            <defs>
              {/* Car body gradient with Romanian flag colors */}
              <linearGradient id="carBodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="33%" stopColor="#facc15" />
                <stop offset="66%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              
              {/* Romanian flag gradient */}
              <linearGradient id="flagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="33%" stopColor="#1e40af" />
                <stop offset="33%" stopColor="#facc15" />
                <stop offset="66%" stopColor="#facc15" />
                <stop offset="66%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Exhaust flames */}
          <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
            <div className="w-10 h-3 bg-gradient-to-r from-orange-500 to-transparent rounded-full animate-pulse opacity-80" />
            <div className="w-8 h-2 bg-gradient-to-r from-yellow-400 to-transparent rounded-full animate-pulse delay-100 mt-1" />
            <div className="w-6 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full animate-pulse delay-200 mt-1" />
          </div>
        </div>
      </div>
      
      {/* Enhanced progress bar */}
      <div className="w-96 h-4 bg-gray-800 rounded-full overflow-hidden mb-6 border border-gray-700 shadow-2xl">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-yellow-400 to-red-600 transition-all duration-300 ease-out relative overflow-hidden"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          <div className="absolute right-0 top-0 w-4 h-full bg-gradient-to-l from-white/50 to-transparent" />
        </div>
      </div>
      
      {/* Progress percentage with enhanced styling */}
      <div className="text-white text-3xl font-black mb-4 tracking-wider">
        <span className="bg-gradient-to-r from-blue-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
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
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" />
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-100" />
        <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce delay-200" />
      </div>
    </div>
  );
};

export default Preloader;