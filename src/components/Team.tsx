import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Alexandru Popescu",
      role: "Team Captain",
      department: "Mechanical Engineering",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      email: "alex@fsteam.utm.md"
    },
    {
      name: "Maria Ionescu",
      role: "Chief Engineer",
      department: "Automotive Engineering",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      email: "maria@fsteam.utm.md"
    },
    {
      name: "Dmitri Volkov",
      role: "Electronics Lead",
      department: "Electrical Engineering",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      email: "dmitri@fsteam.utm.md"
    },
    {
      name: "Ana Rusu",
      role: "Aerodynamics Engineer",
      department: "Aerospace Engineering",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      email: "ana@fsteam.utm.md"
    }
  ];

  return (
    <section id="team" className="section-spacing py-20 bg-black">
      <div className="container-padding max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium tracking-wider mb-4">
            OUR TEAM
          </span>
          <h2 className="section-heading text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Meet the Engineers
            </span>
          </h2>
          <p className="section-text text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Talented students from various engineering disciplines working together to achieve excellence
          </p>
        </div>

        <div className="card-grid-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-red-500/50 transition-all duration-300 card-hover hover-lift">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6">
                <h3 className="section-title text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-red-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.department}</p>
                
                <div className="flex space-x-3">
                  <a href={member.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-red-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-900/50 rounded-2xl p-8 border border-gray-800/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-1">25+</div>
              <div className="text-gray-400 text-sm">Active Members</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-1">6</div>
              <div className="text-gray-400 text-sm">Departments</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-1">100%</div>
              <div className="text-gray-400 text-sm">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;