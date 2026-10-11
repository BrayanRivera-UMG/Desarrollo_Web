const jwt = require('jsonwebtoken');
const User = require('../models/User');

const proteger = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.usuario = await User.findById(decoded.id).select('-password');

      if (!req.usuario) {
        return res.status(401).json({ mensaje: 'Usuario no encontrado' });
      }

      // Solo llamamos next() si todo está bien, sin 'return'
      next();
    } catch (error) {
      // Sin 'return' para evitar el error
      res.status(401).json({ mensaje: 'Token inválido o expirado' });
    }
  } else {
    // Sin 'return'
    res.status(401).json({ mensaje: 'No autorizado, token requerido' });
  }
};

const soloAdmin = (req, res, next) => {
  if (req.usuario && req.usuario.rol === 'admin') {
    next();
  } else {
    res.status(403).json({ mensaje: 'Acceso solo para administradores' });
  }
};

module.exports = { proteger, soloAdmin };