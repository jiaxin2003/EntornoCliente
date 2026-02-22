import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Box, Container, AppBar, Toolbar, Stack, IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Header({ onThemeToggle }) {
  const { isDarkMode, bgColor, textColor } = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
        color: textColor,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        mb: 4
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
          <Box
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #3b82f6 30%, #8b5cf6 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Jiaxin CV
          </Box>
          <Tooltip title={isDarkMode ? 'Modo claro' : 'Modo oscuro'}>
            <IconButton
              onClick={onThemeToggle}
              sx={{
                color: textColor,
                '&:hover': {
                  backgroundColor: isDarkMode ? '#333' : '#f0f0f0'
                }
              }}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
