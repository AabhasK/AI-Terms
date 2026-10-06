import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  description: ReactNode;
  caption?: ReactNode;
  source?: { href: string; label: string };
  children: ReactNode;
};

// Shared shell for glossary cards: same column, heading, panel and
// caption as the original cards, without repeating the markup.
export default function TermSection({
  id,
  title,
  description,
  caption,
  source,
  children,
}: Props) {
  return (
    <div
      className="
        w-full flex flex-col items-start justify-start
        pt-10
        lg:pl-[35vw] lg:pr-60 mt-0
        md:pl-8 md:pr-8
        sm:pl-4 sm:pr-4
        pl-2 pr-2
      "
    >
      <section id={id} className="mb-14">
        <h2 className="text-text">{title}</h2>
        <p className="text-[#c3c9d6] text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="w-full rounded-xl border border-line bg-panel p-6 min-h-[180px]">
          {children}
        </div>

        {caption && (
          <p className="text-center text-muted text-xs mt-4 leading-relaxed">
            {caption}
          </p>
        )}
        {source && (
          <div className="text-muted text-xs text-center mt-1">
            <a
              href={source.href}
              className="underline hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              {source.label}
            </a>
            , for more information
          </div>
        )}
      </section>
    </div>
  );
}
