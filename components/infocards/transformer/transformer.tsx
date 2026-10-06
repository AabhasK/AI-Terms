"use client";

import { useState } from "react";

export default function Transformer() {
  // Sentence tokens
  const tokens = [
    "Why",
    "does",
    "the",
    "sky",
    "turn",
    "orange",
    "when",
    "the",
    "sun",
    "sets",
  ];

  // Attention relationships (YOU CONTROL THIS)
  const attentionMap: Record<string, string[]> = {
    Why: ["does", "turn", "orange"],
    does: ["Why", "turn", "sky"],
    the: ["sky"],
    sky: ["the", "sun", "sets", "turn", "orange"],
    turn: ["when", "sky", "orange", "sun", "sets"],
    orange: ["sky", "orange", "sun", "sets", "turn"],
    when: ["turn", "sun", "sets"],
    sun: ["sky", "orange", "the", "sets"],
    sets: ["sky", "orange", "when", "sun"],
  };

  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      className="
        w-full flex flex-col items-start justify-start
        pt-10
        lg:pl-[35vw] lg:pr-60 mt-0
        md:pl-8 md:pr-8
        sm:pl-4 sm:pr-4
        pl-2 pr-2
        transition-all duration-300
      "
    >
      <section id="transformer" className="mb-14">
        <h2 className="text-base font-semibold text-[#e6e9f2] mb-2">
          Transformer
        </h2>

        <p className="text-[#c3c9d6] text-sm leading-relaxed mb-6 max-w-2xl">
          A type of neural network that looks at every word in a sequence at
          once. Unlike earlier models that read step by step, it learns how
          words relate across the whole text, allowing it to understand context
          much more effectively.
        </p>

        {/* CARD */}
        <div
          className="
            border border-[#262d3d]
            rounded-xl
            p-5
            
            
            w-full
            bg-[#141925]
            flex flex-col items-center
            justify-center
            gap-4
          "
        >
          <div className="w-full mt-20 mb-20 overflow-x-auto">
            <div className="flex flex-wrap justify-center gap-2 py-2">
              {/* TOKEN LOOP */}
              {tokens.map((word, i) => {
                const isActive =
                  hovered &&
                  (hovered === word || attentionMap[hovered]?.includes(word));

                return (
                  <div
                    key={i}
                    onMouseEnter={() => setHovered(word)}
                    onMouseLeave={() => setHovered(null)}
                    className={`
                      group relative inline-flex items-center justify-center
                      rounded-[4px]
                      transition-all duration-200
                      cursor-default select-none
                      h-[24px] px-2 text-xs sm:text-xs
                      shadow-2xs ring-1
                      border-[0.25px] border-[#e6e9f2]
                      bg-[#181e2b]
                      text-[#e6e9f2]

                      ${
                        isActive
                          ? "bg-neutral-600 text-[#e6e9f2] "
                          : "opacity-50"
                      }
                    `}
                  >
                    {word}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <p className="text-center text-[#98a1b6] text-xs mt-4 leading-relaxed">
          Understands relationships between words across a whole sentence — like
          a super fast reader.
        </p>
        <div className="text-[#98a1b6] text-xs text-center">
          <a
            href="https://en.wikipedia.org/wiki/Transformer_(deep_learning)"
            className="underline"
            target="_blank"
          >
            Wikipedia(transformers)
          </a>
          , for more information
        </div>
      </section>
    </div>
  );
}
