# Ram & Co Concrete Coatings — Site Plan

## 1. Site Architecture

### Pages & Routes
| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Hero, services overview, before/after, why choose us, trust badge, testimonials, CTA |
| `/about` | About | Company story, local focus, quality, reliability, imagery (prep, install, finished) |
| `/services` | Services | Four service sections: Garage, Patio, Driveway, Commercial + Decorative flake/epoxy |
| `/gallery` | Gallery | Masonry grid, categories, before/after slider, lightbox |
| `/contact` | Contact | Form (name, phone, email, project type, message), map, call CTA |

### Information Architecture
- **Primary conversion path:** Home → Contact (Get Free Estimate / Call Now).
- **Secondary paths:** Home → Services → Contact; Gallery → Contact.
- **Trust path:** Home (testimonials, badge) → About → Contact.

### UX Principles
- Mobile-first; sticky nav; prominent phone + estimate CTAs.
- One primary CTA per section; reduce clutter.
- Fast load: lazy images, minimal JS; concrete texture used sparingly.

---

## 2. Visual Design System

### Color Palette
| Role | Token | Value | Usage |
|------|--------|--------|--------|
| Primary | Charcoal / dark concrete | `#1e293b` (slate-800) | Nav, footer, headings, buttons |
| Secondary | Light concrete gray | `#64748b` (slate-500) | Body secondary, borders |
| Accent | Construction red | `#dc2626` (red-600) | CTAs, links, icons |
| Background | White / off-white | `#ffffff`, `#f8fafc` | Sections |
| Surface dark | Slate-900 | `#0f172a` | Hero bg, page headers |

Optional alternate accent: deep industrial blue `#1e40af` (blue-800) if red is swapped.

### Typography
- **Headings:** Space Grotesk (bold, modern sans) — fallback: system-ui.
- **Body:** Inter (readable sans) — fallback: system-ui.
- Scale: 8px base; headings 2rem–4rem; body 1rem–1.25rem.

### Spacing
- **Unit:** 8px.
- Scale: 8, 16, 24, 32, 40, 48, 64, 80, 96, 128 (Tailwind: 2, 4, 6, 8, 10, 12, 16, 20, 24, 32).

### Grid
- **Layout:** 12-column responsive grid.
- **Max width:** 1280px (max-w-7xl).
- **Gutter:** 16px (md) / 24px (lg).

### Patterns
- Subtle concrete texture: low-opacity SVG noise on dark sections.
- Industrial: strong borders, uppercase labels, clear hierarchy.

---

## 3. Component Structure

### Global
- **Layout** — Navbar (sticky), main, Footer.
- **Navbar** — Logo, nav links, phone CTA; mobile drawer + mobile call button.
- **Footer** — Brand, quick links, services, contact, trust badge.

### Shared
- **PageHeader** — Dark full-width header with title, subtitle (optional bg image).
- **Button** — Primary (red), secondary (outline), sizes.
- **BeforeAfterSlider** — Drag/slide comparison (before/after image).
- **ServiceCard** — Icon, title, short description, link (used on Home + Services).
- **TestimonialCard** — Quote, stars, name, location.

### Home
- Hero, TrustBanner, Intro, ServicesOverview (grid), BeforeAfter, WhyChooseUs, TrustBadge (Small Businesses of LBK), Testimonials, FinalCTA.

### About
- PageHeader, Story (two-col), CoreValues (grid), CTA.

### Services
- PageHeader, ServiceSections (garage, patio, driveway, commercial, decorative flake), CTA.

### Gallery
- PageHeader, Filters, MasonryGrid, BeforeAfterSlider (optional), Lightbox.

### Contact
- PageHeader, ContactInfo, MapEmbed, ContactForm.

---

## 4. SEO Structure

### Meta (per page)
- **Home:** Title: "Concrete Coatings Lubbock TX | Garage & Epoxy Flooring — Ram & Co"
  - Description: "Premium concrete coatings in Lubbock, TX. Garage, patio, driveway & commercial epoxy flooring. Free estimates. Member Small Businesses of LBK."
- **About:** Title: "About Ram & Co | Concrete Coating Contractors Lubbock TX"
- **Services:** Title: "Garage Floor & Epoxy Coatings Lubbock | Ram & Co Services"
- **Gallery:** Title: "Concrete Coating & Epoxy Gallery | Lubbock TX Projects"
- **Contact:** Title: "Contact | Free Concrete Coating Estimate Lubbock TX"

### Target Keywords
- Concrete Coatings Lubbock TX
- Garage Floor Coatings Lubbock
- Epoxy Flooring Lubbock
- Concrete Coating Contractor Lubbock

### Schema
- **LocalBusiness** (JSON-LD): name, description, address (Lubbock, TX), telephone, url, image, priceRange, areaServed.

---

## 5. Image Generation Prompts (Gemini API)

Use the script in `scripts/generate-images.sh` with `GEMINI_API_KEY` set in `.env`. Do not commit the API key.

### Hero & Marketing
1. **Hero (garage):** "Ultra realistic professional photograph of a modern residential garage interior with a flawless epoxy floor with decorative color flakes, wide angle lens, natural light from garage door, clean and polished, construction realism, no people, high resolution."
2. **Garage epoxy:** "Ultra realistic professional photograph of a two-car garage with a glossy epoxy floor with decorative flakes in gray and white, wide angle, natural lighting, professional photography style, no cartoon or AI look."
3. **Patio coating:** "Ultra realistic professional photograph of a backyard patio with sealed concrete coating, subtle texture, outdoor furniture nearby, natural daylight, wide angle, construction realism."
4. **Commercial floor:** "Ultra realistic professional photograph of a warehouse or commercial space with industrial epoxy flooring, clean, reflective, wide angle, fluorescent lighting, no people."
5. **Before and after garage:** "Ultra realistic before and after split image: left side old worn concrete garage floor with stains and cracks, right side same garage with new epoxy flake floor, professional photography, natural lighting."

### Style Rules for All Prompts
- Add: "Ultra realistic, professional photography, wide angle lens, natural or professional lighting, construction and contractor realism."
- Avoid: "AI-looking, cartoonish, render, fantasy, dramatic HDR."

### File Naming (save outputs to `public/images/`)
- `hero-garage.jpg`
- `garage-epoxy-flake.jpg`
- `patio-coating.jpg`
- `commercial-warehouse.jpg`
- `before-after-garage.jpg`
- `prep-concrete.jpg`, `install-coating.jpg`, `finished-floor.jpg` (About page)

---

## 6. Tech Stack & Deliverables

- **Stack:** Vite, React, TypeScript, Tailwind CSS v4, Framer Motion (motion), React Router, Lucide React.
- **Deliverables:** This plan, design system in CSS, full site code, SEO meta + schema, component breakdown (this doc), image script + prompts. Images are generated separately via Gemini; site uses placeholders or generated assets in `public/images/`.
