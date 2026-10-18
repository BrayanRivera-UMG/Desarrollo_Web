const mongoose = require('mongoose');

const productoEsquema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre del producto es obligatorio'],
      trim: true
    },
    marca: {
      type: String,
      trim: true
    },
    modelo: {
      type: String,
      trim: true
    },
    categoria: {
      type: String,
      required: [true, 'La categoría es obligatoria'],
      enum: ['Laptops', 'Accesorios', 'Monitores', 'Teclados', 'Audífonos']
    },
    codigo: {
      type: String,
      unique: true,
      required: true
    },
    precio: {
      type: Number,
      required: [true, 'El precio es obligatorio'],
      min: [0, 'El precio no puede ser negativo']
    },
    descripcion: {
      type: String,
      trim: true
    },
    imagen: {
      type: String,
      default: ''
    },
    caracteristicas: [String],
    especificaciones: [
      {
        nombre: String,
        valor: String
      }
    ],
    stock: {
      type: Number,
      default: 10,
      min: 0
    },
    disponible: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Producto', productoEsquema);