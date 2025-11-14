"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FineTune() {
  const original = ["the", "color", "of", "this", "image", "is", "good"];
  const refined = [
    "the",
    "contrast",
    "of",
    "this",
    "composition",
    "feels",
    "refined",
  ];

  const [tuned, setTuned] = useState(false);

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
      <section id="fine-tuning" className="mb-14">
        <h2 className="text-base font-semibold text-[#ededed] mb-2">
          Fine Tuning
        </h2>

        <p className="text-[#cfcfcf] text-sm leading-relaxed mb-6">
          Training a pre-trained model on new, specific data so it adapts to a
          particular task or tone. It keeps what it already knows but learns to
          apply it in a focused way.
        </p>

        {/* CARD */}
        <div
          className="
            border border-[#2a2a2a]
            rounded-xl
            p-6
            w-full
            bg-[#161616]
            flex flex-col items-center justify-center
            gap-6
            min-h-[180px] sm:min-h-[160px] min-h-[140px]
          "
        >
          {/* Fine-tune animation block */}
          <motion.div layout className="flex flex-wrap justify-center gap-2">
            {(tuned ? refined : original).map((word, i) => (
              <motion.div
                key={word + i}
                layout
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: i * 0.03,
                  ease: "easeOut",
                }}
                className="
                  px-3 py-1 mt-15 mb-15
                  rounded-md border border-[#2a2a2a]
                  bg-[#1a1a1a]
                  text-[#ededed] text-xs
                "
              >
                {word}
              </motion.div>
            ))}
          </motion.div>

          <button
            onClick={() => setTuned(!tuned)}
            className="
              bg-[#e5e5e5] text-[#1a1a1a]
              px-6 py-2 rounded-xl
              text-xs font-medium
              hover:bg-[#d6d6d6]
              transition
            "
          >
            {tuned ? "Reset" : "Fine-tune"}
          </button>
        </div>

        <p className="text-center text-[#b5b5b5] text-xs mt-4 leading-relaxed">
          Teaches the model a new skill without forgetting what it already
          knows. <br />
          Here, it’s adapting to design vocabulary.
        </p>
      </section>
    </div>
  );
}
