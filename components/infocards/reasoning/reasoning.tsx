"use client";

import { useState } from "react";
import TermSection from "../TermSection";

// Illustrative numbers for one hard coding question.
const levels = [
  { name: "none", thinking: 0, seconds: 2, note: "Answers straight away. Good for simple lookups." },
  { name: "low", thinking: 800, seconds: 6, note: "A quick plan before answering." },
  { name: "medium", thinking: 4000, seconds: 20, note: "Checks its own work once." },
  { name: "high", thinking: 16000, seconds: 70, note: "Explores alternatives and tests edge cases." },
  { name: "max", thinking: 48000, seconds: 200, note: "Spends as long as it needs. Slowest and most expensive." },
];

export default function ReasoningEffort() {
  const [i, setI] = useState(2);
  const lvl = levels[i];

  return (
    <TermSection
      id="reasoning-effort"
      title="Reasoning effort"
      description="How much a reasoning model is allowed to 'think' before answering. The thinking happens as hidden tokens, which you pay for. Higher effort lets the model plan, check and backtrack more, which helps with hard problems but adds time and cost. This is also called test-time compute."
      caption={
        <>
          Token counts and times are example numbers. Claude Opus 5.5 and GPT-6
          Sol both expose this as an <span className="font-mono">effort</span>{" "}
          setting.
        </>
      }
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-1.5">
          {levels.map((l, j) => (
            <button
              key={l.name}
              onClick={() => setI(j)}
              className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition-colors ${
                i === j ? "border-accent text-accent" : "border-line text-faint hover:text-muted"
              }`}
            >
              {l.name}
            </button>
          ))}
        </div>

        <div className="w-full max-w-md">
          <div className="mb-1.5 flex justify-between text-xs">
            <span className="text-muted">hidden thinking tokens</span>
            <span className="font-mono text-text">{lvl.thinking.toLocaleString()}</span>
          </div>
          <div className="flex h-3 w-full overflow-hidden rounded-full bg-panel-2">
            <div
              className="h-3 bg-accent/40"
              style={{ width: `${(lvl.thinking / 50000) * 100}%` }}
            />
            <div className="h-3 w-[3%] bg-accent" title="Visible answer" />
          </div>
          <div className="mt-1.5 flex justify-between text-[11px] text-faint">
            <span>≈ {lvl.seconds}s to answer</span>
            <span>solid bar = the answer you see</span>
          </div>
        </div>

        <p className="text-center text-xs text-muted">{lvl.note}</p>
      </div>
    </TermSection>
  );
}
