# Augussep – Sitio web (3 páginas)

Abre `index.html` (raíz): redirige a la página de inicio.

```
augussep-web/
├── index.html            → redirige a inicio/
├── images/               → imágenes compartidas (hero.jpg, harina.jpg, aceite.jpg, favicon)
├── inicio/               → index.html · index.css · index.js
├── sobre-nosotros/       → index.html · index.css · index.js
└── productos/            → index.html · index.css · index.js
```

Cada carpeta es independiente: su CSS trae los estilos comunes (encabezado, botones,
cotización, pie de página) y al final los propios de esa página. El JS es el mismo en las tres.

## Navegación
- INICIO / SOBRE NOSOTROS / PRODUCTOS → abren cada página.
- COTIZA AHORA → baja a "Solicita tu cotización", que está al final de las tres páginas.
- "Cotizar ahora" de cada producto → baja al formulario con ese producto ya elegido.

## Antes de publicar
1. WhatsApp: en `index.js` de las 3 carpetas, `WHATSAPP_NUMBER = "51943591748"`
   (tomado del saco de harina). Cámbialo si el número de ventas es otro.
2. Fichas técnicas: la de harina ya está en `fichas/` y enlazada al botón "Descargar ficha técnica (PDF)".
   Cuando tengas la del aceite, guárdala en `fichas/` y pon su ruta en `SHEETS.aceite` en los 3 `index.js`.
   Mientras esté vacía, el botón del aceite dice "Pedir ficha técnica" y abre WhatsApp.
3. Productos → el aceite aún tiene valores "XX" (marcados en amarillo); la harina ya tiene los datos reales.
4. Redes sociales: completa los `href="#"` del pie de página en las 3 páginas.

## Fotos
- `images/hero.jpg`: foto original de la Costa Verde (del PDF), usada de fondo en las tres portadas.
- `images/harina.jpg` y `images/aceite.jpg`: fotos de los productos (del PDF).
