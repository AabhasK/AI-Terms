import type { Metadata } from "next";
import CompareTool from "@/components/models/CompareTool";
import { featured, getCatalog, type ModelInfo } from "@/lib/models";
import { formatMonth, formatPrice, formatTokens } from "@/lib/format";

export const metadata: Metadata = {
  title: "Models · AI Glossary",
  description: "How the newest AI models differ, with live prices and context windows.",
};

// Re-fetch the model catalog at most once an hour.
export const revalidate = 3600;

export default async function ModelsPage() {
  let catalog: ModelInfo[] = [];
  try {
    catalog = await getCatalog();
  } catch (err) {
    console.error(err);
  }

  const rows = featured
    .map((f) => {
      const model = catalog.find((m) => m.id === f.id);
      return model ? { ...model, note: f.note } : null;
    })
    .filter((row) => row !== null);

  return (
    <main className="mx-auto max-w-4xl px-4 pt-28 pb-28 sm:px-8">
      <h1 className="font-display text-4xl font-semibold text-text text-balance sm:text-5xl">
        Models
      </h1>
      <p className="mt-4 max-w-[58ch] text-[0.95rem] leading-relaxed text-muted text-pretty">
        What makes the newest AI models different. Prices and context windows
        come live from the Vercel AI Gateway model catalog.
      </p>

      {rows.length === 0 ? (
        <p className="mt-12 rounded-xl border border-line bg-panel p-6 text-sm text-muted">
          The model catalog couldn&apos;t be loaded. Refresh the page to try again.
        </p>
      ) : (
        <>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs text-faint">
                  <th className="py-2 pr-4 font-normal">Model</th>
                  <th className="py-2 pr-4 font-normal">Context</th>
                  <th className="py-2 font-normal">Price per 1M tokens (in / out)</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((m) => (
                  <tr key={m.id} className="border-b border-line align-top">
                    <td className="py-4 pr-4">
                      <div className="font-medium text-text">{m.name}</div>
                      <div className="mt-0.5 text-xs text-faint">
                        {m.provider} · {formatMonth(m.released)}
                      </div>
                      <p className="mt-1.5 max-w-[52ch] text-xs leading-relaxed text-muted text-pretty">
                        {m.note}
                      </p>
                    </td>
                    <td className="py-4 pr-4 text-text tabular-nums">{formatTokens(m.context)}</td>
                    <td className="py-4 text-text tabular-nums">
                      {formatPrice(m.inputPrice)} / {formatPrice(m.outputPrice)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-20 font-display text-2xl font-semibold text-text">
            Compare two models
          </h2>
          <p className="mt-2 mb-6 max-w-[58ch] text-sm leading-relaxed text-muted text-pretty">
            Pick two models and an AI will explain the difference, using only
            the specs from the catalog.
          </p>
          <CompareTool models={rows} />
        </>
      )}
    </main>
  );
}
