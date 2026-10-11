// URL base del backend (sin /api)
const BACKEND_URL = (process.env.REACT_APP_API_URL || 'http://localhost:4000/api')
  .replace(/\/api\/?$/, ''); // Eliminar /api al final si existe

export const obtenerImagenUrl = (imagen) => {
  if (!imagen) {
    return 'https://via.placeholder.com/300x200?text=Sin+Imagen';
  }

  // Si ya es una URL completa
  if (imagen.startsWith('http://') || imagen.startsWith('https://')) {
    return imagen;
  }

  // Si empieza con ./imagenes/ o /imagenes/ o solo el nombre del archivo
  const nombreArchivo = imagen
    .replace(/^\.?\/?imagenes\//, '')
    .replace(/^\.?\//, '');

  return `${BACKEND_URL}/imagenes/${nombreArchivo}`;
};