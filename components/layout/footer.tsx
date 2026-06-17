export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[var(--foreground)]">
            SETI Knowledge & Impact Hub
          </p>
          <p className="text-sm leading-6 text-[var(--muted)]">
            A donor-grade knowledge platform for publications, projects, policy
            evidence, and measurable transition impact.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[var(--foreground)]">Focus</p>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li>Industrial decarbonization</li>
            <li>Green buildings</li>
            <li>Sustainable energy finance</li>
            <li>Energy policy</li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[var(--foreground)]">Current stack</p>
          <p className="text-sm leading-6 text-[var(--muted)]">
            Next.js App Router, Tailwind CSS, Prisma, and a local SQLite
            database for early development.
          </p>
        </div>
      </div>
    </footer>
  );
}

