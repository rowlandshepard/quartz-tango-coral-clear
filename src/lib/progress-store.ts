const KEY = "biol1414-drill-v1";

export type Tag = "known" | "needsWork" | null;

export type Progress = {
  known: string[];
  needsWork: string[];
};

function empty(): Progress {
  return { known: [], needsWork: [] };
}

export function loadProgress(): Progress {
  if (typeof window === "undefined") return empty();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return {
      known: Array.isArray(parsed.known) ? parsed.known : [],
      needsWork: Array.isArray(parsed.needsWork) ? parsed.needsWork : [],
    };
  } catch {
    return empty();
  }
}

export function saveProgress(p: Progress) {
  localStorage.setItem(KEY, JSON.stringify(p));
}

export function tagOf(p: Progress, id: string): Tag {
  if (p.known.includes(id)) return "known";
  if (p.needsWork.includes(id)) return "needsWork";
  return null;
}

export function applyTag(p: Progress, id: string, tag: Tag): Progress {
  const known = p.known.filter((x) => x !== id);
  const needsWork = p.needsWork.filter((x) => x !== id);
  if (tag === "known") known.push(id);
  if (tag === "needsWork") needsWork.push(id);
  return { known, needsWork };
}
