# SETI Knowledge & Impact Hub - Project Planning

## 📋 Project Overview

**Project Name:** SETI Knowledge & Impact Hub  
**Tagline:** Accelerating Indonesia's Energy Transition Through Knowledge, Evidence, and Collaboration  
**Type:** Living Knowledge Management Platform  
**Target:** Competition/Donor Presentation  
**Tech Stack Target:** Next.js + Gemini AI + PostgreSQL + Tailwind CSS  
**Current Dev Stack:** Next.js + Prisma + local SQLite + Tailwind CSS

---

## 🎯 Project Goals

1. Build a world-class knowledge platform (NOT a corporate website)
2. Demonstrate knowledge → implementation → impact journey
3. Create an interactive, connected knowledge ecosystem
4. Showcase AI-powered semantic discovery
5. Impress competition judges with technical innovation

---

## 📦 Three-Phase Development Plan

### **Phase 1: Knowledge Hub (Prompt A)**
**Duration:** Week 1-2  
**Priority:** HIGH - Foundation

#### Features:
- ✅ Homepage with hero section
- ✅ Search functionality
- ✅ Explore by Theme (4 themes)
- ✅ Explore by Stakeholder (5 types)
- 🟡 Knowledge Hub page with filters
- ✅ Theme detail pages
- ✅ Stakeholder pages
- ✅ Related knowledge sections

#### Deliverables:
- 🟡 Responsive design system
- ✅ Database schema
- ✅ Content management structure
- ✅ Basic search implementation

---

### **Phase 2: Impact Portal (Prompt B)**
**Duration:** Week 3  
**Priority:** HIGH - Core Value

#### Features:
- 🟡 Project Repository (grid + map view)
- ⬜ Project Detail pages
- ✅ Impact Dashboard with metrics
- ⬜ Impact Story pages
- ⬜ Policy to Practice Navigator
- ⬜ Interactive visualizations

#### Deliverables:
- ⬜ Chart components (CO2, energy savings)
- ⬜ Interactive Indonesia map
- ✅ Project management system
- 🟡 Impact metrics tracking

---

### **Phase 3: Living Knowledge Network (Prompt C)**
**Duration:** Week 4  
**Priority:** MEDIUM - Innovation Showcase

#### Features:
- ⬜ Knowledge Explorer (network visualization)
- ⬜ Knowledge Graph
- ⬜ Energy Transition Atlas
- ⬜ Knowledge Timeline
- ⬜ Semantic Discovery (Gemini AI)

#### Deliverables:
- ⬜ Interactive network graph (D3.js)
- ⬜ AI-powered semantic search
- ⬜ Regional mapping system
- ⬜ Timeline visualization

---

## 🛠️ Technical Architecture

### **Frontend Stack**
```
Next.js 15 (App Router)
├── React 18
├── TypeScript
├── Tailwind CSS
├── Shadcn/ui components
├── Framer Motion (animations)
└── React Query (data fetching)
```

### **Visualization Libraries**
```
D3.js - Knowledge graphs & networks
Recharts - Charts & dashboards
Leaflet - Interactive maps
React Flow - Node-based diagrams
```

### **Backend Stack**
```
Next.js API Routes
├── Prisma ORM
├── PostgreSQL (Supabase)
├── Gemini AI API
└── NextAuth.js (optional admin)
```

### **AI Integration**
```
Google Gemini API
├── Semantic search
├── Content summarization
├── Smart recommendations
├── Auto-tagging
└── Natural language queries
```

### **Deployment**
```
Vercel
├── Auto-deploy from GitHub
├── Environment variables
├── Edge functions
└── Analytics
```

---

## 📊 Database Schema Overview

### **Core Entities**
1. **Themes** (Industrial Decarbonization, Green Buildings, etc.)
2. **Publications** (Reports, Policy Briefs, Articles, Case Studies)
3. **Projects** (Implementation projects with location & impact)
4. **Policies** (Government regulations & guidelines)
5. **Organizations** (Partners & stakeholders)
6. **Experts** (Subject matter experts)
7. **Events** (Workshops, conferences, webinars)
8. **Impacts** (Measurable outcomes & metrics)

### **Relationships**
- Many-to-many between all entities
- Tags system for flexible categorization
- Geographic data for regional mapping
- Temporal data for timeline features

---

## 🎨 Design System

### **Colors**
- Primary Green: `#0B6B4A`
- Energy Blue: `#0A5EA8`
- Accent Yellow: `#F5B800`
- Neutrals: Gray scale

### **Typography**
- Font Family: Inter
- Headings: Bold, 600-700 weight
- Body: Regular, 400 weight
- Code: Mono font

### **Components**
- Card-based layouts
- Premium spacing (generous whitespace)
- Smooth animations
- Accessible (WCAG AA compliant)

---

## 📅 Development Timeline

### **Week 1: Foundation**
- [x] Project setup (Next.js + dependencies)
- [ ] Design system implementation
- [x] Database schema design
- [x] Homepage development
- [x] Basic navigation

### **Week 2: Knowledge Hub**
- [x] Search functionality
- [ ] Theme pages
- [ ] Stakeholder pages
- [ ] Knowledge Hub with filters
- [x] Sample content generation

### **Week 3: Impact Portal**
- [x] Project repository
- [x] Impact dashboard
- [ ] Interactive map integration
- [ ] Chart components
- [ ] Policy navigator

### **Week 4: Innovation Features**
- [ ] Knowledge graph visualization
- [ ] Gemini AI integration
- [ ] Semantic search
- [ ] Energy Transition Atlas
- [ ] Timeline component

### **Week 5: Polish & Deploy**
- [ ] Testing & bug fixes
- [ ] Performance optimization
- [ ] Documentation completion
- [ ] Deployment to Vercel
- [ ] Demo preparation

---

## 🎯 Success Metrics

### **Technical Excellence**
- ⬜ Page load < 2 seconds
- ⬜ Lighthouse score > 90
- ⬜ Mobile responsive
- ⬜ WCAG AA compliant
- ⬜ SEO optimized

### **Feature Completeness**
- 🟡 Phase 1 baseline scaffold in progress
- 🟡 Phase 2 baseline scaffold started
- ⬜ Phase 3 features not started

### **Content Quality**
- ⬜ 50+ realistic publications
- ⬜ 20+ sample projects
- ⬜ 10+ policies
- 🟡 Interactive demo scaffold working

### **Innovation Factor**
- ⬜ AI semantic search working
- ⬜ Knowledge graph interactive
- 🟡 Foundation ready for differentiation

---

## 🚀 MVP vs Full Version

### **MVP (Minimum Viable Product) - For Competition**
- Homepage + 3 main sections
- Basic search (non-AI)
- 20+ sample content items
- 1-2 interactive features
- Mobile responsive
- **Timeline: 2-3 weeks**

### **Full Version - Post-Competition**
- All features from Prompt A, B, C
- Full AI integration
- 100+ content items
- All interactive features
- Admin panel
- **Timeline: 5-6 weeks**

---

## 💰 Budget Estimate

### **Development Phase**
- Developer time: Variable (self-developed)
- AI API (Gemini): **$0** (free tier)
- Database (Supabase): **$0** (free tier)
- Hosting (Vercel): **$0** (hobby plan)
- Domain (optional): ~$10/year

### **Total: $0-10** 🎉

---

## 🎓 Learning Resources

### **Next.js**
- Official docs: https://nextjs.org/docs
- App Router guide
- Server Components

### **Gemini AI**
- API docs: https://ai.google.dev/docs
- Embeddings guide
- Best practices

### **D3.js**
- Force-directed graphs
- Network visualizations
- Interactive charts

### **Tailwind CSS**
- Component patterns
- Responsive design
- Custom themes

---

## 📝 Notes

- Focus on **quality over quantity** for competition
- Prioritize **visual impact** and **innovation**
- Ensure **smooth demo** experience
- Prepare **backup plan** if AI API fails during demo
- Document **technical decisions** for judges

---

## 🔄 Iteration Strategy

1. **Build MVP first** (2 weeks)
2. **Get feedback** from peers
3. **Add wow features** (1 week)
4. **Polish & optimize** (1 week)
5. **Prepare presentation** (3 days)

---

**Last Updated:** 2026-06-17  
**Status:** MVP Scaffold Implemented  
**Next Milestone:** Finish remaining Phase 1 UX and content depth
