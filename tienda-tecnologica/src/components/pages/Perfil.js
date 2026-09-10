import React from 'react';
import { Container, Row, Col, Card, Badge, ListGroup, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Perfil = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

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
    const map = {
      'Entregado': 'success',
      'En camino': 'info',
      'Procesando': 'warning'
    };
    return map[estado] || 'secondary';
  };

  return (
    <Container>
      <h1 className="text-center mb-4">Mi Perfil</h1>

      <Row>
        {/* Tarjeta principal */}
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
                {user.nombre?.charAt(0).toUpperCase()}
              </div>
              <Card.Title>{user.nombre}</Card.Title>
              <Card.Text className="text-muted">{user.email}</Card.Text>
              <Badge bg="warning" text="dark" className="mb-2">
                    {user.membresia || 'Estándar'}
              </Badge>
              <br />
              <Badge bg="info">{user.rol || 'Cliente'}</Badge>
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

        {/* Información detallada */}
        <Col lg={8} className="mb-4">
          <Card className="shadow mb-4">
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">Información de la Cuenta</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Nombre:</strong> {user.nombre}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Correo:</strong> {user.email}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Tipo de Cliente:</strong> {user.rol}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Membresía:</strong>{' '}
                  <Badge bg="warning" text="dark">{user.membresia}</Badge>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Último acceso:</strong> {formatFecha(user.fechaAcceso)}
                </ListGroup.Item>
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