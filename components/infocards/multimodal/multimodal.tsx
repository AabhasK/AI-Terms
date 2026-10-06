"use client";

import { useState } from "react";
import TermSection from "../TermSection";

const inputs = [
  { kind: "Text", example: "“Summarize this contract.”" },
  { kind: "Image", example: "A photo of a whiteboard sketch" },
  { kind: "PDF", example: "A 90-page annual report" },
  { kind: "Video", example: "A screen recording of a bug" },
  { kind: "Audio", example: "A voice note from a meeting" },
];

export default function Multimodal() {
  const [on, setOn] = useState<string[]>(["Text", "Image"]);

  const toggle = (k: string) =>
    setOn((cur) => (cur.includes(k) ? cur.filter((x) => x !== k) : [...cur, k]));

  return (
    <TermSection
      id="multimodal"
      title="Multimodal"
      description="A model that works with more than one kind of input or output, such as text, images, documents, video and audio. It turns every kind of input into tokens, so a screenshot and a sentence can be reasoned about together in one prompt."
      caption="Kimi K3 and Gemini 3.8 Flash accept video directly; most frontier models take text, images and PDFs."
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-2">
          {inputs.map((inp) => (
            <button
              key={inp.kind}
              onClick={() => toggle(inp.kind)}
              aria-pressed={on.includes(inp.kind)}
              className={`rounded-lg border px-3 py-1.5 text-xs transition-colors ${
                on.includes(inp.kind)
                  ? "border-accent text-accent"
                  : "border-line text-faint hover:text-muted"
              }`}
            >
              {inp.kind}
            </button>
          ))}
        </div>

        <div className="flex w-full max-w-md flex-col gap-1.5">
            {inputs
              .filter((i) => on.includes(i.kind))
              .map((i) => (
                <div
                  key={i.kind}
                  className="flex justify-between gap-4 rounded-md bg-panel-2 px-3 py-1.5 text-xs"
                >
                  <span className="text-muted">{i.example}</span>
                  <span className="font-mono text-faint">{i.kind.toLowerCase()} → tokens</span>
                </div>
              ))}
        </div>

        <div className="rounded-lg border border-line px-5 py-2 text-xs text-text">
          {on.length === 0
            ? "Pick at least one input"
            : `One model, ${on.length} ${on.length === 1 ? "modality" : "modalities"}, one answer`}
        </div>
      </div>
    </TermSection>
  );
}
