import { useContext } from 'react';
import { AuthContext, AUTH_ACTIONS } from '../context/AuthContext';
import { loginUsuario, registrarUsuario } from '../services/authService';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }

  const { state, dispatch } = context;

  // LOGIN con API real
  const login = async (email, password) => {
    try {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
      dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });

      const data = await loginUsuario(email, password);

      // Extraer token del response
      const { token, ...userData } = data;

      dispatch({
        type: AUTH_ACTIONS.LOGIN,
        payload: { user: userData, token }
      });

      return { success: true };
    } catch (error) {
      const mensaje =
        error.response?.data?.mensaje ||
        'Error al iniciar sesión. Verifica tus credenciales.';
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: mensaje });
      return { success: false, error: mensaje };
    }
  };

  // REGISTRO con API real
  const register = async (datos) => {
    try {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
      dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });

      const data = await registrarUsuario(datos);
      const { token, ...userData } = data;

      dispatch({
        type: AUTH_ACTIONS.LOGIN,
        payload: { user: userData, token }
      });

      return { success: true };
    } catch (error) {
      const mensaje =
        error.response?.data?.mensaje || 'Error al registrar usuario.';
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: mensaje });
      return { success: false, error: mensaje };
    }
  };

  // LOGOUT
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
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
    error: state.error,
    // Acciones
    login,
    register,
    logout,
    updateProfile,
    setError,
    clearError
  };
};