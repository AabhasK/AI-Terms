"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ChainofThought() {
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
      <section id="chain-of-thought" className="mb-14">
        <h2 className="text-base font-semibold text-[#ededed] mb-2">
          Chain of Thought
        </h2>

        <p className="text-[#cfcfcf] text-sm leading-relaxed mb-6">
          Step-by-step reasoning the model writes to reach an answer. It helps
          the model break complex problems into smaller, more manageable steps.
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
          <img
            src="/chainofthought.png"
            className="rounded-lg"
            height={400}
            width={600}
            alt=""
          />
        </div>

        <p className="text-center text-[#b5b5b5] text-xs mt-4 leading-relaxed">
          Shows how the model thinks through a problem before answering.
        </p>
      </section>
    </div>
  );
}
