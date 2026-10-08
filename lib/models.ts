// Live model catalog from the Vercel AI Gateway. Reading the catalog is
// public; calling a model needs auth (see app/api/compare/route.ts).

export const GATEWAY_URL = "https://ai-gateway.vercel.sh/v1";

type RawModel = {
  id: string;
  name: string;
  owned_by: string;
  description?: string;
  released?: number; // unix seconds
  context_window?: number;
  modalities?: { input: string[] };
  pricing?: { input?: string; output?: string }; // USD per token
};

export type ModelInfo = {
  id: string;
  name: string;
  provider: string;
  description: string;
  released: string | null; // YYYY-MM-DD
  context: number | null;
  inputPrice: number | null; // USD per 1M tokens
  outputPrice: number | null;
  inputs: string[];
};

// The catalog gives price per single token; people compare per 1M tokens.
function perMillion(price?: string) {
  return price ? Number(price) * 1_000_000 : null;
}

export async function getCatalog(): Promise<ModelInfo[]> {
  const res = await fetch(`${GATEWAY_URL}/models`, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error(`Model catalog returned ${res.status}`);
  const body: { data: RawModel[] } = await res.json();

  return body.data.map((m) => ({
    id: m.id,
    name: m.name,
    provider: m.owned_by,
    description: m.description ?? "",
    released: m.released ? new Date(m.released * 1000).toISOString().slice(0, 10) : null,
    context: m.context_window ?? null,
    inputPrice: perMillion(m.pricing?.input),
    outputPrice: perMillion(m.pricing?.output),
    inputs: m.modalities?.input ?? [],
  }));
}

// Hand-picked models in three groups, with a short note on what sets each
// apart. Numbers always come from the live catalog.
export type FeaturedGroup = {
  title: string;
  intro: string;
  models: { id: string; note: string }[];
};

export const featuredGroups: FeaturedGroup[] = [
  {
    title: "Frontier",
    intro: "The most capable model from each lab. Best for hard coding, research and long agent tasks.",
    models: [
      { id: "anthropic/claude-opus-5.5", note: "Anthropic's flagship for agentic coding and long-running tasks." },
      { id: "anthropic/claude-sonnet-5.5", note: "Anthropic's mid-size model for everyday work: building features, fixing bugs, writing documents." },
      { id: "openai/gpt-6-astra", note: "OpenAI's most capable model, for complex reasoning, coding and research." },
      { id: "openai/gpt-6.1-sol", note: "OpenAI's reasoning model for coding and computer use, at a fifth of Astra's price." },
      { id: "google/gemini-3.1-pro-preview", note: "Google's model for complex reasoning and multi-step agent work." },
      { id: "spacexai/grok-4.7", note: "Built for multi-hour coding tasks, with stronger self-checking." },
      { id: "moonshotai/kimi-k3", note: "Moonshot's flagship for long coding tasks. Can read video." },
      { id: "alibaba/qwen3.8-max", note: "A 2.4-trillion-parameter mixture-of-experts model for long projects." },
    ],
  },
  {
    title: "Fast and cheap",
    intro: "Lower-cost models for high-volume work, where speed and price matter more than peak quality.",
    models: [
      { id: "anthropic/claude-haiku-5.5", note: "Anthropic's low-cost model for everyday tasks, tool use and sub-agents." },
      { id: "openai/gpt-6-luna", note: "OpenAI's efficient tier for focused, high-volume tasks." },
      { id: "google/gemini-3.8-flash", note: "Google's fast model for agents. Can read video." },
      { id: "deepseek/deepseek-v4-pro", note: "Designed for efficient long-context work at a low price." },
      { id: "zai/glm-5.3", note: "Z.ai's coding and agent model. Text only." },
    ],
  },
  {
    title: "Open-weight",
    intro: "Models whose weights are public, so anyone can download them and run them on their own hardware.",
    models: [
      { id: "openai/gpt-oss-120b", note: "OpenAI's open model, with adjustable reasoning." },
      { id: "meta/llama-3.3-70b", note: "Meta's open model. It also powers this page's comparison tool." },
      { id: "google/gemma-4-31b-it", note: "Google's open model, small enough to run on one high-end GPU." },
      { id: "mistral/mistral-large-4", note: "Mistral's open multimodal model (preview): 1.05 trillion parameters, 49B active." },
      { id: "minimax/minimax-m3", note: "MiniMax's open model with long context and image input." },
    ],
  },
];
