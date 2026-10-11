const Producto = require('../models/Producto');

// @desc    Obtener todos los productos (con filtros)
// @route   GET /api/productos
// @access  Public
const obtenerProductos = async (req, res) => {
  try {
    const { categoria, buscar } = req.query;
    const filtro = {};

    if (categoria) filtro.categoria = categoria;
    if (buscar) filtro.nombre = { $regex: buscar, $options: 'i' };

    const productos = await Producto.find(filtro).sort({ createdAt: -1 });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// @desc    Obtener un producto por ID
// @route   GET /api/productos/:id
// @access  Public
const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// @desc    Crear nuevo producto
// @route   POST /api/productos
// @access  Private
const crearProducto = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// @desc    Actualizar producto
// @route   PUT /api/productos/:id
// @access  Private
const actualizarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// @desc    Eliminar producto
// @route   DELETE /api/productos/:id
// @access  Private
const eliminarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};