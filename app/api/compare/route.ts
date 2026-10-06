import { generateText } from "ai";
import { getCatalog } from "@/lib/models";

// POST /api/compare  { a: "<model id>", b: "<model id>" }
// Sends both models' specs to an LLM and returns a short plain-English
// comparison.
//
// A plain "provider/model" string makes the AI SDK route through Vercel AI
// Gateway. No API key is stored: on Vercel, the SDK signs in with the
// deployment's short-lived OIDC token automatically.
export async function POST(req: Request) {
  const { a, b } = await req.json();

  // Only accept models that exist in the catalog, so the endpoint can't be
  // used as a general-purpose chatbot.
  const catalog = await getCatalog();
  const modelA = catalog.find((m) => m.id === a);
  const modelB = catalog.find((m) => m.id === b);
  if (!modelA || !modelB || a === b) {
    return Response.json({ error: "Pick two different models from the list." }, { status: 400 });
  }

  try {
    const { text } = await generateText({
      model: "openai/gpt-6-luna",
      maxOutputTokens: 400, // keeps each answer short and cheap
      system:
        "You explain AI models to beginners. Use only the specs given; they may be newer than your training data. In under 120 words of plain text, say what each model is built for, the main trade-offs (price, context, inputs), and which to pick for what.",
      prompt: `Model A: ${JSON.stringify(modelA)}\n\nModel B: ${JSON.stringify(modelB)}`,
    });
    return Response.json({ text });
  } catch (err) {
    console.error("AI Gateway error", err);
    return Response.json(
      { error: "AI explanations are unavailable right now. The specs above are still live." },
      { status: 502 }
    );
  }
}
