# 📚 SETI Knowledge & Impact Hub - Technical Documentation

Comprehensive technical documentation for developers working on the SETI Knowledge & Impact Hub.

---

## 📋 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Tech Stack Details](#tech-stack-details)
3. [Database Schema](#database-schema)
4. [API Documentation](#api-documentation)
5. [Component Library](#component-library)
6. [AI Integration](#ai-integration)
7. [Styling Guide](#styling-guide)
8. [Performance Optimization](#performance-optimization)
9. [Security Best Practices](#security-best-practices)
10. [Testing Strategy](#testing-strategy)

---

## 🏗️ Architecture Overview

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Client (Browser)                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   React UI   │  │ Visualizations│  │  AI Search   │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                   Next.js 15 (App Router)                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  SSR Pages   │  │  API Routes  │  │ Server Actions│  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                            │
            ┌───────────────┼───────────────┐
            ▼               ▼               ▼
    ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
    │  PostgreSQL  │ │  Gemini AI   │ │   Vercel     │
    │  (Supabase)  │ │     API      │ │   Storage    │
    └──────────────┘ └──────────────┘ └──────────────┘
```

### Application Flow

1. **User Request** → Next.js Server
2. **Server-Side Rendering** → Generate HTML
3. **Data Fetching** → Prisma → PostgreSQL
4. **AI Processing** (if needed) → Gemini API
5. **Response** → Client with hydrated React components

---

## 🛠️ Tech Stack Details

### Frontend Framework

**Next.js 15 (App Router)**
- Server Components by default
- Client Components with `'use client'`
- Streaming and Suspense support
- Built-in optimization (images, fonts, scripts)

```typescript
// app/page.tsx - Server Component (default)
export default async function HomePage() {
  const data = await fetchData(); // Server-side
  return <div>{data}</div>;
}

// components/SearchBar.tsx - Client Component
'use client';
export default function SearchBar() {
  const [query, setQuery] = useState('');
  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}
```

### State Management

**React Query (TanStack Query)**
- Server state management
- Automatic caching
- Background refetching
- Optimistic updates

```typescript
// lib/hooks/useProjects.ts
import { useQuery } from '@tanstack/react-query';

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await fetch('/api/projects');
      return res.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
```

### Styling

**Tailwind CSS + Shadcn/ui**
- Utility-first CSS
- Custom design system
- Accessible components
- Dark mode support

```typescript
// components/ui/button.tsx
import { cn } from '@/lib/utils';

export function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-lg bg-primary text-white',
        'hover:bg-primary/90 transition-colors',
        className
      )}
      {...props}
    />
  );
}
```

---

## 🗄️ Database Schema

### Core Models

#### Theme
```prisma
model Theme {
  id          String   @id @default(cuid())
  name        String   @unique
  slug        String   @unique
  description String
  icon        String?
  color       String?
  
  publications Publication[]
  projects     Project[]
  policies     Policy[]
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

#### Publication
```prisma
model Publication {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  summary     String
  content     String?
  type        PublicationType
  fileUrl     String?
  coverImage  String?
  
  themeId     String
  theme       Theme    @relation(fields: [themeId], references: [id])
  
  organizationId String?
  organization   Organization? @relation(fields: [organizationId], references: [id])
  
  tags        Tag[]
  
  publishedAt DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

enum PublicationType {
  REPORT
  POLICY_BRIEF
  ARTICLE
  CASE_STUDY
  TOOLKIT
}
```

#### Project
```prisma
model Project {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  description String
  background  String?
  objectives  String[]
  
  location    String
  province    String
  latitude    Float?
  longitude   Float?
  
  status      ProjectStatus
  startDate   DateTime
  endDate     DateTime?
  
  themeId     String
  theme       Theme    @relation(fields: [themeId], references: [id])
  
  impacts     Impact[]
  stakeholders Stakeholder[]
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

enum ProjectStatus {
  PLANNING
  ACTIVE
  COMPLETED
  ON_HOLD
}
```

#### Impact
```prisma
model Impact {
  id          String   @id @default(cuid())
  projectId   String
  project     Project  @relation(fields: [projectId], references: [id])
  
  metric      String   // e.g., "CO2 Reduction"
  value       Float
  unit        String   // e.g., "tons", "kWh", "%"
  description String?
  
  measuredAt  DateTime
  createdAt   DateTime @default(now())
}
```

### Relationships

```
Theme (1) ──── (N) Publication
Theme (1) ──── (N) Project
Theme (1) ──── (N) Policy

Project (1) ──── (N) Impact
Project (N) ──── (N) Stakeholder

Publication (N) ──── (N) Tag
```

---

## 🔌 API Documentation

### REST API Endpoints

#### Publications

**GET /api/publications**
```typescript
// Query parameters
interface PublicationsQuery {
  theme?: string;
  type?: PublicationType;
  search?: string;
  page?: number;
  limit?: number;
}

// Response
interface PublicationsResponse {
  data: Publication[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
```

**GET /api/publications/[slug]**
```typescript
// Response
interface PublicationResponse {
  data: Publication & {
    theme: Theme;
    organization: Organization;
    relatedPublications: Publication[];
    relatedProjects: Project[];
  };
}
```

#### Projects

**GET /api/projects**
```typescript
// Query parameters
interface ProjectsQuery {
  theme?: string;
  status?: ProjectStatus;
  province?: string;
  search?: string;
}

// Response
interface ProjectsResponse {
  data: Project[];
  total: number;
}
```

**GET /api/projects/[slug]**
```typescript
// Response
interface ProjectResponse {
  data: Project & {
    theme: Theme;
    impacts: Impact[];
    stakeholders: Stakeholder[];
    relatedProjects: Project[];
  };
}
```

#### AI Search

**POST /api/ai/search**
```typescript
// Request body
interface AISearchRequest {
  query: string;
  context?: string;
}

// Response
interface AISearchResponse {
  results: {
    publications: Publication[];
    projects: Project[];
    policies: Policy[];
    experts: Expert[];
  };
  summary: string;
  suggestions: string[];
}
```

---

## 🎨 Component Library

### Layout Components

#### Header
```typescript
// components/layout/Header.tsx
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
          <SearchButton />
        </div>
      </nav>
    </header>
  );
}
```

#### Footer
```typescript
// components/layout/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <FooterLinks />
        <FooterSocial />
        <FooterCopyright />
      </div>
    </footer>
  );
}
```

### UI Components

#### Card
```typescript
// components/ui/card.tsx
interface CardProps {
  title: string;
  description: string;
  image?: string;
  href?: string;
  badge?: string;
}

export function Card({ title, description, image, href, badge }: CardProps) {
  return (
    <div className="rounded-lg border bg-white p-6 hover:shadow-lg transition">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded" />}
      {badge && <Badge>{badge}</Badge>}
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      {href && <Link href={href} className="text-primary mt-4 inline-block">Learn more →</Link>}
    </div>
  );
}
```

### Visualization Components

#### Chart
```typescript
// components/visualizations/Chart.tsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: Array<{ name: string; value: number }>;
  title: string;
}

export function Chart({ data, title }: ChartProps) {
  return (
    <div className="bg-white p-6 rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#0B6B4A" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
```

#### Knowledge Graph
```typescript
// components/visualizations/KnowledgeGraph.tsx
'use client';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Node {
  id: string;
  type: string;
  label: string;
}

interface Link {
  source: string;
  target: string;
}

export function KnowledgeGraph({ nodes, links }: { nodes: Node[]; links: Link[] }) {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 600;
    
    // Force simulation
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d: any) => d.id))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2));
    
    // Render nodes and links
    // ... D3.js visualization code
  }, [nodes, links]);
  
  return <svg ref={svgRef} width="100%" height="600" />;
}
```

---

## 🤖 AI Integration

### Gemini API Setup

```typescript
// lib/gemini.ts
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateContent(prompt: string) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const result = await model.generateContent(prompt);
  return result.response.text();
}

export async function semanticSearch(query: string, context: any[]) {
  const prompt = `
    User query: "${query}"
    
    Available content:
    ${JSON.stringify(context, null, 2)}
    
    Based on the query, return the most relevant content items.
    Format as JSON with: { results: [], summary: "", suggestions: [] }
  `;
  
  const response = await generateContent(prompt);
  return JSON.parse(response);
}
```

### AI-Powered Features

#### Semantic Search
```typescript
// app/api/ai/search/route.ts
export async function POST(request: Request) {
  const { query } = await request.json();
  
  // Get all content
  const publications = await prisma.publication.findMany();
  const projects = await prisma.project.findMany();
  
  // Use AI to find relevant content
  const results = await semanticSearch(query, [...publications, ...projects]);
  
  return Response.json(results);
}
```

#### Content Summarization
```typescript
// lib/ai/summarize.ts
export async function summarizePublication(content: string) {
  const prompt = `
    Summarize the following publication in 2-3 sentences:
    
    ${content}
    
    Focus on key findings and impact.
  `;
  
  return await generateContent(prompt);
}
```

#### Smart Recommendations
```typescript
// lib/ai/recommendations.ts
export async function getRecommendations(currentItem: any, allItems: any[]) {
  const prompt = `
    Current item: ${JSON.stringify(currentItem)}
    
    Available items: ${JSON.stringify(allItems)}
    
    Recommend 5 most relevant items based on theme, content, and context.
    Return as JSON array of IDs.
  `;
  
  const response = await generateContent(prompt);
  return JSON.parse(response);
}
```

---

## 🎨 Styling Guide

### Design Tokens

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B6B4A',
          50: '#E6F4EF',
          100: '#CCE9DF',
          500: '#0B6B4A',
          900: '#054029',
        },
        energy: {
          DEFAULT: '#0A5EA8',
          50: '#E6F1FA',
          500: '#0A5EA8',
        },
        accent: {
          DEFAULT: '#F5B800',
          50: '#FEF9E6',
          500: '#F5B800',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};
```

### Component Patterns

```typescript
// Consistent spacing
<div className="space-y-6">  {/* Vertical spacing */}
<div className="space-x-4">  {/* Horizontal spacing */}

// Responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Hover effects
<button className="hover:bg-primary/90 transition-colors duration-200">

// Focus states
<input className="focus:ring-2 focus:ring-primary focus:outline-none">
```

---

## ⚡ Performance Optimization

### Image Optimization

```typescript
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/images/project.jpg"
  alt="Project"
  width={800}
  height={600}
  priority={false}  // Lazy load
  placeholder="blur"
/>
```

### Code Splitting

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const KnowledgeGraph = dynamic(
  () => import('@/components/visualizations/KnowledgeGraph'),
  { ssr: false, loading: () => <Spinner /> }
);
```

### Caching Strategy

```typescript
// API route with caching
export async function GET() {
  const data = await fetchData();
  
  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
```

---

## 🔒 Security Best Practices

### Environment Variables

```typescript
// Never expose secrets to client
// ✅ Good - Server-side only
const apiKey = process.env.GEMINI_API_KEY;

// ❌ Bad - Exposed to client
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
```

### Input Validation

```typescript
// Validate user input
import { z } from 'zod';

const searchSchema = z.object({
  query: z.string().min(1).max(200),
  page: z.number().int().positive().optional(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const validated = searchSchema.parse(body);
  // ... use validated data
}
```

### SQL Injection Prevention

```typescript
// ✅ Good - Prisma prevents SQL injection
const results = await prisma.publication.findMany({
  where: { title: { contains: userInput } }
});

// ❌ Bad - Raw SQL with user input
const results = await prisma.$queryRaw`
  SELECT * FROM publications WHERE title LIKE '%${userInput}%'
`;
```

---

## 🧪 Testing Strategy

### Unit Tests

```typescript
// __tests__/components/Card.test.tsx
import { render, screen } from '@testing-library/react';
import { Card } from '@/components/ui/card';

describe('Card', () => {
  it('renders title and description', () => {
    render(<Card title="Test" description="Description" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});
```

### Integration Tests

```typescript
// __tests__/api/publications.test.ts
import { GET } from '@/app/api/publications/route';

describe('/api/publications', () => {
  it('returns publications list', async () => {
    const response = await GET(new Request('http://localhost/api/publications'));
    const data = await response.json();
    expect(data.data).toBeInstanceOf(Array);
  });
});
```

---

## 📝 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Gemini API Documentation](https://ai.google.dev/docs)
- [D3.js Documentation](https://d3js.org/)

---

**Last Updated:** 2026-06-17  
**Version:** 1.0.0