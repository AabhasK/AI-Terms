import { GATEWAY_URL, getCatalog } from "@/lib/models";

// POST /api/compare  { a: "<model id>", b: "<model id>" }
// Sends both models' specs to an LLM through Vercel AI Gateway and returns
// a short plain-English comparison.
export async function POST(req: Request) {
  const apiKey = process.env.JEV_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "AI comparisons are not set up on this server." }, { status: 503 });
  }

  const { a, b } = await req.json();

  // Only accept models that exist in the catalog, so the endpoint can't be
  // used as a general-purpose chatbot.
  const catalog = await getCatalog();
  const modelA = catalog.find((m) => m.id === a);
  const modelB = catalog.find((m) => m.id === b);
  if (!modelA || !modelB || a === b) {
    return Response.json({ error: "Pick two different models from the list." }, { status: 400 });
  }

  const res = await fetch(`${GATEWAY_URL}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-6-luna",
      max_tokens: 400, // keeps each answer short and cheap
      messages: [
        {
          role: "system",
          content:
            "You explain AI models to beginners. Use only the specs given; they may be newer than your training data. In under 120 words of plain text, say what each model is built for, the main trade-offs (price, context, inputs), and which to pick for what.",
        },
        {
          role: "user",
          content: `Model A: ${JSON.stringify(modelA)}\n\nModel B: ${JSON.stringify(modelB)}`,
        },
      ],
    }),
  });

  if (!res.ok) {
    console.error("AI Gateway error", res.status, await res.text());
    return Response.json(
      { error: "AI explanations are unavailable right now. The specs above are still live." },
      { status: 502 }
    );
  }

  const data = await res.json();
  return Response.json({ text: data.choices[0].message.content });
}
