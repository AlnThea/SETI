import type { Route } from "next";
import Link from "next/link";
import { PublicationType } from "@prisma/client";
import { ArrowLeft, ArrowRight, ArrowUpRight, Search, SlidersHorizontal } from "lucide-react";
import { PublicationCard } from "@/components/knowledge/publication-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getKnowledgePageData } from "@/lib/queries";
import type { KnowledgeSearchParams } from "@/lib/types";
import { formatPublicationType, normalizeKnowledgeSearchParams } from "@/lib/utils";

const sortOptions = [
  { value: "featured", label: "Featured dulu" },
  { value: "newest", label: "Terbaru" },
  { value: "oldest", label: "Terlama" },
  { value: "title-asc", label: "Title A-Z" }
] as const;

export default async function KnowledgePage({
  searchParams
}: {
  searchParams?: Promise<KnowledgeSearchParams>;
}) {
  const params = normalizeKnowledgeSearchParams((await searchParams) ?? {});
  const { publications, filters, pagination } = await getKnowledgePageData(params);
  const startIndex =
    pagination.totalCount === 0 ? 0 : (pagination.page - 1) * pagination.pageSize + 1;
  const endIndex = Math.min(
    pagination.page * pagination.pageSize,
    pagination.totalCount
  );

  return (
    <div className="container-shell space-y-10 py-10 md:py-14">
      <section className="surface-card overflow-hidden p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-end">
          <SectionHeading
            eyebrow="Knowledge Hub"
            title="Evidence discovery that feels like a working research and implementation portal."
            description="Search, filter, and sort publications across themes, publication types, tags, and time windows without leaving the current Prisma + SQLite baseline."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-[var(--soft-green)] p-4">
              <p className="text-sm text-[var(--muted)]">Total results</p>
              <p className="mt-2 text-3xl font-semibold text-[var(--foreground)]">
                {pagination.totalCount}
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--soft-blue)] p-4">
              <p className="text-sm text-[var(--muted)]">Current page</p>
              <p className="mt-2 text-3xl font-semibold text-[var(--foreground)]">
                {pagination.page}/{pagination.totalPages}
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--soft-yellow)] p-4">
              <p className="text-sm text-[var(--muted)]">Tags</p>
              <p className="mt-2 text-3xl font-semibold text-[var(--foreground)]">
                {filters.tags.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[320px,1fr]">
        <aside className="space-y-4">
          <form className="surface-card space-y-5 p-5">
            <input type="hidden" name="page" value="1" />

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--surface-subtle)]">
                <SlidersHorizontal className="h-5 w-5 text-[var(--energy)]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--foreground)]">Refine results</p>
                <p className="text-sm text-[var(--muted)]">
                  Theme, type, time window, tag, and sort order.
                </p>
              </div>
            </div>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-[var(--foreground)]">Search</span>
              <div className="flex items-center gap-3 rounded-2xl bg-[var(--surface-subtle)] px-4 py-3">
                <Search className="h-4 w-4 text-[var(--muted)]" />
                <input
                  type="search"
                  name="q"
                  defaultValue={params.q}
                  placeholder="Title, summary, organization, tag"
                  className="w-full border-0 bg-transparent text-sm outline-none"
                />
              </div>
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-[var(--foreground)]">Theme</span>
              <select
                name="theme"
                defaultValue={params.theme}
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
              >
                <option value="">All themes</option>
                {filters.themes.map((theme) => (
                  <option key={theme.id} value={theme.slug}>
                    {theme.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-[var(--foreground)]">
                Publication type
              </span>
              <select
                name="type"
                defaultValue={params.type}
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
              >
                <option value="">All types</option>
                {Object.values(PublicationType).map((type) => (
                  <option key={type} value={type}>
                    {formatPublicationType(type)}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-[var(--foreground)]">Year</span>
                <select
                  name="year"
                  defaultValue={params.year}
                  className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                >
                  <option value="">All years</option>
                  {filters.years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-[var(--foreground)]">Tag</span>
                <select
                  name="tag"
                  defaultValue={params.tag}
                  className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                >
                  <option value="">All tags</option>
                  {filters.tags.map((tag) => (
                    <option key={tag.id} value={tag.slug}>
                      {tag.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-[var(--foreground)]">From date</span>
                <input
                  type="date"
                  name="from"
                  defaultValue={params.from}
                  className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-[var(--foreground)]">To date</span>
                <input
                  type="date"
                  name="to"
                  defaultValue={params.to}
                  className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
                />
              </label>
            </div>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-[var(--foreground)]">Sort</span>
              <select
                name="sort"
                defaultValue={params.sort}
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <div className="flex flex-col gap-3 sm:flex-row xl:flex-col">
              <button
                type="submit"
                className="rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-white"
              >
                Apply filters
              </button>
              <Link
                href="/knowledge"
                className="rounded-full border border-[var(--border)] px-5 py-3 text-center text-sm font-medium text-[var(--foreground)]"
              >
                Reset
              </Link>
            </div>
          </form>

          <section className="surface-card p-5">
            <p className="text-sm font-semibold text-[var(--foreground)]">Popular tags</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {filters.tags.map((tag) => (
                <Link
                  key={tag.id}
                  href={buildKnowledgeHref(params, { tag: tag.slug, page: "1" })}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface-subtle)] px-3 py-2 text-xs font-medium text-[var(--foreground)]"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>
          </section>
        </aside>

        <section className="space-y-5">
          <div className="surface-card flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--foreground)]">Knowledge results</p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Showing {startIndex}-{endIndex} of {pagination.totalCount} matched items.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--energy)]"
            >
              Continue to project repository
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {publications.length ? (
            <>
              <div className="grid gap-4 lg:grid-cols-2">
                {publications.map((item) => (
                  <PublicationCard
                    key={item.id}
                    title={item.title}
                    summary={item.summary}
                    slug={item.slug}
                    type={item.type}
                    themeName={item.theme.name}
                    themeSlug={item.theme.slug}
                    organizationName={item.organizationName}
                    publishedAt={item.publishedAt}
                    featured={item.featured}
                    tags={item.tags}
                  />
                ))}
              </div>

              <div className="surface-card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-[var(--muted)]">
                  Page {pagination.page} of {pagination.totalPages}
                </p>
                <div className="flex gap-3">
                  <Link
                    href={
                      pagination.page > 1
                        ? buildKnowledgeHref(params, {
                            page: (pagination.page - 1).toString()
                          })
                        : "#"
                    }
                    aria-disabled={pagination.page === 1}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                      pagination.page === 1
                        ? "pointer-events-none border border-[var(--border)] text-[var(--muted)] opacity-50"
                        : "bg-[var(--surface-subtle)] text-[var(--foreground)]"
                    }`}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Previous
                  </Link>
                  <Link
                    href={
                      pagination.page < pagination.totalPages
                        ? buildKnowledgeHref(params, {
                            page: (pagination.page + 1).toString()
                          })
                        : "#"
                    }
                    aria-disabled={pagination.page >= pagination.totalPages}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                      pagination.page >= pagination.totalPages
                        ? "pointer-events-none border border-[var(--border)] text-[var(--muted)] opacity-50"
                        : "bg-[var(--foreground)] text-white"
                    }`}
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="surface-card p-8">
              <p className="text-lg font-semibold text-[var(--foreground)]">No results found</p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
                Adjust the date window, remove one or two filters, or reset to the full
                knowledge set.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function buildKnowledgeHref(
  params: KnowledgeSearchParams,
  overrides: Partial<KnowledgeSearchParams>
): Route {
  const nextParams = new URLSearchParams();
  const merged: KnowledgeSearchParams = { ...params, ...overrides };

  for (const [key, value] of Object.entries(merged)) {
    if (value) {
      nextParams.set(key, value);
    }
  }

  const queryString = nextParams.toString();
  return (queryString ? `/knowledge?${queryString}` : "/knowledge") as Route;
}
