"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Tokenization() {
  const [tokenized, setTokenized] = useState(false);

  const words = ["I", "will", "be", "studying", "today", "."];

  return (
    <div
      className="
        w-full flex flex-col items-start justify-start
        pt-10

        /* DESKTOP (unchanged) */
        lg:pl-[35vw] lg:pr-60 mt-0

        /* TABLETS (768px–1023px) */
        md:pl-8 md:pr-8

        /* SMALL SCREENS (640px–767px) */
        sm:pl-4 sm:pr-4

        /* iPHONES + VERY SMALL SCREENS (<640px) */
        pl-2 pr-2

        transition-all duration-300
      "
    >
      <section id="tokenization" className="mb-14">
        <h2 className="text-base font-semibold text-[#ededed] mb-2">
          Tokenization
        </h2>

        <p className="text-[#cfcfcf] text-sm leading-relaxed mb-6">
          Tokenization is the process of splitting text into smaller units
          called tokens. These can be words, subwords, or symbols.
        </p>

        {/* ANIMATED TOKENIZATION CARD */}
        <div
          className="
            border border-[#2a2a2a]
            rounded-xl
            p-6
            w-full
            bg-[#161616]
            flex flex-col items-center justify-center
            gap-4
            min-h-[180px] sm:min-h-[160px] min-h-[140px]
          "
        >
          {/* Animated Sentence → Tokens */}
          <div
            className={`
              flex flex-wrap items-center justify-center mb-4
              ${tokenized ? "gap-2" : "gap-0"}
            `}
            style={{ transition: "gap 0.3s ease" }}
          >
            {words.map((w, i) => (
              <motion.span
                key={i}
                layout
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
                className={`
                  text-[#ededed] text-sm
                  ${
                    tokenized
                      ? "px-3 py-1 rounded-md border border-[#333] text-sm"
                      : "px-[2px] py-[5.6]"
                  }
                `}
              >
                {w}
              </motion.span>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={() => setTokenized(!tokenized)}
            className="
               text-[#2a2a2a]
               bg-white text-sm
              border border-[#3a3a3a]
              px-4 py-1 rounded-md
              hover:bg-neutral-300
              transition
            "
          >
            {tokenized ? "Reset" : "Tokenize"}
          </button>
        </div>

        <p className="text-center text-[#b5b5b5] text-xs mt-4 leading-relaxed">
          Tokenization turns text into manageable pieces the model can
          understand.
        </p>
        <div className="text-[#b5b5b5] text-xs text-center">
          Ref:{" "}
          <a href="" className="underline">
            OpenAI Tokenizer
          </a>
          , interactive tool to visualize text tokenization
        </div>
      </section>
    </div>
  );
}
