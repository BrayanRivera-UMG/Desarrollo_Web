# Hoja de Trabajo 4 - Excursión al Lago de Atitlán

Migración de un sitio web estático de excursiones turísticas a un proyecto
modular basado en **React** con **Vite**, aplicando componentes reutilizables
y manejo de estado para la interactividad.

## Enlace de Visualizacion

Sitio desplegado en Netlify:

## Descripción de los componentes

Todos los componentes viven en `src/components/` y son reutilizables e independientes:

| Componente | Descripción |
|---|---|
| `Header.jsx` | Encabezado principal con el título y mensaje de bienvenida. |
| `Menu.jsx` | Tabla de navegación con enlaces a cada sección del sitio. |
| `Descripcion.jsx` | Información descriptiva del Lago de Atitlán. |
| `Galeria.jsx` | Cuadrícula de imágenes interactiva que abre un modal con la imagen ampliada y su título. |
| `Itinerario.jsx` | Tabla con las fechas, horas, actividades y lugares de la excursión. |
| `Cotizador.jsx` | Calculadora de presupuesto en tiempo real: número de asistentes, tipo de paquete y servicios adicionales. |
| `Actividades.jsx` | Filtro dinámico de actividades mediante un campo de búsqueda. |
| `Reservacion.jsx` | Formulario de reservación con validación y mensaje de confirmación personalizado. |
| `Testimonios.jsx` | Rotación aleatoria de reseñas de visitantes con un botón "Ver otra opinión". |
| `Footer.jsx` | Pie de página con los derechos reservados. |

## Tecnologías usadas

- React 18
- Vite
- CSS3 (estilos migrados del sitio original)

## Estudiante

- **Nombre**: Brayan Kenet Rivera Quinilla
- **Carnet**: 9490 - 23 - 2835
- **Curso**: Desarrollo Web