import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Chatbot Builder',
      description: 'AI-based platform coach and chatbot tools with real-time guidance, integrations, and modular architecture.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App',
      technologies: ['React', 'Redux', 'TypeScript', 'JavaScript', 'Node.js', 'MongoDB', 'Express', 'Redis', 'React Query'],
      liveUrl: 'https://chatbotbuilder.net/',
      githubUrl: 'https://github.com/Sarabjot01',
    },
    {
      id: 2,
      title: 'OmniEngage',
      description: 'AI-powered sales agent for content generation, outreach, and dynamic model management.',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App',
      technologies: ['React', 'Redux', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Redis', 'React Query'],
      liveUrl: 'https://omniengage.co/ai-sdr-sales-agent',
      githubUrl: 'https://github.com/Sarabjot01',
    },
    {
      id: 3,
      title: 'News Feedly',
      description: 'A modern news aggregator web application that provides personalized news feeds, real-time updates, and a user-friendly interface.',
      image: 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App',
      technologies: ['Node js', 'MongoDB', 'Express', 'JavaScript'],
      liveUrl: 'https://inshorts.com/en/read',
      githubUrl: 'https://github.com/Sarabjot01',
    },
    {
      id: 4,
      title: 'Voxillo',
      description: 'Voice Integrated Intelligent chatbot interface that provides real-time assistance, personalized responses, and seamless user interactions.',
      image: 'https://images.pexels.com/photos/15940006/pexels-photo-15940006.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'AI/ML',
      technologies: ['PineCone', 'React', 'Twilio', 'Node.js' ,'Ngrok', 'OpenAI'],
      liveUrl: '',
      githubUrl: 'https://github.com/Sarabjot01/Project-backend',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with modern design, smooth animations, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Design',
      technologies: ['React', 'Tailwind', 'Framer Motion'],
      liveUrl: 'https://sarabjot01.netlify.app/',
      githubUrl: 'https://github.com/Sarabjot01/Portfolio',
    },
    {
      id: 6,
      title: 'Autonomous Crop Monitoring and Disease Detection',
      description: 'Crop monitoring and disease detection system, leveraging advanced algorithms for data analysis and gaining profound expertise in applying AI to agricultural technology.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'AI/ML',
      technologies: ['Deep Learning', 'Python', 'UAVs', 'ML'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Sarabjot01',
    },
  ];

  const categories = ['All', 'Web App', 'Mobile App', 'AI/ML', 'Design'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Apple-style Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Apple-style Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Apple-style Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Apple-style Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-2 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed font-normal text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-50 text-gray-600 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
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