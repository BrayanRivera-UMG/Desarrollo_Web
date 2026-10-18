import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Button, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const InicioSesion = () => {
  const navigate = useNavigate();
  const { login, error, clearError, loading } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showExpiredAlert, setShowExpiredAlert] = useState(false);

  // Detectar si venimos de una sesión expirada
  useEffect(() => {
    const isExpired = localStorage.getItem('session_expired');
    if (isExpired === 'true') {
      setShowExpiredAlert(true);
      localStorage.removeItem('session_expired'); // Limpiar bandera
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) clearError();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;

    const resultado = await login(formData.email, formData.password);
    if (resultado.success) {
      navigate('/perfil');
    }
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
              {/* ALERTA DE SESIÓN EXPIRADA */}
              {showExpiredAlert && (
                <Alert variant="warning" dismissible onClose={() => setShowExpiredAlert(false)}>
                  <Alert.Heading>Sesión Expirada</Alert.Heading>
                  <p className="mb-0">Su sesión ya no es válida o ha caducado. Por favor, inicie sesión nuevamente.</p>
                </Alert>
              )}

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
                    disabled={loading}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Ingrese su contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" size="lg" disabled={loading}>
                    {loading ? (
                      <>
                        <Spinner as="span" animation="border" size="sm" className="me-2" />
                        Iniciando sesión...
                      </>
                    ) : (
                      'Iniciar Sesión'
                    )}
                  </Button>
                </div>
              </Form>

              <hr />
              <div className="text-center">
                <p className="mb-2">¿No posee una cuenta?</p>
                <Button as={Link} to="/registro" variant="outline-primary">
                  Registrarse
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InicioSesion;