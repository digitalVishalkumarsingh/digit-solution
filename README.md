<div align="center">

# 🛠️ Dizit Solution

### Production-grade home-appliance repair platform for Varanasi, India

A full-stack **Next.js 15** web application built end-to-end — from UX design and animated marketing pages to a serverless contact-to-email pipeline. Engineered for performance, SEO, mobile-first conversion, and zero-config Vercel deployment.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&style=for-the-badge)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss&logoColor=white&style=for-the-badge)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0080?logo=framer&logoColor=white&style=for-the-badge)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?logo=vercel&style=for-the-badge)](https://vercel.com/)

[**🌐 Live Demo**](#) · [**📂 Source**](https://github.com/digitalVishalkumarsingh/digit-solution) · [**📞 Contact Me**](#-lets-connect)

</div>

---

## ✨ Highlights

> A real-world client product, not a tutorial — designed, built, deployed, and maintained solo.

- ⚡ **Lighthouse-optimized** — Next.js App Router + `next/image` + RSC where possible
- 🎨 **Premium UI/UX** — custom design system, glass-morphism, animated micro-interactions via Framer Motion
- 📱 **100% mobile-first responsive** — fluid clamp() typography, CSS grid, no layout shift
- 🔌 **Serverless API** — typed Next.js Route Handlers (`NextRequest`) with Nodemailer SMTP integration
- 📝 **Type-safe forms** — `react-hook-form` with runtime validation + SweetAlert2 user feedback
- 🚀 **CI-ready** — passes ESLint (`next/core-web-vitals` + `next/typescript`) and `tsc` strict checks
- 🌐 **SEO-friendly** — semantic HTML, App Router metadata API, Open-Graph ready
- ♿ **Accessible** — ARIA attributes, keyboard navigation, sufficient contrast

---

## 🖼️ Preview

| Landing Page | Service Catalog | Booking Form |
|:---:|:---:|:---:|
| ![Home](public/Dizit-Solution.webp) | ![Services](public/repairman-doing-air-conditioner-service_1303-26541.avif) | ![Form](public/technician-repairing-home-appliance.webp) |

> *Screenshots coming soon — visit the [live site](#) for the full experience.*

---

## 🎯 What It Does

**Dizit Solution** is a customer-acquisition platform for a Varanasi-based appliance-repair business. Visitors can:

1. **Browse 8+ service categories** (AC, washing machine, refrigerator, RO, geyser, microwave, deep freezer, chimney)
2. **Book a technician** via an inline form that submits directly to **WhatsApp** OR sends an email via the contact API
3. **Compare pricing & coverage** across 12+ supported appliance brands (LG, Samsung, Daikin, Whirlpool, etc.)
4. **Read live Google Reviews** embedded via the Elfsight widget
5. **One-tap call** the business from anywhere on the site

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router, Turbopack dev, Server Components) |
| **Language** | TypeScript 5 (strict mode) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS 4 + inline styles + custom CSS-in-JS |
| **Components** | Material UI v6, NextUI v2 |
| **Animations** | Framer Motion 12 |
| **Forms** | React Hook Form + native validation |
| **Notifications** | SweetAlert2 |
| **Backend** | Next.js Route Handlers (serverless) |
| **Email** | Nodemailer + Gmail SMTP |
| **Icons** | React Icons (Font Awesome) |
| **Deployment** | Vercel (CI/CD on `git push`) |
| **Tooling** | ESLint 9 (flat config), PostCSS, Turbopack |

---

## 🏗️ Architecture

```
app/
├── (pages)/              ← Route group for marketing pages
│   ├── about/            ← Company story, stats, trust pillars
│   ├── acrepair/         ← AC services landing page
│   ├── contact/          ← Form → /api/contact → email
│   └── washing-machine-services/
├── api/
│   └── contact/          ← POST handler, Nodemailer + Gmail
├── components/
│   ├── Header.tsx        ← Sticky nav with hover dropdown
│   ├── Review.tsx        ← Elfsight Google reviews widget
│   └── footer.tsx        ← CTA strip + sitemap + socials
├── layout.tsx            ← Root layout, font loading, global chrome
└── page.tsx              ← Homepage (hero, services, brands, why-us)
```

**Highlights for engineers:**
- **Route groups** `(pages)` keep URL structure flat while organizing source.
- **Client/Server boundary** explicit via `'use client'` only where needed (forms, animations).
- **Typed API contracts** — `NextRequest` + payload interfaces, no `any` in hot paths.
- **Image optimization** — `next/image` with `fill` + responsive `sizes`.
- **Zero runtime CSS framework cost** — inline styles where they outperform Tailwind utilities.

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/digitalVishalkumarsingh/digit-solution.git
cd digit-solution

# 2. Install
npm install

# 3. Configure env (create .env.local)
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
NEXT_PUBLIC_PHONE=7324802379

# 4. Run dev server (Turbopack)
npm run dev          # → http://localhost:3000

# 5. Production build
npm run build && npm start
```

---

## 📜 Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server with Turbopack hot-reload |
| `npm run build` | Production build (TS check + ESLint + bundle) |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## 🧠 Engineering Decisions Worth Calling Out

- **Migrated from Next.js Pages Router to App Router** — leveraging Server Components for static marketing content while reserving client components for interactivity.
- **Replaced deprecated `next/image` props** (`layout="fill"`, `objectFit`) with the modern `fill` + `style` API for Next 15 compatibility.
- **Removed `next/head` usage in App Router pages** — a common anti-pattern that silently fails; replaced with the `metadata` export pattern.
- **Hardened API route typing** — converted loose ad-hoc parameter types to `NextRequest` to satisfy Next 15's stricter `ParamCheck` constraint and unblock production builds.
- **Force-pushed clean commit history** to a fresh GitHub repo after consolidating WIP branches.

---

## 🎯 Skills Demonstrated

`Next.js 15` · `React 19` · `TypeScript` · `Server Components` · `App Router` · `Serverless Functions` · `Tailwind CSS` · `Framer Motion` · `Responsive Design` · `Accessibility (a11y)` · `SEO` · `Form Validation` · `REST API Design` · `SMTP Integration` · `Git/GitHub` · `CI/CD on Vercel` · `Performance Optimization` · `ESLint Configuration` · `Type-driven Development`

---

## 🛣️ Roadmap

- [ ] Add admin dashboard for booking management
- [ ] Integrate Razorpay for online payments
- [ ] Migrate email backend from Gmail SMTP to Resend
- [ ] Add multi-language support (Hindi / English)
- [ ] Implement booking-confirmation SMS via Twilio
- [ ] Add Google Analytics 4 + conversion tracking

---

## 📬 Let's Connect

I'm **Vishal Kumar Singh** — a full-stack developer based in India, focused on building production-ready web products with Next.js, TypeScript, and modern serverless infrastructure.

**Open to:** Frontend / Full-stack roles · Freelance Next.js projects · Remote-first teams

<p>
  <a href="mailto:singhvishalkumar412@gmail.com"><img src="https://img.shields.io/badge/Email-singhvishalkumar412%40gmail.com-D14836?logo=gmail&logoColor=white&style=for-the-badge" /></a>
  <a href="https://github.com/digitalVishalkumarsingh"><img src="https://img.shields.io/badge/GitHub-digitalVishalkumarsingh-181717?logo=github&style=for-the-badge" /></a>
  <a href="https://wa.me/917324802379"><img src="https://img.shields.io/badge/WhatsApp-Chat-25D366?logo=whatsapp&logoColor=white&style=for-the-badge" /></a>
</p>

---

<div align="center">

**⭐ If this project caught your eye, a star on the repo means a lot.**

*Built with ❤️ in Varanasi, India · © 2025 Dizit Solution*

</div>
