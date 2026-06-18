# SETI Knowledge & Impact Hub - Implementation Status

This file is the practical status reference for the current codebase.  
Use it together with `TASKS.md`: this file explains what is actually present in the repository today.

---

## Current Baseline

### Done in code
- Next.js App Router scaffold
- TypeScript project config
- Tailwind-based global styling baseline with Inter typography
- Prisma ORM with local SQLite database
- Seed script with 55 SETI sample publications plus publication tags
- Homepage
- Knowledge Hub page with search, filters, sorting, tag-aware discovery, and pagination
- Theme detail page
- Stakeholder detail page with relevant publications, projects, and explicit policy brief section
- Project repository grid page
- Impact summary page
- Basic API routes for publications and projects
- Responsive header with mobile navigation
- Professionalized shell layout, card styling, and typography consistency

### Partially done
- Design system: reusable UI primitives are still thin, but layout, typography, and card patterns are now more consistent
- Content model: publications now support tags and richer seeded volume, but Phase 2/3 entity depth is still limited
- Impact portal: page and aggregate metrics exist, but no charts, maps, or story detail pages

### Not done yet
- Shadcn/ui integration
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

**Last Updated:** 2026-06-18
