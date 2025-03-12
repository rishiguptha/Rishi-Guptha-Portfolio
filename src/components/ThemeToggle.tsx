
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary/80 hover:bg-secondary/60 focus-ring transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative">
        {theme === 'light' ? (
          <Moon className="h-5 w-5 text-foreground/80" />
        ) : (
          <Sun className="h-5 w-5 text-foreground/80" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
