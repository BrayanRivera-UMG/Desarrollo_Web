import React, { createContext, useReducer, useEffect } from 'react';

// ESTADO INICIAL
const initialState = {
  user: null,
  token: localStorage.getItem('tienda_token') || null,
  isAuthenticated: false,
  loading: false,
  error: null
};

// TIPOS DE ACCIONES
export const AUTH_ACTIONS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  RESTORE_SESSION: 'RESTORE_SESSION'
};

// REDUCER
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
        error: null
      };

    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        error: null
      };

    case AUTH_ACTIONS.UPDATE_PROFILE:
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };

    case AUTH_ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload };

    case AUTH_ACTIONS.SET_ERROR:
      return { ...state, error: action.payload, loading: false };

    case AUTH_ACTIONS.CLEAR_ERROR:
      return { ...state, error: null };

    case AUTH_ACTIONS.RESTORE_SESSION:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };

    default:
      return state;
  }
};

// CONTEXTO
export const AuthContext = createContext();

// PROVIDER
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Restaurar sesión desde localStorage al cargar
  useEffect(() => {
    const savedUser = localStorage.getItem('tienda_user');
    const savedToken = localStorage.getItem('tienda_token');

    if (savedUser && savedToken) {
      try {
        const user = JSON.parse(savedUser);
        dispatch({ type: AUTH_ACTIONS.RESTORE_SESSION, payload: user });
      } catch (error) {
        localStorage.removeItem('tienda_user');
        localStorage.removeItem('tienda_token');
      }
    }
  }, []);

  // Persistir usuario y token cuando cambian
  useEffect(() => {
    if (state.user && state.token) {
      localStorage.setItem('tienda_user', JSON.stringify(state.user));
      localStorage.setItem('tienda_token', state.token);
    } else {
      localStorage.removeItem('tienda_user');
      localStorage.removeItem('tienda_token');
    }
  }, [state.user, state.token]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};