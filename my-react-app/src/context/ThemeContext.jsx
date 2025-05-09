import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efecto para aplicar el data-theme al elemento raíz del documento
  useEffect(() => {
    // Obtener el elemento raíz (en este caso, todo el documento)
    const root = document.documentElement;
    // Aplicar el atributo data-theme según el estado actual
    if (isDarkMode) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]); // Este efecto se ejecuta cada vez que cambia isDarkMode

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};