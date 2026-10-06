"use client";

import { useState } from "react";
import TermSection from "../TermSection";

// Next-word probabilities for "The capital of France is ___".
const words = ["Paris", "Lyon", "France", "a"];
const teacher = [0.86, 0.06, 0.05, 0.03];
const untrained = [0.3, 0.25, 0.25, 0.2];

function Bars({ label, values }: { label: string; values: number[] }) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <span className="text-xs text-muted">{label}</span>
      {words.map((w, i) => (
        <div key={w} className="flex items-center gap-2 text-[11px]">
          <span className="w-12 font-mono text-faint">{w}</span>
          <div className="h-1.5 flex-1 rounded-full bg-panel-2">
            <div
              className="h-1.5 rounded-full bg-accent"
              style={{ width: `${values[i] * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Distillation() {
  const [trained, setTrained] = useState(false);

  return (
    <TermSection
      id="distillation"
      title="Distillation"
      description="Training a small 'student' model to copy a large 'teacher' model. The student learns from the teacher's full probability spread over possible answers, not just the right answer, so it picks up much of the teacher's skill at a fraction of the size and cost."
      caption="It's a common way for labs to build fast, cheap versions of their flagship models."
    >
      <div className="flex flex-col gap-6">
        <p className="font-mono text-xs text-muted">
          The capital of France is <span className="text-accent">___</span>
        </p>
        <div className="flex flex-col gap-6 sm:flex-row">
          <Bars label="Teacher · large" values={teacher} />
          <Bars label="Student · small" values={trained ? teacher.map((v, i) => v * 0.92 + untrained[i] * 0.08) : untrained} />
        </div>
        <button
          onClick={() => setTrained((t) => !t)}
          className="self-center rounded-lg border border-line px-4 py-1.5 text-xs text-muted hover:text-text"
        >
          {trained ? "Reset student" : "Distill teacher into student"}
        </button>
      </div>
    </TermSection>
  );
}
