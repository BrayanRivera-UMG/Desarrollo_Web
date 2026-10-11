import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col, Alert, Spinner } from 'react-bootstrap';

const FormularioProducto = ({ show, onHide, onGuardar, productoEditar }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    marca: '',
    modelo: '',
    categoria: 'Laptops',
    codigo: '',
    precio: '',
    descripcion: '',
    imagen: '',
    stock: 10
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Cargar datos si estamos editando
  useEffect(() => {
    if (productoEditar) {
      setFormData({
        nombre: productoEditar.nombre || '',
        marca: productoEditar.marca || '',
        modelo: productoEditar.modelo || '',
        categoria: productoEditar.categoria || 'Laptops',
        codigo: productoEditar.codigo || '',
        precio: productoEditar.precio || '',
        descripcion: productoEditar.descripcion || '',
        imagen: productoEditar.imagen || '',
        stock: productoEditar.stock || 10
      });
    } else {
      setFormData({
        nombre: '',
        marca: '',
        modelo: '',
        categoria: 'Laptops',
        codigo: '',
        precio: '',
        descripcion: '',
        imagen: '',
        stock: 10
      });
    }
    setError('');
  }, [productoEditar, show]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.categoria || !formData.codigo || !formData.precio) {
      setError('Los campos Nombre, Categoría, Código y Precio son obligatorios.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      await onGuardar({
        ...formData,
        precio: Number(formData.precio),
        stock: Number(formData.stock)
      });
      onHide();
    } catch (err) {
      setError(
        err.response?.data?.mensaje || 'Error al guardar el producto.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>
          {productoEditar ? 'Editar Producto' : 'Nuevo Producto'}
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}

          <Row>
            <Col md={8}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre *</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  disabled={loading}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Categoría *</Form.Label>
                <Form.Select
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option>Laptops</option>
                  <option>Accesorios</option>
                  <option>Monitores</option>
                  <option>Teclados</option>
                  <option>Audífonos</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Marca</Form.Label>
                <Form.Control
                  type="text"
                  name="marca"
                  value={formData.marca}
                  onChange={handleChange}
                  disabled={loading}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Modelo</Form.Label>
                <Form.Control
                  type="text"
                  name="modelo"
                  value={formData.modelo}
                  onChange={handleChange}
                  disabled={loading}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Código *</Form.Label>
                <Form.Control
                  type="text"
                  name="codigo"
                  value={formData.codigo}
                  onChange={handleChange}
                  disabled={loading}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Precio (Q) *</Form.Label>
                <Form.Control
                  type="number"
                  name="precio"
                  min="0"
                  value={formData.precio}
                  onChange={handleChange}
                  disabled={loading}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="number"
                  name="stock"
                  min="0"
                  value={formData.stock}
                  onChange={handleChange}
                  disabled={loading}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>URL de la Imagen</Form.Label>
            <Form.Control
              type="text"
              name="imagen"
              placeholder="https://... o ./imagenes/..."
              value={formData.imagen}
              onChange={handleChange}
              disabled={loading}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              disabled={loading}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide} disabled={loading}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Guardando...
              </>
            ) : productoEditar ? (
              'Actualizar'
            ) : (
              'Crear'
            )}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default FormularioProducto;