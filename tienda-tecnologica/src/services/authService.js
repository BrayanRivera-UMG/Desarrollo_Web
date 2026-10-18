import api from './api';

// Registrar usuario
export const registrarUsuario = async (datos) => {
  const response = await api.post('/auth/register', datos);
  return response.data;
};

// Login
export const loginUsuario = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

// Obtener perfil del usuario autenticado
export const obtenerPerfil = async () => {
  const response = await api.get('/auth/perfil');
  return response.data;
};