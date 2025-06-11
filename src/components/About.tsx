import React from 'react';
import { Target, Users, Trophy, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Team Members', value: '25+' },
    { icon: Trophy, label: 'Competitions', value: '8' },
    { icon: Zap, label: 'Years Active', value: '5' },
    { icon: Target, label: 'Projects', value: '12' }
  ];

  return (
    <section id="about" className="section-spacing py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container-padding max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium tracking-wider mb-4">
            ABOUT US
          </span>
          <h2 className="section-heading text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Engineering the Future
            </span>
          </h2>
          <p className="section-text text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of engineering students from the Technical University of Moldova, 
            dedicated to designing, building, and racing formula-style vehicles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="aspect-video bg-gradient-to-br from-red-600/20 to-gray-800/50 rounded-2xl overflow-hidden mb-8">
              <img 
                src="https://images.pexels.com/photos/12789516/pexels-photo-12789516.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Formula Student Car"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="section-title text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="section-text text-gray-300 leading-relaxed">
                To provide students with hands-on experience in automotive engineering, project management, 
                and teamwork while competing at the highest level in Formula Student competitions worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="section-title text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="section-text text-gray-300 leading-relaxed">
                To become the leading Formula Student team in Eastern Europe, fostering innovation 
                and excellence in automotive engineering education.
              </p>
            </div>
            
            <div className="card-grid-4 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-red-500/50 transition-colors card-hover">
                  <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;