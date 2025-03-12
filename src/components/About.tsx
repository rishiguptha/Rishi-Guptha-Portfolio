
import React from 'react';
import SectionTitle from './SectionTitle';
import ProfileImage from './ProfileImage';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SKILLS } from '@/lib/constants';

const About: React.FC = () => {
  const contentRef = useScrollReveal();
  const skillsRef = useScrollReveal();

  return (
    <section id="about" className="section-container">
      <SectionTitle title="ABOUT ME" subtitle="My Introduction" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1" ref={contentRef}>
          <h3 className="text-2xl font-bold mb-4">Frontend Developer & UX Designer</h3>
          <p className="text-muted-foreground mb-6">
            I specialize in building exceptional digital experiences with a focus on responsive design and clean, efficient code. With a passion for creating beautiful, functional websites, I deliver high-quality solutions that meet business needs while delighting users.
          </p>
          
          <div className="mb-8" ref={skillsRef}>
            <h4 className="text-lg font-medium mb-3">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-transform duration-200 hover:scale-105 active:scale-95 focus-ring"
          >
            Let's Talk
          </a>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center animate-float">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};

export default About;
