import axios from 'axios';

// URL base de la API desde variables de entorno
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

// Crear instancia de axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para agregar el token automáticamente
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('tienda_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para manejar errores globales
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Si el token expiró o es inválido, cerramos sesión
    if (error.response?.status === 401) {
      localStorage.removeItem('tienda_token');
      localStorage.removeItem('tienda_user');
    }
    return Promise.reject(error);
  }
);

export default api;