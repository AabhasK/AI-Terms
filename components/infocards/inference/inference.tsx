"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Inference() {
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
      <section id="inference" className="mb-14">
        <h2 className="text-base font-semibold text-[#ededed] mb-2">
          Inference
        </h2>

        <p className="text-[#cfcfcf] text-sm leading-relaxed mb-6">
          The stage where a trained model uses what it has learned to generate a
          response. It predicts the next token step by step until the answer is
          complete.
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
            src="/inference.mp4"
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
          Basically what’s happening behind the scenes when you use an AI
          product.
        </p>
        <div className="text-[#b5b5b5] text-xs text-center">
          <a
            href="https://www.ibm.com/think/topics/ai-inference"
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
