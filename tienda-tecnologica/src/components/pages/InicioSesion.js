import React from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InicioSesion = () => {
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow">
            <Card.Header className="bg-primary text-white text-center py-3">
              <h4 className="mb-0">Inicio de Sesión</h4>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control type="email" placeholder="correo@ejemplo.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Ingrese su contraseña" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" size="lg">
                    Iniciar Sesión
                  </Button>
                  <Button variant="secondary" type="reset">
                    Limpiar
                  </Button>
                </div>
              </Form>
              <div className="text-center mt-3">
                <Button variant="link" type="button" className="text-muted p-0">
                  ¿Olvidó su contraseña?
                </Button>
              </div>
              <hr />
              <div className="text-center">
                <p>¿No posee una cuenta?</p>
                <Button as={Link} to="/registro" variant="outline-primary">
                  Registrarse
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card className="mt-4 shadow-sm">
            <Card.Header className="bg-secondary text-white">
              <h5 className="mb-0">Beneficios de tener una cuenta</h5>
            </Card.Header>
            <Card.Body>
              <ul>
                <li>Comprar productos fácilmente.</li>
                <li>Guardar productos favoritos.</li>
                <li>Consultar el historial de compras.</li>
                <li>Administrar el carrito de compras.</li>
                <li>Recibir promociones y ofertas.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InicioSesion;
