import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const NavbarComponent = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Tienda Tecnológica</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>

            {/* USUARIO NO AUTENTICADO */}
            {!isAuthenticated && (
              <NavDropdown title="Usuario" id="guest-dropdown">
                <NavDropdown.Item as={Link} to="/inicio-sesion">
                  Iniciar Sesión
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/registro">
                  Registrarse
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {/* USUARIO AUTENTICADO */}
            {isAuthenticated && user && (
              <NavDropdown
                title={
                  <span>
                    {user.nombre}{' '}
                    <Badge bg="success" pill>Activo</Badge>
                  </span>
                }
                id="user-dropdown"
                align="end"
              >
                <NavDropdown.Header>
                  <small className="text-muted">{user.email}</small>
                </NavDropdown.Header>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/perfil">
                  Mi Perfil
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/carrito">
                  Mi Carrito
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout} className="text-danger">
                  Cerrar Sesión
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;