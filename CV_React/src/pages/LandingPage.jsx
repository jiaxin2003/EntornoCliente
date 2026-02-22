import React from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  Container,
  Box,
  Typography,
  Stack,
  Button,
  Card,
  Grid,
  Chip
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';

export default function LandingPage() {
  const { isDarkMode, cardBg, textColor, bgColor } = useTheme();

  const skills = [
    { icon: <CodeIcon />, name: 'Desarrollo Web', desc: 'HTML, CSS, JavaScript, React, Node.js' },
    { icon: <StorageIcon />, name: 'Bases de Datos', desc: 'SQL, MongoDB, MySQL' },
    { icon: <SecurityIcon />, name: 'Redes', desc: 'TCP/IP, Configuración de servidores' }
  ];

  return (
    <Box sx={{ bgcolor: bgColor, color: textColor, transition: 'all 0.3s ease' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: isDarkMode
            ? 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: '#ffffff',
          py: 8,
          textAlign: 'center',
          mb: 6
        }}
      >
        <Container maxWidth="md">
          {/* Avatar placeholder */}
          <Box
            sx={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              backgroundColor: isDarkMode ? '#333' : 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              fontSize: '4rem',
              border: '3px solid #fff'
            }}
          >
            👨‍💻
          </Box>

          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
            Jiaxin Zhang
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
            Desarrollador Web & Especialista en Infraestructura
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, maxWidth: 600, mx: 'auto', lineHeight: 1.8 }}>
            Profesional con Grado Medio en Sistemas Microinformáticos en Redes y Grado Superior en Desarrollo de Aplicaciones Web. Apasionado por crear soluciones tecnológicas innovadoras.
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3, flexWrap: 'wrap', gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#fff',
                color: '#667eea',
                '&:hover': { backgroundColor: '#f0f0f0' }
              }}
              startIcon={<DownloadIcon />}
            >
              Descargar CV
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#fff',
                color: '#fff',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
              startIcon={<GitHubIcon />}
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#fff',
                color: '#fff',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
              startIcon={<LinkedInIcon />}
            >
              LinkedIn
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Skills Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Habilidades Destacadas
        </Typography>
        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: cardBg,
                  p: 3,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: isDarkMode ? '0 8px 16px rgba(255,255,255,0.1)' : '0 8px 16px rgba(0,0,0,0.2)'
                  }
                }}
              >
                <Box sx={{ fontSize: '3rem', mb: 2 }}>
                  {skill.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {skill.name}
                </Typography>
                <Typography variant="body2" color={isDarkMode ? '#aaa' : '#666'}>
                  {skill.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Section */}
      <Container maxWidth="md" sx={{ mb: 8 }}>
        <Card sx={{ backgroundColor: cardBg, p: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Acerca de mí
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2, color: isDarkMode ? '#aaa' : '#555' }}>
            Soy un profesional en desarrollo web y administración de sistemas con formación especializada en ambas disciplinas. 
            Mi objetivo es crear soluciones tecnológicas eficientes que mejoren la experiencia de los usuarios.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: isDarkMode ? '#aaa' : '#555' }}>
            Poseo experiencia práctica en el desarrollo de aplicaciones web modernas, configuración de redes y administración de servidores. 
            Soy un aprendiz constante que busca mantenerme actualizado con las últimas tecnologías del sector.
          </Typography>
        </Card>
      </Container>
    </Box>
  );
}
