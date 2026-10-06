"use client";

import { useState } from "react";
import TermSection from "../TermSection";

// Raw scores (logits) the model might give each candidate next word.
const candidates = [
  { word: "mat", logit: 5.0 },
  { word: "floor", logit: 3.9 },
  { word: "sofa", logit: 3.3 },
  { word: "roof", logit: 2.1 },
  { word: "moon", logit: 0.6 },
];

function softmax(logits: number[], t: number) {
  const scaled = logits.map((l) => l / t);
  const max = Math.max(...scaled);
  const exps = scaled.map((s) => Math.exp(s - max));
  const sum = exps.reduce((a, b) => a + b, 0);
  return exps.map((e) => e / sum);
}

export default function Temperature() {
  const [temp, setTemp] = useState(1);
  const probs = softmax(
    candidates.map((c) => c.logit),
    temp
  );

  return (
    <TermSection
      id="temperature"
      title="Temperature"
      description="A setting that controls how adventurous the model is when picking its next token. Low temperature almost always picks the most likely word; high temperature spreads the chances out, so answers get more varied and less predictable."
      caption="Many reasoning models now fix temperature for you, but it is still the main dial for creativity in most APIs."
    >
      <div className="flex flex-col gap-5">
        <p className="font-mono text-sm text-text">
          The cat sat on the <span className="text-accent">___</span>
        </p>

        <div className="flex flex-col gap-2">
          {candidates.map((c, i) => (
            <div key={c.word} className="flex items-center gap-3 text-xs">
              <span className="w-12 font-mono text-muted">{c.word}</span>
              <div className="h-2 flex-1 rounded-full bg-panel-2">
                <div
                  className="h-2 rounded-full bg-accent"
                  style={{ width: `${probs[i] * 100}%` }}
                />
              </div>
              <span className="w-10 text-right font-mono text-faint">
                {(probs[i] * 100).toFixed(0)}%
              </span>
            </div>
          ))}
        </div>

        <label className="flex flex-col items-center gap-2">
          <input
            type="range"
            min={0.1}
            max={2}
            step={0.05}
            value={temp}
            onChange={(e) => setTemp(Number(e.target.value))}
            className="w-full max-w-[300px] cursor-pointer accent-[#7de3f4]"
            aria-label="Temperature"
          />
          <span className="text-xs text-faint">
            temperature <span className="font-mono text-text">{temp.toFixed(2)}</span>
          </span>
        </label>
      </div>
    </TermSection>
  );
}
