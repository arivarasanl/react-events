# UI System (Crafted) — FINAL

## 0. Core Principle

UI must be:

* consistent
* composable
* system-driven

❗ Pages must NOT define visual styles.

---

## 1. Component-First Rule

All UI must use shared components.

Allowed:

* components/ui/*
* components/layout/*
* features/*/components

❌ Forbidden:

* inline styled div-based UI patterns

🟪 Editorial (no Card)
ProductCard ✅
Brand pages ✅
Landing sections ✅
Category exploration ✅
🟦 Structured (use Card)
Programs list ✅
Program detail blocks ✅
User dashboard (future) ✅
Filters panel (future) ✅
Forms (future) ✅

---

## 2. Typography (STRICT)

Use ONLY Typography system.

Allowed:

* `<Title />`
* `<SectionTitle />`
* `<Text />`

❌ Forbidden:

* `text-*`, `font-*` directly in pages/components

---

## 3. Spacing System

* Base unit: 8px
* Default padding: `p-6`
* Section spacing: `py-12` or `py-16`

❌ Forbidden:

* `p-5`, `p-7`, arbitrary spacing

---

## 4. Card System (MANDATORY)

All containers must use `<Card />`

Example:

```tsx
<Card className="p-6">
  <Title>...</Title>
</Card>
```

❌ Forbidden:

* `rounded-*`
* `shadow-*`
* `bg-white`

outside UI components

---

## 5. Layout System

Use ONLY:

* `<Container />`
* `<Section />`
* `<Grid />`

❌ No custom layout wrappers

---

## 6. Color System

* Background: white
* Primary text: black
* Secondary text: gray-600

❌ No gradients
❌ No ad-hoc colors

---

## 7. Motion System

Use ONLY:

* `Reveal`
* `AnimatedGrid`

❌ No custom animations

---

## 8. Component Ownership

* UI primitives → components/ui
* Domain UI → features/*
* Layout → components/layout

---

## 9. Sections System Constraint

components/sections is allowed ONLY for:

* landing page
* CMS-driven layouts

❌ Not allowed for:

* product pages
* brand pages
* dashboard

---

## 10. Enforcement Rule

If a UI pattern is not defined here:
→ it must NOT be introduced

---