import type { Metadata } from "next";
import Link from "next/link";
import CompareTool from "@/components/models/CompareTool";
import { featuredGroups, getCatalog, type ModelInfo } from "@/lib/models";
import { formatMonth, formatPrice, formatTokens } from "@/lib/format";

export const metadata: Metadata = {
  title: "Models · AI Glossary",
  description: "How the newest AI models differ, with live prices and context windows.",
};

// Re-fetch the model catalog at most once an hour.
export const revalidate = 3600;

type Row = ModelInfo & { note: string };

function ModelCard({ m }: { m: Row }) {
  return (
    <article className="flex flex-col rounded-xl border border-line bg-panel p-5">
      <h3 className="font-medium text-text">{m.name}</h3>
      <p className="mt-0.5 text-xs text-faint">
        {m.provider} · released {formatMonth(m.released)}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">{m.note}</p>

      <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-line pt-4 text-xs">
        <div>
          <dt className="text-faint">Context</dt>
          <dd className="mt-0.5 text-text tabular-nums">{formatTokens(m.context)}</dd>
        </div>
        <div>
          <dt className="text-faint">Input / 1M</dt>
          <dd className="mt-0.5 text-text tabular-nums">{formatPrice(m.inputPrice)}</dd>
        </div>
        <div>
          <dt className="text-faint">Output / 1M</dt>
          <dd className="mt-0.5 text-text tabular-nums">{formatPrice(m.outputPrice)}</dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {m.inputs.map((input) => (
          <span key={input} className="rounded-full border border-line px-2 py-0.5 text-[11px] text-muted">
            {input}
          </span>
        ))}
      </div>
    </article>
  );
}

export default async function ModelsPage() {
  let catalog: ModelInfo[] = [];
  try {
    catalog = await getCatalog();
  } catch (err) {
    console.error(err);
  }

  // Attach live catalog data to each hand-picked model. Models missing from
  // the catalog are skipped.
  const groups = featuredGroups.map((group) => ({
    ...group,
    rows: group.models
      .map((f) => {
        const model = catalog.find((m) => m.id === f.id);
        return model ? { ...model, note: f.note } : null;
      })
      .filter((row) => row !== null),
  }));
  const all = groups.flatMap((g) => g.rows);

  if (all.length === 0) {
    return (
      <main className="mx-auto max-w-5xl px-4 pt-28 pb-28 sm:px-8">
        <h1 className="font-display text-4xl font-semibold text-text sm:text-5xl">Models</h1>
        <p className="mt-12 rounded-xl border border-line bg-panel p-6 text-sm text-muted">
          The model catalog couldn&apos;t be loaded. Refresh the page to try again.
        </p>
      </main>
    );
  }

  // Quick answers, worked out from the live data.
  const cheapest = all.reduce((x, y) => ((y.outputPrice ?? Infinity) < (x.outputPrice ?? Infinity) ? y : x));
  const biggest = all.reduce((x, y) => ((y.context ?? 0) > (x.context ?? 0) ? y : x));
  const newest = all.reduce((x, y) => ((y.released ?? "") > (x.released ?? "") ? y : x));

  const quick = [
    { label: "Cheapest output", model: cheapest, value: `${formatPrice(cheapest.outputPrice)} per 1M tokens` },
    { label: "Largest context", model: biggest, value: `${formatTokens(biggest.context)} tokens` },
    { label: "Newest", model: newest, value: `released ${formatMonth(newest.released)}` },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 pt-28 pb-28 sm:px-8">
      <h1 className="font-display text-4xl font-semibold text-text text-balance sm:text-5xl">
        Models
      </h1>
      <p className="mt-4 max-w-[60ch] text-[0.95rem] leading-relaxed text-muted text-pretty">
        What makes the newest AI models different. Prices and context windows
        come live from the Vercel AI Gateway model catalog. Not sure what a{" "}
        <Link href="/#context-window" className="text-text underline hover:text-muted">
          context window
        </Link>{" "}
        or a{" "}
        <Link href="/#token" className="text-text underline hover:text-muted">
          token
        </Link>{" "}
        is? The glossary explains both.
      </p>

      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        {quick.map((q) => (
          <div key={q.label} className="rounded-xl border border-line bg-panel p-5">
            <p className="text-xs text-faint">{q.label}</p>
            <p className="mt-2 font-medium text-text">{q.model.name}</p>
            <p className="mt-0.5 text-xs text-muted tabular-nums">{q.value}</p>
          </div>
        ))}
      </div>

      {/* Cards on the left, compare panel stuck to the right while scrolling. */}
      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          {groups.map((group) => (
            <section key={group.title} className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-text">{group.title}</h2>
              <p className="mt-2 mb-6 max-w-[60ch] text-sm leading-relaxed text-muted text-pretty">
                {group.intro}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.rows.map((m) => (
                  <ModelCard key={m.id} m={m} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="lg:sticky lg:top-24 lg:mt-10 lg:self-start">
          <CompareTool models={all} />
        </aside>
      </div>
    </main>
  );
}
