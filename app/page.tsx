import { Hero } from "@/components/home/hero";
import { StatsGrid } from "@/components/home/stats-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { PublicationCard } from "@/components/knowledge/publication-card";
import { StakeholderCard } from "@/components/knowledge/stakeholder-card";
import { ThemeCard } from "@/components/knowledge/theme-card";
import { getHomepageData } from "@/lib/queries";

export default async function HomePage() {
  const { themes, stakeholders, featuredPublications, stats } =
    await getHomepageData();

  return (
    <div className="space-y-14 pb-16">
      <Hero />
      <StatsGrid stats={stats} />

      <section className="container-shell space-y-8">
        <SectionHeading
          eyebrow="Explore by Theme"
          title="Navigate the transition agenda by policy and implementation domain."
          description="The initial build starts with four theme tracks that connect evidence, ongoing programs, and policy-facing materials."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {themes.map((theme) => (
            <ThemeCard
              key={theme.id}
              name={theme.name}
              slug={theme.slug}
              description={theme.description}
              publicationCount={theme._count.publications}
              projectCount={theme._count.projects}
            />
          ))}
        </div>
      </section>

      <section className="container-shell space-y-8">
        <SectionHeading
          eyebrow="Explore by Stakeholder"
          title="Tailored entry points for each audience."
          description="Each stakeholder page is structured around the evidence, projects, and policy materials most useful for that user group."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {stakeholders.map((stakeholder) => (
            <StakeholderCard
              key={stakeholder.id}
              name={stakeholder.name}
              type={stakeholder.type}
              description={stakeholder.description}
            />
          ))}
        </div>
      </section>

      <section className="container-shell space-y-8">
        <SectionHeading
          eyebrow="Featured Knowledge"
          title="Anchor content for the first prototype."
          description="Featured items are loaded from the local database so the content model is already wired for future CMS or Supabase migration."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {featuredPublications.map((item) => (
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
    </div>
  );
}
