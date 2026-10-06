import { termCount } from "@/lib/glossary";

export default function Hero() {
  return (
    <header
      className="
        w-full pt-28 pb-6
        lg:pl-[35vw] lg:pr-60
        md:pl-8 md:pr-8
        sm:pl-4 sm:pr-4
        pl-4 pr-4
      "
    >
      <h1 className="font-display text-5xl font-semibold text-text text-balance sm:text-6xl">
        AI Glossary
      </h1>
      <p className="mt-6 max-w-[52ch] text-[0.95rem] leading-relaxed text-muted text-pretty">
        {termCount} AI terms explained in plain words, each with something you
        can see or try.
      </p>
    </header>
  );
}
