import Link from "next/link";
import { BookOpenText, ChartColumnIncreasing, Network } from "lucide-react";

const links = [
  { href: "/knowledge", label: "Knowledge Hub", icon: BookOpenText },
  { href: "/impact", label: "Impact", icon: ChartColumnIncreasing },
  { href: "/projects", label: "Projects", icon: Network }
];

export function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-white/95 backdrop-blur">
      <div className="container-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
            SETI Knowledge & Impact Hub
          </span>
          <span className="text-sm text-[var(--muted)]">
            Indonesia&apos;s energy transition evidence platform
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-2">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground)] transition hover:border-[var(--energy)] hover:text-[var(--energy)]"
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

