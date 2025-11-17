"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Latent() {
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
      <section id="latent-space" className="mb-14">
        <h2 className="text-base font-semibold text-[#ededed] mb-2">
          Latent Space
        </h2>

        <p className="text-[#cfcfcf] text-sm leading-relaxed mb-6">
          An internal map where the model organizes what it has learned. Each
          point represents a concept, and similar ideas group close together.
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
            src="/finallatent.png"
            className="rounded-lg"
            height={200}
            width={400}
            alt=""
          />
        </div>

        <p className="text-center text-[#b5b5b5] text-xs mt-4 leading-relaxed">
          Each dot is an embedding, placed near others with similar meaning.
          It’s how the model organizes concepts to relate them efficiently.
        </p>
        <div className="text-[#b5b5b5] text-xs text-center">
          <a
            href="https://www.coursera.org/articles/what-is-latent-space"
            className="underline"
            target="_blank"
          >
            Coursera Article
          </a>
          , for more information
        </div>
      </section>
    </div>
  );
}
