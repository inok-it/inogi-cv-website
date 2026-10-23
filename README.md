Poniżej znajduje się plik `README.md` przygotowany pod repozytorium Twojego interaktywnego CV i portfolio.

```markdown
# INOGI — Interaktywne CV & Portfolio (IT Support & Sysadmin)

Statyczna strona typu One-Page pełniąca rolę interaktywnego CV oraz wizytówki technicznej (**IT Support Specialist & Linux Administrator**). Projekt prezentuje praktyczne podejście do administracji serwerami Linux, sieci, automatyzacji w Bashu oraz wdrożeń we własnym środowisku Homelab.

---

## ✨ Główne założenia i funkcjonalności

* **Zero-JS Overhead (Astro):** Architektura oparta na komponentach Astro generujących czysty, semantyczny kod HTML i CSS z minimalną ilością natywnego JavaScriptu (TypeScript) po stronie klienta.
* **Płynna typografia (Fluid Typography):** Skala typograficzna oparta na zmiennych CSS i funkcji `clamp()`, płynnie dostosowująca wielkości fontów (`Inter` oraz `JetBrains Mono`) w zakresie od `320px` do `1330px+`.
* **Responsywność (Mobile-First):** Układ oparty na CSS Grid oraz Flexbox, zoptymalizowany pod kątem ekranów mobilnych (od `320px`), tabletów i ekranów desktopowych (z kontenerem centrującym powyżej `1330px`).
* **Interaktywny interfejs:**
  * Wizualizacja okna terminala (`inogi@homelab`) z animowanym kursorem i poświatą CSS.
  * Nawigacja typu *ScrollSpy* (`IntersectionObserver`) podświetlająca aktywną sekcję podczas przewijania.
  * Kopiowanie adresu e-mail do schowka jednym kliknięciem (`Clipboard API`) oraz formularz kontaktowy generujący gotową wiadomość (`mailto:`).
  * Pobieranie pliku CV bezpośrednio z poziomu strony.
* **Techniczne SEO i dostępność (WCAG / ARIA):**
  * Pełne wsparcie dla meta tagów **Open Graph** oraz **Twitter Cards**.
  * Dane strukturalne **JSON-LD** (`Schema.org` — `ProfilePage` & `Person`).
  * Automatyczna mapa strony (`sitemap-index.xml`) oraz skonfigurowany plik `robots.txt`.
* **Analityka:** Integracja z self-hosted **Umami Analytics** wraz ze śledzeniem zdarzeń niestandardowych (*Custom Events*).

---

## 🛠️ Stack technologiczny

### Frontend
* **[Astro](https://astro.build/)** — generator stron statycznych (SSG)
* **HTML5 & Scoped CSS3** — semantyczny kod, CSS Custom Properties, CSS Grid, Flexbox
* **TypeScript / Vanilla JS** — obsługa interakcji (ScrollSpy, menu mobilne, schowek, formularz)
* **Fonty:** `Inter` (interfejs i tekst główny) oraz `JetBrains Mono` (terminal, tagi, metadane)

### Infrastruktura i wdrożenie (Production)
* **Docker & Nginx** — serwowanie statycznego buildu wraz z kompresją `gzip` i polityką `Cache-Control` (`immutable` dla zahashowanych zasobów `/_astro/`)
* **Traefik Reverse Proxy** — automatyczny TLS (Let's Encrypt), kompresja oraz nakładanie nagłówków bezpieczeństwa (**HSTS**, **CSP**, **X-Frame-Options**, **Permissions-Policy**)
* **Umami** — prywatna analityka webowa bez plików cookies

---

## 📂 Struktura projektu

```text
├── public/
    ├── favicons                            # Ikony dla przeglądarki
│   ├── og-image.jpg                        # Grafika podglądu Open Graph (1200x630px)
│   └── robots.txt                          # Instrukcje dla robotów indeksujących
├── src/
│   ├── assets/
│   │   ├── /Fonts                          # Folder z optymalizowanymi czcionkami
│   │   └── Inogi_logo_DARK_BG.svg          # Wektorowe logo projektu
│   ├── components/
│   │   ├── GlobalStyling.astro             # Zmienne :root, skala clamp(), reset i animacje globalne
│   │   ├── Seo.astro                       # Meta tagi OG, JSON-LD oraz skrypt Umami
│   │   ├── Header.astro                    # Przyklejony nagłówek nawigacyjny
│   │   ├── header_components/              # Logo, MenuPC (ScrollSpy), MobileMenuAndButtons
│   │   ├── HeroSection.astro               # Sekcja główna z oknem terminala
│   │   ├── hero_components/                # Terminal, Status, Header, HeroP, CTA, SmIcons, Tags
│   │   ├── Skills.astro                    # 01 / Kompetencje (3 filary pracy)
│   │   ├── skills_components/              # Komponent karty kompetencji (Skill.astro)
│   │   ├── Homelab.astro                   # 02 / Proof of Work (Wdrożenia Homelab)
│   │   ├── homelab_components/             # Karty projektów (Proof.astro, ProofHeader.astro)
│   │   ├── TechStack.astro                 # 03 / Tech Stack (Narzędzia i technologie)
│   │   ├── techstack_components/           # Kafelki kategorii stacku (Stack.astro)
│   │   ├── Experience.astro                # 04 / Doświadczenie i wykształcenie (Oś czasu)
│   │   ├── experience_components/          # Pojedynczy punkt na osi czasu (Exp.astro)
│   │   ├── Contact.astro                   # 05 / Kontakt i szybkie kopiowanie e-maila
│   │   ├── contact_components/             # Formularz kontaktowy (Form.astro)
│   │   └── Footer.astro                    # Stopka ze statusem dostępności
│   └── pages/
│       └── index.astro                     # Główny widok łączący wszystkie sekcje
│   └── layouts/
│       └── Layout.astro                    # Szkielety html i import czcionek z seo
│   └── style/
│       ├── GlobalStyling.astro             # Globalne style
│       └── ResetStyling.astro              # Reset styli domyślnych
├── astro.config.mjs                        # Konfiguracja Astro i integracji @astrojs/sitemap
├── nginx.conf                              # Konfiguracja serwera Nginx dla kontenera produkcyjnego
├── package.json
├── tsconfig.json
└── yarn.lock

```

---

## 🚀 Uruchomienie lokalne

1. **Sklonuj repozytorium:**
```bash
git clone [https://github.com/inok-it/inogi-cv.git](https://github.com/inok-it/inogi-cv.git)
cd inogi-cv

```


2. **Zainstaluj zależności:**
```bash
npm install

```


3. **Uruchom serwer deweloperski:**
```bash
npm run dev

```


Strona będzie dostępna pod adresem `http://localhost:4321`.
4. **Zbuduj wersję produkcyjną:**
```bash
npm run build
npm run preview

```


Statyczne pliki wynikowe zostaną wygenerowane w katalogu `dist/`.

---

## ⚙️ Konfiguracja przed wdrożeniem

Przed publikacją na serwerze produkcyjnym zaktualizuj:

1. **`astro.config.mjs`** — ustaw docelową domenę w polu `site: "https://twojadomena.pl"`.
2. **`src/components/Seo.astro`** — uzupełnij identyfikator `umamiWebsiteId`, docelowy adres skryptu Umami oraz linki do profili społecznościowych w obiekcie `jsonLd`.
3. **`public/robots.txt`** — wskaż właściwy adres URL mapy witryny (`Sitemap:`).
4. **`public/og-image.jpg`** — umieść grafikę podglądu o wymiarach `1200x630px`.

---

## 📄 Licencja

Projekt prywatny — wszelkie prawa zastrzeżone © 2026 **INOGI**.
