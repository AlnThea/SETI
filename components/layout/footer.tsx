export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="container-shell grid gap-8 py-12 lg:grid-cols-[1.25fr,0.85fr,0.9fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--energy)]">
            SETI Knowledge & Impact Hub
          </p>
          <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
            A donor-grade knowledge platform for publications, projects, policy
            evidence, and measurable transition impact.
          </p>
          <p className="text-sm text-[var(--foreground)]">
            Built on Next.js, Prisma, and a local SQLite dataset for rapid iteration.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[var(--foreground)]">Focus Areas</p>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li>Industrial decarbonization</li>
            <li>Green buildings</li>
            <li>Sustainable energy finance</li>
            <li>Energy policy</li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[var(--foreground)]">Current Phase</p>
          <p className="text-sm leading-6 text-[var(--muted)]">
            Phase 1 focuses on a credible knowledge hub: cleaner discovery,
            stronger navigation, and a more presentation-ready information
            architecture.
          </p>
        </div>
      </div>
    </footer>
  );
}
