import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import ThemeDisplay from './components/ThemeDisplay';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>Demo de useContext - Tema Claro/Oscuro</h1>
        <ThemeToggle />
        <ThemeDisplay />
        
        <div className="content">
          <p>Este contenido también se ve afectado por el tema.</p>
          <p>El contexto permite compartir el estado del tema sin pasar props.</p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;