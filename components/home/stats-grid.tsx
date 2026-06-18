interface StatsGridProps {
  stats: Array<{ label: string; value: string }>;
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <section className="container-shell py-14">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="surface-card p-6">
            <p className="text-sm uppercase tracking-[0.12em] text-[var(--muted)]">
              {stat.label}
            </p>
            <p className="mt-3 text-3xl font-semibold text-[var(--foreground)]">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
