"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RNN() {
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
      <section id="rnn" className="mb-14">
        <h2 className="text-base font-semibold text-[#ededed] mb-2">
          RNN(Recurrent Neural network)
        </h2>

        <p className="text-[#cfcfcf] text-sm leading-relaxed mb-6">
          A basic RNN uses recurrent connections that pass information from one
          step to the next, allowing the network to learn temporal patterns
          through backpropagation(learning backwards)
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
            src="/RNN.png"
            className="rounded-lg"
            height={400}
            width={600}
            alt=""
          />
        </div>

        <p className="text-center text-[#b5b5b5] text-xs mt-4 leading-relaxed">
          simple recurrent neural units with looping arrows that feed their
          output back into themselves across time.
        </p>
      </section>
    </div>
  );
}
