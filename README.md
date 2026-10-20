# calep-mkdir.github.io

Portfolio de **Alex Conesa Piñeiro**: desarrollo de software con agentes de IA, sistemas Linux y OnePunto.

**[calep-mkdir.github.io](https://calep-mkdir.github.io)** · [English](https://calep-mkdir.github.io/#en)

## Qué hay dentro

Una sola página en español e inglés con mis proyectos, cómo trabajo con IA, mi trayectoria y mis CV en PDF. Incluye una demo del gesto principal de [OnePunto](https://onepunto.com): una cuadrícula de puntos en la que se marca el día con un toque.

## Decisiones

- **Sin dependencias.** HTML, CSS y JavaScript propios. No hay frameworks, ni paso de compilación, ni `node_modules`.
- **Sin peticiones a terceros.** Las fuentes (Bricolage Grotesque, Instrument Sans e IBM Plex Mono, licencia OFL) se sirven desde el propio sitio. No hay analítica ni rastreo.
- **Política de seguridad de contenido estricta.** Cada página solo puede cargar archivos de este mismo sitio: sin scripts ni estilos en línea.
- **Bilingüe sin duplicar páginas.** El español está en el HTML y el inglés en `assets/site.js`. El idioma se elige según el navegador, se recuerda entre visitas y se puede forzar con `#en` o `#es`.
- **Accesible.** Enlace para saltar al contenido, foco visible, textos alternativos, etiquetas en los controles y respeto de «reducir movimiento».
- **Modo claro y oscuro**, según el sistema.

## Estructura

```
index.html            la página
assets/style.css      estilos y tokens de color de los dos temas
assets/site.js        idioma, demo de OnePunto y copiar correo
assets/fonts/         fuentes autoalojadas y sus licencias
assets/og.png         imagen para compartir en LinkedIn y otras redes
cv/                   CV en PDF
tools/check_i18n.py   comprueba que cada texto tiene traducción
```

## Probar en local

```bash
python3 -m http.server 8000
# y abrir http://localhost:8000
```

## Comprobaciones

Cada cambio en `main` pasa por GitHub Actions (`.github/workflows/ci.yml`):

1. HTML válido y accesible con `html-validate`.
2. JavaScript sin errores de sintaxis.
3. Cada texto en español tiene su traducción al inglés.
4. Todos los enlaces internos y archivos existen, con `lychee`.

## Publicación

GitHub Pages desde la rama `main`, carpeta raíz. El archivo `.nojekyll` evita que Pages procese el sitio con Jekyll.
