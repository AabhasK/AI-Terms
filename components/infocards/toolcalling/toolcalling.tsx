"use client";

import { useState } from "react";
import TermSection from "../TermSection";

const steps = [
  { who: "You", body: "Is it going to rain in Jaipur tomorrow?", mono: false },
  {
    who: "Model → tool call",
    body: '{ "name": "get_weather", "arguments": { "city": "Jaipur", "day": "tomorrow" } }',
    mono: true,
  },
  { who: "Your code → result", body: '{ "rain_chance": 0.1, "high_c": 34 }', mono: true },
  { who: "Model", body: "Unlikely: there's only a 10% chance of rain, with a high of 34°C.", mono: false },
];

export default function ToolCalling() {
  const [n, setN] = useState(1);

  return (
    <TermSection
      id="tool-calling"
      title="Tool calling"
      description="Letting a model use functions you define, like searching, reading a database or sending an email. The model can't run anything itself. It replies with a structured request naming the tool and its arguments, your code runs it, and the result goes back to the model to finish its answer."
      caption="Agents are built from this loop, repeated many times."
    >
      <div className="flex flex-col gap-3">
          {steps.slice(0, n).map((s) => (
            <div
              key={s.who}
              className="flex flex-col gap-1"
            >
              <span className="text-[11px] text-faint">{s.who}</span>
              <span
                className={`rounded-md px-3 py-2 text-xs leading-relaxed ${
                  s.mono ? "bg-panel-2 font-mono text-accent break-all" : "bg-panel-2 text-text"
                }`}
              >
                {s.body}
              </span>
            </div>
          ))}
        <button
          onClick={() => setN((c) => (c >= steps.length ? 1 : c + 1))}
          className="mt-2 self-center rounded-lg border border-line px-4 py-1.5 text-xs text-muted hover:text-text"
        >
          {n >= steps.length ? "Start over" : "Next step"}
        </button>
      </div>
    </TermSection>
  );
}
