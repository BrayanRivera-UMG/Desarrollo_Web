# Tienda Tecnológica - Proyecto Web

## Descripción

Aplicación web full-stack de tienda tecnológica desarrollada como parte del curso de Desarrollo Web. El proyecto integra un frontend en React con un backend en Node.js + Express y una base de datos en MongoDB Atlas.

El sitio permite explorar productos, ver detalles, autenticar usuarios y administrar el catálogo con operaciones CRUD completas.

---

## Tecnologías Utilizadas

### Frontend
- React 19
- React Router DOM
- Bootstrap 5 + React-Bootstrap
- Context API + useReducer (estado global)
- Axios (cliente HTTP)

### Backend
- Node.js
- Express
- MongoDB Atlas (base de datos en la nube)
- Mongoose (ODM)
- JWT (autenticación)
- bcryptjs (encriptación de contraseñas)
- CORS

---

### Despliegue
- Frontend: Netlify
- Backend: Render

---

## Enlaces de Despliegue

- **Frontend (Netlify):** https://dwtarea4.netlify.app/
- **Backend (Render):** https://tienda-tecnologica-api.onrender.com/

---

## Endpoints de la API

### Autenticación

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Registrar usuario | No |
| POST | `/api/auth/login` | Iniciar sesión | No |
| GET | `/api/auth/perfil` | Obtener perfil del usuario autenticado | Sí (JWT) |

### Productos (CRUD)

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| GET | `/api/productos` | Listar productos (con filtros) | No |
| GET | `/api/productos/:id` | Obtener producto por ID | No |
| POST | `/api/productos` | Crear producto | Sí (JWT) |
| PUT | `/api/productos/:id` | Actualizar producto | Sí (JWT) |
| DELETE | `/api/productos/:id` | Eliminar producto | Sí (JWT) |

### Parámetros de filtrado

- `?categoria=Laptops` - Filtrar por categoría
- `?buscar=mac` - Búsqueda por nombre

---

## Ejemplo de payload para registro

```json
{
  "nombre": "Brayan Rivera",
  "email": "brayan@ejemplo.com",
  "password": "123456",
  "rol": "admin",
  "membresia": "Gold"
}
```
---
## Ejemplo de payload para crear producto

```json
{
  "nombre": "Apple MacBook Air M3",
  "marca": "Apple",
  "modelo": "MacBook Air M3",
  "categoria": "Laptops",
  "codigo": "LAP001",
  "precio": 12999,
  "descripcion": "Laptop ultradelgada con chip M3",
  "imagen": "./imagenes/laptop_apple.jpg",
  "stock": 10
}

```
---

## Como Ejecutarlo Localmente

```bash

cd backend
npm install
# Crear archivo .env con:
# MONGODB_URI=...
# PORT=4000
# JWT_SECRET=...
npm run dev

```
El servidor estara en `http://localhost:4000`

---

## Frontend

```bash

cd tienda-tecnologica
npm install
# Crear archivo .env con:
# REACT_APP_API_URL=http://localhost:4000/api
npm start

```
---

## Funcionalidades

* Catalogo de productos cargado desde MongoDB
* Detalle de producto con especificaciones
* Login y registro con JWT
* Panel de administración (CRUD)
* Ruta protegida para el perfil
* Estado global con Context API + useReducer
* Persistencia de sesión en localStorage
* Filtros y búsqueda en tiempo real

---

## Seguridad y Expiración de Sesión (Tarea 5)

### Backend
La expiración del token JWT está configurada a **5 minutos** mediante la variable de entorno `JWT_EXPIRES_IN=5m`. El middleware `proteger` captura el `TokenExpiredError` de la librería `jsonwebtoken` y responde con un JSON descriptivo con estado HTTP `401 Unauthorized`.

### Frontend
El cliente HTTP (`axios`) cuenta con un **interceptor de respuestas**. Cuando detecta un error `401` (que no sea del login), automáticamente:
1. Elimina el token y el usuario del `localStorage`.
2. Redirige al usuario a `/inicio-sesion`.
3. Muestra un `Alert` de React-Bootstrap indicando que la sesión ha expirado.

---

> [!NOTE]
> * Las contraseñas se encriptan con bcryptjs antes de guardarse.
> * La autenticación usa tokens JWT con expiración de 30 días.
> * El backend está desplegado en el plan gratuito de Render (puede tardar ~30s en "despertar").
> * La base de datos está en MongoDB Atlas (cluster gratuito M0).

---

## Estudiante

- **Nombre**: Brayan Kenet Rivera Quinilla
- **Carnet**: 9490 - 23 - 2835
- **Curso**: Desarrollo Web