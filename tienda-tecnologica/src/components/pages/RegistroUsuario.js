import React from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';

const RegistroUsuario = () => {
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={8} lg={7}>
          <Card className="shadow">
            <Card.Header className="bg-primary text-white text-center py-3">
              <h4 className="mb-0">Registro de Usuarios</h4>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombres</Form.Label>
                      <Form.Control type="text" placeholder="Ingrese sus nombres" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Apellidos</Form.Label>
                      <Form.Control type="text" placeholder="Ingrese sus apellidos" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre de Usuario</Form.Label>
                  <Form.Control type="text" placeholder="Elija un nombre de usuario" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control type="email" placeholder="correo@ejemplo.com" />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Cree una contraseña" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Confirmar Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Confirme su contraseña" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Fecha de Nacimiento</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Género</Form.Label>
                      <div>
                        <Form.Check inline type="radio" label="Masculino" name="genero" />
                        <Form.Check inline type="radio" label="Femenino" name="genero" />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>País</Form.Label>
                  <Form.Select>
                    <option>Guatemala</option>
                    <option>El Salvador</option>
                    <option>Honduras</option>
                    <option>Nicaragua</option>
                    <option>Costa Rica</option>
                    <option>México</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Dirección completa" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control type="tel" placeholder="12345678" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Intereses</Form.Label>
                  <div>
                    <Form.Check inline type="checkbox" label="Laptops" />
                    <Form.Check inline type="checkbox" label="Monitores" />
                    <Form.Check inline type="checkbox" label="Teclados" />
                    <Form.Check inline type="checkbox" label="Audífonos" />
                    <Form.Check inline type="checkbox" label="Accesorios" />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Acepto los términos y condiciones" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" size="lg">
                    Registrar Usuario
                  </Button>
                  <Button variant="secondary" type="reset">
                    Limpiar Datos
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistroUsuario;