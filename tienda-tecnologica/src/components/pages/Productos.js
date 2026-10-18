import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { obtenerProductos } from '../../services/productoService';
import { obtenerImagenUrl } from '../../utils/imagenUrl';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categorias = [
    'Todos',
    'Laptops',
    'Accesorios',
    'Monitores',
    'Teclados',
    'Audífonos'
  ];

  // Cargar productos desde la API
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setLoading(true);
        setError(null);

        const filtros = {};
        if (categoriaFiltro !== 'Todos') filtros.categoria = categoriaFiltro;
        if (busqueda) filtros.buscar = busqueda;

        const data = await obtenerProductos(filtros);
        setProductos(data);
      } catch (err) {
        setError(
          err.response?.data?.mensaje ||
            'Error al cargar los productos. Verifica que el servidor esté corriendo.'
        );
      } finally {
        setLoading(false);
      }
    };

    // Debounce para búsqueda
    const timer = setTimeout(cargarProductos, 300);
    return () => clearTimeout(timer);
  }, [categoriaFiltro, busqueda]);

  return (
    <Container>
      <h1 className="text-center mb-4">Productos</h1>

      <Row className="mb-4">
        <Col md={6}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Select
              value={categoriaFiltro}
              onChange={(e) => setCategoriaFiltro(e.target.value)}
            >
              {categorias.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* Loading */}
      {loading && (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3">Cargando productos...</p>
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <Alert variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <p>{error}</p>
        </Alert>
      )}

      {/* Lista de productos */}
      {!loading && !error && (
        <Row>
          {productos.map((producto) => (
            <Col lg={3} md={4} sm={6} key={producto._id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={obtenerImagenUrl(producto.imagen)}
                  alt={producto.nombre}
                  style={{ height: '180px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src =
                      'https://via.placeholder.com/300x180?text=Sin+Imagen';
                  }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h6">{producto.nombre}</Card.Title>
                  <Badge bg="secondary" className="mb-2">
                    {producto.categoria}
                  </Badge>
                  <Card.Text className="h5 text-primary">
                    Q{Number(producto.precio).toLocaleString('es-GT')}
                  </Card.Text>
                  <Button
                    as={Link}
                    to={`/detalle/${producto._id}`}
                    variant="primary"
                    size="sm"
                    className="mt-auto"
                  >
                    Ver Detalles
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {!loading && !error && productos.length === 0 && (
        <Alert variant="info" className="text-center">
          No se encontraron productos con esos filtros.
        </Alert>
      )}
    </Container>
  );
};

export default Productos;