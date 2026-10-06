// Single source of truth for the glossary's order and grouping.
// `id` must match the <section id> inside the term's card.
export type Term = { id: string; label: string };
export type TermGroup = { title: string; terms: Term[] };

export const glossary: TermGroup[] = [
  {
    title: "Foundations",
    terms: [
      { id: "token", label: "Token" },
      { id: "embedding", label: "Embedding" },
      { id: "context-window", label: "Context window" },
      { id: "temperature", label: "Temperature" },
    ],
  },
  {
    title: "Networks",
    terms: [
      { id: "neural-network", label: "Neural network" },
      { id: "parameter", label: "Parameter" },
      { id: "model", label: "Model" },
      { id: "transformer", label: "Transformer" },
      { id: "attention", label: "Attention" },
      { id: "mixture-of-experts", label: "Mixture of experts" },
      { id: "diffusion-model", label: "Diffusion model" },
      { id: "multimodal", label: "Multimodal" },
    ],
  },
  {
    title: "Training",
    terms: [
      { id: "pre-training", label: "Pre-training" },
      { id: "fine-tuning", label: "Fine-tuning" },
      { id: "reinforcement", label: "Reinforcement learning" },
      { id: "distillation", label: "Distillation" },
      { id: "quantization", label: "Quantization" },
    ],
  },
  {
    title: "Language models",
    terms: [
      { id: "llm", label: "LLM" },
      { id: "gpt", label: "GPT" },
      { id: "inference", label: "Inference" },
      { id: "chain-of-thought", label: "Chain of thought" },
      { id: "reasoning-effort", label: "Reasoning effort" },
      { id: "hallucination", label: "Hallucination" },
      { id: "prompt-caching", label: "Prompt caching" },
    ],
  },
  {
    title: "Building with AI",
    terms: [
      { id: "rag", label: "RAG" },
      { id: "vector-db", label: "Vector database" },
      { id: "tool-calling", label: "Tool calling" },
      { id: "context-engineering", label: "Context engineering" },
      { id: "agent", label: "Agent" },
      { id: "workflow", label: "Workflow" },
      { id: "mcp", label: "MCP" },
    ],
  },
];

export const allTerms = glossary.flatMap((g) => g.terms);
export const termCount = allTerms.length;
