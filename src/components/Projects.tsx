import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Filter, Zap, Code, Database, Cpu, Globe, Shield, Brain } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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

  const projects = [
    {
      id: 1,
      title: 'Voxillo',
      description: 'AI-powered e-commerce platform with quantum-encrypted transactions and neural recommendation algorithms.',
      image: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'AI/ML',
      technologies: ['Neural Networks', 'Quantum Encryption', 'Blockchain', 'React Nexus'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'DEPLOYED',
      complexity: 'QUANTUM',
      icon: Brain
    },
    {
      id: 2,
      title: 'CyberTask Synchronizer',
      description: 'Holographic task management system with real-time neural synchronization across multiple dimensions.',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Frontend',
      technologies: ['Holographic UI', 'Neural Sync', 'Quantum State', 'Cyber Protocol'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'ACTIVE',
      complexity: 'ADVANCED',
      icon: Zap
    },
    {
      id: 3,
      title: 'Atmospheric Data Nexus',
      description: 'Quantum weather prediction system with atmospheric data visualization and climate neural networks.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Data Science',
      technologies: ['Quantum Computing', 'Climate AI', 'Data Visualization', 'Neural Prediction'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'PROCESSING',
      complexity: 'EXPERT',
      icon: Globe
    },
    {
      id: 4,
      title: 'Sentient Chat Entity',
      description: 'Advanced AI consciousness with quantum natural language processing and emotional intelligence matrices.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'AI/ML',
      technologies: ['Consciousness AI', 'Quantum NLP', 'Emotional Matrix', 'Neural Evolution'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'EVOLVING',
      complexity: 'SENTIENT',
      icon: Brain
    },
    {
      id: 5,
      title: 'Holographic Portfolio Matrix',
      description: 'Immersive 3D portfolio experience with neural interface design and quantum animation systems.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Design',
      technologies: ['Holographic Design', '3D Neural Interface', 'Quantum Animation', 'Immersive Reality'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'DEPLOYED',
      complexity: 'MASTER',
      icon: Code
    },
    {
      id: 6,
      title: 'Quantum Crypto Vault',
      description: 'Multi-dimensional cryptocurrency wallet with quantum security protocols and DeFi neural networks.',
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Blockchain',
      technologies: ['Quantum Security', 'Multi-Chain Neural', 'DeFi Matrix', 'Crypto Evolution'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'SECURED',
      complexity: 'QUANTUM',
      icon: Shield
    },
  ];

  const categories = ['All', 'AI/ML', 'Frontend', 'Data Science', 'Design', 'Blockchain'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'DEPLOYED': return 'from-green-400 to-cyan-400';
      case 'ACTIVE': return 'from-cyan-400 to-blue-400';
      case 'PROCESSING': return 'from-yellow-400 to-orange-400';
      case 'EVOLVING': return 'from-purple-400 to-pink-400';
      case 'SECURED': return 'from-blue-400 to-purple-400';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'QUANTUM': return 'text-purple-400';
      case 'SENTIENT': return 'text-pink-400';
      case 'MASTER': return 'text-cyan-400';
      case 'EXPERT': return 'text-green-400';
      case 'ADVANCED': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] animate-grid-move"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          >
            <div className={`w-3 h-3 rotate-45 ${
              i % 4 === 0 ? 'bg-cyan-400/30' : 
              i % 4 === 1 ? 'bg-purple-400/30' : 
              i % 4 === 2 ? 'bg-pink-400/30' : 'bg-green-400/30'
            }`}></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={sectionRef}>
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 glitch-text" data-text="PROJECT MATRIX">
              PROJECT MATRIX
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 animate-pulse"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Explore the neural network of innovative solutions and revolutionary implementations
          </p>
        </div>

        {/* Enhanced Filter System */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`group relative px-8 py-4 font-bold text-sm tracking-wider transition-all duration-500 cyberpunk-button ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-gray-900/50 text-gray-300 hover:text-white border border-gray-700 hover:border-cyan-400/50'
              }`}
            >
              <Filter className="inline-block mr-2" size={16} />
              {category}
              {activeFilter === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-20 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 cyberpunk-card overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Holographic Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Project Image with Holographic Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Status Indicator */}
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 text-xs font-bold bg-gradient-to-r ${getStatusColor(project.status)} text-black rounded-full animate-pulse`}>
                    {project.status}
                  </div>
                </div>

                {/* Complexity Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 text-xs font-bold ${getComplexityColor(project.complexity)} bg-black/70 backdrop-blur-sm border border-current rounded-full`}>
                    {project.complexity}
                  </div>
                </div>
                
                {/* Overlay Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={project.liveUrl}
                    className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/50"
                  >
                    <ExternalLink size={24} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/50"
                  >
                    <Github size={24} />
                  </a>
                </div>

                {/* Scanning Line Effect */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-scan"></div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <project.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-cyan-400 font-mono tracking-wider">{project.category}</div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 rounded-full border border-gray-700 hover:border-cyan-400/50 transition-colors duration-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Holographic Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Neural Network Status */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-full">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-mono text-sm tracking-wider">MATRIX STATUS: OPERATIONAL</span>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;