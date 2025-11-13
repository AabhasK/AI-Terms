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

// ---- SCROLL + UPDATE URL ---- //
function handleById(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  // update URL without reload
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
        px-10 pt-14
        overflow-y-auto
        hide-at-1090
      "
    >
      <h2 className="text-xl font-semibold mb-6 text-[#ededed]">AI Glossary</h2>

      <div className="flex flex-col gap-[2px]">
        {items.map((label) => {
          const id = label.replace(/\s+/g, "-").toLowerCase();

          return (
            <button
              key={label}
              onClick={() => handleById(id)}
              className="text-[#ededed] hover:text-[#b5b5b5]"
              style={{
                textAlign: "left",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "0.9rem",
                lineHeight: "1.2rem",
                padding: "2px 0",
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
