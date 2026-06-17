import { formatProjectStatus } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  province: string;
  theme: string;
  status: string;
  impactSummary: string;
}

export function ProjectCard({
  title,
  description,
  province,
  theme,
  status,
  impactSummary
}: ProjectCardProps) {
  return (
    <article className="surface rounded-lg p-6">
      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
        <span className="rounded-full bg-[#f4f8fd] px-3 py-1 text-[var(--energy)]">
          {theme}
        </span>
        <span>{province}</span>
        <span>{formatProjectStatus(status)}</span>
      </div>
      <div className="mt-5 space-y-3">
        <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
          {title}
        </h3>
        <p className="text-sm leading-6 text-[var(--muted)]">{description}</p>
      </div>
      <p className="mt-5 text-sm font-medium text-[var(--primary)]">{impactSummary}</p>
    </article>
  );
}

