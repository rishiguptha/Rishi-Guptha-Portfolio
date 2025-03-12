
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
      <div className="inline-block">
        <div className="px-3 py-1 mb-2 text-xs font-medium tracking-wider text-primary-foreground bg-primary rounded-full opacity-90">
          {title}
        </div>
      </div>
      {subtitle && <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{subtitle}</h2>}
    </div>
  );
};

export default SectionTitle;
