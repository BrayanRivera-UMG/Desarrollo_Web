import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

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

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // SI EL TOKEN EXPIRÓ O ES INVÁLIDO (401)
    if (error.response?.status === 401) {
      // Evitar redirigir si el error viene del propio login (credenciales inválidas)
      const isLoginRequest = error.config.url.includes('/auth/login');
      
      if (!isLoginRequest) {
        // Eliminar token y usuario
        localStorage.removeItem('tienda_token');
        localStorage.removeItem('tienda_user');
        localStorage.setItem('session_expired', 'true'); // Bandera para mostrar Alerta
        
        // Redirigir al login
        window.location.href = '/inicio-sesion';
      }
    }
    return Promise.reject(error);
  }
);

export default api;