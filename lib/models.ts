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

// Hand-picked models, with a short note on what sets each apart.
// Numbers always come from the live catalog.
export const featured: { id: string; note: string }[] = [
  {
    id: "anthropic/claude-opus-5.5",
    note: "Anthropic's flagship for agentic coding and long-running tasks.",
  },
  {
    id: "openai/gpt-6-astra",
    note: "OpenAI's most capable model, for complex reasoning, coding and research. The most expensive here.",
  },
  {
    id: "openai/gpt-6-sol",
    note: "OpenAI's reasoning model for coding and agents, at a fifth of Astra's price.",
  },
  {
    id: "openai/gpt-6-luna",
    note: "OpenAI's efficient tier for high-volume tasks. Very cheap.",
  },
  {
    id: "moonshotai/kimi-k3",
    note: "Moonshot's flagship for long coding tasks. Can read video and PDFs.",
  },
  {
    id: "zai/glm-5.3",
    note: "Z.ai's coding and agent model. Text only, low price.",
  },
  {
    id: "google/gemini-3.8-flash",
    note: "Google's fast, low-cost model for agents. Can read video.",
  },
  {
    id: "deepseek/deepseek-v4-pro",
    note: "DeepSeek's model built for cheap long-context work.",
  },
];
