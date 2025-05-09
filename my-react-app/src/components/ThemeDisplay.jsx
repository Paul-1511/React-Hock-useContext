import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeDisplay = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`theme-display ${isDarkMode ? 'dark' : 'light'}`}>
      <h3>Tema actual: {isDarkMode ? 'Oscuro 🌙' : 'Claro 🌞'}</h3>
      <p>Este componente muestra el tema actual sin recibir props.</p>
    </div>
  );
};

export default ThemeDisplay;