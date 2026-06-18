import { notFound } from "next/navigation";
import { PublicationCard } from "@/components/knowledge/publication-card";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getStakeholderDetail } from "@/lib/queries";

const stakeholderTypes = [
  "policymaker",
  "industry",
  "researcher",
  "financial-institution",
  "media"
] as const;

export function generateStaticParams() {
  return stakeholderTypes.map((type) => ({ type }));
}

export default async function StakeholderDetailPage({
  params
}: {
  params: Promise<{ type: (typeof stakeholderTypes)[number] }>;
}) {
  const { type } = await params;
  const stakeholder = await getStakeholderDetail(type);

  if (!stakeholder) {
    notFound();
  }

  return (
    <div className="container-shell space-y-12 py-10 md:py-14">
      <SectionHeading
        eyebrow="Stakeholder Portal"
        title={stakeholder.name}
        description={stakeholder.description}
      />

      <section className="surface-card p-6">
        <h2 className="text-xl font-semibold tracking-tight">Recommended resources</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)]">
          {stakeholder.guidance}
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="surface-card p-6">
          <h2 className="text-xl font-semibold tracking-tight">Relevant policy briefs</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            Priority policy-facing material curated for this stakeholder group.
          </p>
          <div className="mt-5 space-y-4">
            {stakeholder.policyBriefs.length ? (
              stakeholder.policyBriefs.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl border border-[var(--border)] bg-[var(--surface-subtle)] p-5"
                >
                  <p className="text-sm font-medium text-[var(--energy)]">{item.theme.name}</p>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.summary}</p>
                </div>
              ))
            ) : (
              <p className="text-sm leading-6 text-[var(--muted)]">
                No dedicated policy briefs are linked to this stakeholder yet.
              </p>
            )}
          </div>
        </div>

        <div className="surface-card p-6">
          <h2 className="text-xl font-semibold tracking-tight">Delivery footprint</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl bg-[var(--soft-green)] p-4">
              <p className="text-sm text-[var(--muted)]">Projects</p>
              <p className="mt-2 text-3xl font-semibold text-[var(--foreground)]">
                {stakeholder.projects.length}
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--soft-blue)] p-4">
              <p className="text-sm text-[var(--muted)]">Policy briefs</p>
              <p className="mt-2 text-3xl font-semibold text-[var(--foreground)]">
                {stakeholder.policyBriefs.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight">Relevant publications</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {stakeholder.publications.map((item) => (
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
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight">Relevant projects</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {stakeholder.projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              province={project.province}
              theme={project.theme.name}
              status={project.status}
              impactSummary={project.impactHeadline}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
