const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productoRoutes = require('./routes/productoRoutes');

const app = express();

// Conectar a MongoDB
connectDB();

// Middlewares
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    /\.netlify\.app$/,      // Permitir cualquier subdominio de Netlify
  ],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir imágenes estáticas desde backend/imagenes/
app.use('/imagenes', express.static(path.join(__dirname, '../imagenes')));

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({
    mensaje: 'API Tienda Tecnológica funcionando correctamente',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      productos: '/api/productos',
      imagenes: '/imagenes/:archivo'
    }
  });
});

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/productos', productoRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Entorno: ${process.env.NODE_ENV || 'development'}`);
});