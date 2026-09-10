# Tienda Tecnológica - Proyecto Web

## Descripción

Este proyecto es una tienda en línea de productos tecnológicos desarrollada como parte del curso de Desarrollo Web. La página web permite a los usuarios explorar un catálogo de productos, ver detalles de cada artículo y simular un proceso de compra, ahora con autenticación de usuarios mediante estado global.

El sitio está diseñado con un enfoque en la experiencia de usuario, ofreciendo una navegación intuitiva y una interfaz atractiva para mostrar diferentes categorías de productos tecnológicos como:

- **Laptops**: De marcas como Apple, Dell, HP, Lenovo y ASUS
- **Audífonos**: De Sony, Bose, JBL, Sennheiser y más
- **Periféricos**: Teclados, mouse, monitores y accesorios
- **Accesorios**: Cámaras web, micrófonos, reguladores de voltaje y memorias USB

---

## Funcionalidades Principales

- **Catálogo de productos**: Visualización organizada de todos los productos disponibles.
- **Detalle de producto**: Información completa de cada artículo al seleccionarlo.
- **Carrito de compras**: Sistema para agregar productos y simular una compra.
- **Autenticación global (Tarea 3)**: Login, Logout y Perfil de usuario manejados con estado global.
- **Navbar dinámico**: La barra de navegación reacciona en tiempo real al estado de sesión.
- **Ruta protegida**: El perfil solo es accesible si el usuario está autenticado.
- **Persistencia de sesión**: La sesión se mantiene al recargar la página (localStorage).
- **Diseño responsivo**: Adaptable a diferentes dispositivos y tamaños de pantalla.

---

## Tecnología de Estado Global (Tarea 3)

### Opción A: Context API + useReducer

Se eligió la combinación nativa de React **useContext + useReducer** por las siguientes razones:

1. **No requiere dependencias externas**: Es parte del core de React, lo que mantiene el proyecto ligero.
2. **Curva de aprendizaje accesible**: La lógica del reducer es clara y fácil de mantener.
3. **Escalabilidad adecuada**: Para el tamaño de este proyecto, Context API es suficiente; Redux sería sobredimensionado.
4. **Integración natural con React**: Los hooks personalizados (useAuth) simplifican el acceso al estado desde cualquier componente.
5. **Cumple con los requisitos académicos**: Maneja las 4+ acciones requeridas (LOGIN, LOGOUT, UPDATE_PROFILE, SET_ERROR, CLEAR_ERROR, RESTORE_SESSION).

### Flujo del estado global

- **LOGIN**: Guarda el usuario y marca isAuthenticated = true.
- **LOGOUT**: Limpia la sesión y marca isAuthenticated = false.
- **UPDATE_PROFILE**: Actualiza datos del usuario.
- **SET_ERROR / CLEAR_ERROR**: Manejo de errores de validación.
- **RESTORE_SESSION**: Recupera la sesión desde localStorage.

**Sin prop drilling**: Ningún componente pasa props manualmente. Todos consumen el estado a través del hook useAuth().

---

## Descripción de los Componentes

### Componentes de Layout

- **NavbarComponent.js**: Barra de navegación responsiva con React-Bootstrap. Cambia dinámicamente según el estado de autenticación (muestra "Iniciar Sesión" o el nombre del usuario con menú de perfil y logout).
- **FooterComponent.js**: Pie de página reutilizable con información del estudiante y componentes desarrollados. Presente en todas las vistas.

### Páginas principales

- **Inicio.js**: Página principal con carrusel de productos destacados, tarjetas (Cards) y acceso rápido a categorías.
- **Productos.js**: Catálogo completo con filtros por categoría y búsqueda en tiempo real.
- **DetalleProducto.js**: Vista detallada de cada producto con Accordion, Table, ListGroup y Badge.
- **Carrito.js**: Carrito de compras con tabla de productos, resumen y formulario de compra.
- **InicioSesion.js**: Formulario de login con validaciones. Dispara la acción global LOGIN.
- **RegistroUsuario.js**: Formulario de registro con validaciones básicas.
- **Perfil.js**: Dashboard del usuario autenticado. Muestra datos de sesión, membresía e historial de pedidos simulado. Ruta protegida.

### Estado Global

- **AuthContext.js**: Define el contexto, el estado inicial y el reducer con 6 acciones.
- **useAuth.js**: Hook personalizado que expone el estado y las acciones de autenticación.

### Datos

- **productosData.js**: Archivo centralizado con la información de todos los productos (nombre, precio, categoría, especificaciones, imagen).

---

## Tecnologías Utilizadas

- **React 19**: Biblioteca principal para la interfaz de usuario.
- **React Router DOM**: Navegación entre páginas.
- **Bootstrap 5 + React-Bootstrap**: Diseño responsivo y componentes UI.
- **Context API + useReducer**: Gestión de estado global (autenticación).
- **localStorage**: Persistencia de sesión.
- **JavaScript (ES6+)**: Lógica y funcionalidades.
- **Git / GitHub**: Control de versiones.
- **Netlify**: Despliegue continuo.

---

## Enlace de Visualización

Sitio desplegado en Netlify: https://dwtarea3.netlify.app/

---

## Estudiante

- **Nombre**: Brayan Kenet Rivera Quinilla
- **Carnet**: 9490 - 23 - 2835
- **Curso**: Desarrollo Web

