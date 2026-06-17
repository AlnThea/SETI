# SETI Knowledge & Impact Hub - Implementation Status

This file is the practical status reference for the current codebase.  
Use it together with `TASKS.md`: this file explains what is actually present in the repository today.

---

## Current Baseline

### Done in code
- Next.js App Router scaffold
- TypeScript project config
- Tailwind-based global styling baseline
- Prisma ORM with local SQLite database
- Seed script with initial SETI sample data
- Homepage
- Knowledge Hub page with basic search
- Theme detail page
- Stakeholder detail page
- Project repository grid page
- Impact summary page
- Basic API routes for publications and projects

### Partially done
- Design system: colors and layout patterns exist, but reusable UI primitives are still thin
- Search: keyword search works, but filters, sorting, tags, and pagination are not built
- Content model: enough for MVP scaffolding, but not yet rich enough for full Phase 1/2 scope
- Impact portal: page and aggregate metrics exist, but no charts, maps, or story detail pages

### Not done yet
- Shadcn/ui integration
- Inter typography setup
- Mobile navigation component
- Publication detail pages
- Project detail pages
- Leaflet map view
- Recharts dashboards
- Knowledge graph / D3
- Gemini AI integration
- Deployment and QA hardening

---

## Notes For Future Updates

- Mark a task done only when it is present in code and at least manually checked.
- If a feature exists only as a placeholder page or basic scaffold, keep it in `Partially done`.
- When major features are added, update `TASKS.md` first and this file second.

---

**Last Updated:** 2026-06-17
