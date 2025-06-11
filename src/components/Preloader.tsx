import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';

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
    <div id="preloader" className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div id="team-logo" className="mb-8 text-red-500">
        <Car size={120} className="animate-pulse" />
      </div>
      
      <div id="loader-container" className="w-80 h-3 bg-gray-800 rounded-full overflow-hidden mb-4">
        <div 
          id="loader-bar"
          className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div id="loader-percent" className="preloader-percent text-white text-xl font-bold">
        {progress}%
      </div>
      
      <div className="mt-4 text-gray-400 text-sm tracking-wider">
        FORMULA STUDENT UTM
      </div>
    </div>
  );
};

export default Preloader;