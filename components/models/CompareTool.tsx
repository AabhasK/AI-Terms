"use client";

import { useState } from "react";
import type { ModelInfo } from "@/lib/models";

export default function CompareTool({ models }: { models: ModelInfo[] }) {
  const [a, setA] = useState(models[0].id);
  const [b, setB] = useState(models[1]?.id ?? models[0].id);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

  const select = (value: string, onChange: (v: string) => void, label: string) => (
    <label className="flex flex-1 flex-col gap-1.5 text-xs text-faint">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-line bg-panel-2 px-3 py-2 text-sm text-text"
      >
        {models.map((m) => (
          <option key={m.id} value={m.id}>
            {m.name}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <div className="rounded-xl border border-line bg-panel p-5 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row">
        {select(a, setA, "Model A")}
        {select(b, setB, "Model B")}
      </div>

      <button
        onClick={explain}
        disabled={a === b || loading}
        className="mt-5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-ink disabled:opacity-40"
      >
        {loading ? "Explaining…" : "Explain the difference"}
      </button>
      {a === b && <p className="mt-2 text-xs text-faint">Pick two different models.</p>}

      {error && <p className="mt-4 text-sm text-[#f4a37d]">{error}</p>}
      {answer && (
        <p className="mt-5 whitespace-pre-line border-l-2 border-accent pl-4 text-sm leading-relaxed text-[#cfcfcf] text-pretty">
          {answer}
        </p>
      )}
    </div>
  );
}
