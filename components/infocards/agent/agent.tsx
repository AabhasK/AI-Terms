"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phases = [
  {
    name: "Observe",
    desc: "Takes in the current state of the environment and gathers any available inputs.",
  },
  {
    name: "Plan",
    desc: "Breaks the goal into steps and decides which action to take next.",
  },
  {
    name: "Act",
    desc: "Calls a tool, writes output, or performs an operation in the world.",
  },
  {
    name: "Feedback",
    desc: "Checks the result of the action and adjusts its plan if something went wrong.",
  },
];

export default function Agent() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % phases.length),
      1800
    );
    return () => clearInterval(id);
  }, [playing]);

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
      <section id="agent" className="mb-14">
        <h2 className="text-base font-semibold text-[#ededed] mb-2">Agent</h2>

        <p className="text-[#cfcfcf] text-sm leading-relaxed mb-6">
          A model running in a loop: it looks at the situation, decides what
          to do, calls a tool, checks the result and repeats until the goal is
          done. Unlike a workflow, the model chooses its own next step. Today&apos;s
          coding agents can work unattended for hours on one task.
        </p>

        <div
          className="
            border border-[#2a2a2a]
            rounded-xl p-6
            w-full
            bg-[#161616]
            flex flex-col items-center gap-6
            min-h-[180px]
          "
        >
          {/* Phase buttons */}
          <div className="flex gap-2 flex-wrap justify-center">
            {phases.map((p, i) => (
              <button
                key={i}
                onClick={() => {
                  setActive(i);
                  setPlaying(false);
                }}
                className={`px-4 py-1.5 rounded-lg border text-xs transition-all duration-300 ${
                  active === i
                    ? "border-[#ededed] text-[#ededed] bg-[#212121]"
                    : "border-[#252525] text-[#444] hover:text-[#777]"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Description */}
          <div className="min-h-10 flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="text-sm text-[#cfcfcf] text-center max-w-sm leading-relaxed"
              >
                {phases[active].desc}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Step dots */}
          <div className="flex gap-1.5">
            {phases.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "bg-[#ededed]" : "bg-[#2e2e2e]"
                }`}
              />
            ))}
          </div>

          {/* Play / Pause */}
          <button
            onClick={() => setPlaying((p) => !p)}
            className="bg-white text-[#2a2a2a] text-sm px-4 py-1 rounded-md hover:bg-neutral-300 transition"
          >
            {playing ? "Pause" : "Play"}
          </button>
        </div>

        <p className="text-center text-[#b5b5b5] text-xs mt-4 leading-relaxed">
          They choose their own actions to get things done.
        </p>
        <div className="text-[#b5b5b5] text-xs text-center">
          <a
            href="https://www.ibm.com/think/topics/ai-agents"
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
