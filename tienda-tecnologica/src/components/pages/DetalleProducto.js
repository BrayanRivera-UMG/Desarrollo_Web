import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Badge, ListGroup, Accordion, Table, Form, Spinner, Alert } from 'react-bootstrap';
import { obtenerProductoPorId } from '../../services/productoService';
import { obtenerImagenUrl } from '../../utils/imagenUrl';

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarProducto = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await obtenerProductoPorId(id);
        setProducto(data);
      } catch (err) {
        setError(
          err.response?.data?.mensaje || 'Error al cargar el producto.'
        );
      } finally {
        setLoading(false);
      }
    };

    cargarProducto();
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Cargando producto...</p>
      </Container>
    );
  }

  if (error || !producto) {
    return (
      <Container className="text-center py-5">
        <Alert variant="danger">{error || 'Producto no encontrado'}</Alert>
        <Button as={Link} to="/productos" variant="primary">
          ← Volver a Productos
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <Button
        as={Link}
        to="/productos"
        variant="outline-secondary"
        className="mb-4"
      >
        ← Volver a Productos
      </Button>

      <Row>
        <Col md={6}>
          <Image
            src={obtenerImagenUrl(producto.imagen)}
            alt={producto.nombre}
            fluid
            className="rounded shadow"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=Sin+Imagen';
            }}
          />
        </Col>
        <Col md={6}>
          <h1>{producto.nombre}</h1>
          <Badge bg="info" className="mb-3">
            {producto.categoria}
          </Badge>
          <h2 className="text-primary">
            Q{Number(producto.precio).toLocaleString('es-GT')}
          </h2>

          <p className="mt-3">{producto.descripcion}</p>

          <ListGroup className="mb-3">
            <ListGroup.Item>
              <strong>Marca:</strong> {producto.marca}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Modelo:</strong> {producto.modelo}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Código:</strong> {producto.codigo}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Stock:</strong>{' '}
              {producto.stock > 0 ? (
                <Badge bg="success">Disponible ({producto.stock})</Badge>
              ) : (
                <Badge bg="danger">Agotado</Badge>
              )}
            </ListGroup.Item>
          </ListGroup>

          <div className="d-flex align-items-center gap-3 mb-3">
            <Form.Group style={{ width: '100px' }}>
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max={producto.stock}
                value={cantidad}
                onChange={(e) => setCantidad(parseInt(e.target.value) || 1)}
              />
            </Form.Group>
            <Button variant="primary" size="lg" className="mt-3">
              Agregar al Carrito
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Características Técnicas</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {producto.caracteristicas?.map((car, idx) => (
                    <li key={idx}>{car}</li>
                  )) || <li>Sin características disponibles</li>}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Especificaciones</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Especificación</th>
                      <th>Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {producto.especificaciones?.map((esp, idx) => (
                      <tr key={idx}>
                        <td>{esp.nombre}</td>
                        <td>{esp.valor}</td>
                      </tr>
                    )) || (
                      <tr>
                        <td colSpan="2">Sin especificaciones</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;