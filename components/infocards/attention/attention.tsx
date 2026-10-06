"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Attention() {
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
      <section id="attention" className="mb-14">
        <h2 className="text-base font-semibold text-[#e6e9f2] mb-2">
          Attention
        </h2>

        <p className="text-[#c3c9d6] text-sm leading-relaxed mb-6">
          A mechanism inside Transformers that decides which words to focus on
          when processing a sentence. Each word looks at others and assigns more
          weight to the ones that matter most for understanding.
          <br />
          Ex: attention for 'Mat'
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
            src="/attention.png"
            className="rounded-lg"
            height={400}
            width={600}
            alt=""
          />
        </div>

        <p className="text-center text-[#98a1b6] text-xs mt-4 leading-relaxed">
          Helps the model decide which words to focus on for meaning. So it
          doesn’t treat all words equally but picks out what really matters.
        </p>
        <div className="text-[#98a1b6] text-xs text-center">
          <a
            href="https://www.ibm.com/think/topics/attention-mechanism"
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
