const express = require('express');
const router = express.Router();
const {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto
} = require('../controllers/productoController');
const { proteger } = require('../middleware/auth');

// Rutas públicas
router.get('/', obtenerProductos);
router.get('/:id', obtenerProductoPorId);

// Rutas protegidas (requieren autenticación)
router.post('/', proteger, crearProducto);
router.put('/:id', proteger, actualizarProducto);
router.delete('/:id', proteger, eliminarProducto);

module.exports = router;