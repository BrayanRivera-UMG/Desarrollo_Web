import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const InicioSesion = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Por favor completa todos los campos.');
      return;
    }
    setError('');
    alert(`Bienvenido!\nEmail: ${formData.email}`);
    navigate('/');
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow">
            <Card.Header className="bg-primary text-white text-center py-3">
              <h4 className="mb-0">🔐 Inicio de Sesión</h4>
            </Card.Header>
            <Card.Body>
              {/* Mostrar error si existe */}
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>📧 Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>🔑 Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Ingrese su contraseña"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>
                
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" size="lg">
                    Iniciar Sesión
                  </Button>
                  <Button variant="secondary" type="reset">
                    Limpiar
                  </Button>
                </div>
              </Form>
              
              <div className="text-center mt-3">
                {/* Corregido: href válido */}
                <a href="/recuperar-contrasena" className="text-muted">
                  ¿Olvidó su contraseña?
                </a>
              </div>
              <hr />
              <div className="text-center">
                <p className="mb-2">¿No posee una cuenta?</p>
                <Button as={Link} to="/registro" variant="outline-primary">
                  Registrarse
                </Button>
              </div>
            </Card.Body>
          </Card>

          {/* Beneficios */}
          <Card className="mt-4 shadow-sm">
            <Card.Header className="bg-secondary text-white">
              <h5 className="mb-0">✨ Beneficios de tener una cuenta</h5>
            </Card.Header>
            <Card.Body>
              <ul className="mb-0">
                <li>Comprar productos fácilmente.</li>
                <li>Guardar productos favoritos.</li>
                <li>Consultar el historial de compras.</li>
                <li>Administrar el carrito de compras.</li>
                <li>Recibir promociones y ofertas.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InicioSesion;
