import { CalendarRange, MapPin } from "lucide-react";
import { formatProjectStatus } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  location: string;
  description: string;
  province: string;
  theme: string;
  status: string;
  impactSummary: string;
  startDate: Date;
  endDate?: Date | null;
}

export function ProjectCard({
  title,
  location,
  description,
  province,
  theme,
  status,
  impactSummary,
  startDate,
  endDate
}: ProjectCardProps) {
  return (
    <article className="surface-card p-6">
      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
        <span className="rounded-full bg-[var(--soft-blue)] px-3 py-1 font-medium text-[var(--energy)]">
          {theme}
        </span>
        <span>{province}</span>
        <span>{formatProjectStatus(status)}</span>
      </div>
      <div className="mt-5 space-y-3">
        <h3 className="text-xl font-semibold text-[var(--foreground)]">{title}</h3>
        <p className="text-sm leading-6 text-[var(--muted)]">{description}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--surface-subtle)] px-3 py-2">
          <MapPin className="h-4 w-4" />
          {location}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--surface-subtle)] px-3 py-2">
          <CalendarRange className="h-4 w-4" />
          {formatProjectDateRange(startDate, endDate)}
        </span>
      </div>
      <p className="mt-5 rounded-2xl bg-[var(--soft-green)] p-4 text-sm font-medium text-[var(--primary)]">
        {impactSummary}
      </p>
    </article>
  );
}

function formatProjectDateRange(startDate: Date, endDate?: Date | null) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    month: "short",
    year: "numeric"
  });

  return `${formatter.format(startDate)}-${endDate ? formatter.format(endDate) : "Present"}`;
}
