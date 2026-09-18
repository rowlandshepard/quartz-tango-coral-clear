const STOP = new Set([
  "the",
  "and",
  "for",
  "that",
  "with",
  "from",
  "this",
  "are",
  "was",
  "were",
  "not",
  "but",
  "you",
  "your",
  "into",
  "than",
  "then",
  "also",
  "only",
  "such",
  "have",
  "has",
]);

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w));
}

/** Returns true/false if the guess can be scored, or null if empty. */
export function gradeGuess(guess: string, answer: string): boolean | null {
  const trimmed = guess.trim();
  if (!trimmed) return null;
  const g = tokenize(trimmed);
  const a = tokenize(answer);
  if (g.length === 0) {
    return answer.toLowerCase().includes(trimmed.toLowerCase());
  }
  const aset = new Set(a);
  const hits = g.filter((w) => aset.has(w)).length;
  const coverage = hits / Math.max(g.length, 1);
  const reverse = a.filter((w) => g.includes(w)).length / Math.max(a.length, 1);
  const compactG = trimmed.toLowerCase();
  const compactA = answer.toLowerCase();
  if (compactA.includes(compactG) && compactG.length >= 4) return true;
  return coverage >= 0.45 || reverse >= 0.35;
}
