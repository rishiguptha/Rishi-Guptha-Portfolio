
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { useTheme } from '@/hooks/useTheme';

const Index = () => {
  // Initialize theme
  useTheme();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-20">
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 text-center border-t border-border/50">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
