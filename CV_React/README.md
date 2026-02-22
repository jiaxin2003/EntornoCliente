# CV React - Portfolio Personal

Portafolio profesional desarrollado con React, React Router y Material-UI. Incluye un CV interactivo con modo claro/oscuro, proyectos dinámicos y experiencia académica y profesional.

## 📋 Contenido del Proyecto

### Carpetas Principales

- **`src/components/`** - Componentes reutilizables (Header, Nav, Footer, ProjectCard, ExperienceItem)
- **`src/pages/`** - Páginas principales (LandingPage, PortfolioPage, ExperiencePage)
- **`src/data/`** - Archivos JSON con datos (projects.json)
- **`src/context/`** - Context API para manejo global de temas
- **`public/images/`** - Carpeta para imágenes del portafolio

### Características Principales

✅ **Navegación Responsive** - React Router con navegación intuitiva
✅ **Sistema de Tema** - Toggle claro/oscuro con Context API
✅ **Componentes con Props** - ProjectCard, ExperienceItem reutilizables
✅ **Interactividad** - Expansión de detalles en ProjectCard, hover effects
✅ **Datos Dinámicos** - Proyectos cargados desde JSON
✅ **Material-UI** - 10+ componentes de UI profesionales
✅ **Responsive Design** - Adaptado para móvil, tablet y desktop

## 🚀 Instalación y Uso

### Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

### Pasos de Instalación

```bash
# 1. Navegar a la carpeta del proyecto
cd CV_React

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abre http://localhost:3000 en tu navegador
```

### Compilación para Producción

```bash
npm run build
# Los archivos compilados estarán en la carpeta 'dist/'
```

## 📁 Estructura de Carpetas

```
CV_React/
├── public/
│   └── images/              # Aquí van tus imágenes
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Encabezado con toggle de tema
│   │   ├── Nav.jsx          # Navegación principal
│   │   ├── Footer.jsx       # Pie de página
│   │   ├── ProjectCard.jsx  # Tarjeta de proyecto
│   │   └── ExperienceItem.jsx # Item de experiencia
│   ├── pages/
│   │   ├── LandingPage.jsx  # Página de inicio
│   │   ├── PortfolioPage.jsx # Página de proyectos
│   │   └── ExperiencePage.jsx # Página de experiencia
│   ├── data/
│   │   └── projects.json    # Datos de proyectos
│   ├── context/
│   │   └── ThemeContext.jsx # Context para tema
│   └── main.jsx             # Punto de entrada
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Personalización

### Agregar Imágenes

1. Coloca tus imágenes en `public/images/`
2. Actualiza las rutas en `src/data/projects.json`

### Modificar Datos

Edita `src/data/projects.json` para agregar/editar proyectos:

```json
{
  "id": 1,
  "title": "Tu Proyecto",
  "description": "Descripción del proyecto",
  "image": "/images/proyecto.jpg",
  "tags": ["React", "CSS"],
  "github": "https://github.com",
  "demo": "https://demo.com",
  "details": "Detalles completos"
}
```

### Modificar Contenido del CV

- **LandingPage.jsx** - Información personal, habilidades
- **ExperiencePage.jsx** - Educación y experiencia laboral
- **PortfolioPage.jsx** - Proyectos (cargados desde JSON)
- **Footer.jsx** - Enlaces a redes sociales

## 🌐 Despliegue en GitHub Pages

```bash
# 1. Crear repositorio publico en GitHub
git init
git add .
git commit -m "Proyecto CV React"
git remote add origin https://github.com/tu-usuario/CV_React.git
git push -u origin main

# 2. Actualizar vite.config.js
# Agregar: base: '/CV_React/',

# 3. Compilar y desplegar
npm run build
# Usar GitHub Pages para deployar la carpeta 'dist/'
```

## 📱 Responsividad

El proyecto es completamente responsive:
- **Desktop:** Diseño completo con 3 columnas
- **Tablet:** Diseño adaptado con 2 columnas
- **Móvil:** Diseño de 1 columna con navegación vertical

## 🔧 Tecnologías Utilizadas

- **React 18.2** - Librería UI
- **React Router 6.20** - Enrutamiento
- **Material-UI 5.14** - Componentes UI
- **Vite** - Build tool
- **Context API** - Gestión de estado (tema)

## 📝 Componentes Utilizados de Material-UI

- AppBar, Toolbar
- Card, CardContent, CardMedia
- Button, IconButton
- Grid, Stack, Box, Container
- Typography, Chip
- Tooltip, Collapse
- Icons (múltiples)

## ✨ Características Interactivas

1. **ProjectCard** - Click en "Más" expande/colapsa detalles
2. **Hover Effects** - Tarjetas se elevan al pasar el ratón
3. **Toggle Tema** - Switch claro/oscuro en Header
4. **Links Activos** - Nav resalta la página actual
5. **Animaciones** - Transiciones suaves en todos los elementos

## 🎯 Requisitos Completados

- ✅ 2.2 Proyecto con carpetas (components, pages, data)
- ✅ 2.3 Componentes de layout (Header, Nav, Footer)
- ✅ 2.4 Navegación con React Router (3 páginas + redireccionamiento)
- ✅ 2.5 Material-UI instalado y 10+ componentes usados
- ✅ 2.6 Componentes con props (ProjectCard, ExperienceItem)
- ✅ 2.7 Interactividad (expansión de detalles, hover, tema dinámico)
- ✅ 2.8 Datos JSON dinámicos + Modo claro/oscuro

## 📧 Contacto

Para preguntas o sugerencias, contacta a través de:
- GitHub
- LinkedIn
- Email

---

**Última actualización:** Febrero 2024
