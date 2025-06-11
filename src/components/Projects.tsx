import React from 'react';
import { ExternalLink, Calendar, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "FS UTM 2024",
      description: "Our latest formula car featuring advanced aerodynamics and lightweight carbon fiber construction.",
      image: "https://images.pexels.com/photos/12789516/pexels-photo-12789516.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2024",
      team: "25 members",
      status: "Active"
    },
    {
      title: "Electric Powertrain",
      description: "Development of high-performance electric motor and battery management system.",
      image: "https://images.pexels.com/photos/159293/car-engine-motor-clean-159293.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2023",
      team: "8 members",
      status: "Completed"
    },
    {
      title: "Aerodynamics Package",
      description: "Advanced wing design and computational fluid dynamics optimization.",
      image: "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=800",
      year: "2023",
      team: "6 members",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="section-spacing py-20 bg-gray-900">
      <div className="container-padding max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium tracking-wider mb-4">
            OUR PROJECTS
          </span>
          <h2 className="section-heading text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Innovation in Motion
            </span>
          </h2>
          <p className="section-text text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our cutting-edge projects that push the boundaries of automotive engineering
          </p>
        </div>

        <div className="card-grid-3 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 card-hover hover-lift">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Active' 
                      ? 'bg-green-600/20 text-green-400 border border-green-500/30' 
                      : 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {project.status}
                  </span>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                </div>
                
                <h3 className="section-title text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="section-text text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{project.team}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;