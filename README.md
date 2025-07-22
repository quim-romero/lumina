# LUMINA — Premium Digital Goods with Soul

![E2E Tests](https://github.com/quim-romero/lumina/actions/workflows/ci.yml/badge.svg)

> _Crafted interfaces. Real UX. Digital products that feel alive._

---

## 🧭 About LUMINA

**LUMINA** is more than a landing page — it’s a fully functional **e-commerce experience** for digital products, built as if launching tomorrow.

Designed with precision, care, and clarity in mind, it features:

- 🎨 Immersive hero with motion and scroll-based animations
- 🛍️ Interactive product grid with hover effects and route transitions
- 💳 Functional Stripe Checkout (test mode)
- ✉️ Contact form with real-time validation and EmailJS integration
- 🌗 Light/dark mode with system preference + persistence

> Built to showcase real frontend capabilities — not mockups.

---

## 🚀 Live Preview

👉 [https://lumina.quimromero.com](https://lumina.quimromero.com)

---

## ✨ Features

- ⚡ Scroll-based animations using Framer Motion
- 🎯 Fully responsive layout with keyboard accessibility
- 🛍️ Product detail routes with animated transitions
- 💸 Stripe Checkout (test mode, frontend-only)
- 📩 Validated contact form with Zod + EmailJS
- 🌓 Dark/light mode toggle with smooth transitions
- 🧼 Clean, scalable architecture built with intention
- 🎬 Page transitions, fade-ins, button feedback, and loader screen

---

## 🧠 Tech Stack

| Tech                      | Role                              |
| ------------------------- | --------------------------------- |
| **React + TypeScript**    | Core framework                    |
| **Vite**                  | Build tool                        |
| **Tailwind CSS**          | Utility-first design system       |
| **Framer Motion**         | Animations + transitions          |
| **GSAP**                  | Scroll-based effects (planned)    |
| **Zustand**               | State management (optional scope) |
| **React Hook Form + Zod** | Form logic + validation           |
| **EmailJS**               | Contact form email integration    |
| **Stripe.js**             | Payment checkout (test mode)      |
| **React Router DOM**      | Page routing                      |

---

## 🗂 Project Structure

- `src/`
  - `components/` – UI blocks (Navbar, Hero, ProductCard, etc.)
  - `hooks/` – Custom hooks (smooth scroll, scroll-top reset)
  - `lib/` – Product data, validation schemas, checkout utils
  - `styles/` – Global Tailwind CSS config
  - `assets/` – Mock product images
  - `App.tsx` – Main routes + layout composition
- `public/` – HTML entry point, fonts, favicon
- `.env` – (optional) Stripe + EmailJS keys

## 🧪 End-to-End Testing

Lumina uses **Cypress** for reliable E2E testing, with each PR and every push to `main` triggering checks via **GitHub Actions**.

**Currently tested:**

- ✅ Landing page (`/`) → basic render & navigation to product detail
- ✅ Product detail page → route works from landing
- ✅ Accessibility audits (Axe) on **Landing** and **Product** (fail on _critical/serious_)
- ✅ Home form validation with empty fields

**Coming soon:**

- 🛒 Checkout redirect flow (Stripe session → `redirectToCheckout`)
- 🖼️ Image fallbacks (AVIF/WebP/PNG) smoke checks
- ⚙️ Theme persistence (light/dark) and focus rings
- 🧭 Grid lazy-load behavior (IntersectionObserver + Suspense)
- ♿ Expanded accessibility coverage beyond critical/serious

🧪 **CI status:** [View on GitHub Actions →](https://github.com/quim-romero/lumina/actions)

---

## ♿ Accessibility & ⚡ Performance

- **Accessibility:** automatic checks with `cypress-axe` (CI fails on **critical**/**serious** violations for key pages).
- **Performance:** Lighthouse (LHCI) runs against the production build.  
  _Goal: keep FCP/LCP in the green on the homepage._

![Lighthouse](./public/lighthouse.png)

> Generate locally with: npm run build && npm run lh:report  
> Reports are saved to ./lhci/.

---

## 📸 Screenshots

| Hero                            | Products                        | Product Detail                      |
| ------------------------------- | ------------------------------- | ----------------------------------- |
| ![Hero](./screenshots/hero.png) | ![Grid](./screenshots/grid.png) | ![Detail](./screenshots/detail.png) |

---

## 🧩 Notes

- 🧠 All code is handcrafted — no UI kits, no templates
- 🔍 Typography and motion tuned for clarity and presence
- 💡 Uses real data flow, payment redirect, and form validation
- 🎯 Built as a **freelance portfolio project**, ready for presentation

---

## 📬 Contact

Looking to hire a frontend developer who builds **real product experiences** with precision?

- 📧 quim@quimromero.com
- 🌐 [https://quimromero.com](https://quimromero.com)

---

> _LUMINA is frontend done with soul —  
> built for users who feel design, not just see it._
