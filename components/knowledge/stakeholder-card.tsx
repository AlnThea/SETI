import Link from "next/link";

interface StakeholderCardProps {
  name: string;
  type: string;
  description: string;
}

export function StakeholderCard({
  name,
  type,
  description
}: StakeholderCardProps) {
  return (
    <Link
      href={`/stakeholders/${type}`}
      className="surface-card p-6 transition hover:-translate-y-0.5"
    >
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--energy)]">
          Stakeholder
        </p>
        <h3 className="text-xl font-semibold text-[var(--foreground)]">{name}</h3>
        <p className="text-sm leading-6 text-[var(--muted)]">{description}</p>
        <p className="text-sm font-medium text-[var(--foreground)]">Open profile</p>
      </div>
    </Link>
  );
}
