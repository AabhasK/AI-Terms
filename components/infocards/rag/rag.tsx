"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const docs = [
  {
    title: "Solar wind & magnetosphere",
    snippet: "Charged particles from the sun stream outward at high speeds...",
  },
  {
    title: "Atmospheric physics basics",
    snippet: "When particles collide with gases, energy is released as light...",
  },
];

const answer =
  "Northern lights form when charged solar particles collide with atmospheric gases near the poles, releasing bursts of coloured light.";

export default function RAG() {
  const [step, setStep] = useState(0);

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
      <section id="rag" className="mb-14">
        <h2 className="text-base font-semibold text-[#e6e9f2] mb-2">
          RAG (Retrieval Augmented Generation)
        </h2>

        <p className="text-[#c3c9d6] text-sm leading-relaxed mb-6">
          A method that lets a model look up information before answering. It
          retrieves relevant data from external sources, then uses that context
          to write a more complete answer.
        </p>

        <div
          className="
            border border-[#262d3d]
            rounded-xl p-6
            w-full
            bg-[#141925]
            flex flex-col items-center gap-6
            min-h-[220px]
          "
        >
          {/* Step dots */}
          <div className="flex gap-2 self-end">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i <= step ? "bg-[#e6e9f2]" : "bg-[#2c3446]"
                }`}
              />
            ))}
          </div>

          {/* Step content */}
          <div className="w-full flex-1 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="query"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center gap-3 w-full"
                >
                  <span className="text-[10px] tracking-widest uppercase text-[#58617a]">
                    query
                  </span>
                  <div className="border border-[#333b4d] rounded-lg px-5 py-2.5 text-sm text-[#e6e9f2]">
                    What causes northern lights?
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="retrieve"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center gap-3 w-full"
                >
                  <span className="text-[10px] tracking-widest uppercase text-[#58617a]">
                    retrieved docs
                  </span>
                  <div className="flex flex-col gap-2 w-full">
                    {docs.map((doc, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.12, duration: 0.2 }}
                        className="border border-[#262d3d] rounded-lg px-4 py-2.5 bg-[#181e2b]"
                      >
                        <p className="text-xs font-medium text-[#e6e9f2]">
                          {doc.title}
                        </p>
                        <p className="text-xs text-[#6b7489] mt-0.5">
                          {doc.snippet}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="generate"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center gap-3 w-full"
                >
                  <span className="text-[10px] tracking-widest uppercase text-[#58617a]">
                    generated answer
                  </span>
                  <div className="border border-[#262d3d] rounded-lg px-4 py-3 bg-[#181e2b] w-full">
                    <p className="text-sm text-[#c3c9d6] leading-relaxed">
                      {answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            {step < 2 && (
              <button
                onClick={() => setStep((s) => s + 1)}
                className="bg-white text-[#262d3d] text-sm px-4 py-1 rounded-md hover:bg-neutral-300 transition"
              >
                {step === 0 ? "Retrieve" : "Generate"}
              </button>
            )}
            <button
              onClick={() => setStep(0)}
              className="border border-[#262d3d] text-[#7a8397] text-sm px-4 py-1 rounded-md hover:text-[#e6e9f2] transition"
            >
              Reset
            </button>
          </div>
        </div>

        <p className="text-center text-[#98a1b6] text-xs mt-4 leading-relaxed">
          Finds relevant information first, then writes an answer grounded in it.
        </p>
        <div className="text-[#98a1b6] text-xs text-center">
          <a
            href="https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/"
            className="underline"
            target="_blank"
          >
            NVIDIA Blog
          </a>
          , for more information
        </div>
      </section>
    </div>
  );
}
