# Humo — Landing Page Demo

**Soluciones digitales claras, rápidas y a tu medida**

Landing page profesional de Humo, lista para GitHub Pages. Sirve como Demo 1 (página web rápida) y como publicidad de la marca.

## Stack

- **Astro 7** (static, zero-JS by default)
- **Tailwind CSS v4** (tema smoke elegante)
- **GitHub Actions** + `withastro/action` (deploy automático)
- **Playwright** (tests E2E)

## Requisitos

- Node.js ≥ 22.12
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321/humo_demo.io/` (el `base` está configurado para el repo actual).

## Build de producción

```bash
npm run build
npm run preview
```

## Deploy a GitHub Pages

1. Sube este código al repositorio `orionethanfg1/humo_demo.io` (rama `main`).
2. En el repo → **Settings → Pages**:
   - Source: **GitHub Actions**
3. El workflow `.github/workflows/deploy.yml` se ejecuta automáticamente en cada push a `main`.
4. La demo quedará en:  
   `https://orionethanfg1.github.io/humo_demo.io/`

### Si cambias el nombre del repo

Edita `astro.config.mjs`:

```js
base: '/nuevo-nombre-del-repo',
```

## Personalización rápida

- **Número de WhatsApp**: busca `52XXXXXXXXXX` en `Header.astro` y `Contact.astro` y reemplázalo.
- **Colores / tipografía**: `src/styles/global.css` (`@theme`).
- **Contenido**: componentes en `src/components/`.

## Tests E2E

```bash
npx playwright install
npm run test:e2e
```

## Checklist de calidad (antes de entregar)

- [ ] `npm run build` sin errores
- [ ] Lighthouse ≥ 95 (Performance, Accessibility, Best Practices, SEO)
- [ ] Responsive (móvil + desktop)
- [ ] Contraste WCAG AA
- [ ] Enlaces de WhatsApp funcionando
- [ ] Menú móvil operativo

## Arquitectura

```
src/
├── components/   # Header, Hero, Services, Process, Demos, Contact, Footer
├── layouts/      # BaseLayout
├── pages/        # index.astro
└── styles/       # global.css (tema Humo)
.github/workflows/deploy.yml
```

---

Hecho con ❤️ por Humo.
