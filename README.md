<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Ram & Co Concrete Coatings — Website

Professional, conversion-focused website for Ram & Co Concrete Coatings (Lubbock, TX). Built with React, Vite, Tailwind CSS, and Framer Motion.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Run the app: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## Image Generation (Optional)

The site uses images from `public/images/`. To generate images via the Gemini API:

1. Copy `.env.example` to `.env` and set `GEMINI_API_KEY` (never commit your real key).
2. See **PLAN.md** for full image generation prompts and file names.
3. Use the script: `./scripts/generate-images.sh` (or your own curl/API flow with the prompts in PLAN.md).

Place generated or stock images in `public/images/` (e.g. `hero-garage.jpg`, `before-garage.jpg`, `after-garage.jpg`). The site falls back to placeholder images if files are missing.

## Project Structure

- **PLAN.md** — Site architecture, design system, SEO, and image prompts
- **src/pages/** — Home, About, Services, Gallery, Contact
- **src/components/** — Layout, Navbar, Footer, BeforeAfterSlider, SeoHead
- **index.html** — Meta description, keywords, LocalBusiness schema (JSON-LD)
