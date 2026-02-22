import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const value = {
    isDarkMode,
    toggleTheme,
    bgColor: isDarkMode ? '#121212' : '#ffffff',
    textColor: isDarkMode ? '#ffffff' : '#000000',
    cardBg: isDarkMode ? '#1e1e1e' : '#f5f5f5',
    borderColor: isDarkMode ? '#333333' : '#e0e0e0'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
}
