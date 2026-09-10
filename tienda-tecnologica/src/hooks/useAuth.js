import { useContext } from 'react';
import { AuthContext, AUTH_ACTIONS } from '../context/AuthContext';

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }

  const { state, dispatch } = context;

  // ACCIONES DE AUTENTICACIÓN
  const login = (userData) => {
    const user = {
      ...userData,
      fechaAcceso: new Date().toISOString()
    };
    dispatch({ type: AUTH_ACTIONS.LOGIN, payload: user });
  };

  const logout = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
  };

  const updateProfile = (data) => {
    dispatch({ type: AUTH_ACTIONS.UPDATE_PROFILE, payload: data });
  };

  const setError = (message) => {
    dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: message });
  };

  const clearError = () => {
    dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });
  };

  return {
    // Estado
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
    error: state.error,
    // Acciones
    login,
    logout,
    updateProfile,
    setError,
    clearError
  };
};