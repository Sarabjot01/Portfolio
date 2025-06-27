import React, { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud,
  Cpu,
  GitBranch,
  Brain,
  Zap,
  Shield,
  Rocket
} from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  const skillCategories = [
    {
      title: 'Neural Frontend',
      icon: Brain,
      skills: [
        { name: 'React Nexus', level: 98, color: 'from-cyan-500 to-blue-500' },
        { name: 'Quantum TypeScript', level: 95, color: 'from-blue-500 to-purple-500' },
        { name: 'Vue.js Matrix', level: 90, color: 'from-green-500 to-cyan-500' },
        { name: 'Neural CSS', level: 96, color: 'from-purple-500 to-pink-500' },
      ],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Quantum Backend',
      icon: Cpu,
      skills: [
        { name: 'Node.js Core', level: 92, color: 'from-green-500 to-cyan-500' },
        { name: 'Python AI', level: 88, color: 'from-yellow-500 to-orange-500' },
        { name: 'Quantum DB', level: 85, color: 'from-purple-500 to-pink-500' },
        { name: 'Neural MongoDB', level: 87, color: 'from-green-400 to-blue-400' },
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Holographic Design',
      icon: Palette,
      skills: [
        { name: 'Figma Matrix', level: 94, color: 'from-pink-500 to-red-500' },
        { name: 'Adobe Nexus', level: 89, color: 'from-blue-500 to-purple-500' },
        { name: 'Neural Prototyping', level: 91, color: 'from-cyan-500 to-purple-500' },
        { name: 'UX Psychology', level: 86, color: 'from-green-500 to-cyan-500' },
      ],
      gradient: 'from-pink-500 to-red-500'
    },
    {
      title: 'Cyber Operations',
      icon: Shield,
      skills: [
        { name: 'Docker Containers', level: 88, color: 'from-blue-500 to-cyan-500' },
        { name: 'AWS Quantum', level: 84, color: 'from-orange-500 to-red-500' },
        { name: 'Git Neural', level: 97, color: 'from-gray-500 to-gray-700' },
        { name: 'CI/CD Matrix', level: 86, color: 'from-green-500 to-blue-500' },
      ],
      gradient: 'from-orange-500 to-red-500'
    },
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-400' },
    { name: 'Neural TS', icon: '🧠', color: 'from-blue-400 to-purple-400' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-cyan-400' },
    { name: 'Python AI', icon: '🐍', color: 'from-yellow-400 to-orange-400' },
    { name: 'Quantum Docker', icon: '🐳', color: 'from-blue-400 to-cyan-400' },
    { name: 'AWS Matrix', icon: '☁️', color: 'from-orange-400 to-red-400' },
    { name: 'Figma Nexus', icon: '🎨', color: 'from-pink-400 to-red-400' },
    { name: 'Mongo Neural', icon: '🍃', color: 'from-green-400 to-blue-400' },
  ];

  const neuralStats = [
    { number: '99.9%', label: 'NEURAL ACCURACY', icon: Brain, color: 'from-cyan-400 to-blue-400' },
    { number: '< 0.01s', label: 'QUANTUM RESPONSE', icon: Zap, color: 'from-yellow-400 to-orange-400' },
    { number: '∞', label: 'LEARNING CAPACITY', icon: Rocket, color: 'from-purple-400 to-pink-400' },
    { number: '24/7', label: 'MATRIX UPTIME', icon: Shield, color: 'from-green-400 to-cyan-400' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-move"></div>
        {/* Neural Connections */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-cyan-400 rounded-full animate-neural-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={sectionRef}>
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 glitch-text" data-text="NEURAL MATRIX">
              NEURAL MATRIX
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 animate-pulse"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Advanced neural pathways and quantum-enhanced capabilities powering the future of digital innovation
          </p>
        </div>

        {/* Enhanced Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 cyberpunk-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Holographic Header */}
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mr-6 group-hover:animate-pulse`}>
                  <category.icon className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="text-sm text-gray-400 font-mono tracking-wider">NEURAL PATHWAY ACTIVE</div>
                </div>
              </div>

              {/* Enhanced Skill Bars */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-300 font-medium tracking-wide">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-bold font-mono">{skill.level}%</span>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Neural Skill Bar */}
                    <div className="relative w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-2000 ease-out relative overflow-hidden`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      >
                        {/* Animated Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                      
                      {/* Neural Pulse Effect */}
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div 
                          className="h-full bg-cyan-400/20 animate-neural-scan"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            animationDelay: `${(index * 0.2) + (skillIndex * 0.1) + 1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Holographic Corner Effects */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Technology Matrix */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-12 cyber-glow">TECHNOLOGY MATRIX</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-110 cyberpunk-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Tech Icon with Holographic Effect */}
                <div className={`text-5xl mb-4 group-hover:animate-bounce relative`}>
                  {tech.icon}
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                </div>
                
                <span className="text-gray-300 font-medium text-sm text-center group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>

                {/* Neural Connection Lines */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-1/2 w-px h-4 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                  <div className="absolute bottom-0 left-1/2 w-px h-4 bg-gradient-to-t from-cyan-400 to-transparent"></div>
                  <div className="absolute left-0 top-1/2 w-4 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
                  <div className="absolute right-0 top-1/2 w-4 h-px bg-gradient-to-l from-cyan-400 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Neural Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {neuralStats.map((stat, index) => (
            <div
              key={index}
              className="group relative text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 cyberpunk-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <stat.icon className={`mx-auto text-4xl text-transparent bg-clip-text bg-gradient-to-r ${stat.color} group-hover:animate-pulse`} size={48} />
              </div>
              <div className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2 counter-animation`}>
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium text-sm tracking-wider">{stat.label}</div>
              
              {/* Holographic Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Neural Network Status Display */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6 px-12 py-6 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-full">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 font-mono text-sm tracking-wider">NEURAL PATHWAYS</span>
            </div>
            <div className="w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
              <span className="text-gray-300 font-mono text-sm tracking-wider">QUANTUM PROCESSING</span>
            </div>
            <div className="w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
              <span className="text-gray-300 font-mono text-sm tracking-wider">MATRIX SYNCHRONIZED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;