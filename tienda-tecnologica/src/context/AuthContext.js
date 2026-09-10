import React, { createContext, useReducer, useEffect } from 'react';

// ESTADO INICIAL
const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

// TIPOS DE ACCIONES
export const AUTH_ACTIONS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
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
        user: action.payload,
        isAuthenticated: true,
        error: null
      };

    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: null
      };

    case AUTH_ACTIONS.UPDATE_PROFILE:
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };

    case AUTH_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case AUTH_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };

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
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        dispatch({ type: AUTH_ACTIONS.RESTORE_SESSION, payload: user });
      } catch (error) {
        localStorage.removeItem('tienda_user');
      }
    }
  }, []);

  // Guardar usuario en localStorage cuando cambia
  useEffect(() => {
    if (state.user) {
      localStorage.setItem('tienda_user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('tienda_user');
    }
  }, [state.user]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};