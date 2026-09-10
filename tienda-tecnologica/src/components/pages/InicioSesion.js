import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const InicioSesion = () => {
  const navigate = useNavigate();
  const { login, error, setError, clearError } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) clearError();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!formData.email || !formData.password) {
      setError('Por favor completa todos los campos.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('El correo electrónico no es válido.');
      return;
    }
    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    const nombreDesdeEmail = formData.email.split('@')[0];
    const nombreCapitalizado =
      nombreDesdeEmail.charAt(0).toUpperCase() + nombreDesdeEmail.slice(1);

    login({
      nombre: nombreCapitalizado,
      email: formData.email,
      rol: 'Cliente Premium',
      membresia: 'Gold',
      avatar: null
    });

    navigate('/perfil');
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow">
            <Card.Header className="bg-primary text-white text-center py-3">
              <h4 className="mb-0">Inicio de Sesión</h4>
            </Card.Header>
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Ingrese su contraseña (mín. 6 caracteres)"
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
                  <Button
                    variant="secondary"
                    type="reset"
                    onClick={() => {
                      setFormData({ email: '', password: '' });
                      clearError();
                    }}
                  >
                    Limpiar
                  </Button>
                </div>
              </Form>

              <Alert variant="info" className="mt-3 small">
                  <strong>Demo:</strong> Ingresa cualquier correo válido y una
                contraseña de 6+ caracteres para acceder.
              </Alert>

              <div className="text-center mt-3">
                <Link to="/recuperar-contrasena" className="text-muted">
                  ¿Olvidó su contraseña?
                </Link>
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

          <Card className="mt-4 shadow-sm">
            <Card.Header className="bg-secondary text-white">
              <h5 className="mb-0">Beneficios de tener una cuenta</h5>
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