"use client";

import { useState } from "react";
import TermSection from "../TermSection";

const experts = 8;

// Which two experts the router picks for each token (illustrative).
const routes: Record<string, [number, number]> = {
  def: [1, 5],
  fibonacci: [2, 6],
  "(n):": [1, 3],
  return: [0, 5],
  n: [3, 7],
};
const sentence = Object.keys(routes);

export default function MixtureOfExperts() {
  const [i, setI] = useState(0);
  const word = sentence[i];
  const picked = routes[word];

  return (
    <TermSection
      id="mixture-of-experts"
      title="Mixture of Experts (MoE)"
      description="A way to build very large models that stay fast. The network is split into many smaller 'expert' blocks, and a router sends each token to only a few of them. The model stores a huge number of parameters but uses only a small slice for any one token."
      caption={
        <>
          The routing above is an example. A real case: Mistral Large 3 has
          675B parameters in total, but only 41B are active per token.
        </>
      }
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-1.5 font-mono text-xs">
          {sentence.map((w, j) => (
            <button
              key={w}
              onClick={() => setI(j)}
              className={`rounded-md border px-2.5 py-1 transition-colors ${
                j === i
                  ? "border-accent text-accent"
                  : "border-line text-faint hover:text-muted"
              }`}
            >
              {w}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-[11px] text-faint">
          router sends <span className="font-mono text-text">{word}</span> to 2
          of {experts} experts
        </div>

        <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
          {Array.from({ length: experts }, (_, e) => {
            const on = picked.includes(e);
            return (
              <div
                key={e}
                className={`flex size-14 flex-col items-center justify-center rounded-lg border text-[10px] ${
                  on ? "border-accent bg-accent/10" : "border-line"
                }`}
              >
                <span className={on ? "text-accent" : "text-faint"}>E{e + 1}</span>
                <span className="text-faint">{on ? "active" : "idle"}</span>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setI((i + 1) % sentence.length)}
          className="rounded-lg border border-line px-4 py-1.5 text-xs text-muted hover:text-text"
        >
          Next token
        </button>
      </div>
    </TermSection>
  );
}
