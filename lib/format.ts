export function formatTokens(n: number | null) {
  if (!n) return "–";
  if (n >= 1_000_000) return `${+(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return String(n);
}

export function formatPrice(n: number | null) {
  if (n === null) return "–";
  if (n === 0) return "free";
  if (n < 0.1) return `$${n.toFixed(3)}`;
  return `$${n.toFixed(2)}`;
}

export function formatMonth(date: string | null) {
  if (!date) return "–";
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
