import React, { useEffect, useRef } from 'react';
import { Code, Palette, Zap, Users, Brain, Rocket, Shield, Globe } from 'lucide-react';

const About: React.FC = () => {
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

  const features = [
    {
      icon: Brain,
      title: 'Neural Architecture',
      description: 'Designing intelligent systems that learn, adapt, and evolve with cutting-edge AI integration.',
      color: 'from-cyan-500 to-blue-500',
      delay: '0s'
    },
    {
      icon: Rocket,
      title: 'Quantum Performance',
      description: 'Optimizing applications to achieve unprecedented speed and efficiency through advanced algorithms.',
      color: 'from-purple-500 to-pink-500',
      delay: '0.2s'
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Implementing fortress-level security protocols to protect digital assets and user privacy.',
      color: 'from-green-500 to-cyan-500',
      delay: '0.4s'
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Building scalable solutions that connect users across the digital multiverse seamlessly.',
      color: 'from-orange-500 to-red-500',
      delay: '0.6s'
    },
  ];

  const stats = [
    { number: '99.9%', label: 'UPTIME GUARANTEE', icon: Shield },
    { number: '< 0.1s', label: 'RESPONSE TIME', icon: Zap },
    { number: '256-bit', label: 'ENCRYPTION', icon: Code },
    { number: '24/7', label: 'NEURAL SUPPORT', icon: Brain }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] animate-grid-move"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
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
          <h2 className="text-5xl md:text-7xl font-bold mb-8 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 glitch-text" data-text="NEURAL PROFILE">
              NEURAL PROFILE
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 animate-pulse"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Interfacing between human creativity and machine precision to architect the future of digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 cyber-glow">
                CYBERPUNK ARCHITECT
              </h3>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p className="relative pl-6">
                  <span className="absolute left-0 top-0 text-cyan-400 text-2xl">▶</span>
                  Pioneering the convergence of artificial intelligence and human intuition to create 
                  digital experiences that transcend conventional boundaries and redefine user interaction.
                </p>
                <p className="relative pl-6">
                  <span className="absolute left-0 top-0 text-purple-400 text-2xl">▶</span>
                  My neural networks span across quantum computing, blockchain architecture, and 
                  immersive reality systems, constantly evolving to stay ahead of the technological curve.
                </p>
                <p className="relative pl-6">
                  <span className="absolute left-0 top-0 text-pink-400 text-2xl">▶</span>
                  When not interfacing with code matrices, I'm exploring the metaverse, contributing to 
                  open-source consciousness, and mentoring the next generation of digital architects.
                </p>
              </div>
            </div>

            {/* Holographic Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group p-4 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 cyberpunk-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="text-cyan-400 group-hover:animate-pulse" size={20} />
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      {stat.number}
                    </span>
                  </div>
                  <div className="text-gray-400 text-sm font-medium tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-cyan-400/30 overflow-hidden">
              {/* Holographic Display */}
              <div className="absolute inset-4 border border-cyan-400/20 rounded-xl">
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">
                    5+
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <div className="text-cyan-400 font-bold text-lg mb-2">YEARS IN THE MATRIX</div>
                    <div className="text-gray-400 text-sm">Continuously evolving neural pathways</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-30 animate-bounce"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 animate-bounce delay-1000"></div>
              <div className="absolute top-1/2 left-4 w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full opacity-30 animate-bounce delay-500"></div>
              
              {/* Scanning Lines */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-scan"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 cyberpunk-card"
              style={{ animationDelay: feature.delay }}
            >
              {/* Holographic Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:animate-pulse mb-4`}>
                  <feature.icon className="text-white" size={32} />
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h4>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Neural Network Visualization */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">NEURAL NETWORK STATUS</h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {['ONLINE', 'PROCESSING', 'OPTIMIZING', 'EVOLVING'].map((status, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full animate-pulse ${
                  i === 0 ? 'bg-green-400' : i === 1 ? 'bg-cyan-400' : i === 2 ? 'bg-purple-400' : 'bg-pink-400'
                }`} style={{ animationDelay: `${i * 0.5}s` }}></div>
                <span className="text-gray-300 font-mono text-sm tracking-wider">{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;