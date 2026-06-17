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
    <Link href={`/stakeholders/${type}`} className="surface rounded-lg p-6 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
          {name}
        </h3>
        <p className="text-sm leading-6 text-[var(--muted)]">{description}</p>
      </div>
    </Link>
  );
}

