"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Model() {
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
      <section id="model" className="mb-14">
        <h2 className="text-base font-semibold text-[#e6e9f2] mb-2">Model</h2>

        <p className="text-[#c3c9d6] text-sm leading-relaxed mb-6">
          A system that has learned from data and can now use that knowledge to
          predict, generate, or understand new information.
        </p>

        {/* ANIMATED TOKENIZATION CARD */}
        <div
          className="
            border border-[#262d3d]
            rounded-xl
            p-6
            w-full
            bg-[#141925]
            flex flex-col items-center justify-center
            gap-4
            min-h-[180px] sm:min-h-[160px] min-h-[140px]
          "
        >
          <img
            src="/model.png"
            className="rounded-lg"
            height={400}
            width={600}
            alt=""
          />
        </div>

        <p className="text-center text-[#98a1b6] text-xs mt-4 leading-relaxed">
          Many of OpenAI's models. ChatGPT 5 was trained on around 52.5 Trillion
          parameters(That's a lot of data!!)
        </p>
      </section>
    </div>
  );
}
