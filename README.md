# Privelux Business - Portafolio web

Proyecto de la materia Programación Web (UTP). Es una página de presentación para Privelux Business, una plataforma pensada para que pequeños negocios organicen la información de sus clientes.

Por ahora el proyecto es solo la parte visual (la página de presentación). Las funciones que se muestran, como registrar o consultar clientes, todavía no están desarrolladas, y el formulario de contacto es de prueba y no envía datos.

## Cómo verlo

Descargar o clonar el repositorio y abrir el archivo `index.html` en el navegador. No necesita instalar nada.

## Archivos

- `index.html`: estructura de la página.
- `estilos.css`: estilos propios y personalización de Bulma.
- `script.js`: menú para celulares y formulario de prueba.
- `img/`: imágenes del sitio.

## Herramienta de estilos: Bulma

Para modernizar el portafolio escogí Bulma (versión 1.0.4). La elegí porque:

- Solo usa CSS, entonces se integra fácil a un proyecto hecho en HTML y CSS.
- Sus clases son fáciles de leer (`is-primary`, `columns`, `card`).
- Permite cambiar colores y tipografía con variables CSS sin tener que instalar nada.

Se carga desde un CDN en el `index.html`.

## Cambios realizados

El proyecto empezó solo con HTML y CSS. Se mantuvieron las mismas secciones y contenido, y se modernizó así:

- **Menú:** se cambió por el `navbar` de Bulma, con botón de menú para celulares.
- **Inicio:** ahora usa un `hero` con dos columnas (texto e imagen).
- **Servicios:** cada servicio es una `card` y se pueden abrir para ver la descripción.
- **Beneficios:** cajas (`box`) con íconos en tres columnas.
- **Nosotros:** texto y una lista con íconos (`icon-text`).
- **Contacto:** formulario con los campos de Bulma, íconos y mensaje de confirmación (`notification`).
- **Pie de página:** se usa el `footer` de Bulma.

## Personalización

- **Colores:** se cambiaron las variables de Bulma (`--bulma-primary-h/s/l` y `--bulma-dark-h/s/l`) para usar el verde azulado y el azul oscuro del proyecto.
- **Tipografía:** fuente Poppins de Google Fonts.
- **Distribución:** se usaron `columns` y `container` para que la página se adapte a computador, tablet y celular.

En `estilos.css` quedaron solo los estilos que Bulma no trae, como el degradado del inicio, el borde de las tarjetas y la flecha de los servicios.

## Tecnologías

- HTML
- CSS
- JavaScript
- Bulma
- Bootstrap Icons
