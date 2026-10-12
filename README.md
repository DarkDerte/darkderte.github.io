# darkderte.github.io

Sitio personal de Derte, construido con Astro. Reúne sus aplicaciones de software, proyectos de hardware, la propuesta NanoInternet y páginas sobre su perfil y filosofía.

## Secciones del sitio

- **Inicio (`/`)**: presentación y acceso a las distintas áreas del sitio.
- **Código Mínimo (`/codigo/`)**: catálogo de aplicaciones y herramientas de software.
- **Hardware Simple (`/hardware/`)**: proyectos, dispositivos y experimentos de hardware.
- **NanoInternet (`/nanointernet/`)**: propuesta de una web de estilo terminal, basada en comandos y pensada para enviar solo la información necesaria. Es una página conceptual; no implementa una terminal interactiva.
- **Filosofía (`/filosofia`)** y **Sobre mí (`/sobre-mi/`)**: ideas y perfil personal.

Los proyectos de Código Mínimo y Hardware Simple se mantienen como colecciones separadas. Cada elemento tiene su propia página de detalle. Las categorías de ambos catálogos se pueden filtrar con controles HTML y CSS, sin JavaScript en el navegador.

## Añadir un proyecto

Los proyectos se escriben como archivos Markdown o MDX en su colección:

- Aplicaciones: `src/content/apps/`
- Hardware: `src/content/hardware/`

El esquema y los campos admitidos están definidos en `src/content.config.ts`. Cada archivo debe incluir los campos obligatorios de su colección, como `title`, `description`, `category`, `status` y `stack`. Puede incluir también datos opcionales como `icon`, `url`, `repo` y `destacado`. Las categorías y estados válidos varían entre software y hardware; consulta el esquema antes de añadir una entrada.

## Desarrollo local

Se necesita Node.js y npm. Desde la raíz del repositorio:

```sh
npm install
npm run dev
```

El servidor local queda disponible en `http://localhost:4321`.

## Comandos

| Comando | Acción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo de Astro. |
| `npm run start` | Alias para iniciar el servidor de desarrollo. |
| `npm run build` | Comprueba el proyecto y genera el sitio estático en `dist/`. |
| `npm run preview` | Sirve localmente la compilación de `dist/`. |
| `npm run astro -- --help` | Muestra la ayuda de la CLI de Astro. |

## Estructura

```text
public/                 Archivos estáticos, como imágenes y robots.txt
src/
  components/           Componentes compartidos
  content/
    apps/               Entradas de Código Mínimo
    hardware/           Entradas de Hardware Simple
  layouts/              Estructuras de página
  pages/                Rutas del sitio
  styles/               Estilos globales
  content.config.ts     Esquemas de las colecciones
astro.config.mjs        Configuración de Astro e integraciones
```

El sitio se publica bajo `https://darkderte.github.io`. Astro genera el sitemap durante la compilación mediante la integración configurada en `astro.config.mjs`.
