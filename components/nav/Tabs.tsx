"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Glossary" },
  { href: "/models", label: "Models" },
];

export default function Tabs() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Sections"
      className="fixed top-4 right-4 z-30 flex gap-1 rounded-full border border-line bg-ink p-1"
    >
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-4 py-1.5 text-xs font-medium ${
              active ? "bg-accent text-ink" : "text-muted hover:text-text"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
