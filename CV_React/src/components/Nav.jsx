import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Box, Container, Button, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

export default function Nav() {
  const location = useLocation();
  const { isDarkMode, borderColor, textColor } = useTheme();

  const navItems = [
    { path: '/', label: 'Inicio', icon: <HomeIcon sx={{ mr: 1 }} /> },
    { path: '/portfolio', label: 'Proyectos', icon: <FolderIcon sx={{ mr: 1 }} /> },
    { path: '/experience', label: 'Experiencia', icon: <WorkHistoryIcon sx={{ mr: 1 }} /> }
  ];

  return (
    <Box
      component="nav"
      sx={{
        backgroundColor: isDarkMode ? '#121212' : '#f9f9f9',
        borderBottom: `1px solid ${borderColor}`,
        mb: 4,
        sticky: 0,
        top: 0,
        zIndex: 10
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          spacing={2}
          sx={{
            py: 2,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color: location.pathname === item.path ? '#3b82f6' : textColor,
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                borderBottom: location.pathname === item.path ? '2px solid #3b82f6' : 'none',
                pb: location.pathname === item.path ? 0.5 : 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#3b82f6',
                  backgroundColor: isDarkMode ? '#1e1e1e' : '#f0f0f0'
                }
              }}
              startIcon={item.icon}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
