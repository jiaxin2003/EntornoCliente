import React from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Chip,
  Box
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

export default function ExperienceItem({
  role,
  place,
  dates,
  details,
  type = 'education'
}) {
  const { isDarkMode, cardBg, textColor, borderColor } = useTheme();
  const Icon = type === 'education' ? SchoolIcon : WorkIcon;

  return (
    <Card
      sx={{
        backgroundColor: cardBg,
        color: textColor,
        borderLeft: `4px solid ${isDarkMode ? '#6366f1' : '#3b82f6'}`,
        mb: 2,
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: isDarkMode ? '0 8px 16px rgba(255,255,255,0.1)' : '0 8px 16px rgba(0,0,0,0.1)'
        }
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <Icon sx={{ fontSize: '2rem', color: isDarkMode ? '#6366f1' : '#3b82f6', mt: 0.5 }} />
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {role}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: isDarkMode ? '#aaa' : '#666', mb: 1 }}
                >
                  {place}
                </Typography>
              </Box>
              <Chip
                label={dates}
                size="small"
                sx={{
                  backgroundColor: isDarkMode ? '#333' : '#f0f0f0',
                  color: isDarkMode ? '#aaa' : '#666'
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{ color: isDarkMode ? '#999' : '#555', lineHeight: 1.6 }}
            >
              {details}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
