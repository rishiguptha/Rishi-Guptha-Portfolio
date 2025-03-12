
import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, imageUrl }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div 
      className="group relative overflow-hidden rounded-xl h-full glass-panel transition-all duration-500 hover:shadow-lg card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden">
        <div className={`absolute inset-0 bg-secondary animate-shimmer bg-[length:400%_100%] ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} style={{ backgroundImage: 'linear-gradient(to right, transparent 0%, #f0f0f0 50%, transparent 100%)' }} />
        <img 
          src={imageUrl} 
          alt={title} 
          className={`w-full h-full object-cover transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-glow">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={tech} 
              className={`px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 cursor-pointer ${activeIndex === index ? 'bg-primary text-primary-foreground scale-110' : 'bg-secondary text-secondary-foreground'}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 ${isHovered ? 'translate-y-0' : 'translate-y-8'} transition-transform duration-300`}>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-110 active:scale-90 shadow-lg hover:shadow-xl">
          View Project
        </button>
      </div>
      
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className={`absolute top-0 right-0 w-8 h-8 transform rotate-45 translate-y-[-50%] translate-x-[50%] bg-primary transition-all duration-300 ${isHovered ? 'scale-125' : 'scale-100'}`}></div>
      </div>
    </div>
  );
};

export default ProjectCard;
