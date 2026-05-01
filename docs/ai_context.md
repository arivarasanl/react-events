# Crafted – AI Context Pack

## Identity

Crafted is a premium, API-driven luxury commerce storefront.

Stack:
- Backend: Rails 8 + Spree 5.2
- Frontend: Next.js 16 (App Router), React 19
- Styling: Tailwind CSS
- Architecture: Section-based dynamic rendering

Crafted is NOT a generic ecommerce template.
It is a curated designer marketplace with editorial luxury presentation.

---

## Core Principles

1. Backend controls structure.
2. Frontend controls presentation.
3. AI must NOT modify API contracts.
4. UI must feel premium, minimal, brand-first.
5. Avoid clutter and generic ecommerce visuals.

---

## Homepage Sections

API provides:

- categories
- featured_brands
- featured_products
- programs
- sponsors

Each must render as an isolated reusable component.

Do not merge section responsibilities.

---

## API Contract (Strict)

GET /api/v2/storefront/homepage.json

Fields must remain unchanged.
No renaming.
No invention of new fields.
Slugs are routing identifiers.
Prices are preformatted strings.

---

## UI Rules

- Use Tailwind only.
- No inline styles.
- Use semantic HTML.
- Keep spacing generous.
- Avoid heavy decoration.
- Minimal motion (only for modern theme).
- No overengineering.

---

## Architecture Rules

Data Flow:
API → Builder → Section Renderer → Components

Do not render raw API data directly.
Use builder transformation layer.

Use server components by default.
Use revalidation.
Avoid unnecessary client components.

---

## Themes

Supported:
1. Editorial Luxury
2. Modern Animated

Themes affect styling only.
Never change API structure for theme.

---

## AI Behavior

- Do not refactor unrelated code.
- Do not change folder structure.
- Do not assume missing backend fields.
- If unclear, ask instead of inventing.
- Keep components modular and clean.

End of AI Context.