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
    <Link href={`/themes/${slug}`} className="surface rounded-lg p-6 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
            {name}
          </h3>
          <p className="text-sm leading-6 text-[var(--muted)]">{description}</p>
        </div>
        <div className="flex gap-6 text-sm text-[var(--muted)]">
          <span>{publicationCount} publications</span>
          <span>{projectCount} projects</span>
        </div>
      </div>
    </Link>
  );
}

