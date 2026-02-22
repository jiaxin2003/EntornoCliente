import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Box, Container, Stack, Link, Typography, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const { isDarkMode, bgColor, textColor, borderColor } = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: isDarkMode ? '#121212' : '#f9f9f9',
        borderTop: `1px solid ${borderColor}`,
        mt: 8,
        py: 4,
        color: textColor
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Tooltip title="GitHub">
              <IconButton
                component="a"
                href="https://github.com"
                target="_blank"
                sx={{ color: textColor, '&:hover': { color: '#3b82f6' } }}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                component="a"
                href="https://linkedin.com"
                target="_blank"
                sx={{ color: textColor, '&:hover': { color: '#3b82f6' } }}
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Email">
              <IconButton
                component="a"
                href="mailto:tu@email.com"
                sx={{ color: textColor, '&:hover': { color: '#3b82f6' } }}
              >
                <EmailIcon />
              </IconButton>
            </Tooltip>
          </Stack>
          <Typography
            align="center"
            color={isDarkMode ? '#999' : '#666'}
            sx={{ fontSize: '0.9rem' }}
          >
            © 2026 Jiaxin Zhang. Todos los derechos reservados.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
