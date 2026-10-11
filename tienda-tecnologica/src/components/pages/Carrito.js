import React, { useState } from 'react';
import { Container, Table, Button, Form, Row, Col, Card, Alert } from 'react-bootstrap';

const Carrito = () => {
  const [items] = useState([
    { id: 1, nombre: 'ASUS VivoBook 15', categoria: 'Laptop', precio: 7499.00, cantidad: 1 },
    { id: 2, nombre: 'Logitech G Pro X', categoria: 'Teclado', precio: 1299.00, cantidad: 1 },
    { id: 3, nombre: 'Logitech MX Master 3S', categoria: 'Mouse', precio: 699.00, cantidad: 1 },
  ]);

  const [subtotal] = useState(9497.00);
  const [iva] = useState(1139.64);
  const total = subtotal + iva;

  return (
    <Container>
      <h1 className="text-center mb-4">Carrito de Compras</h1>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.categoria}</td>
              <td>Q{item.precio.toFixed(2)}</td>
              <td>
                <Form.Control
                  type="number"
                  min="1"
                  value={item.cantidad}
                  style={{ width: '70px' }}
                />
              </td>
              <td>Q{(item.precio * item.cantidad).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Row>
        <Col md={{ span: 4, offset: 8 }}>
          <Card>
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">Resumen de Compra</h5>
            </Card.Header>
            <Card.Body>
              <p><strong>Subtotal:</strong> Q{subtotal.toFixed(2)}</p>
              <p><strong>IVA:</strong> Q{iva.toFixed(2)}</p>
              <hr />
              <h4><strong>Total:</strong> Q{total.toFixed(2)}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="mt-5">Datos para la Compra</h2>
      <Form className="mt-3">
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="correo@ejemplo.com" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="tel" placeholder="12345678" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Dirección de Entrega</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Dirección completa" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Método de Pago</Form.Label>
          <div>
            <Form.Check type="radio" label="Tarjeta de Crédito" name="pago" />
            <Form.Check type="radio" label="Tarjeta de Débito" name="pago" />
            <Form.Check type="radio" label="Transferencia Bancaria" name="pago" />
            <Form.Check type="radio" label="Pago Contra Entrega" name="pago" />
          </div>
        </Form.Group>
        <div className="d-flex gap-3">
          <Button variant="success" size="lg">Confirmar Compra</Button>
          <Button variant="secondary">Vaciar Formulario</Button>
        </div>
      </Form>

      <Alert variant="info" className="mt-4">
        <Alert.Heading>Información Importante</Alert.Heading>
        <ul>
          <li>Los precios incluyen IVA.</li>
          <li>Los productos están sujetos a disponibilidad.</li>
          <li>El envío se coordinará después de confirmar la compra.</li>
          <li>La garantía depende del fabricante de cada producto.</li>
        </ul>
      </Alert>
    </Container>
  );
};

export default Carrito;