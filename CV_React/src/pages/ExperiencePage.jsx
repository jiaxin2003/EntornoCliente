import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Container, Box, Typography, Stack, Card, CardContent } from '@mui/material';
import ExperienceItem from '../components/ExperienceItem';

export default function ExperiencePage() {
  const { isDarkMode, bgColor, textColor, cardBg } = useTheme();

  const education = [
    {
      role: 'Grado Superior en Desarrollo de Aplicaciones Web',
      place: 'Instituto Técnico de Informática',
      dates: '2021 - 2023',
      details: 'Formación especializada en desarrollo web con tecnologías modernas como JavaScript, React, Node.js, bases de datos SQL y MongoDB. Realización de proyectos prácticos en equipo con metodologías ágiles.',
      type: 'education'
    },
    {
      role: 'Grado Medio en Sistemas Microinformáticos en Redes',
      place: 'Instituto Técnico de Redes',
      dates: '2019 - 2021',
      details: 'Formación en hardware, redes TCP/IP, administración de sistemas operativos, configuración de servidores y mantenimiento informático. Prácticas en empresa en el departamento de IT.',
      type: 'education'
    }
  ];

  const experience = [
    {
      role: 'Desarrollador Web Junior',
      place: 'TechStart Solutions',
      dates: '2023 - Presente',
      details: 'Desarrollo de aplicaciones web usando React y Node.js. Implementación de funcionalidades interactivas, integración de APIs y optimización de rendimiento. Trabajo colaborativo en equipo con Git y Agile.',
      type: 'work'
    },
    {
      role: 'Técnico de Soporte Informático',
      place: 'CloudNet Systems',
      dates: '2022 - 2023',
      details: 'Soporte técnico a usuarios finales, mantenimiento de servidores, configuración de redes y resolución de problemas de hardware y software. Administración de Active Directory.',
      type: 'work'
    },
    {
      role: 'Prácticas en Administración de Sistemas',
      place: 'DataCore Networks',
      dates: 'Junio - Septiembre 2021',
      details: 'Experiencia práctica en configuración de servidores, instalación de sistemas operativos, mantenimiento de infraestructura IT y atención al usuario.',
      type: 'work'
    }
  ];

  return (
    <Box sx={{ bgcolor: bgColor, color: textColor, transition: 'all 0.3s ease', minHeight: '80vh', py: 4 }}>
      <Container maxWidth="md">
        {/* Education Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
            🎓 Formación Académica
          </Typography>
          <Stack spacing={2}>
            {education.map((item, index) => (
              <ExperienceItem
                key={index}
                role={item.role}
                place={item.place}
                dates={item.dates}
                details={item.details}
                type={item.type}
              />
            ))}
          </Stack>
        </Box>

        {/* Experience Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
            💼 Experiencia Profesional
          </Typography>
          <Stack spacing={2}>
            {experience.map((item, index) => (
              <ExperienceItem
                key={index}
                role={item.role}
                place={item.place}
                dates={item.dates}
                details={item.details}
                type={item.type}
              />
            ))}
          </Stack>
        </Box>

        {/* Skills Summary */}
        <Card sx={{ backgroundColor: cardBg, p: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Competencias Técnicas
          </Typography>
          <Stack spacing={2}>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Frontend:
              </Typography>
              <Typography variant="body2" color={isDarkMode ? '#aaa' : '#666'}>
                HTML5, CSS3, JavaScript ES6+, React, Responsive Design
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Backend:
              </Typography>
              <Typography variant="body2" color={isDarkMode ? '#aaa' : '#666'}>
                Node.js, 
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Bases de Datos:
              </Typography>
              <Typography variant="body2" color={isDarkMode ? '#aaa' : '#666'}>
                MySQL, PostgreSQL, MongoDB
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Herramientas y Otros:
              </Typography>
              <Typography variant="body2" color={isDarkMode ? '#aaa' : '#666'}>
                Git, GitHub, VS Code, Docker, Linux, Administración de servidores, TCP/IP
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
}
