import React, { useEffect, useRef } from 'react';
import { ChevronDown, Download, Mail, Zap, Code, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const matrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Matrix rain effect
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Matrix Rain Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20"
        style={{ zIndex: 1 }}
      />

      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className={`w-2 h-2 rotate-45 ${
              i % 3 === 0 ? 'bg-cyan-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-pink-400'
            } opacity-60`}></div>
          </div>
        ))}
      </div>

      {/* Holographic Scanlines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-pulse" style={{ zIndex: 3 }}></div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Holographic Profile Container */}
        <div className="mb-12 relative">
          {/* Outer Holographic Ring */}
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full border border-purple-400/30 animate-spin-reverse"></div>
            <div className="absolute inset-4 rounded-full border border-pink-400/20 animate-pulse"></div>
            
            {/* Profile Image Container */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-600 via-purple-600 to-pink-600 flex items-center justify-center text-6xl font-bold text-white relative">
                SS
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center animate-bounce">
              <Code className="text-white" size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-bounce delay-1000">
              <Cpu className="text-white" size={24} />
            </div>
            <div className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center animate-bounce delay-500">
              <Zap className="text-white" size={20} />
            </div>
          </div>
        </div>

        {/* Glitch Text Effect */}
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 glitch-text" data-text="Sarabjot Singh">
              Sarabjot Singh
            </span>
          </h1>
          
          {/* Animated Role Text */}
          <div className="text-2xl md:text-4xl text-gray-300 mb-8 relative">
            <div className="typing-container">
              <span className="typing-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                FULL STACK DEVELOPER
              </span>
              <span className="cursor-blink">|</span>
            </div>
          </div>
          
          {/* Holographic Description */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 holographic-text">
              Architecting the future of digital experiences through cutting-edge technology, 
              immersive design, and revolutionary code that transcends conventional boundaries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {['NEURAL NETWORKS', 'QUANTUM COMPUTING', 'BLOCKCHAIN', 'AR/VR', 'AI/ML'].map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Futuristic CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-none text-white font-bold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 cyberpunk-button"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Zap size={20} />
              EXPLORE MATRIX
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-10 py-5 border-2 border-cyan-400 rounded-none text-cyan-400 font-bold text-lg transition-all duration-500 hover:bg-cyan-400 hover:text-black hover:scale-110 cyberpunk-button-outline"
          >
            <Mail className="inline-block mr-3" size={20} />
            INITIATE CONTACT
            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Holographic Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
          {[
            { value: '50+', label: 'PROJECTS', color: 'from-cyan-400 to-blue-400' },
            { value: '5+', label: 'YEARS', color: 'from-purple-400 to-pink-400' },
            { value: '100+', label: 'CLIENTS', color: 'from-green-400 to-cyan-400' }
          ].map((stat, i) => (
            <div key={i} className="text-center relative group">
              <div className="relative p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 cyberpunk-card">
                <div className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2 counter-animation`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium text-sm tracking-wider">{stat.label}</div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Resume with Holographic Effect */}
        <div className="mb-12">
          <button className="group relative inline-flex items-center px-8 py-4 bg-black/70 backdrop-blur-sm border-2 border-gray-700 hover:border-cyan-400 rounded-none text-gray-300 hover:text-white transition-all duration-500 hover:scale-105 cyberpunk-download">
            <Download className="mr-3 group-hover:animate-bounce" size={20} />
            <span className="font-bold tracking-wider">DOWNLOAD NEURAL PROFILE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="relative group"
          >
            <div className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
            </div>
            <ChevronDown className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300 mt-2 animate-bounce" size={24} />
          </button>
        </div>
      </div>

      {/* Holographic Overlay Effects */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 4 }}>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse delay-1500"></div>
      </div>
    </section>
  );
};

export default Hero;