"use client";

import { useState } from "react";
import TermSection from "../TermSection";

const BUDGET = 20_000;

const blocks = [
  { name: "Instructions", tokens: 1_500, useful: true },
  { name: "Relevant code files", tokens: 6_000, useful: true },
  { name: "Entire repository dump", tokens: 60_000, useful: false },
  { name: "Last 5 messages", tokens: 2_500, useful: true },
  { name: "Full chat history", tokens: 18_000, useful: false },
  { name: "Tool results (summarized)", tokens: 1_200, useful: true },
];

export default function ContextEngineering() {
  const [on, setOn] = useState<string[]>(["Instructions", "Full chat history"]);
  const used = blocks.filter((b) => on.includes(b.name)).reduce((s, b) => s + b.tokens, 0);
  const over = used > BUDGET;

  const toggle = (n: string) =>
    setOn((cur) => (cur.includes(n) ? cur.filter((x) => x !== n) : [...cur, n]));

  return (
    <TermSection
      id="context-engineering"
      title="Context engineering"
      description="Choosing what goes into the model's context window for each step: instructions, documents, memory, tool results. Bigger windows don't remove the need for it. Irrelevant text costs money, slows the model down and distracts it. Good agents are mostly good context engineering."
      caption="Try to fit everything the model needs into the budget, and nothing it doesn't."
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap gap-2">
          {blocks.map((b) => (
            <button
              key={b.name}
              onClick={() => toggle(b.name)}
              aria-pressed={on.includes(b.name)}
              className={`rounded-lg border px-3 py-1.5 text-xs transition-colors ${
                on.includes(b.name)
                  ? "border-accent text-accent"
                  : "border-line text-faint hover:text-muted"
              }`}
            >
              {b.name} <span className="font-mono opacity-60">{(b.tokens / 1000).toFixed(1)}k</span>
            </button>
          ))}
        </div>

        <div>
          <div className="mb-1.5 flex justify-between text-xs">
            <span className="text-muted">context budget</span>
            <span className={`font-mono ${over ? "text-[#f4a37d]" : "text-text"}`}>
              {used.toLocaleString()} / {BUDGET.toLocaleString()}
            </span>
          </div>
          <div className="h-3 w-full rounded-full bg-panel-2">
            <div
              className={`h-3 rounded-full ${over ? "bg-[#f4a37d]" : "bg-accent"}`}
              style={{ width: `${Math.min(100, (used / BUDGET) * 100)}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-muted">
            {over
              ? "Over budget. Swap bulk dumps for the parts that matter."
              : blocks.filter((b) => b.useful).every((b) => on.includes(b.name))
                ? "Everything useful, nothing wasted."
                : "Fits, but the model may be missing something it needs."}
          </p>
        </div>
      </div>
    </TermSection>
  );
}
