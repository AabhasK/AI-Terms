"use client";

import { useState } from "react";
import TermSection from "../TermSection";

// Claude Opus 5.5 list prices per 1M input tokens (Vercel AI Gateway catalog).
const INPUT = 4.0;
const CACHE_READ = 0.2;

const prefixTokens = 50_000; // system prompt + a long document
const questionTokens = 200;

export default function PromptCaching() {
  const [cached, setCached] = useState(true);

  const cost = (tokens: number, rate: number) => (tokens / 1_000_000) * rate;
  const prefixCost = cost(prefixTokens, cached ? CACHE_READ : INPUT);
  const total = prefixCost + cost(questionTokens, INPUT);

  return (
    <TermSection
      id="prompt-caching"
      title="Prompt caching"
      description="Reusing work the model already did on the start of a prompt. When many requests begin with the same long text, such as a system prompt, a codebase or a document, the provider can keep that prefix processed and charge a fraction of the price to read it again. It is also faster."
      caption="Prices from the live model catalog. Caching only works when the prefix is identical, so put things that don't change first."
    >
      <div className="flex flex-col gap-5">
        <div className="flex w-full overflow-hidden rounded-lg border border-line text-[11px]">
          <div
            className={`flex-[9] px-3 py-3 transition-colors ${
              cached ? "bg-accent/10 text-accent" : "bg-panel-2 text-muted"
            }`}
          >
            System prompt + 80-page document · {prefixTokens.toLocaleString()} tokens
            {cached && <span className="ml-2 font-mono">(cached)</span>}
          </div>
          <div className="flex-[2] border-l border-line bg-panel px-3 py-3 text-text">
            New question
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setCached((c) => !c)}
            aria-pressed={cached}
            className="rounded-lg border border-line px-4 py-1.5 text-xs text-muted hover:text-text"
          >
            {cached ? "Turn caching off" : "Turn caching on"}
          </button>
          <div className="text-right">
            <div className="font-mono text-lg text-text">${total.toFixed(4)}</div>
            <div className="text-[11px] text-faint">input cost per question</div>
          </div>
        </div>
      </div>
    </TermSection>
  );
}
