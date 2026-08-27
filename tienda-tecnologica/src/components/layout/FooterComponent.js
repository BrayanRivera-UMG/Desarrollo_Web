import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5 className="text-warning">Tienda Tecnológica</h5>
            <p className="text-secondary">
              Tu tienda de confianza para tecnología
            </p>
          </Col>

          <Col md={6} className="text-md-end">
            <p className="mb-0 fw-bold text-white">
              Brayan Kenet Rivera Quinilla
            </p>
            <p className="text-info mb-2">
              Carnet: 9490-23-2835
            </p>
            <hr className="bg-secondary w-75 ms-auto" />
            <p className="text-secondary small mb-1">
              <span className="text-warning">Componentes desarrollados:</span>
            </p>
            <p className="text-secondary small">
              Navbar • Footer • Inicio • Productos • DetalleProducto • Carrito • InicioSesión • RegistroUsuario
            </p>
          </Col>
        </Row>
        <hr className="bg-secondary mt-3" />
        <p className="text-center text-secondary small mb-0">
          © {new Date().getFullYear()} Derechos Reservados Brayan Kenet Rivera Quinilla 9490-23-2835
        </p>
      </Container>
    </footer>
  );
};

export default FooterComponent;