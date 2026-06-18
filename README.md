# 🌱 SETI Knowledge & Impact Hub

> **Accelerating Indonesia's Energy Transition Through Knowledge, Evidence, and Collaboration**

A premium, donor-grade knowledge management platform showcasing Indonesia's sustainable energy transition journey through publications, projects, policies, and measurable impact.

**Current baseline: working Phase 1 knowledge hub with initial Phase 2 pages**

### What Can Be Demoed Now

- A searchable knowledge hub backed by local Prisma + SQLite data
- Four theme pages and five stakeholder entry points with linked evidence
- Seeded content set with 55 publications, tags, projects, and impact records
- A project repository baseline and an impact summary baseline
- A responsive UI shell already validated through lint, type-check, build, and smoke checks

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Documentation](#documentation)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

SETI Knowledge & Impact Hub is **NOT a corporate website** — it's a living knowledge ecosystem designed for:

- 🏛️ **Policymakers** - Evidence-based policy insights
- 🏭 **Industry** - Implementation guides and case studies
- 🔬 **Researchers** - Publications and data
- 💰 **Financial Institutions** - Investment opportunities and impact metrics
- 📰 **Media** - Stories and press resources
- 🤝 **Development Partners** - Collaboration opportunities

### Inspiration

Built to match the quality and functionality of world-class platforms like:
- OECD Observatory
- World Bank Knowledge Portal
- IEA Data Portal
- WRI Resources Hub

---

## ✨ Features

### Implemented now
- **Homepage** with hero search, stats, theme cards, stakeholder cards, and featured knowledge
- **Knowledge Hub** with search, theme/type/year/tag filters, sort, and pagination
- **Theme Detail Pages** for the four seeded themes
- **Stakeholder Detail Pages** with relevant publications, projects, and policy brief section
- **Projects Page** with seeded project grid
- **Impact Page** with aggregate impact metrics and current project highlights
- **Seeded Local Data** with 55 publications plus tags and linked entities

### In progress / next
- **Phase 2 expansion** - project filters, map toggle, project detail pages, richer impact views
- **Phase 3 exploration** - graph, atlas, timeline, and semantic discovery are not implemented yet

## 🧭 Current Implementation Snapshot

This repository is tracked from `.docs/TASKS.md` and `.docs/IMPLEMENTATION_STATUS.md`. The summary below is meant to describe the actual codebase, not the full target vision.

<!-- AUTO-GENERATED:SNAPSHOT:START -->
### Working today
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
- Phase 1 smoke validation via lint, type-check, production build, and local route/API checks
- Knowledge pagination now clamps out-of-range page values
- Theme and stakeholder detail routes now prerender via static params

### Partially implemented
- Design system: reusable UI primitives are still thin, but layout, typography, and card patterns are now more consistent
- Content model: publications now support tags and richer seeded volume, but Phase 2/3 entity depth is still limited
- Impact portal: page and aggregate metrics exist, but no charts, maps, or story detail pages
- Mobile QA is improved for the header and core layouts, but there is still no automated viewport regression coverage

### Not implemented yet
- Shadcn/ui integration
- Publication detail pages
- Project detail pages
- Leaflet map view
- Recharts dashboards
- Knowledge graph / D3
- Gemini AI integration
- Deployment and QA hardening
<!-- AUTO-GENERATED:SNAPSHOT:END -->

---

## 🛠️ Tech Stack

### Frontend
```
Next.js 16 (App Router)
├── React 19
├── TypeScript
├── Tailwind CSS
└── Lucide React
```

### Backend
```
Next.js API Routes
├── Prisma ORM
└── SQLite (current local development database)
```

### Deployment
```
Not configured yet
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- npm

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/seti-knowledge-hub.git
cd seti-knowledge-hub
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Setup environment variables**
```bash
copy .env.example .env
```

Edit `.env` if needed:
```env
# Database
DATABASE_URL="file:./dev.db"

# Next.js
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. **Setup database**
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

5. **Run development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. **Open browser**
```
http://localhost:3000
```

For detailed installation instructions, see [.docs/INSTALLATION.md](.docs/INSTALLATION.md)

---

## 📁 Project Structure

```
seti-knowledge-hub/
├── 📄 Root Files
│   ├── README.md                    # This file
│   └── LICENSE.md                   # MIT License
│
├── 📚 Documentation (.docs/)
│   ├── README.md                    # Documentation index
│   ├── PLANNING.md                  # Project planning & roadmap
│   ├── TASKS.md                     # Task tracking
│   ├── DEVLOG.md                    # Development journal
│   ├── INSTALLATION.md              # Setup guide
│   ├── DOCUMENTATION.md             # Technical docs
│   ├── CODE_STANDARDS.md            # Coding standards & best practices
│   └── PROJECT_STRUCTURE.md         # Complete structure overview
│
├── 📋 Requirements (docs/)
│   ├── prompt a.md                  # Phase 1: Knowledge Hub
│   ├── prompt b.md                  # Phase 2: Impact Portal
│   └── prompt c.md                  # Phase 3: Living Network
│
├── 🎨 Application (app/)
│   ├── Next.js 16 App Router
│   ├── API Routes
│   └── Pages & Layouts
│
├── 🧩 Components (components/)
│   ├── UI Components
│   ├── Feature Components
│   └── Visualizations
│
├── 🛠️ Utilities (lib/)
│   ├── API Clients
│   ├── Hooks
│   └── Utils
│
├── 🗄️ Database (prisma/)
│   ├── Schema
│   └── Migrations
│
└── 🎨 Assets (public/)
    ├── Images
    ├── Icons
    └── Documents

📖 See .docs/PROJECT_STRUCTURE.md for complete details
```

---

## 📖 Documentation

All documentation is organized in the `.docs/` folder:

### 📚 Main Documentation
- **[.docs/README.md](.docs/README.md)** - Documentation index & guide
- **[.docs/INSTALLATION.md](.docs/INSTALLATION.md)** - Complete setup guide
- **[.docs/CODE_STANDARDS.md](.docs/CODE_STANDARDS.md)** - ⭐ **Production-ready code guidelines**

### 🎯 Planning & Management
- **[.docs/PLANNING.md](.docs/PLANNING.md)** - Project roadmap & timeline
- **[.docs/TASKS.md](.docs/TASKS.md)** - Task tracking (155 checklist items currently tracked)
- **[.docs/DEVLOG.md](.docs/DEVLOG.md)** - Development journal

### 🛠️ Technical Docs
- **[.docs/DOCUMENTATION.md](.docs/DOCUMENTATION.md)** - Architecture & API docs
- **[.docs/PROJECT_STRUCTURE.md](.docs/PROJECT_STRUCTURE.md)** - Complete file structure

### 📋 Requirements
- **[docs/prompt a.md](docs/prompt%20a.md)** - Phase 1: Knowledge Hub
- **[docs/prompt b.md](docs/prompt%20b.md)** - Phase 2: Impact Portal
- **[docs/prompt c.md](docs/prompt%20c.md)** - Phase 3: Living Network

### 📄 Legal
- **[LICENSE.md](LICENSE.md)** - MIT License

---

### 🎓 Quick Start Guides

**For Developers:**
1. Read [INSTALLATION.md](.docs/INSTALLATION.md) for setup
2. Study [CODE_STANDARDS.md](.docs/CODE_STANDARDS.md) for coding guidelines
3. Check [TASKS.md](.docs/TASKS.md) for available tasks

**For Project Managers:**
1. Review [PLANNING.md](.docs/PLANNING.md) for overview
2. Monitor [TASKS.md](.docs/TASKS.md) for progress
3. Check [DEVLOG.md](.docs/DEVLOG.md) for updates

---

## 💻 Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
npm run docs:sync    # Sync README/TASKS progress and status blocks
npm run hooks:install # Enable local git hooks for this clone

# Database
npm run db:push      # Push schema changes
npm run db:seed      # Seed database
npm run db:studio    # Open Prisma Studio
```

### Documentation Automation

- `.docs/TASKS.md` remains the primary checklist source of truth.
- `.docs/IMPLEMENTATION_STATUS.md` remains the primary implementation-status source of truth.
- `npm run docs:sync` recalculates tracked progress and refreshes the auto-generated status blocks in `README.md`.
- `npm run hooks:install` configures this local clone to run `docs:sync` automatically before each commit and stage the updated docs.

### Development Workflow

1. Create a new branch for your feature
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit
```bash
git add .
git commit -m "feat: add your feature"
```

3. Push to your branch
```bash
git push origin feature/your-feature-name
```

4. Create a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Write meaningful commit messages (Conventional Commits)
- Add comments for complex logic
- Keep components small and focused

---

## 🌍 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git push origin main
```

2. **Import to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your repository
- Configure environment variables
- Deploy!

3. **Configure Environment Variables**
Add these in Vercel dashboard:
- `DATABASE_URL`
- `NEXT_PUBLIC_APP_URL`

4. **Setup Database**
```bash
npx prisma db push
npx prisma db seed
```

### Alternative Deployment Options

- **Netlify** - Similar to Vercel
- **Railway** - Includes database hosting
- **DigitalOcean App Platform** - Full control
- **AWS Amplify** - Enterprise scale

For detailed deployment instructions, see [DOCUMENTATION.md](DOCUMENTATION.md)

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Be respectful and constructive

---

## 📊 Project Status

<!-- AUTO-GENERATED:STATUS:START -->
### Current Phase
🟡 **Phase 2 Buildout**

### Progress
- ✅ Phase 1: Knowledge Hub (43/53 tracked tasks, 81%)
- 🟡 Phase 2: Impact Portal (7/33 tracked tasks, 21%)
- ⚪ Phase 3: Living Network (0/38 tracked tasks, 0%)
- ⚪ Phase 4: Polish & Deploy (0/31 tracked tasks, 0%)

### Next Milestone
Deliver project repository depth beyond the baseline grid

### Next 3 Priorities
1. Day 1: Add Phase 2 project repository filtering and map toggle groundwork
2. Day 2: Start project detail page structure and content sections
3. Day 3: Expand impact portal beyond aggregate cards
<!-- AUTO-GENERATED:STATUS:END -->

---

## 🎓 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)

### D3.js
- [D3.js Documentation](https://d3js.org/)
- [Observable D3 Gallery](https://observablehq.com/@d3/gallery)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

## 🙏 Acknowledgments

- **SETI** - For the vision and mission
- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting platform
- **Open Source Community** - For all the amazing tools

---

## 📞 Contact & Support

- **Project Lead:** Dahlan Fauzi
- **Email:** dahlan.fauzi1991@gmail.com
- **GitHub:** [@AlnThea](https://github.com/AlnThea)

---

## 🌟 Star History

If you find this project useful, please consider giving it a ⭐ on GitHub!

---

**Built with ❤️ for Indonesia's Energy Transition**

*Last Updated: 2026-06-18*
