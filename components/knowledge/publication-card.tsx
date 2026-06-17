import Link from "next/link";
import { Download } from "lucide-react";
import { formatPublicationType } from "@/lib/utils";

interface PublicationCardProps {
  title: string;
  summary: string;
  slug: string;
  type: string;
  themeName: string;
  themeSlug: string;
  organizationName: string;
  dateLabel: string;
}

export function PublicationCard({
  title,
  summary,
  slug,
  type,
  themeName,
  themeSlug,
  organizationName,
  dateLabel
}: PublicationCardProps) {
  return (
    <article className="surface rounded-lg p-6">
      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
        <span className="rounded-full bg-[#eef6f2] px-3 py-1 text-[var(--primary)]">
          {formatPublicationType(type)}
        </span>
        <span>{themeName}</span>
        <span>{organizationName}</span>
        <span>{dateLabel}</span>
      </div>
      <div className="mt-5 space-y-3">
        <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
          <Link href={`/knowledge#${slug}`}>{title}</Link>
        </h3>
        <p className="text-sm leading-6 text-[var(--muted)]">{summary}</p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <Link href={`/themes/${themeSlug}`} className="text-sm font-medium text-[var(--energy)]">
          Related knowledge
        </Link>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground)]"
        >
          <Download className="h-4 w-4" />
          Download
        </button>
      </div>
    </article>
  );
}
