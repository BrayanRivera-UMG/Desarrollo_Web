import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import NavbarComponent from './components/layout/NavbarComponent';
import FooterComponent from './components/layout/FooterComponent';
import Inicio from './components/pages/Inicio';
import Productos from './components/pages/Productos';
import DetalleProducto from './components/pages/DetalleProducto';
import Carrito from './components/pages/Carrito';
import InicioSesion from './components/pages/InicioSesion';
import RegistroUsuario from './components/pages/RegistroUsuario';
import Perfil from './components/pages/Perfil';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Ruta protegida: solo accesible si está autenticado
const RutaProtegida = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/inicio-sesion" replace />;
};

function AppContent() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComponent />
      <main className="flex-grow-1 container py-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/detalle/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/inicio-sesion" element={<InicioSesion />} />
          <Route path="/registro" element={<RegistroUsuario />} />
          <Route
            path="/perfil"
            element={
              <RutaProtegida>
                <Perfil />
              </RutaProtegida>
            }
          />
        </Routes>
      </main>
      <FooterComponent />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;