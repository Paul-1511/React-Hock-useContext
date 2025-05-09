import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
    >
      {isDarkMode ? '🌞 Cambiar a claro' : '🌙 Cambiar a oscuro'}
    </button>
  );
};

export default ThemeToggle;