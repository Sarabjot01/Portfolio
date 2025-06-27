import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Award, Briefcase, Brain, Zap, Code, Rocket } from 'lucide-react';

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      type: 'work',
      title: 'Neural Systems Architect',
      company: 'CyberCorp Quantum Solutions',
      location: 'Neo Francisco, Sector 7',
      period: '2022 - Present',
      description: 'Leading quantum development teams in building next-generation neural applications using advanced AI frameworks and holographic interfaces. Pioneering breakthrough technologies in consciousness-driven computing.',
      achievements: [
        'Architected 3 quantum-scale neural projects',
        'Mentored 5 junior consciousness developers',
        'Improved system neural efficiency by 600%',
        'Implemented quantum-encrypted security protocols'
      ],
      icon: Brain,
      color: 'from-cyan-500 to-blue-500',
      status: 'ACTIVE'
    },
    {
      type: 'work',
      title: 'Holographic Stack Developer',
      company: 'Matrix Innovations Lab',
      location: 'Neo York, Digital District',
      period: '2020 - 2022',
      description: 'Developed and maintained quantum web applications using advanced neural frameworks. Collaborated with AI design teams to create immersive holographic user interfaces.',
      achievements: [
        'Built 15+ responsive neural applications',
        'Reduced quantum load times by 450%',
        'Implemented automated consciousness testing',
        'Pioneered holographic UI/UX patterns'
      ],
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      status: 'COMPLETED'
    },
    {
      type: 'education',
      title: 'Master of Quantum Computing',
      company: 'Neo Stanford Neural University',
      location: 'Silicon Valley Matrix, CA',
      period: '2018 - 2020',
      description: 'Specialized in Neural Engineering and Human-AI Consciousness Integration. Graduated Summa Cum Laude with perfect neural synchronization scores.',
      achievements: [
        'Research in Quantum AI and Neural Learning',
        'Published 3 consciousness-based papers',
        'Teaching Assistant for Neural Web Development',
        'Winner of Quantum Hackathon Championship'
      ],
      icon: Brain,
      color: 'from-green-500 to-cyan-500',
      status: 'MASTERED'
    },
    {
      type: 'work',
      title: 'Cyberpunk Frontend Specialist',
      company: 'Digital Nexus Agency',
      location: 'Los Angeles Matrix, CA',
      period: '2017 - 2018',
      description: 'Developed immersive websites and neural mobile applications. Gained expertise in advanced holographic technologies and quantum development methodologies.',
      achievements: [
        'Developed 20+ client neural interfaces',
        'Mastered React Nexus and Vue.js Matrix',
        'Improved design-to-consciousness workflow',
        'Pioneered responsive neural design patterns'
      ],
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      status: 'EVOLVED'
    },
    {
      type: 'education',
      title: 'Bachelor of Neural Sciences',
      company: 'University of California, Neo Berkeley',
      location: 'Berkeley Matrix, CA',
      period: '2014 - 2018',
      description: 'Strong foundation in quantum computer science fundamentals, neural data structures, consciousness algorithms, and advanced software engineering principles.',
      achievements: [
        'Dean\'s Neural List for 8 semesters',
        'President of Quantum Computer Science Club',
        'Won 5 neural hackathon competitions',
        'Pioneered student consciousness research'
      ],
      icon: Rocket,
      color: 'from-blue-500 to-purple-500',
      status: 'FOUNDATION'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'from-green-400 to-cyan-400';
      case 'COMPLETED': return 'from-blue-400 to-purple-400';
      case 'MASTERED': return 'from-purple-400 to-pink-400';
      case 'EVOLVED': return 'from-yellow-400 to-orange-400';
      case 'FOUNDATION': return 'from-cyan-400 to-blue-400';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-black relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px] animate-grid-move"></div>
        {/* Floating Neural Nodes */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full animate-neural-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={sectionRef}>
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 glitch-text" data-text="NEURAL TIMELINE">
              NEURAL TIMELINE
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 animate-pulse"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Journey through the quantum evolution of consciousness and technological transcendence
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-purple-400 animate-pulse opacity-50 rounded-full"></div>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-index={index}
                className={`timeline-item relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${visibleItems.includes(index) ? 'animate-cyber-reveal' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Enhanced Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-full border-4 border-black flex items-center justify-center animate-pulse shadow-lg`}>
                      <exp.icon className="text-white" size={24} />
                    </div>
                    {/* Holographic Ring */}
                    <div className="absolute inset-0 w-16 h-16 border-2 border-cyan-400/30 rounded-full animate-ping"></div>
                    <div className="absolute inset-1 w-14 h-14 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
                  </div>
                </div>

                {/* Enhanced Content Card */}
                <div className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 cyberpunk-card">
                    {/* Holographic Corner Accents */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Header with Status */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center group-hover:animate-pulse`}>
                          {exp.type === 'work' ? (
                            <Briefcase className="text-white\" size={20} />
                          ) : (
                            <Award className="text-white" size={20} />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 text-sm text-cyan-400 mb-1">
                            <Calendar size={14} />
                            <span className="font-mono tracking-wider">{exp.period}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {exp.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      <div className={`px-3 py-1 text-xs font-bold bg-gradient-to-r ${getStatusColor(exp.status)} text-black rounded-full animate-pulse`}>
                        {exp.status}
                      </div>
                    </div>

                    {/* Company and Location */}
                    <div className="flex items-center gap-6 mb-6 text-gray-300">
                      <span className="font-semibold text-lg">{exp.company}</span>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span className="text-sm font-mono">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {exp.description}
                    </p>

                    {/* Enhanced Achievements */}
                    <div>
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <Zap className="text-cyan-400" size={16} />
                        Neural Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start gap-3 group-hover:text-gray-300 transition-colors duration-300">
                            <span className="text-cyan-400 mt-1 text-lg">▶</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Holographic Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Neural Timeline Status */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-6 px-12 py-6 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-full">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 font-mono text-sm tracking-wider">TIMELINE SYNCHRONIZED</span>
            </div>
            <div className="w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
              <span className="text-gray-300 font-mono text-sm tracking-wider">NEURAL PATHWAYS ACTIVE</span>
            </div>
            <div className="w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
              <span className="text-gray-300 font-mono text-sm tracking-wider">QUANTUM EVOLUTION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;