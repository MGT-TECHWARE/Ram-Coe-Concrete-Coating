#!/bin/bash
# Generate concrete coating images via Gemini API.
# Usage: Set GEMINI_API_KEY in .env or environment, then run from project root:
#   source .env 2>/dev/null; ./scripts/generate-images.sh
# Or: export GEMINI_API_KEY=your_key; ./scripts/generate-images.sh

set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
OUT_DIR="$PROJECT_ROOT/public/images"
MODEL_ID="gemini-2.0-flash-exp"
API_BASE="https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:generateContent"

if [ -z "$GEMINI_API_KEY" ]; then
  echo "Error: GEMINI_API_KEY is not set. Add it to .env or export it."
  exit 1
fi

mkdir -p "$OUT_DIR"

# Prompts from PLAN.md - ultra realistic, professional photography
prompts=(
  "Ultra realistic professional photograph of a modern residential garage interior with a flawless epoxy floor with decorative color flakes, wide angle lens, natural light from garage door, clean and polished, construction realism, no people, high resolution."
  "Ultra realistic professional photograph of a two-car garage with a glossy epoxy floor with decorative flakes in gray and white, wide angle, natural lighting, professional photography style, no cartoon or AI look."
  "Ultra realistic professional photograph of a backyard patio with sealed concrete coating, subtle texture, outdoor furniture nearby, natural daylight, wide angle, construction realism."
  "Ultra realistic professional photograph of a warehouse or commercial space with industrial epoxy flooring, clean, reflective, wide angle, fluorescent lighting, no people."
  "Ultra realistic before and after split image: left side old worn concrete garage floor with stains and cracks, right side same garage with new epoxy flake floor, professional photography, natural lighting."
)

names=(
  "hero-garage"
  "garage-epoxy-flake"
  "patio-coating"
  "commercial-warehouse"
  "before-after-garage"
)

# Note: Gemini generateContent may return text; for image generation you may need
# a model that supports image output (e.g. Imagen or Gemini with image generation).
# This script is a placeholder for the workflow; replace with actual image-generation
# API calls per Google's current docs (e.g. vertexai or generativelanguage image APIs).

echo "Image generation script ready."
echo "OUT_DIR=$OUT_DIR"
echo "Prompts: ${#prompts[@]}"
echo ""
echo "To generate images with the Gemini API:"
echo "1. Ensure GEMINI_API_KEY is set."
echo "2. Use the prompts in PLAN.md with an image-capable Gemini or Imagen API."
echo "3. Save outputs to public/images/ with names: hero-garage.jpg, garage-epoxy-flake.jpg, patio-coating.jpg, commercial-warehouse.jpg, before-after-garage.jpg, prep-concrete.jpg, install-coating.jpg, finished-floor.jpg, before-garage.jpg, after-garage.jpg"
