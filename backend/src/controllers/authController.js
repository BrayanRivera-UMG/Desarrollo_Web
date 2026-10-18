const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generar token JWT (Ahora con expiración de 5 minutos desde .env)
const generarToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '5m'
  });
};

// @desc    Registrar nuevo usuario
// @route   POST /api/auth/register
const registrar = async (req, res) => {
  try {
    const { nombre, email, password, rol, membresia } = req.body;

    if (!nombre || !email || !password) {
      return res.status(400).json({ mensaje: 'Nombre, email y contraseña son obligatorios' });
    }

    const usuarioExiste = await User.findOne({ email });
    if (usuarioExiste) {
      return res.status(400).json({ mensaje: 'El correo ya está registrado' });
    }

    const usuario = await User.create({
      nombre,
      email,
      password,
      rol: rol || 'cliente',
      membresia: membresia || 'Estándar'
    });

    res.status(201).json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
      membresia: usuario.membresia,
      token: generarToken(usuario._id)
    });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// @desc    Login de usuario
// @route   POST /api/auth/login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ mensaje: 'Email y contraseña son obligatorios' });
    }

    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }

    const passwordCorrecto = await usuario.compararPassword(password);
    if (!passwordCorrecto) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }

    res.json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
      membresia: usuario.membresia,
      fechaAcceso: new Date().toISOString(),
      token: generarToken(usuario._id) // Token de 5 minutos
    });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// @desc    Obtener perfil del usuario autenticado
// @route   GET /api/auth/perfil
const obtenerPerfil = async (req, res) => {
  try {
    const usuario = await User.findById(req.usuario._id).select('-password');
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

module.exports = { registrar, login, obtenerPerfil };