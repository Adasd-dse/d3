import React from 'react';
import { ExternalLink } from 'lucide-react';

const Sponsors: React.FC = () => {
  const sponsors = [
    {
      name: "Technical University of Moldova",
      logo: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200",
      tier: "Title Sponsor",
      website: "#"
    },
    {
      name: "AutoTech Solutions",
      logo: "https://images.pexels.com/photos/159293/car-engine-motor-clean-159293.jpeg?auto=compress&cs=tinysrgb&w=200",
      tier: "Gold Sponsor",
      website: "#"
    },
    {
      name: "Engineering Dynamics",
      logo: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=200",
      tier: "Silver Sponsor",
      website: "#"
    },
    {
      name: "Racing Components Ltd",
      logo: "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=200",
      tier: "Bronze Sponsor",
      website: "#"
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Title Sponsor': return 'text-yellow-400 border-yellow-500/30 bg-yellow-600/20';
      case 'Gold Sponsor': return 'text-yellow-500 border-yellow-600/30 bg-yellow-700/20';
      case 'Silver Sponsor': return 'text-gray-300 border-gray-500/30 bg-gray-600/20';
      case 'Bronze Sponsor': return 'text-orange-400 border-orange-500/30 bg-orange-600/20';
      default: return 'text-gray-400 border-gray-500/30 bg-gray-600/20';
    }
  };

  return (
    <section id="sponsors" className="section-spacing py-20 bg-black">
      <div className="container-padding max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium tracking-wider mb-4">
            OUR SPONSORS
          </span>
          <h2 className="section-heading text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Powered by Partnership
            </span>
          </h2>
          <p className="section-text text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're grateful to our sponsors who make our racing dreams possible through their generous support
          </p>
        </div>

        <div className="card-grid-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-red-500/50 transition-all duration-300 card-hover hover-lift">
              <div className="aspect-square p-6 flex items-center justify-center bg-white">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTierColor(sponsor.tier)}`}>
                    {sponsor.tier}
                  </span>
                  <a href={sponsor.website} className="text-gray-400 group-hover:text-red-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <h3 className="section-title text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                  {sponsor.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600/20 to-gray-800/50 rounded-2xl p-8 border border-red-500/30">
          <div className="text-center">
            <h3 className="section-title text-2xl font-bold text-white mb-4">Become a Sponsor</h3>
            <p className="section-text text-gray-300 mb-6 max-w-2xl mx-auto">
              Partner with us to support the next generation of automotive engineers and gain valuable exposure 
              in the engineering community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover-lift">
                Sponsorship Package
              </button>
              <button className="px-8 py-4 border-2 border-white/30 hover:border-red-500 text-white hover:text-red-400 font-bold rounded-lg transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;