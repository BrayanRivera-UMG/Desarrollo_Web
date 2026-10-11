import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, ListGroup, Button, Table, Spinner, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { obtenerPerfil } from '../../services/authService';

const Perfil = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarPerfil = async () => {
      try {
        setLoading(true);
        const data = await obtenerPerfil();
        setPerfil(data);
      } catch (err) {
        setError(
          err.response?.data?.mensaje || 'Error al cargar el perfil.'
        );
      } finally {
        setLoading(false);
      }
    };

    cargarPerfil();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const pedidosSimulados = [
    { id: 'PED-001', fecha: '2026-09-01', total: 'Q7,499.00', estado: 'Entregado' },
    { id: 'PED-002', fecha: '2026-09-05', total: 'Q1,299.00', estado: 'En camino' },
    { id: 'PED-003', fecha: '2026-09-08', total: 'Q699.00', estado: 'Procesando' }
  ];

  const formatFecha = (iso) => {
    if (!iso) return '—';
    const d = new Date(iso);
    return d.toLocaleString('es-GT', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
  };

  const estadoBadge = (estado) => {
    const map = { Entregado: 'success', 'En camino': 'info', Procesando: 'warning' };
    return map[estado] || 'secondary';
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Cargando perfil...</p>
      </Container>
    );
  }

  // Usamos el perfil del backend si está disponible, sino el del estado global
  const usuarioMostrar = perfil || user;

  if (!usuarioMostrar) return null;

  return (
    <Container>
      <h1 className="text-center mb-4">Mi Perfil</h1>

      {error && <Alert variant="warning">{error}</Alert>}

      <Row>
        <Col lg={4} className="mb-4">
          <Card className="shadow text-center">
            <Card.Body>
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: '#0d6efd',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  margin: '0 auto 1rem'
                }}
              >
                {usuarioMostrar.nombre?.charAt(0).toUpperCase()}
              </div>
              <Card.Title>{usuarioMostrar.nombre}</Card.Title>
              <Card.Text className="text-muted">{usuarioMostrar.email}</Card.Text>
              <Badge bg="warning" text="dark" className="mb-2">
                {usuarioMostrar.membresia || 'Estándar'}
              </Badge>
              <br />
              <Badge bg="info">{usuarioMostrar.rol || 'cliente'}</Badge>
            </Card.Body>
          </Card>

          <Button
            variant="danger"
            className="w-100 mt-3"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </Button>
        </Col>

        <Col lg={8} className="mb-4">
          <Card className="shadow mb-4">
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">Información de la Cuenta</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Nombre:</strong> {usuarioMostrar.nombre}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Correo:</strong> {usuarioMostrar.email}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Rol:</strong> {usuarioMostrar.rol}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Membresía:</strong>{' '}
                  <Badge bg="warning" text="dark">
                    {usuarioMostrar.membresia}
                  </Badge>
                </ListGroup.Item>
                {usuarioMostrar.createdAt && (
                  <ListGroup.Item>
                    <strong>Miembro desde:</strong>{' '}
                    {formatFecha(usuarioMostrar.createdAt)}
                  </ListGroup.Item>
                )}
                {usuarioMostrar.fechaAcceso && (
                  <ListGroup.Item>
                    <strong>Último acceso:</strong>{' '}
                    {formatFecha(usuarioMostrar.fechaAcceso)}
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="shadow">
            <Card.Header className="bg-secondary text-white">
              <h5 className="mb-0">Historial de Pedidos</h5>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive className="mb-0">
                <thead>
                  <tr>
                    <th>Pedido</th>
                    <th>Fecha</th>
                    <th>Total</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {pedidosSimulados.map((p) => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.fecha}</td>
                      <td>{p.total}</td>
                      <td>
                        <Badge bg={estadoBadge(p.estado)}>{p.estado}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Perfil;