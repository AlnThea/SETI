# 🌱 SETI Knowledge & Impact Hub

> **Accelerating Indonesia's Energy Transition Through Knowledge, Evidence, and Collaboration**

A premium, donor-grade knowledge management platform showcasing Indonesia's sustainable energy transition journey through publications, projects, policies, and measurable impact.

**🎯 Production-Ready | 🧩 Modular Architecture | 🔒 Enterprise Security**

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)](https://tailwindcss.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini-AI-orange)](https://ai.google.dev/)
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

### 📚 Phase 1: Knowledge Hub
- **Smart Search** - Find publications, reports, policy briefs, and case studies
- **Theme Explorer** - Browse by Industrial Decarbonization, Green Buildings, Sustainable Finance, Energy Policy
- **Stakeholder Portal** - Tailored resources for each audience type
- **Related Knowledge** - Discover connections between content
- **Advanced Filters** - Filter by type, theme, date, organization

### 📊 Phase 2: Impact Portal
- **Project Repository** - Grid and interactive map views of implementation projects
- **Impact Dashboard** - Real-time metrics (CO2 reduction, energy savings, buildings supported)
- **Impact Stories** - Challenge → Intervention → Results → Lessons Learned
- **Policy Navigator** - Visual journey from policy to practice to replication
- **Interactive Charts** - Bar charts, line graphs, and data visualizations

### 🌐 Phase 3: Living Knowledge Network
- **Knowledge Explorer** - Interactive network graph of relationships
- **Knowledge Graph** - Visualize connections between themes, projects, policies, experts
- **Energy Transition Atlas** - Interactive Indonesia map with regional data
- **Knowledge Timeline** - Chronological view of policy → research → pilot → impact
- **Semantic Discovery** - AI-powered natural language search (Gemini API)

---

## 🛠️ Tech Stack

### Frontend
```
Next.js 15 (App Router)
├── React 18
├── TypeScript
├── Tailwind CSS
├── Shadcn/ui (Radix UI components)
├── Framer Motion (animations)
└── React Query (data fetching)
```

### Visualization
```
D3.js - Network graphs & force-directed layouts
Recharts - Charts & dashboards
Leaflet - Interactive maps
React Flow - Node-based diagrams
```

### Backend
```
Next.js API Routes
├── Prisma ORM
├── PostgreSQL (Supabase)
├── Gemini AI API
└── NextAuth.js (optional)
```

### AI Integration
```
Google Gemini API
├── Semantic search
├── Content summarization
├── Smart recommendations
└── Natural language queries
```

### Deployment
```
Vercel
├── Auto-deploy from GitHub
├── Edge functions
├── Analytics
└── Environment variables
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git
- Supabase account (free tier)
- Google Gemini API key (free tier)

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
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
```env
# Database
DATABASE_URL="your-supabase-connection-string"

# Gemini AI
GEMINI_API_KEY="your-gemini-api-key"

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

For detailed installation instructions, see [INSTALLATION.md](INSTALLATION.md)

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
│   ├── Next.js 15 App Router
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
- **[.docs/TASKS.md](.docs/TASKS.md)** - Task tracking (126 tasks)
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
npm run format       # Format with Prettier

# Database
npm run db:push      # Push schema changes
npm run db:seed      # Seed database
npm run db:studio    # Open Prisma Studio
npm run db:reset     # Reset database

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:e2e     # Run E2E tests
```

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
- `GEMINI_API_KEY`
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

### Current Phase
🟢 **Planning & Documentation** (Week 0)

### Progress
- ✅ Phase 0: Planning & Documentation (100%)
- ⚪ Phase 1: Knowledge Hub (0%)
- ⚪ Phase 2: Impact Portal (0%)
- ⚪ Phase 3: Living Network (0%)
- ⚪ Phase 4: Polish & Deploy (0%)

### Roadmap

- **Week 1-2:** Phase 1 - Knowledge Hub
- **Week 3:** Phase 2 - Impact Portal
- **Week 4:** Phase 3 - Living Knowledge Network
- **Week 5:** Phase 4 - Polish & Deploy

---

## 🎓 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)

### Gemini AI
- [Gemini API Documentation](https://ai.google.dev/docs)
- [Gemini Quickstart](https://ai.google.dev/tutorials/get_started_web)

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
- **Google** - For Gemini AI API
- **Vercel** - For hosting platform
- **Supabase** - For database infrastructure
- **Open Source Community** - For all the amazing tools

---

## 📞 Contact & Support

- **Project Lead:** [Your Name]
- **Email:** your.email@example.com
- **GitHub:** [@yourusername](https://github.com/yourusername)
- **Issues:** [GitHub Issues](https://github.com/yourusername/seti-knowledge-hub/issues)

---

## 🌟 Star History

If you find this project useful, please consider giving it a ⭐ on GitHub!

---

**Built with ❤️ for Indonesia's Energy Transition**

*Last Updated: 2026-06-17*