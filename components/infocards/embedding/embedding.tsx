"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Embedding() {
  const [tokenized, setTokenized] = useState(false);

  const [embedded, setEmbedded] = useState(false);

  const groups = {
    elements: ["button", "layout", "devices"],
    actions: ["slides", "adapts"],
    states: ["hovered", "mobile"],
    neutral: ["the", "when", "and", "the", "on"],
  };

  const allWords = [
    "the",
    "button",
    "slides",
    "when",
    "hovered",
    "and",
    "the",
    "layout",
    "adapts",
    "on",
    "mobile",
    "devices",
  ];

  return (
    <div
      className="
        w-full flex flex-col items-start justify-start
        pt-10

        /* DESKTOP (unchanged) */
        lg:pl-[35vw] lg:pr-60 

        /* TABLETS (768px–1023px) */
        md:pl-8 md:pr-8

        /* SMALL SCREENS (640px–767px) */
        sm:pl-4 sm:pr-4

        /* iPHONES + VERY SMALL SCREENS (<640px) */
        pl-2 pr-2

        transition-all duration-300
      "
    >
      <section id="embedding" className="mb-14">
        <h2 className="text-base font-semibold text-[#ededed] mb-2">
          Embedding
        </h2>

        <p className="text-[#cfcfcf] text-sm leading-relaxed mb-6">
          The model turns each token into numbers that represent its meaning.
          Tokens with similar meanings have vectors that are close in space.
        </p>

        {/* CARD */}
        <div
          className="
            border border-[#2a2a2a]
            rounded-xl p-6
            w-full
            bg-[#161616]
            flex flex-col items-center
            gap-6
          "
        >
          {/* EMBEDDING SPACE */}
          <motion.div
            layout
            className="relative w-full min-h-[28px] flex justify-center"
          >
            {!embedded && (
              /* Normal sentence view */
              <motion.div
                layout
                className="flex flex-wrap gap-2 justify-center"
              >
                {allWords.map((w, i) => (
                  <motion.span
                    key={i}
                    layout
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.03 }}
                    className="
                      px-3 py-1 rounded-md border border-[#333]
                      text-xs text-[#ededed]
                    "
                  >
                    {w}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {embedded && (
              /* Clustered (embedded) view */
              <motion.div layout className="grid grid-cols-2 gap-8 w-full">
                {/* Elements */}
                <motion.div layout className="flex flex-col gap-2">
                  <span className="text-xs text-[#ededed]">elements</span>
                  <motion.div
                    layout
                    className="p-2 rounded-lg border border-dashed border-[#333] flex gap-2 flex-wrap"
                  >
                    {groups.elements.map((w, i) => (
                      <motion.span
                        key={i}
                        layout
                        className="
                          px-3 py-1 rounded-md border border-[#333]
                          text-xs text-[#ededed]
                        "
                      >
                        {w}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Actions */}
                <motion.div layout className="flex flex-col gap-2">
                  <span className="text-xs text-[#ededed]">actions</span>
                  <motion.div
                    layout
                    className="p-2 rounded-lg border border-dashed border-[#333] flex gap-2 flex-wrap"
                  >
                    {groups.actions.map((w, i) => (
                      <motion.span
                        key={i}
                        layout
                        className="
                          px-3 py-1 rounded-md border border-[#333]
                          text-xs text-[#ededed]
                        "
                      >
                        {w}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>

                {/* States */}
                <motion.div layout className="flex flex-col gap-2">
                  <span className="text-xs text-[#ededed]">states</span>
                  <motion.div
                    layout
                    className="p-2 rounded-lg border border-dashed border-[#333] flex gap-2 flex-wrap"
                  >
                    {groups.states.map((w, i) => (
                      <motion.span
                        key={i}
                        layout
                        className="
                          px-3 py-1 rounded-md border border-[#333]
                          text-xs text-[#ededed]
                        "
                      >
                        {w}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Neutral */}
                <motion.div layout className="flex flex-col gap-2">
                  <span className="text-xs text-[#ededed]">neutral</span>
                  <motion.div
                    layout
                    className="p-2 rounded-lg border border-dashed border-[#333] flex gap-2 flex-wrap"
                  >
                    {groups.neutral.map((w, i) => (
                      <motion.span
                        key={i}
                        layout
                        className="
                          px-3 py-1 rounded-md border border-[#333]
                          text-xs text-[#ededed]
                        "
                      >
                        {w}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>

          {/* BUTTON */}
          <button
            onClick={() => setEmbedded(!embedded)}
            className="
              bg-white text-[#2a2a2a] text-sm
              px-4 py-1 rounded-md
              hover:bg-neutral-300
              transition
            "
          >
            {embedded ? "Reset" : "Embed"}
          </button>
        </div>

        <p className="text-center text-[#b5b5b5] text-xs mt-4 leading-relaxed">
          Turns tokens into points in space, grouped by meaning.
        </p>
      </section>
    </div>
  );
}
