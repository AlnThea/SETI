import { notFound } from "next/navigation";
import { PublicationCard } from "@/components/knowledge/publication-card";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getStakeholderDetail } from "@/lib/queries";

export default async function StakeholderDetailPage({
  params
}: {
  params: Promise<{ type: "policymaker" | "industry" | "researcher" | "financial-institution" | "media" }>;
}) {
  const { type } = await params;
  const stakeholder = await getStakeholderDetail(type);

  if (!stakeholder) {
    notFound();
  }

  return (
    <div className="container-shell space-y-12 py-14">
      <SectionHeading
        eyebrow="Stakeholder Portal"
        title={stakeholder.name}
        description={stakeholder.description}
      />

      <section className="surface rounded-lg p-6">
        <h2 className="text-xl font-semibold tracking-tight">Recommended resources</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)]">
          {stakeholder.guidance}
        </p>
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
              dateLabel={item.publishedAt?.getFullYear().toString() ?? "Draft"}
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
