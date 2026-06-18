import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";

export function Hero() {
  return (
    <section className="border-b border-[var(--border)] bg-[rgba(255,255,255,0.72)]">
      <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1.3fr,0.7fr] lg:py-20">
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="eyebrow">Accelerating Indonesia&apos;s Energy Transition</p>
            <h1 className="max-w-4xl text-4xl font-semibold text-[var(--foreground)] md:text-6xl">
              Indonesia&apos;s knowledge and impact platform for sustainable energy
              transition.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Explore publications, projects, policies, case studies, and
              implementation experience across the country&apos;s transition agenda.
            </p>
          </div>

          <form
            action="/knowledge"
            className="surface-card flex flex-col gap-3 p-3 md:flex-row"
          >
            <div className="flex flex-1 items-center gap-3 rounded-2xl bg-[var(--surface-subtle)] px-4 py-3">
              <Search className="h-5 w-5 text-[var(--muted)]" />
              <input
                type="search"
                name="q"
                placeholder="Search publications, policies, projects, or evidence"
                className="w-full border-0 bg-transparent text-sm outline-none"
              />
            </div>
            <button
              type="submit"
              className="rounded-2xl bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Search knowledge
            </button>
          </form>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Explore knowledge
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/impact"
              className="rounded-full border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--energy)] hover:text-[var(--energy)]"
            >
              View impact
            </Link>
          </div>
        </div>

        <div className="panel-grid">
          <div className="surface-card p-6">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-[var(--foreground)]">Platform intent</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  This is built as a working evidence system for judges, donors,
                  and delivery partners who need to inspect knowledge, projects,
                  and measurable transition outcomes in one place.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[var(--soft-green)] p-4">
                  <p className="text-sm font-semibold text-[var(--foreground)]">Audience</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Policymakers, industry, researchers, finance, media, and
                    development partners.
                  </p>
                </div>
                <div className="rounded-2xl bg-[var(--soft-blue)] p-4">
                  <p className="text-sm font-semibold text-[var(--foreground)]">Data source</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Local SQLite now, with Prisma models ready for migration to
                    Postgres or Supabase when content expands.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="surface-card p-5">
              <p className="text-sm text-[var(--muted)]">Discovery</p>
              <p className="mt-3 text-2xl font-semibold text-[var(--foreground)]">Knowledge</p>
            </div>
            <div className="surface-card p-5">
              <p className="text-sm text-[var(--muted)]">Evidence</p>
              <p className="mt-3 text-2xl font-semibold text-[var(--foreground)]">Projects</p>
            </div>
            <div className="surface-card p-5">
              <p className="text-sm text-[var(--muted)]">Outcomes</p>
              <p className="mt-3 text-2xl font-semibold text-[var(--foreground)]">Impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
