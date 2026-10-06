"use client";

import { useState } from "react";

const tokens = [
  "The", "team", "worked", "through", "the", "night", "to", "finish",
  "the", "project", "before", "the", "deadline", "hit", "at", "dawn",
  "after", "weeks", "of", "careful", "planning", "and", "long", "hours",
  "spent", "debugging", "refining", "and", "testing", "every", "detail",
];

export default function Contextwindow() {
  const [limit, setLimit] = useState(16);

  return (
    <div
      className="
        w-full flex flex-col items-start justify-start
        mt-10
        lg:pl-[35vw] lg:pr-60
        md:pl-8 md:pr-8
        sm:pl-4 sm:pr-4
        pl-2 pr-2
        transition-all duration-300
      "
    >
      <section id="context-window" className="mb-14 w-full">
        <h2 className="text-base font-semibold text-[#ededed] mb-2">
          Context window
        </h2>

        <p className="text-[#cfcfcf] text-sm leading-relaxed mb-8 max-w-2xl">
          The limit of how much text a model can consider at once, measured in
          tokens. It includes your prompt, any documents, the conversation so
          far and the model&apos;s own reply. Frontier models in 2026 have
          windows of around 1 million tokens, enough for a large codebase or
          several novels.
        </p>

        <div
          className="
            border border-[#2a2a2a]
            rounded-xl p-6
            w-full
            bg-[#161616]
            flex flex-col gap-6
          "
        >
          {/* Token chips */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {tokens.map((t, i) => (
              <span
                key={i}
                className={`px-2 py-0.5 rounded-md border text-xs transition-all duration-200 ${
                  i < limit
                    ? "border-[#333] text-[#ededed]"
                    : "border-[#1e1e1e] text-[#2e2e2e]"
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Slider */}
          <div className="flex flex-col items-center gap-2">
            <input
              type="range"
              min={4}
              max={tokens.length}
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="w-full max-w-[300px] accent-white cursor-pointer"
            />
            <span className="text-xs text-[#666]">
              <span className="text-[#ededed]">{limit}</span>
              {" / "}
              {tokens.length} tokens in window
            </span>
          </div>
        </div>

        <p className="text-center text-[#b5b5b5] text-xs mt-6 leading-relaxed max-w-xl mx-auto">
          Tokens outside the window are invisible to the model. It cannot see
          or reason about them at all.
        </p>
        <div className="text-[#b5b5b5] text-xs text-center">
          <a
            href="https://www.ibm.com/think/topics/context-window"
            className="underline"
            target="_blank"
          >
            IBM Article
          </a>
          , for more information
        </div>
      </section>
    </div>
  );
}
