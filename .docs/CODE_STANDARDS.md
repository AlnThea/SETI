# 🎯 SETI - Code Standards & Best Practices

## Production-Ready Code Guidelines

Panduan lengkap untuk menulis kode yang modular, maintainable, dan siap production.

---

## 📋 Table of Contents

1. [Code Architecture](#code-architecture)
2. [Modular Design Principles](#modular-design-principles)
3. [TypeScript Best Practices](#typescript-best-practices)
4. [Component Standards](#component-standards)
5. [API Design](#api-design)
6. [Error Handling](#error-handling)
7. [Performance Guidelines](#performance-guidelines)
8. [Security Standards](#security-standards)
9. [Testing Requirements](#testing-requirements)
10. [Code Review Checklist](#code-review-checklist)

---

## 🏗️ Code Architecture

### Separation of Concerns

```typescript
// ❌ BAD - Everything in one file
export default function ProjectPage() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(setData);
  }, []);
  
  return (
    <div>
      {data.map(project => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

// ✅ GOOD - Separated concerns
// hooks/useProjects.ts
export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });
}

// api/projects.ts
export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch('/api/projects');
  if (!response.ok) throw new Error('Failed to fetch projects');
  return response.json();
}

// components/ProjectCard.tsx
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{project.description}</p>
      </CardContent>
    </Card>
  );
}

// app/projects/page.tsx
export default function ProjectsPage() {
  const { data: projects, isLoading, error } = useProjects();
  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects?.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
```

---

## 🧩 Modular Design Principles

### 1. Single Responsibility Principle

```typescript
// ❌ BAD - Component does too much
function UserDashboard() {
  // Fetches data
  // Handles authentication
  // Renders UI
  // Manages state
  // Handles forms
}

// ✅ GOOD - Each module has one responsibility
function UserDashboard() {
  const { user } = useAuth();
  const { data } = useUserData(user.id);
  
  return (
    <DashboardLayout>
      <UserProfile user={user} />
      <UserStats data={data} />
      <UserActivity data={data} />
    </DashboardLayout>
  );
}
```

### 2. DRY (Don't Repeat Yourself)

```typescript
// ❌ BAD - Repeated logic
function PublicationCard({ publication }) {
  const formattedDate = new Date(publication.date).toLocaleDateString('id-ID');
  // ...
}

function ProjectCard({ project }) {
  const formattedDate = new Date(project.date).toLocaleDateString('id-ID');
  // ...
}

// ✅ GOOD - Reusable utility
// lib/utils/date.ts
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Usage
function PublicationCard({ publication }) {
  const formattedDate = formatDate(publication.date);
  // ...
}
```

### 3. Composition Over Inheritance

```typescript
// ❌ BAD - Deep inheritance
class BaseCard extends Component {}
class ContentCard extends BaseCard {}
class PublicationCard extends ContentCard {}

// ✅ GOOD - Composition
function Card({ children, className }: CardProps) {
  return <div className={cn('rounded-lg border', className)}>{children}</div>;
}

function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{publication.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{publication.summary}</CardDescription>
      </CardContent>
    </Card>
  );
}
```

---

## 📘 TypeScript Best Practices

### 1. Strict Type Safety

```typescript
// ❌ BAD - Using 'any'
function processData(data: any) {
  return data.map((item: any) => item.value);
}

// ✅ GOOD - Proper types
interface DataItem {
  id: string;
  value: number;
  label: string;
}

function processData(data: DataItem[]): number[] {
  return data.map(item => item.value);
}
```

### 2. Type Definitions

```typescript
// lib/types/index.ts
export interface Publication {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content?: string;
  type: PublicationType;
  publishedAt: Date;
  theme: Theme;
  organization?: Organization;
  tags: Tag[];
}

export enum PublicationType {
  REPORT = 'REPORT',
  POLICY_BRIEF = 'POLICY_BRIEF',
  ARTICLE = 'ARTICLE',
  CASE_STUDY = 'CASE_STUDY',
  TOOLKIT = 'TOOLKIT',
}

export interface Theme {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
```

### 3. Generic Types

```typescript
// lib/api/client.ts
export async function apiGet<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  const response = await fetch(`/api${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  
  return response.json();
}

// Usage
const publications = await apiGet<Publication[]>('/publications');
const project = await apiGet<Project>('/projects/slug-here');
```

---

## 🎨 Component Standards

### 1. Component Structure

```typescript
// components/knowledge/PublicationCard.tsx
'use client'; // Only if needed

import { type FC } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils/date';
import type { Publication } from '@/lib/types';

// Props interface
interface PublicationCardProps {
  publication: Publication;
  variant?: 'default' | 'compact';
  onSelect?: (id: string) => void;
}

// Component
export const PublicationCard: FC<PublicationCardProps> = ({
  publication,
  variant = 'default',
  onSelect,
}) => {
  // Hooks
  const handleClick = () => {
    onSelect?.(publication.id);
  };
  
  // Render helpers
  const renderBadge = () => (
    <Badge variant="secondary">{publication.type}</Badge>
  );
  
  // Main render
  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="line-clamp-2">
            {publication.title}
          </CardTitle>
          {renderBadge()}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {publication.summary}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>{publication.theme.name}</span>
          <time dateTime={publication.publishedAt.toISOString()}>
            {formatDate(publication.publishedAt)}
          </time>
        </div>
      </CardContent>
    </Card>
  );
};

// Display name for debugging
PublicationCard.displayName = 'PublicationCard';
```

### 2. Custom Hooks

```typescript
// hooks/usePublications.ts
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { fetchPublications } from '@/lib/api/publications';
import type { Publication, PaginatedResponse } from '@/lib/types';

interface UsePublicationsOptions {
  theme?: string;
  type?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export function usePublications(
  options: UsePublicationsOptions = {}
): UseQueryResult<PaginatedResponse<Publication>> {
  return useQuery({
    queryKey: ['publications', options],
    queryFn: () => fetchPublications(options),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}

// Usage
function PublicationsPage() {
  const { data, isLoading, error, refetch } = usePublications({
    theme: 'industrial-decarbonization',
    page: 1,
    limit: 12,
  });
  
  // ...
}
```

---

## 🔌 API Design

### 1. RESTful API Structure

```typescript
// app/api/publications/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { handleApiError } from '@/lib/api/errors';

// Validation schema
const querySchema = z.object({
  theme: z.string().optional(),
  type: z.enum(['REPORT', 'POLICY_BRIEF', 'ARTICLE', 'CASE_STUDY', 'TOOLKIT']).optional(),
  search: z.string().optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(12),
});

export async function GET(request: NextRequest) {
  try {
    // Parse and validate query parameters
    const searchParams = Object.fromEntries(request.nextUrl.searchParams);
    const validated = querySchema.parse(searchParams);
    
    // Build query
    const where = {
      ...(validated.theme && { theme: { slug: validated.theme } }),
      ...(validated.type && { type: validated.type }),
      ...(validated.search && {
        OR: [
          { title: { contains: validated.search, mode: 'insensitive' } },
          { summary: { contains: validated.search, mode: 'insensitive' } },
        ],
      }),
    };
    
    // Execute queries in parallel
    const [publications, total] = await Promise.all([
      prisma.publication.findMany({
        where,
        include: {
          theme: true,
          organization: true,
          tags: true,
        },
        skip: (validated.page - 1) * validated.limit,
        take: validated.limit,
        orderBy: { publishedAt: 'desc' },
      }),
      prisma.publication.count({ where }),
    ]);
    
    // Return response
    return NextResponse.json({
      data: publications,
      pagination: {
        page: validated.page,
        limit: validated.limit,
        total,
        totalPages: Math.ceil(total / validated.limit),
      },
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    return handleApiError(error);
  }
}
```

### 2. Error Handling

```typescript
// lib/api/errors.ts
import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { Prisma } from '@prisma/client';

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function handleApiError(error: unknown) {
  console.error('API Error:', error);
  
  // Zod validation error
  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        error: 'Validation Error',
        details: error.errors,
      },
      { status: 400 }
    );
  }
  
  // Prisma errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Resource already exists' },
        { status: 409 }
      );
    }
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Resource not found' },
        { status: 404 }
      );
    }
  }
  
  // Custom API error
  if (error instanceof ApiError) {
    return NextResponse.json(
      {
        error: error.message,
        code: error.code,
      },
      { status: error.statusCode }
    );
  }
  
  // Unknown error
  return NextResponse.json(
    { error: 'Internal Server Error' },
    { status: 500 }
  );
}
```

---

## 🛡️ Error Handling

### 1. Client-Side Error Boundaries

```typescript
// components/ErrorBoundary.tsx
'use client';

import { Component, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Send to error tracking service (e.g., Sentry)
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <p className="text-muted-foreground mb-6">
            {this.state.error?.message || 'An unexpected error occurred'}
          </p>
          <Button onClick={() => this.setState({ hasError: false })}>
            Try again
          </Button>
        </div>
      );
    }
    
    return this.props.children;
  }
}
```

### 2. Async Error Handling

```typescript
// lib/utils/async.ts
export async function withErrorHandling<T>(
  fn: () => Promise<T>,
  errorMessage = 'An error occurred'
): Promise<[T | null, Error | null]> {
  try {
    const result = await fn();
    return [result, null];
  } catch (error) {
    console.error(errorMessage, error);
    return [null, error instanceof Error ? error : new Error(String(error))];
  }
}

// Usage
const [data, error] = await withErrorHandling(
  () => fetchPublications(),
  'Failed to fetch publications'
);

if (error) {
  // Handle error
  return <ErrorMessage error={error} />;
}

// Use data safely
return <PublicationList publications={data} />;
```

---

## ⚡ Performance Guidelines

### 1. Code Splitting

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const KnowledgeGraph = dynamic(
  () => import('@/components/visualizations/KnowledgeGraph'),
  {
    ssr: false,
    loading: () => <LoadingSpinner />,
  }
);

const HeavyChart = dynamic(
  () => import('@/components/charts/HeavyChart'),
  {
    loading: () => <ChartSkeleton />,
  }
);
```

### 2. Memoization

```typescript
import { memo, useMemo, useCallback } from 'react';

// Memoize expensive computations
function ProjectList({ projects }: { projects: Project[] }) {
  const sortedProjects = useMemo(
    () => projects.sort((a, b) => b.impact - a.impact),
    [projects]
  );
  
  const handleProjectClick = useCallback((id: string) => {
    // Handle click
  }, []);
  
  return (
    <div>
      {sortedProjects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={handleProjectClick}
        />
      ))}
    </div>
  );
}

// Memoize component
export const ProjectCard = memo(function ProjectCard({ project, onClick }) {
  return (
    <Card onClick={() => onClick(project.id)}>
      {/* ... */}
    </Card>
  );
});
```

### 3. Image Optimization

```typescript
import Image from 'next/image';

// ✅ GOOD - Optimized images
<Image
  src={project.imageUrl}
  alt={project.title}
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL={project.blurDataUrl}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

## 🔒 Security Standards

### 1. Input Validation

```typescript
// Always validate user input
import { z } from 'zod';

const searchSchema = z.object({
  query: z.string().min(1).max(200),
  filters: z.object({
    theme: z.string().optional(),
    type: z.enum(['REPORT', 'ARTICLE']).optional(),
  }).optional(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const validated = searchSchema.parse(body); // Throws if invalid
  // Use validated data
}
```

### 2. Environment Variables

```typescript
// lib/env.ts
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  GEMINI_API_KEY: z.string().min(1),
  NEXT_PUBLIC_APP_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);

// Usage - Type-safe environment variables
import { env } from '@/lib/env';
const apiKey = env.GEMINI_API_KEY;
```

### 3. SQL Injection Prevention

```typescript
// ✅ GOOD - Prisma prevents SQL injection
const results = await prisma.publication.findMany({
  where: {
    title: { contains: userInput },
  },
});

// ❌ BAD - Never use raw SQL with user input
const results = await prisma.$queryRaw`
  SELECT * FROM publications WHERE title LIKE '%${userInput}%'
`;
```

---

## 🧪 Testing Requirements

### 1. Unit Tests

```typescript
// __tests__/lib/utils/date.test.ts
import { formatDate } from '@/lib/utils/date';

describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2024-01-15');
    expect(formatDate(date)).toBe('15 Januari 2024');
  });
  
  it('handles string input', () => {
    expect(formatDate('2024-01-15')).toBe('15 Januari 2024');
  });
});
```

### 2. Component Tests

```typescript
// __tests__/components/PublicationCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { PublicationCard } from '@/components/knowledge/PublicationCard';

describe('PublicationCard', () => {
  const mockPublication = {
    id: '1',
    title: 'Test Publication',
    summary: 'Test summary',
    type: 'REPORT',
    theme: { name: 'Green Buildings' },
    publishedAt: new Date('2024-01-15'),
  };
  
  it('renders publication data', () => {
    render(<PublicationCard publication={mockPublication} />);
    expect(screen.getByText('Test Publication')).toBeInTheDocument();
    expect(screen.getByText('Test summary')).toBeInTheDocument();
  });
  
  it('calls onSelect when clicked', () => {
    const onSelect = jest.fn();
    render(<PublicationCard publication={mockPublication} onSelect={onSelect} />);
    fireEvent.click(screen.getByText('Test Publication'));
    expect(onSelect).toHaveBeenCalledWith('1');
  });
});
```

---

## ✅ Code Review Checklist

### Before Submitting PR

- [ ] Code follows TypeScript strict mode
- [ ] All functions have proper type definitions
- [ ] Components are properly memoized if needed
- [ ] Error handling is implemented
- [ ] Loading states are handled
- [ ] Input validation is in place
- [ ] No console.log in production code
- [ ] No hardcoded values (use constants/env)
- [ ] Code is DRY (no duplication)
- [ ] Functions are small and focused
- [ ] Comments explain "why", not "what"
- [ ] Tests are written and passing
- [ ] No TypeScript errors or warnings
- [ ] ESLint passes with no errors
- [ ] Prettier formatting applied
- [ ] Performance considerations addressed
- [ ] Security best practices followed
- [ ] Accessibility standards met (WCAG AA)
- [ ] Mobile responsive
- [ ] Browser compatibility checked

---

## 📚 Additional Resources

- [Next.js Best Practices](https://nextjs.org/docs/app/building-your-application/routing/best-practices)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)

---

**Last Updated:** 2026-06-17  
**Version:** 1.0.0