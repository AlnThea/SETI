interface StatsGridProps {
  stats: Array<{ label: string; value: string }>;
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <section className="container-shell py-14">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="surface rounded-lg p-6">
            <p className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

