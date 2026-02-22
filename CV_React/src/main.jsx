import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ThemeProvider as CustomThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import ExperiencePage from './pages/ExperiencePage';

function AppContent() {
  const theme = useTheme();

  const muiTheme = createTheme({
    palette: {
      mode: theme.isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#3b82f6',
      },
      secondary: {
        main: '#8b5cf6',
      },
      background: {
        default: theme.bgColor,
        paper: theme.cardBg,
      },
      text: {
        primary: theme.textColor,
      },
    },
    typography: {
      fontFamily: '"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: theme.bgColor,
          color: theme.textColor,
          transition: 'all 0.3s ease'
        }}
      >
        <Header onThemeToggle={theme.toggleTheme} />
        <Nav />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomThemeProvider>
        <AppContent />
      </CustomThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
