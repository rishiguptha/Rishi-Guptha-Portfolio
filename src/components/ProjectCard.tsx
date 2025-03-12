
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

  return (
    <div 
      className="group relative overflow-hidden rounded-xl h-full glass-panel transition-all duration-500 hover:shadow-lg"
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
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 ${isHovered ? 'translate-y-0' : 'translate-y-8'} transition-transform duration-300`}>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-transform duration-200 hover:scale-105 active:scale-95">
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
