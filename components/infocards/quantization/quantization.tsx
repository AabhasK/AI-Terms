"use client";

import { useState } from "react";
import TermSection from "../TermSection";

// Memory to hold the weights of a 70B-parameter model.
const params = 70e9;
const formats = [
  { name: "FP16", bits: 16, sample: "0.0312347412" },
  { name: "INT8", bits: 8, sample: "0.03125" },
  { name: "INT4", bits: 4, sample: "0.031" },
];

export default function Quantization() {
  const [f, setF] = useState(0);
  const gb = (params * formats[f].bits) / 8 / 1e9;

  return (
    <TermSection
      id="quantization"
      title="Quantization"
      description="Storing a model's parameters with fewer bits, for example 4-bit integers instead of 16-bit decimals. The model gets much smaller and faster to run and loses a little precision, usually with only a small drop in quality. It's how large open models fit on a single GPU or a laptop."
      caption="Same model, same parameters, less precision per number."
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-2">
          {formats.map((fmt, j) => (
            <button
              key={fmt.name}
              onClick={() => setF(j)}
              className={`rounded-lg border px-4 py-1.5 font-mono text-xs transition-colors ${
                f === j
                  ? "border-accent text-accent"
                  : "border-line text-faint hover:text-muted"
              }`}
            >
              {fmt.name}
            </button>
          ))}
        </div>

        <div className="w-full max-w-md">
          <div className="mb-2 flex justify-between text-xs">
            <span className="text-muted">70B model weights</span>
            <span className="font-mono text-text">{gb.toFixed(0)} GB</span>
          </div>
          <div className="h-3 w-full rounded-full bg-panel-2">
            <div
              className="h-3 rounded-full bg-accent"
              style={{ width: `${(gb / 140) * 100}%` }}
            />
          </div>
        </div>

        <div className="text-xs text-faint">
          one weight stored as{" "}
          <span className="font-mono text-text">{formats[f].sample}</span>
        </div>
      </div>
    </TermSection>
  );
}
