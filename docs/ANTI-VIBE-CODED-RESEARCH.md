# Anti–Vibe Coded Design: Research Summary

Sources: Vandelay Design, Differ, The Atlantic (Kelly Chan), and design critiques on AI-generated sites.

## What Makes Sites Look "Vibe Coded" / AI Slop

- **Purple-to-blue or teal-to-purple gradients** — "Tailwind gradient example" look
- **Inter (or only system fonts) with no personality** — same pairing everywhere
- **Uniform spacing** — everything `p-4` or `gap-6`, no rhythm or breathing room
- **Generic animations** — fade-in only, or same slide-up on every section
- **Default component styling** — shadcn/Radix with zero customization
- **Pure black (#000) and pure white (#fff)** — no tonal variation
- **Rounded corners everywhere** — same radius on every card/button
- **No micro-interactions** — buttons and cards don’t respond on hover/click
- **No constraint** — too many colors, font sizes, and animation types

## Principles to Apply (Professional, Intentional Look)

### 1. Typography
- **Custom pairing, not default Inter-only.** Examples: Instrument Serif / Cabinet Grotesk for display; Geist or Switzer for body.
- **Line height:** 1.6–1.7 for body (not default 1.5).
- **Headings:** `tracking-tight` (-0.02em), clear weight hierarchy (e.g. 600 headings, 400 body).
- **Line length:** `max-w-[65ch]` (60–70 characters) for readability.
- **Few font sizes:** 5–6 sizes max, applied consistently.

### 2. Color
- **Custom palette;** avoid default Tailwind blue-500 / purple-600.
- **One clear accent** (e.g. construction red) used sparingly.
- **No pure black or white:** use slate-950 and off-white; low-saturation grays.
- **Shadows:** subtle color tint (e.g. red or gray), not pure gray.

### 3. Backgrounds
- **No purple-blue gradients.** Use instead:
  - Subtle grain texture at 2–3% opacity over solid color
  - Mesh gradients with **muted** colors
  - Grid patterns or single accent with blur
- Study: Linear, Vercel, Raycast — single accent, blur, dark mode with gray variation.

### 4. Micro-Interactions (The 1% That Feels Pro)
- **Buttons:** `active:scale-[0.98]`, hover lift `translate-y-[-2px]` + slightly stronger shadow.
- **Cards:** hover lift + shadow, 150–300ms transition.
- **Nav:** subtle shadow or backdrop blur on scroll.
- **Transitions:** 150–300ms for UI; 120–180ms for micro (e.g. icon).
- **Stagger:** list/card entrance with 40–80ms delay per item.
- **Focus:** visible focus states for keyboard users.

### 5. Motion
- **Animate meaning, not everything.** One or two motion patterns (e.g. fade + slight Y, or scale).
- **Timing:** 200–300ms for page/section; 120–180ms for micro.
- **Easing:** ease-out or custom cubic-bezier, not linear.

### 6. Constraint (Less Is More)
- **Fewer colors:** 2–3 plus neutrals.
- **Fewer radii:** 2–3 values (e.g. 0, 6px, 12px).
- **One primary button style** (and one secondary), applied consistently.
- **Fewer animation types:** pick 2–3 and reuse.

### 7. "Direct Like a Filmmaker" (Atlantic)
- **Scene:** What does this moment feel like? (welcome, discovery, decision.)
- **Visual:** Light, depth, spacing, rhythm.
- **Motion:** Fade speed, hover lift, timing, easing.
- **Whitespace:** 30–50% breathing room; silence as part of the design.

### 8. Study Shipped Products, Not Templates
- **Linear:** sparing motion, transparency, blur, content reveal on scroll.
- **Vercel:** subtle grid, code blocks, syntax.
- **Attio:** subtle borders instead of heavy shadows, micro-interactions on inputs/buttons.
- **Railway:** dark mode with weight, accent used strategically.

## Checklist Before Ship (from Differ)
- Consistent border radius (2–3 values).
- Shadows with subtle color tint.
- All buttons: hover + active + focus.
- Loading/empty/error states considered.
- Headings have clear hierarchy; line length controlled.
- Animations not all on load; mobile feels native.
