# INOGI — Interactive CV & Portfolio (IT Support & Sysadmin)

A static One-Page website serving as an interactive CV and technical portfolio (**IT Support Specialist & Linux Administrator**). The project showcases a hands-on approach to Linux server administration, networking, Bash automation, and deployments within a personal Homelab environment.

---

## ✨ Core Concepts and Features

* **Zero-JS Overhead (Astro):** Architecture based on Astro components generating clean, semantic HTML and CSS with minimal native client-side JavaScript (TypeScript).
* **Fluid Typography:** A typographic scale utilizing CSS variables and the `clamp()` function, seamlessly adjusting font sizes (`Inter` and `JetBrains Mono`) across viewports from `320px` to `1330px+`.
* **Responsiveness (Mobile-First):** Layout built with CSS Grid and Flexbox, optimized for mobile screens (from `320px`), tablets, and desktop displays (featuring a centering container above `1330px`).
* **Interactive Interface:**
* Terminal window visualization (`inogi@homelab`) with an animated cursor and CSS glow effect.
* *ScrollSpy* navigation (`IntersectionObserver`) highlighting the active section while scrolling.
* One-click email copying to the clipboard (`Clipboard API`) and a contact form generating a ready-to-send message (`mailto:`).
* Direct CV file download from the website.


* **Technical SEO and Accessibility (WCAG / ARIA):**
* Full support for **Open Graph** and **Twitter Cards** meta tags.
* **JSON-LD** structured data (`Schema.org` — `ProfilePage` & `Person`).
* Automated sitemap (`sitemap-index.xml`) and configured `robots.txt` file.


* **Analytics:** Integration with self-hosted **Umami Analytics**, including custom event tracking.

---

## 🛠️ Tech Stack

### Frontend

* **[Astro](https://astro.build/)** — Static Site Generator (SSG)
* **HTML5 & Scoped CSS3** — semantic code, CSS Custom Properties, CSS Grid, Flexbox
* **TypeScript / Vanilla JS** — interaction handling (ScrollSpy, mobile menu, clipboard, form)
* **Fonts:** `Inter` (UI and body text) and `JetBrains Mono` (terminal, tags, metadata)

### Infrastructure & Deployment (Production)

* **Docker & Nginx** — serving the static build with `gzip` compression and `Cache-Control` policies (`immutable` for hashed assets in `/_astro/`)
* **Traefik Reverse Proxy** — automated TLS (Let's Encrypt), compression, and security headers application (**HSTS**, **CSP**, **X-Frame-Options**, **Permissions-Policy**)
* **Umami** — private, cookieless web analytics

---

## 📄 License

Private project — all rights reserved © 2026 **INOGI**.