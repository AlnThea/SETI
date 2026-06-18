import { SectionHeading } from "@/components/shared/section-heading";
import { getImpactHighlights } from "@/lib/queries";

export default async function ImpactPage() {
  const { totals, projects } = await getImpactHighlights();

  return (
    <div className="container-shell space-y-10 py-10 md:py-14">
      <SectionHeading
        eyebrow="Impact Portal"
        title="An initial dashboard layer over the project database."
        description="This page starts with aggregate metrics from seeded project records and gives a stable base for later charting and map components."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <div className="surface-card p-6">
          <p className="text-sm text-[var(--muted)]">CO2 reduction</p>
          <p className="mt-2 text-3xl font-semibold">{totals.co2.toLocaleString()} tCO2e</p>
        </div>
        <div className="surface-card p-6">
          <p className="text-sm text-[var(--muted)]">Energy savings</p>
          <p className="mt-2 text-3xl font-semibold">{totals.energy.toLocaleString()} MWh</p>
        </div>
        <div className="surface-card p-6">
          <p className="text-sm text-[var(--muted)]">Beneficiaries reached</p>
          <p className="mt-2 text-3xl font-semibold">
            {totals.beneficiaries.toLocaleString()}
          </p>
        </div>
      </div>

      <section className="surface-card p-6">
        <h2 className="text-xl font-semibold tracking-tight">Current impact stories</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="rounded-3xl border border-[var(--border)] p-5">
              <p className="text-sm text-[var(--energy)]">{project.theme.name}</p>
              <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {project.impactHeadline}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
