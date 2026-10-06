"use client";

import { useState } from "react";
import TermSection from "../TermSection";

const question = "Who won the 2031 Riverside Chess Open?";

const answers = {
  alone: {
    text: "The 2031 Riverside Chess Open was won by Elena Marsh, who beat the defending champion in the final round.",
    tag: "Fluent, confident and invented",
  },
  grounded: {
    text: "I couldn't find any results for a 2031 Riverside Chess Open in the sources I searched, so I can't say who won it.",
    tag: "Checked sources and admitted the gap",
  },
};

export default function Hallucination() {
  const [mode, setMode] = useState<"alone" | "grounded">("alone");
  const a = answers[mode];

  return (
    <TermSection
      id="hallucination"
      title="Hallucination"
      description="When a model states something false as if it were fact. Models are trained to produce likely-sounding text, and a made-up answer can sound just as likely as a true one. Grounding the model in real sources (RAG, web search) and letting it say 'I don't know' are the main defences."
      caption="The event in the question doesn't exist. Only one answer admits that."
    >
      <div className="flex flex-col gap-5">
        <p className="rounded-md bg-panel-2 px-3 py-2 text-xs text-text">{question}</p>

        <div className="flex gap-2 self-center">
          {(["alone", "grounded"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`rounded-lg border px-3 py-1.5 text-xs transition-colors ${
                mode === m ? "border-accent text-accent" : "border-line text-faint hover:text-muted"
              }`}
            >
              {m === "alone" ? "Model on its own" : "With search grounding"}
            </button>
          ))}
        </div>

          <div
            key={mode}
            className="flex flex-col gap-2"
          >
            <p className="text-sm leading-relaxed text-text">{a.text}</p>
            <span
              className={`self-start rounded-full px-2 py-0.5 text-[11px] ${
                mode === "alone" ? "bg-[#f4a37d]/10 text-[#f4a37d]" : "bg-accent/10 text-accent"
              }`}
            >
              {a.tag}
            </span>
          </div>
      </div>
    </TermSection>
  );
}
