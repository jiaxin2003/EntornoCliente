import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Container, Box, Typography, Grid } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

export default function PortfolioPage() {
  const { isDarkMode, bgColor, textColor } = useTheme();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData.projects);
  }, []);

  return (
    <Box sx={{ bgcolor: bgColor, color: textColor, transition: 'all 0.3s ease', minHeight: '80vh', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'center' }}>
          Mis Proyectos
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: isDarkMode ? '#aaa' : '#666',
            maxWidth: 600,
            mx: 'auto'
          }}
        >
          Aquí están algunos de los proyectos en los que he trabajado durante mi formación y experiencia profesional.
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                github={project.github}
                demo={project.demo}
                details={project.details}
              />
            </Grid>
          ))}
        </Grid>

        {projects.length === 0 && (
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: isDarkMode ? '#999' : '#999',
              py: 4
            }}
          >
            No hay proyectos disponibles en este momento.
          </Typography>
        )}
      </Container>
    </Box>
  );
}
