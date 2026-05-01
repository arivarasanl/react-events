# Refactor Rules (Crafted)

## Goal

Unify all UI into a single system.

---

## 1. Component Consolidation

### Product

Merge ALL:

* ProductCard variants

Into:
features/products/components/ProductCard.tsx

---

### Brand

Merge ALL:

* Brand components

Into:
features/brand-details/components/

---

### Remove duplicate layers

Gradually eliminate:

* components/product/*
* components/brand/*
* components/commerce/*
* components/storefront/*

---

## 2. Replace Styling Patterns

### Pattern 1 — Card

Replace:

```tsx
<div className="p-* rounded-* shadow-* bg-white">
```

With:

```tsx
<Card className="p-6">
```

---

### Pattern 2 — Typography

Replace:

```tsx
<h2 className="text-xl font-semibold">
```

With:

```tsx
<Title>
```

---

### Pattern 3 — Layout

Replace custom wrappers with:

* `<Container />`
* `<Section />`
* `<Grid />`

---

## 3. Spacing Normalization

Replace:

* p-4 / p-5 / p-7 → p-6

---

## 4. File Structure Migration

Move:

components/product/* → features/products/components/

components/brand/* → features/brand-details/components/

---

## 5. Deletion Rules

After migration:

* delete duplicate components
* keep only one implementation

---

## 6. AI Refactor Prompt

Use this for Aider / Cursor:

"Refactor this code to:

* use Card, Typography, Layout components
* remove inline styles
* normalize spacing to p-6
* follow ui-system.md strictly
* do not introduce new UI patterns"

---

## 7. Review Checklist

Before accepting changes:

* No inline rounded/shadow/bg
* No direct typography classes
* No duplicate components
* Uses UI system only

---

## 8. Refactor Order

1. Products (anchor)
2. Brands
3. Landing
4. Remaining pages

---

## 9. Stop Condition

Refactor is complete when:

* only one ProductCard exists
* only one BrandCard exists
* no inline styling patterns remain

---