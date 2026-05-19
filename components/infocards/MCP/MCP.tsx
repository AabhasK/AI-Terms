"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nodes = ["App", "MCP Server", "Tool"];

const flow: { active: number; label: string }[] = [
  { active: 0, label: "Sending request to MCP Server..." },
  { active: 1, label: "Routing request to the right tool..." },
  { active: 2, label: "Tool is executing..." },
  { active: 1, label: "Result passed back through server..." },
  { active: 0, label: "Response received by the app." },
];

function delay(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}

export default function MCP() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [running, setRunning] = useState(false);

  async function runFlow() {
    setRunning(true);
    for (const step of flow) {
      setActiveNode(step.active);
      setLabel(step.label);
      await delay(700);
    }
    await delay(500);
    setActiveNode(null);
    setLabel(null);
    setRunning(false);
  }

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
      <section id="mcp" className="mb-14">
        <h2 className="text-base font-semibold text-[#ededed] mb-2">
          MCP (Model Context Protocol)
        </h2>

        <p className="text-[#cfcfcf] text-sm leading-relaxed mb-6">
          The Model Context Protocol (MCP) is a standardized system that lets
          apps securely access external tools, data sources, and services
          through a consistent, structured interface.
        </p>

        <div
          className="
            border border-[#2a2a2a]
            rounded-xl p-6
            w-full
            bg-[#161616]
            flex flex-col items-center gap-8
          "
        >
          {/* Node diagram */}
          <div className="flex items-center justify-center w-full gap-0">
            {nodes.map((name, i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`
                    border rounded-lg px-5 py-3 text-xs text-center
                    transition-all duration-300 min-w-20
                    ${
                      activeNode === i
                        ? "border-[#ededed] text-[#ededed] bg-[#212121]"
                        : "border-[#252525] text-[#444]"
                    }
                  `}
                >
                  {name}
                </div>
                {i < nodes.length - 1 && (
                  <div className="w-8 h-px bg-[#252525] shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Status label */}
          <div className="min-h-5 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {label && (
                <motion.p
                  key={label}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-xs text-[#777] text-center"
                >
                  {label}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Button */}
          <button
            onClick={runFlow}
            disabled={running}
            className="bg-white text-[#2a2a2a] text-sm px-4 py-1 rounded-md hover:bg-neutral-300 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Send Request
          </button>
        </div>

        <p className="text-center text-[#b5b5b5] text-xs mt-4 leading-relaxed">
          One standard protocol, any tool — apps connect once and gain access
          to everything.
        </p>
        <div className="text-[#b5b5b5] text-xs text-center">
          <a
            href="https://www.cloudflare.com/learning/ai/what-is-model-context-protocol-mcp/"
            className="underline"
            target="_blank"
          >
            Cloudflare Article
          </a>
          , for more information
        </div>
      </section>
    </div>
  );
}
