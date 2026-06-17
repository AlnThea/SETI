# 📁 SETI Knowledge & Impact Hub - Project Structure

Complete overview of the project's file and folder organization.

---

## 🌳 Directory Tree

```
seti-knowledge-hub/
│
├── 📄 Root Configuration Files
│   ├── .env.example                 # Environment variables template
│   ├── .env.local                   # Local environment variables (gitignored)
│   ├── .eslintrc.json              # ESLint configuration
│   ├── .gitignore                  # Git ignore rules
│   ├── .prettierrc                 # Prettier configuration
│   ├── next.config.js              # Next.js configuration
│   ├── package.json                # Project dependencies
│   ├── pnpm-lock.yaml              # Lock file (or package-lock.json)
│   ├── postcss.config.js           # PostCSS configuration
│   ├── tailwind.config.ts          # Tailwind CSS configuration
│   └── tsconfig.json               # TypeScript configuration
│
├── 📚 Documentation
│   ├── README.md                   # Main project documentation
│   ├── PLANNING.md                 # Project planning & timeline
│   ├── DEVLOG.md                   # Daily development journal
│   ├── TASKS.md                    # Task tracking & progress
│   ├── INSTALLATION.md             # Installation guide
│   ├── DOCUMENTATION.md            # Technical documentation
│   ├── LICENSE.md                  # License information
│   └── PROJECT_STRUCTURE.md        # This file
│
├── 📋 Requirements (from client)
│   └── docs/
│       ├── prompt a.md             # Phase 1: Knowledge Hub specs
│       ├── prompt b.md             # Phase 2: Impact Portal specs
│       └── prompt c.md             # Phase 3: Living Network specs
│
├── 🎨 Application (Next.js 15 App Router)
│   └── app/
│       ├── layout.tsx              # Root layout
│       ├── page.tsx                # Homepage
│       ├── globals.css             # Global styles
│       ├── error.tsx               # Error boundary
│       ├── loading.tsx             # Loading UI
│       ├── not-found.tsx           # 404 page
│       │
│       ├── 📚 Knowledge Hub Routes
│       │   ├── knowledge/
│       │   │   ├── page.tsx                    # Knowledge Hub main page
│       │   │   ├── [slug]/
│       │   │   │   └── page.tsx                # Individual knowledge item
│       │   │   └── loading.tsx
│       │   │
│       │   ├── themes/
│       │   │   ├── page.tsx                    # All themes
│       │   │   └── [slug]/
│       │   │       └── page.tsx                # Theme detail page
│       │   │
│       │   └── stakeholders/
│       │       ├── page.tsx                    # All stakeholders
│       │       └── [type]/
│       │           └── page.tsx                # Stakeholder-specific page
│       │
│       ├── 🎯 Impact Portal Routes
│       │   ├── projects/
│       │   │   ├── page.tsx                    # Project repository
│       │   │   └── [slug]/
│       │   │       └── page.tsx                # Project detail
│       │   │
│       │   ├── impact/
│       │   │   ├── page.tsx                    # Impact dashboard
│       │   │   ├── stories/
│       │   │   │   └── [slug]/
│       │   │   │       └── page.tsx            # Impact story
│       │   │   └── dashboard/
│       │   │       └── page.tsx                # Detailed metrics
│       │   │
│       │   └── policy-navigator/
│       │       └── page.tsx                    # Policy to Practice Navigator
│       │
│       ├── 🌐 Living Network Routes
│       │   ├── explorer/
│       │   │   └── page.tsx                    # Knowledge Explorer
│       │   │
│       │   ├── graph/
│       │   │   └── page.tsx                    # Knowledge Graph
│       │   │
│       │   ├── atlas/
│       │   │   ├── page.tsx                    # Energy Transition Atlas
│       │   │   └── [province]/
│       │   │       └── page.tsx                # Province detail
│       │   │
│       │   └── timeline/
│       │       └── page.tsx                    # Knowledge Timeline
│       │
│       ├── 🔍 Search & AI
│       │   └── search/
│       │       └── page.tsx                    # Search results page
│       │
│       ├── ℹ️ Static Pages
│       │   ├── about/
│       │   │   └── page.tsx                    # About SETI
│       │   ├── contact/
│       │   │   └── page.tsx                    # Contact page
│       │   └── privacy/
│       │       └── page.tsx                    # Privacy policy
│       │
│       └── 🔌 API Routes
│           └── api/
│               ├── publications/
│               │   ├── route.ts                # GET /api/publications
│               │   └── [slug]/
│               │       └── route.ts            # GET /api/publications/[slug]
│               │
│               ├── projects/
│               │   ├── route.ts                # GET /api/projects
│               │   └── [slug]/
│               │       └── route.ts            # GET /api/projects/[slug]
│               │
│               ├── themes/
│               │   ├── route.ts                # GET /api/themes
│               │   └── [slug]/
│               │       └── route.ts            # GET /api/themes/[slug]
│               │
│               ├── impact/
│               │   ├── metrics/
│               │   │   └── route.ts            # GET /api/impact/metrics
│               │   └── dashboard/
│               │       └── route.ts            # GET /api/impact/dashboard
│               │
│               ├── search/
│               │   └── route.ts                # POST /api/search
│               │
│               └── ai/
│                   ├── search/
│                   │   └── route.ts            # POST /api/ai/search
│                   ├── summarize/
│                   │   └── route.ts            # POST /api/ai/summarize
│                   └── recommend/
│                       └── route.ts            # POST /api/ai/recommend
│
├── 🧩 Components
│   └── components/
│       ├── 🎨 UI Components (Shadcn/ui)
│       │   └── ui/
│       │       ├── button.tsx
│       │       ├── card.tsx
│       │       ├── input.tsx
│       │       ├── badge.tsx
│       │       ├── dialog.tsx
│       │       ├── dropdown-menu.tsx
│       │       ├── select.tsx
│       │       ├── tabs.tsx
│       │       ├── tooltip.tsx
│       │       └── ... (other Shadcn components)
│       │
│       ├── 📐 Layout Components
│       │   └── layout/
│       │       ├── header.tsx               # Site header
│       │       ├── footer.tsx               # Site footer
│       │       ├── navigation.tsx           # Main navigation
│       │       ├── mobile-menu.tsx          # Mobile navigation
│       │       ├── breadcrumb.tsx           # Breadcrumb navigation
│       │       └── sidebar.tsx              # Sidebar (if needed)
│       │
│       ├── 📚 Knowledge Components
│       │   └── knowledge/
│       │       ├── publication-card.tsx     # Publication card
│       │       ├── publication-list.tsx     # List of publications
│       │       ├── publication-detail.tsx   # Publication detail view
│       │       ├── theme-card.tsx           # Theme card
│       │       ├── stakeholder-card.tsx     # Stakeholder card
│       │       ├── filter-bar.tsx           # Filter component
│       │       ├── search-bar.tsx           # Search component
│       │       └── related-content.tsx      # Related content section
│       │
│       ├── 🎯 Project Components
│       │   └── projects/
│       │       ├── project-card.tsx         # Project card
│       │       ├── project-list.tsx         # Project list
│       │       ├── project-detail.tsx       # Project detail view
│       │       ├── project-map.tsx          # Interactive map
│       │       ├── project-timeline.tsx     # Project timeline
│       │       └── project-gallery.tsx      # Image gallery
│       │
│       ├── 📊 Visualization Components
│       │   └── visualizations/
│       │       ├── charts/
│       │       │   ├── bar-chart.tsx        # Bar chart
│       │       │   ├── line-chart.tsx       # Line chart
│       │       │   ├── pie-chart.tsx        # Pie chart
│       │       │   └── metric-card.tsx      # Metric display card
│       │       │
│       │       ├── graphs/
│       │       │   ├── knowledge-graph.tsx  # D3 knowledge graph
│       │       │   ├── network-graph.tsx    # Network visualization
│       │       │   └── force-graph.tsx      # Force-directed graph
│       │       │
│       │       ├── maps/
│       │       │   ├── indonesia-map.tsx    # Indonesia map
│       │       │   ├── province-map.tsx     # Province detail map
│       │       │   └── project-markers.tsx  # Map markers
│       │       │
│       │       └── timelines/
│       │           ├── knowledge-timeline.tsx   # Knowledge timeline
│       │           └── policy-timeline.tsx      # Policy timeline
│       │
│       ├── 🤖 AI Components
│       │   └── ai/
│       │       ├── semantic-search.tsx      # AI search interface
│       │       ├── recommendations.tsx      # AI recommendations
│       │       ├── summary.tsx              # Content summary
│       │       └── chat-interface.tsx       # AI chat (optional)
│       │
│       └── 🔧 Shared Components
│           └── shared/
│               ├── loading-spinner.tsx      # Loading indicator
│               ├── error-message.tsx        # Error display
│               ├── pagination.tsx           # Pagination
│               ├── empty-state.tsx          # Empty state
│               ├── hero-section.tsx         # Hero section
│               ├── stats-section.tsx        # Statistics display
│               └── cta-section.tsx          # Call-to-action
│
├── 🛠️ Utilities & Libraries
│   └── lib/
│       ├── prisma.ts                   # Prisma client instance
│       ├── gemini.ts                   # Gemini AI client
│       ├── utils.ts                    # Utility functions
│       ├── constants.ts                # App constants
│       ├── types.ts                    # TypeScript types
│       │
│       ├── hooks/
│       │   ├── use-publications.ts     # Publications hook
│       │   ├── use-projects.ts         # Projects hook
│       │   ├── use-search.ts           # Search hook
│       │   └── use-ai.ts               # AI features hook
│       │
│       ├── api/
│       │   ├── publications.ts         # Publications API client
│       │   ├── projects.ts             # Projects API client
│       │   ├── themes.ts               # Themes API client
│       │   └── ai.ts                   # AI API client
│       │
│       └── validations/
│           ├── publication.ts          # Publication validation schemas
│           ├── project.ts              # Project validation schemas
│           └── search.ts               # Search validation schemas
│
├── 🗄️ Database
│   └── prisma/
│       ├── schema.prisma               # Database schema
│       ├── seed.ts                     # Seed data script
│       └── migrations/                 # Database migrations
│           └── ... (migration files)
│
├── 🎨 Public Assets
│   └── public/
│       ├── images/
│       │   ├── logo.svg                # SETI logo
│       │   ├── hero/                   # Hero images
│       │   ├── projects/               # Project images
│       │   ├── themes/                 # Theme images
│       │   └── placeholders/           # Placeholder images
│       │
│       ├── icons/
│       │   ├── favicon.ico             # Favicon
│       │   ├── apple-touch-icon.png    # Apple touch icon
│       │   └── ... (other icons)
│       │
│       ├── documents/
│       │   └── sample-publications/    # Sample PDF files
│       │
│       └── fonts/                      # Custom fonts (if any)
│
└── 🧪 Testing
    └── __tests__/
        ├── components/                 # Component tests
        │   ├── ui/
        │   ├── knowledge/
        │   └── projects/
        │
        ├── api/                        # API tests
        │   ├── publications.test.ts
        │   └── projects.test.ts
        │
        ├── lib/                        # Utility tests
        │   └── utils.test.ts
        │
        └── e2e/                        # End-to-end tests
            ├── homepage.spec.ts
            ├── knowledge-hub.spec.ts
            └── projects.spec.ts
```

---

## 📝 File Naming Conventions

### Components
- **React Components:** PascalCase with `.tsx` extension
  - Example: `PublicationCard.tsx`, `KnowledgeGraph.tsx`
  
- **Utility Files:** camelCase with `.ts` extension
  - Example: `utils.ts`, `gemini.ts`

### Routes (App Router)
- **Pages:** `page.tsx`
- **Layouts:** `layout.tsx`
- **Loading States:** `loading.tsx`
- **Error Boundaries:** `error.tsx`
- **Not Found:** `not-found.tsx`

### API Routes
- **Route Handlers:** `route.ts`
- **HTTP Methods:** Export named functions (GET, POST, PUT, DELETE)

---

## 🎯 Key Directories Explained

### `/app`
Next.js 15 App Router directory. Contains all routes, pages, and API endpoints.

### `/components`
Reusable React components organized by feature and purpose.

### `/lib`
Utility functions, API clients, hooks, and shared logic.

### `/prisma`
Database schema, migrations, and seed data.

### `/public`
Static assets served directly (images, icons, documents).

### `/docs`
Original project requirements and specifications.

---

## 🔧 Configuration Files

### `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'supabase.co'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
```

### `tailwind.config.ts`
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B6B4A',
        energy: '#0A5EA8',
        accent: '#F5B800',
      },
    },
  },
  plugins: [],
};

export default config;
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## 📦 Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "db:push": "prisma db push",
    "db:seed": "prisma db seed",
    "db:studio": "prisma studio",
    "db:reset": "prisma migrate reset",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:e2e": "playwright test"
  }
}
```

---

## 🌿 Git Ignore

Key files and directories that should be ignored:

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/
.nyc_output

# Next.js
.next/
out/
build/
dist/

# Environment
.env
.env.local
.env.*.local

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Prisma
prisma/migrations/
```

---

## 📊 Project Statistics

- **Total Directories:** ~50
- **Estimated Files:** ~200+
- **Main Technologies:** 10+
- **API Endpoints:** ~20+
- **React Components:** ~80+
- **Database Models:** ~15+

---

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Setup environment: Copy `.env.example` to `.env.local`
4. Setup database: `npm run db:push && npm run db:seed`
5. Run development: `npm run dev`

---

## 📚 Related Documentation

- [README.md](README.md) - Project overview
- [INSTALLATION.md](INSTALLATION.md) - Installation guide
- [DOCUMENTATION.md](DOCUMENTATION.md) - Technical docs
- [PLANNING.md](PLANNING.md) - Project planning
- [TASKS.md](TASKS.md) - Task tracking

---

**Last Updated:** 2026-06-17  
**Version:** 1.0.0