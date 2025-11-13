"use client";

import { animate } from "framer-motion";

const items = [
  "Token",
  "Tokenization",
  "Embedding",
  "Context window",
  "Latent space",
  "Neural network",
  "Parameter",
  "Model",
  "Transformer",
  "Attention",
  "Pre-training",
  "Fine-tuning",
  "Reinforcement learning",
  "Chain of thought",
  "Inference",
  "RAG",
  "Agent",
  "Workflow",
  "LLM",
];

function handleById(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  window.history.replaceState(null, "", `#${id}`);

  const targetY = el.getBoundingClientRect().top + window.scrollY - 20;

  animate(window.scrollY, targetY, {
    duration: 0.55,
    ease: "easeOut",
    onUpdate: (v) => window.scrollTo(0, v),
  });
}

export default function Sidebar() {
  return (
    <aside
      className="
        fixed top-0 left-0
        h-screen w-[30vw]
        px-30 pt-30
        overflow-y-auto
        hidden lg:block
        text-left flex flex-col items-start
      "
    >
      {/* Smaller heading */}
      <h2 className="text-lg font-semibold mb-5 text-[#ededed] text-left">
        AI Glossary
      </h2>

      {/* Smaller list */}
      <div className="flex flex-col gap-[2px] text-left w-full">
        {items.map((label) => {
          const id = label.replace(/\s+/g, "-").toLowerCase();

          return (
            <button
              key={label}
              onClick={() => handleById(id)}
              className="
                text-[#ededed]
                hover:text-[#b5b5b5]
                text-xs
                text-left
                w-full
              "
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "0.75rem", // smaller
                lineHeight: "1.05rem", // tighter
                padding: "1px 0", // smaller spacing
                transition: "color 0.15s ease",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
