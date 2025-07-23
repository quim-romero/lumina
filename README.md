# LUMINA — Premium Digital Goods with Soul

![E2E Tests](https://github.com/quim-romero/lumina/actions/workflows/ci.yml/badge.svg)

> _Crafted interfaces. Real UX. Digital products that feel alive._

---

## 🧭 About LUMINA

**LUMINA** is more than a landing page — it’s a fully functional **e-commerce experience** for digital products, built as if launching tomorrow.

Designed with precision and clarity, it features:

- 🎨 Immersive hero with motion and scroll-based animations  
- 🛍️ Interactive product grid with hover effects and route transitions  
- 💳 Functional **Stripe Checkout** (test mode)  
- ✉️ Contact form with real-time validation and **EmailJS**  
- 🌗 Light/dark mode with system preference + persistence

> Built to showcase real frontend capabilities — not mockups.

---

## 🚀 Live Preview

👉 https://lumina.quimromero.com

---

## ✨ Features

- ⚡ Framer Motion for smooth, scroll-aware animation
- 🎯 Fully responsive layout with keyboard accessibility
- 🛍️ Product detail routes with animated transitions
- 💸 Stripe Checkout (test mode, frontend-only)
- 📩 Validated contact form with **Zod** + **React Hook Form** + EmailJS
- 🌓 Dark/Light mode toggle with smooth transitions
- 🧼 Clean, scalable architecture focused on real product UX
- 🎬 Page transitions, subtle feedback, and a loader screen

---

## 🧠 Tech Stack

| Tech                      | Role                            |
| ------------------------- | ------------------------------- |
| **React + TypeScript**    | Core framework                  |
| **Vite**                  | Build tool                      |
| **Tailwind CSS**          | Utility-first design system     |
| **Framer Motion**         | Animations & transitions        |
| **Zustand**               | State management (scoped)       |
| **React Hook Form + Zod** | Form logic & schema validation  |
| **EmailJS**               | Contact form email delivery     |
| **Stripe.js**             | Payment checkout (test mode)    |
| **React Router DOM**      | Routing                         |

---

## 🗂 Project Structure

- `src/`  
  - `components/` – UI blocks (Navbar, Hero, ProductCard, etc.)  
  - `hooks/` – Smooth scroll, scroll-to-top  
  - `lib/` – Product data, validation schemas, checkout utils  
  - `styles/` – Global Tailwind config  
  - `assets/` – Mock product images  
  - `App.tsx` – Main routes + layout composition  
- `public/` – HTML entry point, fonts, favicon  
- `.env` – (optional) Stripe + EmailJS keys

---

## 🧪 End-to-End Testing

Lumina uses **Cypress** for reliable E2E testing on each PR and every push to `main` (via **GitHub Actions**).

**Currently tested**

- ✅ Landing (`/`) → basic render & navigation to product detail  
- ✅ Product detail page → route works from landing  
- ✅ **Accessibility audits** (axe) on **Landing** and **Product** (CI fails on _serious/critical_)  
- ✅ Contact form validation (empty state)

**Coming soon**

- 🛒 Checkout redirect smoke (Stripe session → `redirectToCheckout`)  
- 🖼️ Image fallbacks (AVIF/WebP/PNG)  
- ⚙️ Theme persistence refinements and focus rings  
- 🧭 Grid lazy-load (IntersectionObserver + Suspense)  
- ♿ Expanded a11y coverage beyond serious/critical

🧪 **CI status:** https://github.com/quim-romero/lumina/actions

---

## ♿ Accessibility & ⚡ Performance

**Accessibility**

- Automated checks with `cypress-axe` on key pages; CI **fails** on serious/critical issues.

**Performance**

- Lighthouse (LHCI) runs against the production build.  
  _Goal: keep FCP/LCP in the green on the homepage._

![Lighthouse](./public/lighthouse.png)

Generate locally:

```bash
npm run build && npm run lh:report
```

Reports are saved to `./lhci/`.

---

## 📸 Screenshots

| Hero                            | Products                        | Product Detail                      |
| ------------------------------- | ------------------------------- | ----------------------------------- |
| ![Hero](./screenshots/hero.png) | ![Grid](./screenshots/grid.png) | ![Detail](./screenshots/detail.png) |

---

## 🧩 Notes

- 🧠 All code is handcrafted — no UI kits, no templates  
- 🔍 Typography and motion tuned for clarity and presence  
- 💡 Real data flow, payment redirect, and form validation  
- 🎯 Built as a **freelance portfolio project**, ready for presentation

---

## 📬 Contact

Looking to hire a frontend developer who builds **real product experiences** with precision?

- 📧 quim@quimromero.com  
- 🌐 https://quimromero.com

---

> _LUMINA is frontend done with soul — built for users who feel design, not just see it._
