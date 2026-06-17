import { notFound } from "next/navigation";
import { PublicationCard } from "@/components/knowledge/publication-card";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getThemeDetail } from "@/lib/queries";

export default async function ThemeDetailPage({
  params
}: {
  params: Promise<{ slug: "industrial-decarbonization" | "green-buildings" | "sustainable-energy-finance" | "energy-policy" }>;
}) {
  const { slug } = await params;
  const theme = await getThemeDetail(slug);

  if (!theme) {
    notFound();
  }

  return (
    <div className="container-shell space-y-12 py-14">
      <SectionHeading
        eyebrow="Theme Detail"
        title={theme.name}
        description={theme.description}
      />

      <div className="grid gap-4 md:grid-cols-3">
        <div className="surface rounded-lg p-6">
          <p className="text-sm text-[var(--muted)]">Publications</p>
          <p className="mt-2 text-3xl font-semibold">{theme._count.publications}</p>
        </div>
        <div className="surface rounded-lg p-6">
          <p className="text-sm text-[var(--muted)]">Projects</p>
          <p className="mt-2 text-3xl font-semibold">{theme._count.projects}</p>
        </div>
        <div className="surface rounded-lg p-6">
          <p className="text-sm text-[var(--muted)]">Policies</p>
          <p className="mt-2 text-3xl font-semibold">{theme._count.policies}</p>
        </div>
      </div>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight">Featured publications</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {theme.publications.map((item) => (
            <PublicationCard
              key={item.id}
              title={item.title}
              summary={item.summary}
              slug={item.slug}
              type={item.type}
              themeName={theme.name}
              themeSlug={theme.slug}
              organizationName={item.organizationName}
              dateLabel={item.publishedAt?.getFullYear().toString() ?? "Draft"}
            />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight">Related projects</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {theme.projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              province={project.province}
              theme={theme.name}
              status={project.status}
              impactSummary={project.impactHeadline}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="surface rounded-lg p-6">
          <h3 className="text-lg font-semibold">Related policies</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
            {theme.policies.map((policy) => (
              <li key={policy.id}>{policy.title}</li>
            ))}
          </ul>
        </div>
        <div className="surface rounded-lg p-6">
          <h3 className="text-lg font-semibold">Related events</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
            {theme.events.map((event) => (
              <li key={event.id}>{event.title}</li>
            ))}
          </ul>
        </div>
        <div className="surface rounded-lg p-6">
          <h3 className="text-lg font-semibold">Related experts</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
            {theme.experts.map((expert) => (
              <li key={expert.id}>
                {expert.name} - {expert.role}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
