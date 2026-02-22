import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Stack,
  Box,
  Typography,
  Collapse
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function ProjectCard({ title, description, image, tags, github, demo, details }) {
  const { isDarkMode, cardBg, textColor } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        backgroundColor: cardBg,
        color: textColor,
        transition: 'all 0.3s ease',
        transform: 'translateY(0)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: isDarkMode ? '0 8px 16px rgba(255,255,255,0.1)' : '0 8px 16px rgba(0,0,0,0.2)'
        }
      }}
    >
      <CardMedia
        component="div"
        sx={{
          height: 200,
          backgroundColor: isDarkMode ? '#333' : '#e0e0e0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: isDarkMode ? '#999' : '#666',
          fontSize: '3rem'
        }}
      >
        📁
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color={isDarkMode ? '#aaa' : '#666'} sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              variant="outlined"
              size="small"
              sx={{
                borderColor: isDarkMode ? '#666' : '#ddd',
                color: isDarkMode ? '#aaa' : '#333'
              }}
            />
          ))}
        </Stack>
        <Collapse in={expanded} timeout="auto">
          <Typography variant="body2" color={isDarkMode ? '#999' : '#555'} sx={{ mt: 2 }}>
            <strong>Detalles:</strong> {details}
          </Typography>
        </Collapse>
      </CardContent>
      <CardActions sx={{ pt: 0 }}>
        <Button
          size="small"
          onClick={handleExpandClick}
          startIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          {expanded ? 'Menos' : 'Más'}
        </Button>
        <Button size="small" href={github} target="_blank">
          GitHub
        </Button>
        <Button size="small" href={demo} target="_blank">
          Demo
        </Button>
      </CardActions>
    </Card>
  );
}
