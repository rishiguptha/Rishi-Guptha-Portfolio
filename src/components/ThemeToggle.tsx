
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary hover:bg-secondary/80 focus-ring transition-all duration-500 hover:scale-110 active:scale-90 relative overflow-hidden"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative z-10">
        {theme === 'light' ? (
          <Moon className="h-5 w-5 text-foreground" />
        ) : (
          <Sun className="h-5 w-5 text-foreground" />
        )}
      </div>
      <span className={`absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent transition-opacity duration-300 ${theme === 'light' ? 'opacity-0' : 'opacity-100'}`}></span>
    </button>
  );
};

export default ThemeToggle;
