# AI Context

## Project Nature

Crafted is a content-driven storefront application built with:

* Next.js App Router
* React
* Tailwind CSS
* feature-first frontend architecture

The application emphasizes:

* narrative presentation
* restrained visual design
* cinematic imagery
* editorial browsing flow
* whitespace rhythm
* semantic UI architecture

This is NOT:

* a dashboard application
* an admin panel
* a generic SaaS UI
* a utility-first visual playground
* a component-library showcase

---

# Architectural Philosophy

The frontend architecture follows layered ownership.

Pages compose layouts.

Feature modules own domain behavior.

UI primitives own visual rules.

Design tokens own styling values.

The system should evolve through:

* semantic abstractions
* constrained reusable primitives
* governed design decisions
* incremental refactors

Avoid:

* large uncontrolled rewrites
* visual redesigns during refactors
* excessive abstractions
* generic enterprise UI patterns

---

# Visual Direction

The visual system should remain:

* restrained
* spacious
* typography-led
* image-led
* editorial in rhythm
* minimal in decoration

Prefer:

* semantic spacing
* clean hierarchy
* subtle motion
* cinematic presentation
* compositional clarity

Avoid:

* glassmorphism
* excessive gradients
* decorative effects
* aggressive animations
* dashboard-style layouts
* visually noisy UI

---

# Refactor Philosophy

Refactors should:

* preserve existing visuals
* preserve behavior
* reduce design leakage
* centralize visual decisions
* improve semantic clarity
* improve ownership boundaries
* improve maintainability

Prefer:

* incremental migration
* local architectural improvements
* constrained semantic variants
* token-driven styling

Avoid:

* broad rewrites
* speculative abstractions
* premature optimization
* introducing parallel systems permanently

---

# Design System Direction

The application uses:

* semantic typography primitives
* semantic spacing tokens
* centralized design tokens
* class-variance-authority (CVA)
* feature-first ownership

Visual values should originate from:

* styles/design-system/*

Feature components should avoid:

* raw typography styling
* duplicated spacing values
* duplicated overlay logic
* repeated surface styling

---

# Layering Philosophy

Pages:

* compose layouts
* orchestrate sections
* avoid visual styling decisions

Features:

* own domain rendering
* own feature-specific hooks
* own feature-specific API integration

UI primitives:

* own reusable visual behavior
* own semantic variants
* consume design tokens

Design tokens:

* own spacing
* own typography values
* own motion values
* own color values
* own elevation/radius values

---

# AI Collaboration Rules

When assisting with refactors:

* preserve current visuals unless explicitly requested otherwise
* prefer minimal safe changes
* avoid introducing generic UI-library abstractions
* avoid dashboard-oriented patterns
* avoid uncontrolled component explosion
* preserve editorial rhythm and hierarchy
* prefer semantic naming over implementation naming

When uncertain:

* preserve the existing architectural direction
* prefer stability over cleverness
* prefer constrained systems over flexible generic systems