const express = require('express');
const router = express.Router();
const {
  registrar,
  login,
  obtenerPerfil
} = require('../controllers/authController');
const { proteger } = require('../middleware/auth');

// Rutas públicas
router.post('/register', registrar);
router.post('/login', login);

// Ruta privada
router.get('/perfil', proteger, obtenerPerfil);

module.exports = router;