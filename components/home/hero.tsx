import Link from "next/link";
import { Search } from "lucide-react";

export function Hero() {
  return (
    <section className="border-b border-[var(--border)] bg-white">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.25fr,0.75fr] md:py-24">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="eyebrow">Accelerating Indonesia&apos;s Energy Transition</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-6xl">
              Indonesia&apos;s knowledge and impact platform for sustainable energy
              transition.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Explore publications, projects, policies, case studies, and
              implementation experience across the country&apos;s transition agenda.
            </p>
          </div>

          <form action="/knowledge" className="surface flex flex-col gap-3 rounded-lg p-3 shadow-sm md:flex-row">
            <div className="flex flex-1 items-center gap-3 rounded-md border border-transparent bg-[#f5f8f7] px-4 py-3">
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
              className="rounded-md bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Search knowledge
            </button>
          </form>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/knowledge"
              className="rounded-md bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Explore knowledge
            </Link>
            <Link
              href="/impact"
              className="rounded-md border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--energy)] hover:text-[var(--energy)]"
            >
              View impact
            </Link>
          </div>
        </div>

        <div className="surface rounded-lg p-6">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-[var(--foreground)]">Platform intent</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                This prototype is structured as a living knowledge system, not a
                brochure site. The first build emphasizes searchable evidence,
                thematic navigation, and visible implementation outcomes.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-md bg-[#f6fbf8] p-4">
                <p className="text-sm font-semibold text-[var(--foreground)]">Audience</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Policymakers, industry, researchers, finance, media, and
                  development partners.
                </p>
              </div>
              <div className="rounded-md bg-[#f4f8fd] p-4">
                <p className="text-sm font-semibold text-[var(--foreground)]">Data source</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Local SQLite now, with Prisma models ready to move later to
                  Postgres or Supabase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

