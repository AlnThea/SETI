import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteNavigation } from "@/components/layout/site-navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[rgba(247,250,248,0.9)] backdrop-blur-xl">
      <div className="container-shell flex min-h-[84px] items-center justify-between gap-6">
        <Link href="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--foreground)] text-sm font-semibold text-white sm:h-12 sm:w-12">
            ST
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="line-clamp-2 text-sm font-semibold text-[var(--foreground)] sm:text-base md:text-lg">
              SETI Knowledge & Impact Hub
            </span>
            <span className="hidden text-sm text-[var(--muted)] lg:block">
              Indonesia&apos;s energy transition evidence platform
            </span>
          </div>
        </Link>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/knowledge"
            className="hidden items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90 lg:inline-flex"
          >
            Explore knowledge
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <SiteNavigation />
        </div>
      </div>
    </header>
  );
}
