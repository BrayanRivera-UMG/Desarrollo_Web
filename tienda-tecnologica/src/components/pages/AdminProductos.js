import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Badge, Alert, Spinner, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import {
  obtenerProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto
} from '../../services/productoService';
import FormularioProducto from '../productos/FormularioProducto';

const AdminProductos = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [productoEditar, setProductoEditar] = useState(null);

  // Redirigir si no está autenticado
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/inicio-sesion');
    }
  }, [isAuthenticated, navigate]);

  // Cargar productos
  const cargarProductos = async () => {
    try {
      setLoading(true);
      const data = await obtenerProductos();
      setProductos(data);
      setError('');
    } catch (err) {
      setError(
        err.response?.data?.mensaje || 'Error al cargar los productos.'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  // Abrir modal para crear
  const handleNuevo = () => {
    setProductoEditar(null);
    setShowModal(true);
  };

  // Abrir modal para editar
  const handleEditar = (producto) => {
    setProductoEditar(producto);
    setShowModal(true);
  };

  // Guardar (crear o actualizar)
  const handleGuardar = async (datos) => {
    if (productoEditar) {
      await actualizarProducto(productoEditar._id, datos);
    } else {
      await crearProducto(datos);
    }
    await cargarProductos();
  };

  // Eliminar producto
  const handleEliminar = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este producto?')) return;

    try {
      await eliminarProducto(id);
      await cargarProductos();
    } catch (err) {
      setError(
        err.response?.data?.mensaje || 'Error al eliminar el producto.'
      );
    }
  };

  return (
    <Container>
      <Row className="mb-4 align-items-center">
        <Col>
          <h1>Administración de Productos</h1>
          <p className="text-muted">
            Bienvenido, <strong>{user?.nombre}</strong>. Gestiona el catálogo
            desde aquí.
          </p>
        </Col>
        <Col xs="auto">
          <Button variant="success" onClick={handleNuevo}>
            Nuevo Producto
          </Button>
        </Col>
      </Row>

      {error && <Alert variant="danger">{error}</Alert>}

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3">Cargando productos...</p>
        </div>
      ) : (
        <Card className="shadow">
          <Card.Body>
            <Table striped bordered hover responsive className="mb-0">
              <thead className="table-dark">
                <tr>
                  <th>Nombre</th>
                  <th>Categoría</th>
                  <th>Marca</th>
                  <th>Código</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((p) => (
                  <tr key={p._id}>
                    <td>{p.nombre}</td>
                    <td>
                      <Badge bg="secondary">{p.categoria}</Badge>
                    </td>
                    <td>{p.marca}</td>
                    <td>{p.codigo}</td>
                    <td>Q{Number(p.precio).toLocaleString('es-GT')}</td>
                    <td>
                      {p.stock > 0 ? (
                        <Badge bg="success">{p.stock}</Badge>
                      ) : (
                        <Badge bg="danger">0</Badge>
                      )}
                    </td>
                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEditar(p)}
                      >
                        ✏️
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleEliminar(p._id)}
                      >
                        🗑️
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {productos.length === 0 && (
              <p className="text-center text-muted py-4">
                No hay productos. Crea el primero con el botón "Nuevo Producto".
              </p>
            )}
          </Card.Body>
        </Card>
      )}

      <FormularioProducto
        show={showModal}
        onHide={() => setShowModal(false)}
        onGuardar={handleGuardar}
        productoEditar={productoEditar}
      />
    </Container>
  );
};

export default AdminProductos;