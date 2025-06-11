import React from 'react';
import { Users, BookOpen, Wrench, Zap } from 'lucide-react';

const Recruitment: React.FC = () => {
  const positions = [
    {
      icon: Wrench,
      title: "Mechanical Engineers",
      description: "Design and develop chassis, suspension, and powertrain components",
      requirements: ["CAD experience", "Materials knowledge", "Problem-solving skills"]
    },
    {
      icon: Zap,
      title: "Electrical Engineers",
      description: "Work on electronics, control systems, and data acquisition",
      requirements: ["Circuit design", "Programming", "Embedded systems"]
    },
    {
      icon: BookOpen,
      title: "Business & Marketing",
      description: "Handle sponsorships, marketing, and project management",
      requirements: ["Communication skills", "Business acumen", "Creativity"]
    },
    {
      icon: Users,
      title: "Manufacturing",
      description: "Hands-on fabrication and assembly of vehicle components",
      requirements: ["Workshop skills", "Attention to detail", "Teamwork"]
    }
  ];

  return (
    <section id="recruitment" className="section-spacing py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container-padding max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium tracking-wider mb-4">
            JOIN US
          </span>
          <h2 className="section-heading text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Shape Your Future
            </span>
          </h2>
          <p className="section-text text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join our team and gain invaluable hands-on experience in automotive engineering, 
            project management, and international competition.
          </p>
        </div>

        <div className="card-grid-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {positions.map((position, index) => (
            <div key={index} className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 card-hover hover-lift">
              <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-4">
                <position.icon className="w-6 h-6 text-red-400" />
              </div>
              
              <h3 className="section-title text-xl font-bold text-white mb-3">{position.title}</h3>
              <p className="section-text text-gray-300 mb-4 leading-relaxed">{position.description}</p>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-red-400 mb-2">Requirements:</div>
                {position.requirements.map((req, reqIndex) => (
                  <div key={reqIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-400">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600/20 to-gray-800/50 rounded-2xl p-8 border border-red-500/30">
          <div className="text-center">
            <h3 className="section-title text-2xl font-bold text-white mb-4">Ready to Join Our Team?</h3>
            <p className="section-text text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate students who want to make a difference. 
              No prior experience required - just enthusiasm and willingness to learn!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover-lift">
                Apply Now
              </button>
              <button className="px-8 py-4 border-2 border-white/30 hover:border-red-500 text-white hover:text-red-400 font-bold rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;