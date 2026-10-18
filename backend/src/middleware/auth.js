const jwt = require('jsonwebtoken');
const User = require('../models/User');

const proteger = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      req.usuario = await User.findById(decoded.id).select('-password');

      if (!req.usuario) {
        return res.status(401).json({ mensaje: 'Usuario no encontrado' });
      }

      return next();
    } catch (error) {
      // AQUI CAPTURAMOS LA EXPIRACIÓN
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({
          error: "token_expired",
          message: "La sesión ha expirado o ya no es válida. Por favor, inicie sesión nuevamente."
        });
      }

      return res.status(401).json({ mensaje: 'Token inválido o expirado' });
    }
  }

  return res.status(401).json({ mensaje: 'No autorizado, token requerido' });
};

const soloAdmin = (req, res, next) => {
  if (req.usuario && req.usuario.rol === 'admin') {
    return next();
  }
  return res.status(403).json({ mensaje: 'Acceso solo para administradores' });
};

module.exports = { proteger, soloAdmin };