import React from 'react';
import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productosDestacados } from '../../data/productosData';

const Inicio = () => {
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

      {/* Carrusel de productos destacados */}
      <Row className="mb-5">
        <Col lg={10} className="mx-auto">
          <Carousel>
            {productosDestacados.map((producto) => (
              <Carousel.Item key={producto.id}>
                <img
                  className="d-block w-100"
                  src={producto.imagen}
                  alt={producto.nombre}
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                  <h3>{producto.nombre}</h3>
                  <p>{producto.descripcion}</p>
                  <Button as={Link} to={`/detalle/${producto.id}`} variant="primary">
                    Ver Detalles
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      {/* Productos destacados en Cards */}
      <h2 className="text-center mb-4">Productos Destacados</h2>
      <Row>
        {productosDestacados.map((producto) => (
          <Col md={4} key={producto.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img 
                variant="top" 
                src={producto.imagen}
                alt={producto.nombre}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {producto.descripcionCorta}
                </Card.Text>
                <Card.Text className="h5 text-primary">
                  {producto.precio}
                </Card.Text>
                <Button 
                  as={Link} 
                  to={`/detalle/${producto.id}`} 
                  variant="outline-primary"
                >
                  Ver Detalles
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Categorías */}
      <Row className="mt-4">
        <Col>
          <h2 className="text-center mb-4">Categorías</h2>
          <Row>
            {['Laptops', 'Accesorios', 'Monitores', 'Teclados', 'Audífonos'].map((cat) => (
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
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Inicio;