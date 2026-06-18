import type { Route } from "next";
import Link from "next/link";
import { ProjectStatus } from "@prisma/client";
import { Layers3, ListFilter, Map, Search } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getProjects } from "@/lib/queries";
import type { ProjectSearchParams } from "@/lib/types";
import { formatProjectStatus, normalizeProjectSearchParams } from "@/lib/utils";

export default async function ProjectsPage({
  searchParams
}: {
  searchParams?: Promise<ProjectSearchParams>;
}) {
  const params = normalizeProjectSearchParams((await searchParams) ?? {});
  const { projects, filters } = await getProjects(params);
  const mapProjects = projects.slice(0, 4);

  return (
    <div className="container-shell space-y-10 py-10 md:py-14">
      <SectionHeading
        eyebrow="Project Repository"
        title="Implementation projects with location, status, and impact signals."
        description="Filter seeded implementation records by theme, status, and province. Map mode is prepared as the next repository view without changing the current project model."
      />

      <section className="surface-card overflow-hidden p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr,320px]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Delivery repository baseline
            </h2>
            <p className="max-w-3xl text-sm leading-6 text-[var(--muted)]">
              This repository view already supports filtering and repository state
              transitions. The next layer is an interactive map using the same
              project records.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl bg-[var(--soft-green)] p-4">
              <p className="text-sm text-[var(--muted)]">Matched projects</p>
              <p className="mt-2 text-3xl font-semibold text-[var(--foreground)]">
                {projects.length}
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--soft-blue)] p-4">
              <p className="text-sm text-[var(--muted)]">Themes</p>
              <p className="mt-2 text-3xl font-semibold text-[var(--foreground)]">
                {filters.themes.length}
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--soft-yellow)] p-4">
              <p className="text-sm text-[var(--muted)]">Provinces</p>
              <p className="mt-2 text-3xl font-semibold text-[var(--foreground)]">
                {filters.provinces.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[320px,1fr]">
        <aside className="space-y-4">
          <form className="surface-card space-y-5 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--surface-subtle)]">
                <ListFilter className="h-5 w-5 text-[var(--energy)]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--foreground)]">Refine repository</p>
                <p className="text-sm text-[var(--muted)]">
                  Search by project, then narrow by theme, status, and province.
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
                  placeholder="Title, description, impact, location"
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
              <span className="text-sm font-medium text-[var(--foreground)]">Status</span>
              <select
                name="status"
                defaultValue={params.status}
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
              >
                <option value="">All statuses</option>
                {Object.values(ProjectStatus).map((status) => (
                  <option key={status} value={status}>
                    {formatProjectStatus(status)}
                  </option>
                ))}
              </select>
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-[var(--foreground)]">Province</span>
              <select
                name="province"
                defaultValue={params.province}
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
              >
                <option value="">All provinces</option>
                {filters.provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </label>

            <input type="hidden" name="view" value={params.view} />

            <div className="flex flex-col gap-3 sm:flex-row xl:flex-col">
              <button
                type="submit"
                className="rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-white"
              >
                Apply filters
              </button>
              <Link
                href="/projects"
                className="rounded-full border border-[var(--border)] px-5 py-3 text-center text-sm font-medium text-[var(--foreground)]"
              >
                Reset
              </Link>
            </div>
          </form>
        </aside>

        <section className="space-y-5">
          <div className="surface-card flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--foreground)]">Repository view</p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {projects.length} project{projects.length === 1 ? "" : "s"} matched
                the current filters.
              </p>
            </div>
            <div className="inline-flex rounded-full border border-[var(--border)] bg-white p-1">
              <Link
                href={buildProjectsHref(params, { view: "grid" })}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                  params.view === "grid"
                    ? "bg-[var(--foreground)] text-white"
                    : "text-[var(--foreground)]"
                }`}
              >
                <Layers3 className="h-4 w-4" />
                Grid
              </Link>
              <Link
                href={buildProjectsHref(params, { view: "map" })}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                  params.view === "map"
                    ? "bg-[var(--foreground)] text-white"
                    : "text-[var(--foreground)]"
                }`}
              >
                <Map className="h-4 w-4" />
                Map
              </Link>
            </div>
          </div>

          {params.view === "map" ? (
            <div className="surface-card p-6">
              <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
                <div className="rounded-[28px] border border-dashed border-[var(--border)] bg-[var(--surface-subtle)] p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[var(--energy)]">
                      <Map className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">Map mode groundwork</p>
                      <p className="text-sm text-[var(--muted)]">
                        Filter state, province coverage, and project selection are ready for a
                        Leaflet layer next.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {mapProjects.map((project) => (
                      <div
                        key={project.id}
                        className="rounded-2xl border border-[var(--border)] bg-white p-4"
                      >
                        <p className="text-sm font-medium text-[var(--energy)]">
                          {project.province}
                        </p>
                        <h3 className="mt-2 text-base font-semibold text-[var(--foreground)]">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                          {project.location}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="surface rounded-[28px] p-5">
                    <p className="text-sm font-semibold text-[var(--foreground)]">Selected provinces</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(params.province ? [params.province] : filters.provinces).map((province) => (
                        <span
                          key={province}
                          className="rounded-full bg-[var(--soft-blue)] px-3 py-2 text-xs font-medium text-[var(--energy)]"
                        >
                          {province}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="surface rounded-[28px] p-5">
                    <p className="text-sm font-semibold text-[var(--foreground)]">Next implementation step</p>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      Connect these filtered records to a true geographic canvas and marker layer.
                      No data-model rewrite is needed for that step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : projects.length ? (
            <div className="grid gap-4 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  location={project.location}
                  description={project.description}
                  province={project.province}
                  theme={project.theme.name}
                  status={project.status}
                  impactSummary={project.impactHeadline}
                  startDate={project.startDate}
                  endDate={project.endDate}
                />
              ))}
            </div>
          ) : (
            <div className="surface-card p-8">
              <p className="text-lg font-semibold text-[var(--foreground)]">No projects found</p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
                Try clearing one or two filters, or reset to the full repository baseline.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function buildProjectsHref(
  params: ProjectSearchParams,
  overrides: Partial<ProjectSearchParams>
): Route {
  const nextParams = new URLSearchParams();
  const merged: ProjectSearchParams = { ...params, ...overrides };

  for (const [key, value] of Object.entries(merged)) {
    if (value) {
      nextParams.set(key, value);
    }
  }

  const queryString = nextParams.toString();
  return (queryString ? `/projects?${queryString}` : "/projects") as Route;
}
