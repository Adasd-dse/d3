import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-spacing py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container-padding max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium tracking-wider mb-4">
            GET IN TOUCH
          </span>
          <h2 className="section-heading text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="section-text text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to join our team or learn more about our projects? We'd love to hear from you!
          </p>
        </div>

        <div className="card-grid-2 grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
              <h3 className="section-title text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-300">contact@fsteam.utm.md</p>
                    <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <p className="text-gray-300">+373 22 509 999</p>
                    <p className="text-gray-400 text-sm">Mon-Fri, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Address</h4>
                    <p className="text-gray-300">Technical University of Moldova</p>
                    <p className="text-gray-300">168 Stefan cel Mare Blvd</p>
                    <p className="text-gray-300">Chisinau, Moldova</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Workshop Hours</h4>
                    <p className="text-gray-300">Monday - Friday: 2:00 PM - 8:00 PM</p>
                    <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-400 text-sm">Closed on Sundays</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
            <h3 className="section-title text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="card-grid-2 grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors">
                  <option>General Inquiry</option>
                  <option>Join the Team</option>
                  <option>Sponsorship</option>
                  <option>Media Request</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your interest in Formula Student UTM..."
                />
              </div>

              <button 
                type="submit"
                className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover-lift"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;