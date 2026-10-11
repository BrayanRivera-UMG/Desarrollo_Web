import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const RegistroUsuario = () => {
  const navigate = useNavigate();
  const { register, error, clearError, loading } = useAuth();

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    rol: 'cliente',
    membresia: 'Estándar'
  });

  const [validacion, setValidacion] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) clearError();
    if (validacion) setValidacion('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones locales
    if (!formData.nombre || !formData.email || !formData.password) {
      setValidacion('Todos los campos son obligatorios.');
      return;
    }
    if (formData.password.length < 6) {
      setValidacion('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setValidacion('Las contraseñas no coinciden.');
      return;
    }

    const resultado = await register({
      nombre: formData.nombre,
      email: formData.email,
      password: formData.password,
      rol: formData.rol,
      membresia: formData.membresia
    });

    if (resultado.success) {
      navigate('/perfil');
    }
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={8} lg={7}>
          <Card className="shadow">
            <Card.Header className="bg-primary text-white text-center py-3">
              <h4 className="mb-0">Registro de Usuarios</h4>
            </Card.Header>
            <Card.Body>
              {validacion && <Alert variant="warning">{validacion}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre Completo *</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    placeholder="Ingrese su nombre completo"
                    value={formData.nombre}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Correo Electrónico *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Contraseña *</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Mínimo 6 caracteres"
                        value={formData.password}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Confirmar Contraseña *</Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirme su contraseña"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Rol</Form.Label>
                      <Form.Select
                        name="rol"
                        value={formData.rol}
                        onChange={handleChange}
                        disabled={loading}
                      >
                        <option value="cliente">Cliente</option>
                        <option value="admin">Administrador</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Membresía</Form.Label>
                      <Form.Select
                        name="membresia"
                        value={formData.membresia}
                        onChange={handleChange}
                        disabled={loading}
                      >
                        <option value="Estándar">Estándar</option>
                        <option value="Gold">Gold</option>
                        <option value="Premium">Premium</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <div className="d-grid gap-2">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spinner animation="border" size="sm" className="me-2" />
                        Registrando...
                      </>
                    ) : (
                      'Registrar Usuario'
                    )}
                  </Button>
                </div>
              </Form>

              <div className="text-center mt-3">
                <p>
                  ¿Ya tienes cuenta?{' '}
                  <Link to="/inicio-sesion">Inicia Sesión</Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistroUsuario;