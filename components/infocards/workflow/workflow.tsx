"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Workflow() {
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
      <section id="workflow" className="mb-14">
        <h2 className="text-base font-semibold text-[#ededed] mb-2">
          Workflow
        </h2>

        <p className="text-[#cfcfcf] text-sm leading-relaxed mb-6">
          A predefined sequence of steps where each stage uses the previous
          result to move the task forward toward a final outcome.
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
          <video
            src="/process.mp4"
            autoPlay
            muted
            loop
            playsInline
            width={600}
            height={400}
            className="rounded-lg"
          ></video>
        </div>

        <p className="text-center text-[#b5b5b5] text-xs mt-4 leading-relaxed">
          Connects steps into a clear, predictable path.
        </p>
      </section>
    </div>
  );
}
