"use client";

import { useState } from "react";
import type { ModelInfo } from "@/lib/models";
import { formatMonth, formatPrice, formatTokens } from "@/lib/format";

// Spec rows shown side by side. Each row turns a model into display text.
const specs: { label: string; show: (m: ModelInfo) => string }[] = [
  { label: "Maker", show: (m) => m.provider },
  { label: "Released", show: (m) => formatMonth(m.released) },
  { label: "Context", show: (m) => formatTokens(m.context) },
  { label: "Input / 1M", show: (m) => formatPrice(m.inputPrice) },
  { label: "Output / 1M", show: (m) => formatPrice(m.outputPrice) },
  { label: "Reads", show: (m) => m.inputs.join(", ") },
];

export default function CompareTool({ models }: { models: ModelInfo[] }) {
  const [a, setA] = useState(models[0].id);
  const [b, setB] = useState(models[1]?.id ?? models[0].id);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const modelA = models.find((m) => m.id === a)!;
  const modelB = models.find((m) => m.id === b)!;

  // A new pick makes the old AI answer stale, so clear it.
  function pick(setter: (id: string) => void) {
    return (id: string) => {
      setter(id);
      setAnswer("");
      setError("");
    };
  }

  async function explain() {
    setLoading(true);
    setAnswer("");
    setError("");

    try {
      const res = await fetch("/api/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ a, b }),
      });
      const data = await res.json();
      if (res.ok) setAnswer(data.text);
      else setError(data.error);
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
    }

    setLoading(false);
  }

  const select = (value: string, onChange: (id: string) => void, label: string) => (
    <select
      aria-label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full min-w-0 rounded-lg border border-line bg-panel-2 px-2 py-1.5 text-xs text-text"
    >
      {models.map((m) => (
        <option key={m.id} value={m.id}>
          {m.name}
        </option>
      ))}
    </select>
  );

  return (
    <div className="rounded-xl border border-line bg-panel p-4">
      <h2 className="font-display text-lg font-semibold text-text">Compare</h2>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {select(a, pick(setA), "Model A")}
        {select(b, pick(setB), "Model B")}
      </div>

      <table className="mt-3 w-full table-fixed text-xs">
        <tbody>
          {specs.map((row) => {
            const valueA = row.show(modelA);
            const valueB = row.show(modelB);
            const differs = valueA !== valueB;
            return (
              <tr key={row.label} className="border-b border-line last:border-0">
                <th className="w-[30%] py-1.5 pr-2 text-left font-normal text-faint">{row.label}</th>
                <td className={`py-1.5 pr-2 tabular-nums ${differs ? "text-text" : "text-faint"}`}>{valueA}</td>
                <td className={`py-1.5 tabular-nums ${differs ? "text-text" : "text-faint"}`}>{valueB}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="mt-2 text-[11px] text-faint">Bright values are the ones that differ.</p>

      <button
        onClick={explain}
        disabled={a === b || loading}
        className="mt-3 w-full rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-ink disabled:opacity-40"
      >
        {loading ? "Explaining…" : "Explain the difference with AI"}
      </button>

      {error && <p className="mt-3 text-xs text-[#f4a37d]">{error}</p>}
      {answer && (
        <p className="mt-3 border-l-2 border-accent pl-3 text-xs leading-relaxed text-[#cfcfcf] text-pretty">
          {answer}
        </p>
      )}
    </div>
  );
}
