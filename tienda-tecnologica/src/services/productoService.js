import api from './api';

// Obtener todos los productos (con filtros opcionales)
export const obtenerProductos = async (filtros = {}) => {
  const params = new URLSearchParams();
  if (filtros.categoria) params.append('categoria', filtros.categoria);
  if (filtros.buscar) params.append('buscar', filtros.buscar);

  const response = await api.get(`/productos?${params.toString()}`);
  return response.data;
};

// Obtener un producto por ID
export const obtenerProductoPorId = async (id) => {
  const response = await api.get(`/productos/${id}`);
  return response.data;
};

// Crear producto
export const crearProducto = async (producto) => {
  const response = await api.post('/productos', producto);
  return response.data;
};

// Actualizar producto
export const actualizarProducto = async (id, datos) => {
  const response = await api.put(`/productos/${id}`, datos);
  return response.data;
};

// Eliminar producto
export const eliminarProducto = async (id) => {
  const response = await api.delete(`/productos/${id}`);
  return response.data;
};