import { PublicationCard } from "@/components/knowledge/publication-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getKnowledgePageData } from "@/lib/queries";

export default async function KnowledgePage({
  searchParams
}: {
  searchParams?: Promise<{ q?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const publications = await getKnowledgePageData(params.q);

  return (
    <div className="container-shell space-y-10 py-14">
      <SectionHeading
        eyebrow="Knowledge Hub"
        title="Searchable publications, policy briefs, reports, and implementation insights."
        description="This first pass keeps search simple at the database layer. Filters and advanced faceting can be added without replacing the current data model."
      />

      <form className="surface flex flex-col gap-3 rounded-lg p-4 md:flex-row">
        <input
          type="search"
          name="q"
          defaultValue={params.q}
          placeholder="Search title, summary, or organization"
          className="min-w-0 flex-1 rounded-md border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none"
        />
        <button
          type="submit"
          className="rounded-md bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white"
        >
          Apply search
        </button>
      </form>

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
            dateLabel={item.publishedAt?.toLocaleDateString("en-GB", {
              month: "short",
              year: "numeric"
            }) ?? "Draft"}
          />
        ))}
      </div>
    </div>
  );
}
