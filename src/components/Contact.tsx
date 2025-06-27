import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Zap, Shield, Globe, Brain } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHologramActive, setIsHologramActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHologramActive(true);
            entry.target.classList.add('animate-cyber-reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate neural processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message
    alert('Neural transmission successful! Message received in the quantum realm.');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Neural Mail',
      value: 'john.doe@cybermatrix.net',
      href: 'mailto:john.doe@cybermatrix.net',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Phone,
      label: 'Quantum Line',
      value: '+1 (555) CYBER-01',
      href: 'tel:+15552923701',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      label: 'Matrix Location',
      value: 'Neo Francisco, Sector 7',
      href: '#',
      color: 'from-green-500 to-cyan-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'Neural Repository',
      href: 'https://github.com/johndoe',
      color: 'hover:text-gray-400',
      gradient: 'from-gray-500 to-gray-700'
    },
    {
      icon: Linkedin,
      label: 'Professional Matrix',
      href: 'https://linkedin.com/in/johndoe',
      color: 'hover:text-blue-400',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Twitter,
      label: 'Consciousness Stream',
      href: 'https://twitter.com/johndoe',
      color: 'hover:text-cyan-400',
      gradient: 'from-cyan-500 to-purple-500'
    }
  ];

  const neuralStats = [
    { icon: Shield, label: 'SECURE CHANNEL', status: 'ENCRYPTED' },
    { icon: Zap, label: 'RESPONSE TIME', status: '< 24H' },
    { icon: Globe, label: 'GLOBAL REACH', status: 'ACTIVE' },
    { icon: Brain, label: 'AI ASSISTANT', status: 'ONLINE' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] animate-grid-move"></div>
        {/* Floating Data Packets */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-data-flow opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={sectionRef}>
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 glitch-text" data-text="NEURAL INTERFACE">
              NEURAL INTERFACE
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 animate-pulse"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Initiate quantum communication protocols to establish neural connection across the digital matrix
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <div className="space-y-8">
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-6 cyber-glow">TRANSMIT MESSAGE</h3>
              <p className="text-gray-400 mb-8">
                Encode your thoughts into the quantum realm. Neural processing algorithms will analyze and respond 
                to your transmission within the next solar cycle.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                    Neural Identity
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-900/50 border-2 border-gray-700 rounded-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 group-hover:border-cyan-400/50 cyberpunk-input"
                    placeholder="Enter your neural signature"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                
                <div className="relative group">
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></span>
                    Quantum Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-900/50 border-2 border-gray-700 rounded-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 group-hover:border-cyan-400/50 cyberpunk-input"
                    placeholder="neural.address@matrix.net"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="relative group">
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-400"></span>
                  Transmission Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-900/50 border-2 border-gray-700 rounded-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 group-hover:border-cyan-400/50 cyberpunk-input"
                  placeholder="Neural pathway classification"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              <div className="relative group">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-600"></span>
                  Neural Data Stream
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-900/50 border-2 border-gray-700 rounded-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 group-hover:border-cyan-400/50 cyberpunk-input resize-none"
                  placeholder="Encode your thoughts into the quantum matrix..."
                ></textarea>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-none hover:from-cyan-600 hover:to-purple-600 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 cyberpunk-button overflow-hidden"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="font-mono tracking-wider">NEURAL PROCESSING...</span>
                  </>
                ) : (
                  <>
                    <Send size={24} />
                    <span className="font-mono tracking-wider">TRANSMIT TO MATRIX</span>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>
          </div>

          {/* Enhanced Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 cyber-glow">NEURAL CHANNELS</h3>
              <p className="text-gray-400 mb-8">
                Multiple quantum communication pathways available for immediate neural synchronization 
                across the digital consciousness network.
              </p>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group relative flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 cyberpunk-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:animate-pulse`}>
                    <info.icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-400 text-sm font-mono tracking-wider mb-1">{info.label}</div>
                    <div className="text-white font-medium text-lg group-hover:text-cyan-400 transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                  
                  {/* Holographic Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Zap className="text-cyan-400" size={20} />
                Social Matrix Nodes
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-16 h-16 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 flex items-center justify-center text-gray-400 transition-all duration-500 hover:transform hover:scale-110 ${social.color} cyberpunk-card`}
                  >
                    <social.icon size={24} />
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Neural System Status */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 cyberpunk-card">
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Brain className="text-cyan-400" size={20} />
                Neural System Status
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {neuralStats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <stat.icon className="text-cyan-400" size={16} />
                    <div>
                      <div className="text-gray-400 text-xs font-mono tracking-wider">{stat.label}</div>
                      <div className="text-green-400 text-sm font-bold">{stat.status}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium text-sm">All neural pathways operational</span>
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-cyan-400/30 cyberpunk-card">
              <h4 className="text-xl font-semibold text-white mb-4">Consciousness Availability</h4>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Neural pathways open for new connections</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Currently accepting new quantum projects, consciousness collaborations, and neural network expansions. 
                Response time optimized for maximum efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;