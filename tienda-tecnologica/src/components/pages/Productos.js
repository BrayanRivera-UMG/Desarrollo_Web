import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { todosLosProductos } from '../../data/productosData';

const Productos = () => {
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');

  // Obtener categorías únicas
  const categorias = ['Todos', ...new Set(todosLosProductos.map(p => p.categoria))];

  const productosFiltrados = todosLosProductos.filter(producto => {
    const matchCategoria = categoriaFiltro === 'Todos' || producto.categoria === categoriaFiltro;
    const matchBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return matchCategoria && matchBusqueda;
  });

  return (
    <Container>
      <h1 className="text-center mb-4">Productos</h1>

      {/* Filtros */}
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
              {categorias.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* Grid de productos */}
      <Row>
        {productosFiltrados.map((producto) => (
          <Col lg={3} md={4} sm={6} key={producto.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img 
                variant="top" 
                src={producto.imagen} 
                alt={producto.nombre}
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="h6">{producto.nombre}</Card.Title>
                <Badge bg="secondary" className="mb-2">
                  {producto.categoria}
                </Badge>
                <Card.Text className="h5 text-primary">
                  {producto.precio}
                </Card.Text>
                <Button 
                  as={Link} 
                  to={`/detalle/${producto.id}`} 
                  variant="primary" 
                  size="sm"
                >
                  Ver Detalles
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {productosFiltrados.length === 0 && (
        <p className="text-center text-muted">No se encontraron productos</p>
      )}
    </Container>
  );
};

export default Productos;