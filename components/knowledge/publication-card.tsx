import Link from "next/link";
import { ArrowUpRight, Download, Star } from "lucide-react";
import { formatMonthYear, formatPublicationType } from "@/lib/utils";

interface PublicationCardProps {
  title: string;
  summary: string;
  slug: string;
  type: string;
  themeName: string;
  themeSlug: string;
  organizationName: string;
  publishedAt?: Date | null;
  featured?: boolean;
  tags?: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
}

export function PublicationCard({
  title,
  summary,
  slug,
  type,
  themeName,
  themeSlug,
  organizationName,
  publishedAt,
  featured = false,
  tags = []
}: PublicationCardProps) {
  return (
    <article
      id={slug}
      className="surface-card group flex h-full flex-col gap-5 p-6"
    >
      <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
        <span className="rounded-full bg-[var(--soft-green)] px-3 py-1 font-medium text-[var(--primary)]">
          {formatPublicationType(type)}
        </span>
        {featured ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--soft-yellow)] px-3 py-1 font-medium text-[var(--foreground)]">
            <Star className="h-3.5 w-3.5 fill-current" />
            Featured
          </span>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--muted)]">
        <span>{themeName}</span>
        <span>{organizationName}</span>
        <span>{formatMonthYear(publishedAt)}</span>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-[var(--foreground)]">
          <Link
            href={`/knowledge#${slug}`}
            className="transition group-hover:text-[var(--energy)]"
          >
            {title}
          </Link>
        </h3>
        <p className="text-sm leading-6 text-[var(--muted)]">{summary}</p>
      </div>

      {tags.length ? (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="rounded-full border border-[var(--border)] bg-[var(--surface-subtle)] px-3 py-1 text-xs font-medium text-[var(--foreground)]"
            >
              #{tag.name}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-auto flex items-center justify-between gap-4 pt-1">
        <Link
          href={`/themes/${themeSlug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--energy)]"
        >
          View theme
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--energy)] hover:text-[var(--energy)]"
        >
          <Download className="h-4 w-4" />
          Download
        </button>
      </div>
    </article>
  );
}
