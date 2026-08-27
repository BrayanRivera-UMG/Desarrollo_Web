
// IMPORTACIÓN DE IMÁGENES - Laptops
import laptopApple from '../imagenes/laptop_apple.jpg';
import laptopLenovo from '../imagenes/laptop_lenovo.jpg';
import laptopHP from '../imagenes/laptop_hp.jpg';
import laptopDell from '../imagenes/laptop_dell.jpg';
import laptopAsus from '../imagenes/laptop_asus.jpg';
import laptopGamer from '../imagenes/laptop_gamer.jpg';

// IMPORTACIÓN DE IMÁGENES - Accesorios
import mouseInalambrico from '../imagenes/mouse_inalambrico.jpg';
import mousepadLethal from '../imagenes/mousepad_lethal.jfif';
import microfonoRode from '../imagenes/microfono_Røde.jfif';
import bocinasLogitech from '../imagenes/bocinas_logitech.jfif';
import webcamLogitech from '../imagenes/webcam_logitech.jfif';
import reguladorAPC from '../imagenes/regulador_apc.jfif';
import usbKingston from '../imagenes/usb_kingston.jfif';

// IMPORTACIÓN DE IMÁGENES - Monitores
import monitorGamer from '../imagenes/monitor_gamer.jpg';
import monitorDell from '../imagenes/monitor_dell.jfif';
import monitorLG from '../imagenes/monitor_lg.jfif';

// IMPORTACIÓN DE IMÁGENES - Teclados
import tecladoLogitech from '../imagenes/teclado_logitech.jfif';
import tecladoRazer from '../imagenes/teclado_razer.jfif';
import tecladoCorsair from '../imagenes/teclado_corsair.jfif';
import tecladoAsus from '../imagenes/teclado_asus.jfif';

// IMPORTACIÓN DE IMÁGENES - Audífonos
import audifonoSony from '../imagenes/audifonos_sony_wf.jfif';
import audifonoApple from '../imagenes/audifonos_apple.jfif';
import audifonoSamsung from '../imagenes/audifonos_samsung.jfif';
import audifonoJBL from '../imagenes/audifonos_jbl_520.jfif';
import audifonoKoss from '../imagenes/audifonos_koss.jfif';
import audifonoSennheiserHD from '../imagenes/audifonos_sennheiser_hd.jfif';
import audifonoBose from '../imagenes/audifonos_bose.jfif';
import audifonoSennheiser from '../imagenes/audifonos_sennheiser.jfif';
import audifonoSkullcandy from '../imagenes/audifonos_skullcandy.jfif';

// PRODUCTOS DESTACADOS (Para el carrusel e inicio)
export const productosDestacados = [
  {
    id: 1,
    nombre: 'Laptop Gamer ASUS TUF',
    descripcion: 'La mejor laptop gamer para jugar sin límites',
    descripcionCorta: 'Laptop Gamer de alto rendimiento',
    precio: 'Q7,500.00',
    imagen: laptopGamer,
    categoria: 'Laptops'
  },
  {
    id: 2,
    nombre: 'Mouse Inalámbrico Logitech MX Master 3S',
    descripcion: 'Precisión y comodidad para tu día a día',
    descripcionCorta: 'Mouse ergonómico de alta precisión',
    precio: 'Q699.00',
    imagen: mouseInalambrico,
    categoria: 'Accesorios'
  },
  {
    id: 3,
    nombre: 'Monitor Gamer ASUS TUF VG27AQ',
    descripcion: 'Impresionante calidad de imagen para gaming',
    descripcionCorta: 'Monitor QHD 165Hz para gaming',
    precio: 'Q3,299.00',
    imagen: monitorGamer,
    categoria: 'Monitores'
  }
];

// TODOS LOS PRODUCTOS
export const todosLosProductos = [
  // ========== LAPTOPS ==========
  {
    id: 101,
    nombre: 'Apple MacBook Air M3',
    marca: 'Apple',
    modelo: 'MacBook Air M3',
    categoria: 'Laptops',
    codigo: 'LAP001',
    precio: 'Q12,999.00',
    imagen: laptopApple,
    descripcion: 'Laptop ultradelgada diseñada para estudiantes, profesionales y usuarios que buscan un excelente rendimiento, gran autonomía de batería y un diseño elegante para el trabajo diario.',
    caracteristicas: [
      'Procesador Apple M3',
      '16 GB de memoria RAM',
      '512 GB SSD',
      'Pantalla Retina de 13.6 pulgadas',
      'Wi-Fi 6E y Bluetooth',
      'Sistema operativo macOS'
    ],
    especificaciones: [
      { nombre: 'Procesador', valor: 'Apple M3' },
      { nombre: 'RAM', valor: '16 GB' },
      { nombre: 'Almacenamiento', valor: '512 GB SSD' },
      { nombre: 'Pantalla', valor: '13.6" Retina' },
      { nombre: 'Sistema Operativo', valor: 'macOS' }
    ]
  },
  {
    id: 102,
    nombre: 'Lenovo ThinkPad E16 Gen 2',
    marca: 'Lenovo',
    modelo: 'ThinkPad E16 Gen 2',
    categoria: 'Laptops',
    codigo: 'LAP002',
    precio: 'Q8,499.00',
    imagen: laptopLenovo,
    descripcion: 'Equipo orientado al trabajo profesional y empresarial. Ofrece gran estabilidad, excelente teclado y alto rendimiento para aplicaciones de oficina, programación y estudio.',
    caracteristicas: [
      'Procesador Intel Core i7',
      '16 GB RAM',
      'SSD de 512 GB',
      'Pantalla Full HD de 16"',
      'Wi-Fi 6',
      'Windows 11'
    ],
    especificaciones: [
      { nombre: 'Procesador', valor: 'Intel Core i7' },
      { nombre: 'RAM', valor: '16 GB' },
      { nombre: 'Almacenamiento', valor: '512 GB SSD' },
      { nombre: 'Pantalla', valor: '16" Full HD' },
      { nombre: 'Sistema Operativo', valor: 'Windows 11' }
    ]
  },
  {
    id: 103,
    nombre: 'HP Pavilion 15',
    marca: 'HP',
    modelo: 'Pavilion 15',
    categoria: 'Laptops',
    codigo: 'LAP003',
    precio: 'Q7,899.00',
    imagen: laptopHP,
    descripcion: 'Laptop ideal para estudiantes y profesionales que buscan un equipo confiable para realizar tareas, navegar por Internet, trabajar con documentos y disfrutar contenido multimedia.',
    caracteristicas: [
      'Procesador Intel Core i5',
      '16 GB RAM',
      'SSD de 512 GB',
      'Pantalla Full HD de 15.6"',
      'Windows 11',
      'Wi-Fi y Bluetooth'
    ],
    especificaciones: [
      { nombre: 'Procesador', valor: 'Intel Core i5' },
      { nombre: 'RAM', valor: '16 GB' },
      { nombre: 'Almacenamiento', valor: '512 GB SSD' },
      { nombre: 'Pantalla', valor: '15.6" Full HD' },
      { nombre: 'Sistema Operativo', valor: 'Windows 11' }
    ]
  },
  {
    id: 104,
    nombre: 'Dell Inspiron 15',
    marca: 'Dell',
    modelo: 'Inspiron 15',
    categoria: 'Laptops',
    codigo: 'LAP004',
    precio: 'Q8,299.00',
    imagen: laptopDell,
    descripcion: 'Equipo diseñado para productividad y uso cotidiano, ofreciendo excelente rendimiento, gran almacenamiento y una construcción resistente.',
    caracteristicas: [
      'Procesador Intel Core i7',
      '16 GB RAM',
      'SSD de 1 TB',
      'Pantalla Full HD de 15.6"',
      'Windows 11',
      'Puerto HDMI y USB-C'
    ],
    especificaciones: [
      { nombre: 'Procesador', valor: 'Intel Core i7' },
      { nombre: 'RAM', valor: '16 GB' },
      { nombre: 'Almacenamiento', valor: '1 TB SSD' },
      { nombre: 'Pantalla', valor: '15.6" Full HD' },
      { nombre: 'Sistema Operativo', valor: 'Windows 11' }
    ]
  },
  {
    id: 105,
    nombre: 'ASUS VivoBook 15',
    marca: 'ASUS',
    modelo: 'VivoBook 15',
    categoria: 'Laptops',
    codigo: 'LAP005',
    precio: 'Q7,499.00',
    imagen: laptopAsus,
    descripcion: 'Laptop moderna y ligera para estudiantes, oficinas y uso doméstico, ofreciendo una excelente relación entre rendimiento y precio.',
    caracteristicas: [
      'Procesador AMD Ryzen 7',
      '16 GB RAM',
      'SSD de 512 GB',
      'Pantalla Full HD de 15.6"',
      'Windows 11',
      'Wi-Fi 6'
    ],
    especificaciones: [
      { nombre: 'Procesador', valor: 'AMD Ryzen 7' },
      { nombre: 'RAM', valor: '16 GB' },
      { nombre: 'Almacenamiento', valor: '512 GB SSD' },
      { nombre: 'Pantalla', valor: '15.6" Full HD' },
      { nombre: 'Sistema Operativo', valor: 'Windows 11' }
    ]
  },
  {
    id: 106,
    nombre: 'Laptop Gamer ASUS TUF',
    marca: 'ASUS',
    modelo: 'TUF Gaming F15',
    categoria: 'Laptops',
    codigo: 'LAP006',
    precio: 'Q7,500.00',
    imagen: laptopGamer,
    descripcion: 'Laptop gamer diseñada para ofrecer el máximo rendimiento en videojuegos, con excelente refrigeración y pantalla de alta frecuencia.',
    caracteristicas: [
      'Procesador Intel Core i7',
      '16 GB RAM',
      'SSD de 512 GB',
      'Pantalla 144Hz',
      'NVIDIA GeForce RTX',
      'Windows 11'
    ],
    especificaciones: [
      { nombre: 'Procesador', valor: 'Intel Core i7' },
      { nombre: 'RAM', valor: '16 GB' },
      { nombre: 'Almacenamiento', valor: '512 GB SSD' },
      { nombre: 'Pantalla', valor: '15.6" 144Hz' },
      { nombre: 'GPU', valor: 'NVIDIA RTX' },
      { nombre: 'Sistema Operativo', valor: 'Windows 11' }
    ]
  },

  // ========== ACCESORIOS ==========
  {
    id: 201,
    nombre: 'Mouse Inalámbrico Logitech MX Master 3S',
    marca: 'Logitech',
    modelo: 'MX Master 3S',
    categoria: 'Accesorios',
    codigo: 'ACC001',
    precio: 'Q699.00',
    imagen: mouseInalambrico,
    descripcion: 'Mouse inalámbrico ergonómico diseñado para oficina, diseño gráfico y productividad. Ofrece gran precisión, múltiples botones programables y una batería de larga duración.',
    caracteristicas: [
      'Conexión Bluetooth y USB',
      'Sensor de alta precisión',
      'Batería recargable',
      'Diseño ergonómico',
      'Compatible con Windows y macOS'
    ],
    especificaciones: [
      { nombre: 'Conectividad', valor: 'Bluetooth / USB' },
      { nombre: 'Batería', valor: 'Recargable' },
      { nombre: 'Botones', valor: '7 programables' },
      { nombre: 'Compatibilidad', valor: 'Windows / macOS' }
    ]
  },
  {
    id: 202,
    nombre: 'Mousepad Lethal Gaming Gear Saturn Pro',
    marca: 'Lethal Gaming Gear',
    modelo: 'Saturn Pro',
    categoria: 'Accesorios',
    codigo: 'ACC002',
    precio: 'Q349.00',
    imagen: mousepadLethal,
    descripcion: 'Mousepad premium para videojuegos que proporciona un excelente control y deslizamiento para ratones ópticos y láser.',
    caracteristicas: [
      'Superficie de tela premium',
      'Base antideslizante',
      'Alta precisión',
      'Ideal para gaming',
      'Fácil limpieza'
    ],
    especificaciones: [
      { nombre: 'Material', valor: 'Tela premium' },
      { nombre: 'Base', valor: 'Antideslizante' },
      { nombre: 'Uso', valor: 'Gaming' }
    ]
  },
  {
    id: 203,
    nombre: 'Micrófono RØDE NT-USB+',
    marca: 'RØDE',
    modelo: 'NT-USB+',
    categoria: 'Accesorios',
    codigo: 'ACC003',
    precio: 'Q1,699.00',
    imagen: microfonoRode,
    descripcion: 'Micrófono USB profesional ideal para grabaciones, videoconferencias, podcasts, clases virtuales y transmisiones en vivo, ofreciendo una excelente calidad de sonido.',
    caracteristicas: [
      'Conexión USB-C',
      'Calidad de grabación profesional',
      'Monitoreo de audio sin retraso',
      'Compatible con Windows y macOS',
      'Incluye soporte de escritorio'
    ],
    especificaciones: [
      { nombre: 'Conectividad', valor: 'USB-C' },
      { nombre: 'Calidad', valor: 'Profesional' },
      { nombre: 'Compatibilidad', valor: 'Windows / macOS' }
    ]
  },
  {
    id: 204,
    nombre: 'Bocinas Logitech G560 RGB',
    marca: 'Logitech',
    modelo: 'G560 RGB',
    categoria: 'Accesorios',
    codigo: 'ACC004',
    precio: 'Q2,299.00',
    imagen: bocinasLogitech,
    descripcion: 'Sistema de bocinas para computadora con sonido envolvente y efectos de iluminación RGB sincronizados para ofrecer una experiencia inmersiva en videojuegos, música y películas.',
    caracteristicas: [
      'Sonido envolvente de alta calidad',
      'Iluminación RGB LIGHTSYNC',
      'Conectividad USB y Bluetooth',
      'Subwoofer incluido',
      'Compatible con PC y dispositivos móviles'
    ],
    especificaciones: [
      { nombre: 'Conectividad', valor: 'USB / Bluetooth' },
      { nombre: 'Iluminación', valor: 'RGB LIGHTSYNC' },
      { nombre: 'Subwoofer', valor: 'Incluido' }
    ]
  },
  {
    id: 205,
    nombre: 'Webcam Logitech Brio 500',
    marca: 'Logitech',
    modelo: 'Brio 500',
    categoria: 'Accesorios',
    codigo: 'ACC005',
    precio: 'Q1,099.00',
    imagen: webcamLogitech,
    descripcion: 'Webcam Full HD ideal para videoconferencias, clases virtuales y transmisiones en línea, ofreciendo una imagen nítida y un micrófono integrado de alta calidad.',
    caracteristicas: [
      'Resolución Full HD 1080p',
      'Micrófono integrado',
      'Enfoque automático',
      'Conexión USB',
      'Compatible con Windows y macOS'
    ],
    especificaciones: [
      { nombre: 'Resolución', valor: '1080p Full HD' },
      { nombre: 'Micrófono', valor: 'Integrado' },
      { nombre: 'Conexión', valor: 'USB' },
      { nombre: 'Compatibilidad', valor: 'Windows / macOS' }
    ]
  },
  {
    id: 206,
    nombre: 'Regulador APC Line-R 1200VA',
    marca: 'APC',
    modelo: 'Line-R 1200VA',
    categoria: 'Accesorios',
    codigo: 'ACC006',
    precio: 'Q799.00',
    imagen: reguladorAPC,
    descripcion: 'Regulador de voltaje diseñado para proteger computadoras y equipos electrónicos contra variaciones eléctricas, prolongando su vida útil.',
    caracteristicas: [
      'Capacidad de 1200VA',
      'Protección contra sobrecargas',
      'Indicadores LED',
      'Múltiples tomacorrientes',
      'Diseño compacto'
    ],
    especificaciones: [
      { nombre: 'Capacidad', valor: '1200VA' },
      { nombre: 'Protección', valor: 'Sobrecargas' },
      { nombre: 'Tomacorrientes', valor: 'Múltiples' }
    ]
  },
  {
    id: 207,
    nombre: 'Hub USB Kingston Nucleum',
    marca: 'Kingston',
    modelo: 'Nucleum',
    categoria: 'Accesorios',
    codigo: 'ACC007',
    precio: 'Q599.00',
    imagen: usbKingston,
    descripcion: 'Hub USB multifuncional que permite ampliar la cantidad de puertos disponibles para conectar memorias, monitores, teclados, mouse y otros dispositivos.',
    caracteristicas: [
      'Conexión USB-C',
      'Puertos USB 3.0',
      'Salida HDMI',
      'Lector de tarjetas SD y microSD',
      'Diseño portátil'
    ],
    especificaciones: [
      { nombre: 'Conexión', valor: 'USB-C' },
      { nombre: 'Puertos', valor: 'USB 3.0' },
      { nombre: 'Salida', valor: 'HDMI' },
      { nombre: 'Lector', valor: 'SD / microSD' }
    ]
  },

  // ========== MONITORES ==========
  {
    id: 301,
    nombre: 'Monitor ASUS TUF Gaming VG27AQ',
    marca: 'ASUS',
    modelo: 'TUF Gaming VG27AQ',
    categoria: 'Monitores',
    codigo: 'MON001',
    precio: 'Q3,299.00',
    imagen: monitorGamer,
    descripcion: 'Monitor gamer diseñado para ofrecer una excelente calidad de imagen, alta frecuencia de actualización y gran rendimiento en videojuegos y aplicaciones multimedia.',
    caracteristicas: [
      'Pantalla IPS de 27 pulgadas',
      'Resolución QHD 2560 x 1440',
      'Frecuencia de 165 Hz',
      'Tiempo de respuesta de 1 ms',
      'Compatible con HDR',
      'Entradas HDMI y DisplayPort'
    ],
    especificaciones: [
      { nombre: 'Pantalla', valor: '27" IPS' },
      { nombre: 'Resolución', valor: 'QHD (2560x1440)' },
      { nombre: 'Frecuencia', valor: '165 Hz' },
      { nombre: 'Respuesta', valor: '1 ms' },
      { nombre: 'HDR', valor: 'Compatible' }
    ]
  },
  {
    id: 302,
    nombre: 'Monitor Dell UltraSharp U2723QE',
    marca: 'Dell',
    modelo: 'UltraSharp U2723QE',
    categoria: 'Monitores',
    codigo: 'MON002',
    precio: 'Q4,199.00',
    imagen: monitorDell,
    descripcion: 'Monitor profesional diseñado para edición de fotografía, video, programación y trabajos que requieren una gran fidelidad de color.',
    caracteristicas: [
      'Pantalla IPS de 27 pulgadas',
      'Resolución 4K UHD',
      'USB-C',
      'HDMI',
      'DisplayPort',
      'Altavoces integrados'
    ],
    especificaciones: [
      { nombre: 'Pantalla', valor: '27" IPS' },
      { nombre: 'Resolución', valor: '4K UHD' },
      { nombre: 'Conectividad', valor: 'USB-C / HDMI / DisplayPort' },
      { nombre: 'Altavoces', valor: 'Integrados' }
    ]
  },
  {
    id: 303,
    nombre: 'Monitor LG UltraGear 27GP850',
    marca: 'LG',
    modelo: 'UltraGear 27GP850',
    categoria: 'Monitores',
    codigo: 'MON003',
    precio: 'Q3,799.00',
    imagen: monitorLG,
    descripcion: 'Monitor gamer de alto desempeño ideal para videojuegos, streaming y entretenimiento, con colores vivos y gran fluidez en la imagen.',
    caracteristicas: [
      'Pantalla Nano IPS de 27 pulgadas',
      'Resolución QHD',
      'Frecuencia de 180 Hz',
      'Tiempo de respuesta de 1 ms',
      'Compatible con G-Sync y FreeSync',
      'HDMI y DisplayPort'
    ],
    especificaciones: [
      { nombre: 'Pantalla', valor: '27" Nano IPS' },
      { nombre: 'Resolución', valor: 'QHD' },
      { nombre: 'Frecuencia', valor: '180 Hz' },
      { nombre: 'Respuesta', valor: '1 ms' },
      { nombre: 'G-Sync', valor: 'Compatible' },
      { nombre: 'FreeSync', valor: 'Compatible' }
    ]
  },

  // ========== TECLADOS ==========
  {
    id: 401,
    nombre: 'Teclado Logitech G Pro X',
    marca: 'Logitech',
    modelo: 'G Pro X',
    categoria: 'Teclados',
    codigo: 'TEC001',
    precio: 'Q1,299.00',
    imagen: tecladoLogitech,
    descripcion: 'Teclado mecánico diseñado para videojuegos y uso profesional, con interruptores intercambiables y un diseño compacto.',
    caracteristicas: [
      'Teclado mecánico',
      'Retroiluminación RGB',
      'Switches intercambiables',
      'Conexión USB',
      'Diseño TKL'
    ],
    especificaciones: [
      { nombre: 'Tipo', valor: 'Mecánico' },
      { nombre: 'Iluminación', valor: 'RGB' },
      { nombre: 'Switches', valor: 'Intercambiables' },
      { nombre: 'Diseño', valor: 'TKL' }
    ]
  },
  {
    id: 402,
    nombre: 'Teclado Razer BlackWidow V4',
    marca: 'Razer',
    modelo: 'BlackWidow V4',
    categoria: 'Teclados',
    codigo: 'TEC002',
    precio: 'Q1,599.00',
    imagen: tecladoRazer,
    descripcion: 'Teclado gamer de alto rendimiento con iluminación RGB, ideal para jugadores que buscan velocidad y precisión.',
    caracteristicas: [
      'Switches mecánicos Razer',
      'RGB Chroma',
      'Reposamuñecas incluido',
      'Teclas multimedia',
      'USB'
    ],
    especificaciones: [
      { nombre: 'Tipo', valor: 'Mecánico' },
      { nombre: 'Switches', valor: 'Razer' },
      { nombre: 'Iluminación', valor: 'RGB Chroma' },
      { nombre: 'Reposamuñecas', valor: 'Incluido' }
    ]
  },
  {
    id: 403,
    nombre: 'Teclado Corsair K70 RGB Pro',
    marca: 'Corsair',
    modelo: 'K70 RGB Pro',
    categoria: 'Teclados',
    codigo: 'TEC003',
    precio: 'Q1,499.00',
    imagen: tecladoCorsair,
    descripcion: 'Teclado mecánico de alta precisión para videojuegos, programación y uso profesional, con estructura de aluminio.',
    caracteristicas: [
      'Switches Cherry MX',
      'RGB personalizable',
      'Puerto USB',
      'Estructura de aluminio',
      'Teclas multimedia'
    ],
    especificaciones: [
      { nombre: 'Tipo', valor: 'Mecánico' },
      { nombre: 'Switches', valor: 'Cherry MX' },
      { nombre: 'Iluminación', valor: 'RGB' },
      { nombre: 'Estructura', valor: 'Aluminio' }
    ]
  },
  {
    id: 404,
    nombre: 'Teclado ASUS ROG Strix Scope II',
    marca: 'ASUS',
    modelo: 'ROG Strix Scope II',
    categoria: 'Teclados',
    codigo: 'TEC004',
    precio: 'Q1,399.00',
    imagen: tecladoAsus,
    descripcion: 'Teclado mecánico para videojuegos con diseño resistente, iluminación RGB y excelente respuesta para largas sesiones de uso.',
    caracteristicas: [
      'Switches mecánicos ASUS',
      'Retroiluminación RGB',
      'Conexión USB',
      'Diseño resistente',
      'Compatible con Aura Sync'
    ],
    especificaciones: [
      { nombre: 'Tipo', valor: 'Mecánico' },
      { nombre: 'Switches', valor: 'ASUS' },
      { nombre: 'Iluminación', valor: 'RGB' },
      { nombre: 'Aura Sync', valor: 'Compatible' }
    ]
  },

  // ========== AUDÍFONOS ==========
  {
    id: 501,
    nombre: 'Sony WF-1000XM5',
    marca: 'Sony',
    modelo: 'WF-1000XM5',
    categoria: 'Audífonos',
    codigo: 'AUD001',
    precio: 'Q2,499.00',
    imagen: audifonoSony,
    descripcion: 'Audífonos inalámbricos premium con cancelación activa de ruido, ideales para música, llamadas y entretenimiento.',
    caracteristicas: [
      'Cancelación activa de ruido',
      'Bluetooth 5.3',
      'Hasta 24 horas de batería',
      'Resistencia IPX4',
      'Sonido Hi-Res'
    ],
    especificaciones: [
      { nombre: 'Cancelación', valor: 'Activa de ruido' },
      { nombre: 'Bluetooth', valor: '5.3' },
      { nombre: 'Batería', valor: '24 horas' },
      { nombre: 'Resistencia', valor: 'IPX4' }
    ]
  },
  {
    id: 502,
    nombre: 'Apple AirPods Pro 2',
    marca: 'Apple',
    modelo: 'AirPods Pro 2',
    categoria: 'Audífonos',
    codigo: 'AUD002',
    precio: 'Q2,299.00',
    imagen: audifonoApple,
    descripcion: 'Audífonos inalámbricos con excelente calidad de sonido, integración con dispositivos Apple y cancelación de ruido.',
    caracteristicas: [
      'Chip Apple H2',
      'Audio espacial',
      'Cancelación activa de ruido',
      'Bluetooth',
      'Hasta 30 horas con estuche'
    ],
    especificaciones: [
      { nombre: 'Chip', valor: 'Apple H2' },
      { nombre: 'Audio', valor: 'Espacial' },
      { nombre: 'Cancelación', valor: 'Activa de ruido' },
      { nombre: 'Batería', valor: '30 horas (con estuche)' }
    ]
  },
  {
    id: 503,
    nombre: 'Samsung Galaxy Buds3 Pro',
    marca: 'Samsung',
    modelo: 'Galaxy Buds3 Pro',
    categoria: 'Audífonos',
    codigo: 'AUD003',
    precio: 'Q1,899.00',
    imagen: audifonoSamsung,
    descripcion: 'Audífonos inalámbricos con sonido de alta fidelidad, cancelación inteligente de ruido y diseño ergonómico.',
    caracteristicas: [
      'Bluetooth 5.4',
      'Cancelación activa de ruido',
      'Audio de 24 bits',
      'Resistencia al agua',
      'Hasta 30 horas de batería'
    ],
    especificaciones: [
      { nombre: 'Bluetooth', valor: '5.4' },
      { nombre: 'Cancelación', valor: 'Activa de ruido' },
      { nombre: 'Audio', valor: '24 bits' },
      { nombre: 'Batería', valor: '30 horas' }
    ]
  },
  {
    id: 504,
    nombre: 'JBL Tune Flex',
    marca: 'JBL',
    modelo: 'Tune Flex',
    categoria: 'Audífonos',
    codigo: 'AUD004',
    precio: 'Q899.00',
    imagen: audifonoJBL,
    descripcion: 'Audífonos True Wireless con sonido JBL Pure Bass, cómodos para el uso diario y llamadas.',
    caracteristicas: [
      'Bluetooth 5.2',
      'JBL Pure Bass',
      'Micrófonos integrados',
      'Resistencia IPX4',
      'Hasta 32 horas de batería'
    ],
    especificaciones: [
      { nombre: 'Bluetooth', valor: '5.2' },
      { nombre: 'Sonido', valor: 'JBL Pure Bass' },
      { nombre: 'Resistencia', valor: 'IPX4' },
      { nombre: 'Batería', valor: '32 horas' }
    ]
  },
  {
    id: 505,
    nombre: 'Koss Porta Pro',
    marca: 'Koss',
    modelo: 'Porta Pro',
    categoria: 'Audífonos',
    codigo: 'AUD005',
    precio: 'Q899.00',
    imagen: audifonoKoss,
    descripcion: 'Audífonos legendarios con sonido cálido y diseño icónico, perfectos para audiófilos.',
    caracteristicas: [
      'Sonido cálido y detallado',
      'Diseño plegable',
      'Ligero y portátil',
      'Incluye estuche'
    ],
    especificaciones: [
      { nombre: 'Tipo', valor: 'On-Ear' },
      { nombre: 'Sonido', valor: 'Cálido y detallado' },
      { nombre: 'Diseño', valor: 'Plegable' }
    ]
  },
  {
    id: 506,
    nombre: 'Sennheiser HD 25',
    marca: 'Sennheiser',
    modelo: 'HD 25',
    categoria: 'Audífonos',
    codigo: 'AUD006',
    precio: 'Q899.00',
    imagen: audifonoSennheiserHD,
    descripcion: 'Audífonos profesionales para DJ y monitoreo, con excelente aislamiento y durabilidad.',
    caracteristicas: [
      'Excelente aislamiento de ruido',
      'Construcción robusta',
      'Sonido preciso',
      'Diadema ajustable'
    ],
    especificaciones: [
      { nombre: 'Tipo', valor: 'On-Ear' },
      { nombre: 'Aislamiento', valor: 'Excelente' },
      { nombre: 'Uso', valor: 'Profesional / DJ' }
    ]
  },
  {
    id: 507,
    nombre: 'Bose QuietComfort Ultra',
    marca: 'Bose',
    modelo: 'QuietComfort Ultra',
    categoria: 'Audífonos',
    codigo: 'AUD007',
    precio: 'Q899.00',
    imagen: audifonoBose,
    descripcion: 'Audífonos over-ear con la mejor cancelación de ruido del mercado y sonido inmersivo.',
    caracteristicas: [
      'Cancelación de ruido líder',
      'Sonido inmersivo',
      'Hasta 24 horas de batería',
      'Diseño cómodo'
    ],
    especificaciones: [
      { nombre: 'Tipo', valor: 'Over-Ear' },
      { nombre: 'Cancelación', valor: 'Líder en el mercado' },
      { nombre: 'Batería', valor: '24 horas' }
    ]
  },
  {
    id: 508,
    nombre: 'Sennheiser Momentum 4 Wireless',
    marca: 'Sennheiser',
    modelo: 'Momentum 4 Wireless',
    categoria: 'Audífonos',
    codigo: 'AUD008',
    precio: 'Q899.00',
    imagen: audifonoSennheiser,
    descripcion: 'Audífonos premium con sonido de alta fidelidad y batería de larga duración.',
    caracteristicas: [
      'Sonido Hi-Fi',
      'Cancelación de ruido',
      'Hasta 60 horas de batería',
      'Diseño elegante'
    ],
    especificaciones: [
      { nombre: 'Tipo', valor: 'Over-Ear' },
      { nombre: 'Sonido', valor: 'Hi-Fi' },
      { nombre: 'Cancelación', valor: 'Activa de ruido' },
      { nombre: 'Batería', valor: '60 horas' }
    ]
  },
  {
    id: 509,
    nombre: 'Skullcandy Cassette Wireless',
    marca: 'Skullcandy',
    modelo: 'Cassette',
    categoria: 'Audífonos',
    codigo: 'AUD009',
    precio: 'Q799.00',
    imagen: audifonoSkullcandy,
    descripcion: 'Audífonos inalámbricos diseñados para uso diario, ofreciendo comodidad, buena calidad de sonido y controles táctiles.',
    caracteristicas: [
      'Bluetooth 5.2',
      'Micrófono integrado',
      'Controles táctiles',
      'Resistencia IP55',
      'Hasta 38 horas de batería'
    ],
    especificaciones: [
      { nombre: 'Bluetooth', valor: '5.2' },
      { nombre: 'Resistencia', valor: 'IP55' },
      { nombre: 'Batería', valor: '38 horas' },
      { nombre: 'Controles', valor: 'Táctiles' }
    ]
  }
];

// FUNCIÓN PARA OBTENER UN PRODUCTO POR ID
export const obtenerProductoPorId = (id) => {
  return todosLosProductos.find(producto => producto.id === id);
};