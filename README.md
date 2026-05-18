# InvControl Dashboard

Dashboard de gestión de inventario desarrollado con HTML, CSS y JavaScript vanilla. Permite visualizar ventas, gastos, ingresos, órdenes recientes y analíticas, con soporte para **modo oscuro** y diseño **responsive**.

---

##  Estructura de archivos

```
invcontrol/
├── index.html        # Estructura principal del dashboard
├── style.css         # Estilos base, componentes y media queries
├── dark-theme.css    # Variables y estilos para el modo oscuro
├── index.js          # Lógica del sidebar, theme toggler y órdenes
└── images/
    ├── logo.svg
    ├── profile1.jpg
    ├── profile2.jpg
    ├── profile3.jpg
    └── profile4.jpg
```

---

##  Funcionalidades

- **Tarjetas de métricas** — Ventas, Gastos e Ingresos con círculos de progreso SVG
- **Tabla de órdenes** — Renderizada dinámicamente desde un array en JS con estados (pendiente, entregado, rechazado)
- **Sidebar de navegación** — Con badge de mensajes no leídos e ítem activo resaltado
- **Modo oscuro** — Activado con un toggle de sol/luna
- **Menú hamburguesa** — Drawer lateral con overlay en mobile
- **Panel derecho** — Actualizaciones recientes y analíticas de ventas

---

##  Responsive

| Breakpoint |                              Comportamiento                                             |
|------------|-----------------------------------------------------------------------------------------|
| `≤ 1024px` | Sidebar colapsa a solo íconos. Cards en columna única.                                  |
| `≤ 768px`  | Sidebar se convierte en drawer con botón hamburguesa. Panel derecho pasa a topbar fija. |
| `≤ 480px`  | Fuente reducida, márgenes ajustados para móviles pequeños.                              |

---

##  Modo oscuro

Se activa agregando la clase `dark-theme-variables` al `<body>`. Las variables CSS de `:root` se sobreescriben automáticamente.

```js
document.body.classList.toggle('dark-theme-variables');
```

---

## Tecnologías

- HTML5
- CSS3 (Grid, Variables, SVG animations, Media queries)
- JavaScript ES6 (classList API, template literals, arrow functions)
- [Material Icons Sharp](https://fonts.google.com/icons) — Google Fonts

---

## Cómo usar

1. Clona el repositorio
```bash
git clone https://github.com/tu-usuario/invcontrol.git
```

2. Abre `index.html` en tu navegador o usa **Live Server** en VS Code.

> No requiere instalación de dependencias.

---

## + Agregar órdenes

Edita el array `Orders` en `index.js`:

```js
const Orders = [
  {
    productName: 'Bolso denim',
    productNumber: 45732,
    paymentStatus: 'Previsto',
    shipping: 'pending'    
  },
];
```
