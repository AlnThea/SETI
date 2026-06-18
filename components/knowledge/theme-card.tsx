import Link from "next/link";

interface ThemeCardProps {
  name: string;
  slug: string;
  description: string;
  publicationCount: number;
  projectCount: number;
}

export function ThemeCard({
  name,
  slug,
  description,
  publicationCount,
  projectCount
}: ThemeCardProps) {
  return (
    <Link
      href={`/themes/${slug}`}
      className="surface-card p-6 transition hover:-translate-y-0.5"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--energy)]">
            Theme
          </p>
          <h3 className="text-xl font-semibold text-[var(--foreground)]">{name}</h3>
          <p className="text-sm leading-6 text-[var(--muted)]">{description}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[var(--surface-subtle)] p-4">
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
              Publications
            </p>
            <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
              {publicationCount}
            </p>
          </div>
          <div className="rounded-2xl bg-[var(--soft-blue)] p-4">
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
              Projects
            </p>
            <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
              {projectCount}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
