import TermSection from "../TermSection";

const tokens = ["The", " dragon", " rests", " in", " agony", "."];

export default function Token() {
  return (
    <TermSection
      id="token"
      title="Token"
      description="The smallest unit of text a model reads and writes. A token is often a whole word, sometimes a piece of one. Context windows and API prices are both counted in tokens. In English, one token is about ¾ of a word."
      caption="Six tokens. Note that the space belongs to the token after it."
    >
      <div className="flex min-h-[132px] flex-wrap items-center justify-center gap-2">
        {tokens.map((t) => (
          <span
            key={t}
            className="whitespace-pre rounded-md border border-line px-3 py-1 font-mono text-xs text-text"
          >
            {t}
          </span>
        ))}
      </div>
    </TermSection>
  );
}
