"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenText, ChartColumnIncreasing, Menu, Network, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/knowledge", label: "Knowledge Hub", icon: BookOpenText },
  { href: "/impact", label: "Impact", icon: ChartColumnIncreasing },
  { href: "/projects", label: "Projects", icon: Network }
 ] as const;

export function SiteNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="hidden items-center gap-2 md:flex">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition",
                active
                  ? "bg-[var(--foreground)] text-white"
                  : "text-[var(--foreground)] hover:bg-[var(--surface-subtle)]"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--foreground)] md:hidden"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open ? (
        <div className="absolute right-0 top-full z-40 mt-3 w-[min(320px,calc(100vw-32px))] rounded-[28px] border border-[var(--border)] bg-white p-3 shadow-[var(--shadow-soft)] md:hidden">
          <nav className="flex flex-col gap-2">
            {links.map(({ href, label, icon: Icon }) => {
              const active = pathname === href || pathname.startsWith(`${href}/`);

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "inline-flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition",
                    active
                      ? "bg-[var(--foreground)] text-white"
                      : "bg-[var(--surface-subtle)] text-[var(--foreground)]"
                  )}
                >
                  <span className="inline-flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {label}
                  </span>
                  <span className="text-xs uppercase tracking-[0.12em]">Open</span>
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
