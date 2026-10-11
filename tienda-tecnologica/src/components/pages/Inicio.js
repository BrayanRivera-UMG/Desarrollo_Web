import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel, Card, Button, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { obtenerProductos } from '../../services/productoService';
import { obtenerImagenUrl } from '../../utils/imagenUrl';

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await obtenerProductos();
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

    cargarProductos();
  }, []);

  // Tomar los primeros 3 productos para el carrusel y destacados
  const destacados = productos.slice(0, 3);

  return (
    <Container>
      {/* Mensaje de bienvenida */}
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Bienvenido a Tienda Tecnológica</h1>
          <p className="text-center text-muted">
            Encuentra los mejores productos tecnológicos al mejor precio
          </p>
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

      {/* Contenido cuando hay productos */}
      {!loading && !error && destacados.length > 0 && (
        <>
          {/* Carrusel */}
          <Row className="mb-5">
            <Col lg={10} className="mx-auto">
              <Carousel>
                {destacados.map((producto) => (
                  <Carousel.Item key={producto._id}>
                    <img
                      className="d-block w-100"
                      src={obtenerImagenUrl(producto.imagen)}
                      alt={producto.nombre}
                      style={{ height: '400px', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.src =
                          'https://via.placeholder.com/800x400?text=Sin+Imagen';
                      }}
                    />
                    <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                      <h3>{producto.nombre}</h3>
                      <p>{producto.descripcion}</p>
                      <Button
                        as={Link}
                        to={`/detalle/${producto._id}`}
                        variant="primary"
                      >
                        Ver Detalles
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>

          {/* Productos destacados */}
          <h2 className="text-center mb-4">Productos Destacados</h2>
          <Row>
            {destacados.map((producto) => (
              <Col md={4} key={producto._id} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={obtenerImagenUrl(producto.imagen)}
                    alt={producto.nombre}
                    style={{ height: '200px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src =
                        'https://via.placeholder.com/300x200?text=Sin+Imagen';
                    }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {producto.descripcion?.substring(0, 80)}...
                    </Card.Text>
                    <Card.Text className="h5 text-primary">
                      Q{Number(producto.precio).toLocaleString('es-GT')}
                    </Card.Text>
                    <Button
                      as={Link}
                      to={`/detalle/${producto._id}`}
                      variant="outline-primary"
                    >
                      Ver Detalles
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Sin productos */}
      {!loading && !error && productos.length === 0 && (
        <Alert variant="info" className="text-center">
          <h5>No hay productos aún</h5>
          <p className="mb-0">
            Agrega productos desde Postman o desde el panel de administración.
          </p>
        </Alert>
      )}

      {/* Categorías */}
      <Row className="mt-4">
        <Col>
          <h2 className="text-center mb-4">Categorías</h2>
          <Row>
            {['Laptops', 'Accesorios', 'Monitores', 'Teclados', 'Audífonos'].map(
              (cat) => (
                <Col xs={6} md={2} key={cat} className="mb-3">
                  <Card className="text-center h-100">
                    <Card.Body>
                      <Card.Title>{cat}</Card.Title>
                      <Button
                        as={Link}
                        to="/productos"
                        variant="outline-secondary"
                        size="sm"
                      >
                        Ver
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Inicio;