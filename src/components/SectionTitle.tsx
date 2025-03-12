
import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight relative inline-block">
        {subtitle || title}
        <span className="absolute -bottom-2 left-1/2 w-1/4 h-1 bg-gradient-to-r from-primary/80 to-primary/30 transform -translate-x-1/2 rounded-full"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;
