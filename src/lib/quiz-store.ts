const KEY = "biol1414-quiz-v1";

export type QuizProgress = {
  correct: string[];
  missed: string[];
};

function empty(): QuizProgress {
  return { correct: [], missed: [] };
}

export function loadQuizProgress(): QuizProgress {
  if (typeof window === "undefined") return empty();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw) as Partial<QuizProgress>;
    return {
      correct: Array.isArray(parsed.correct) ? parsed.correct : [],
      missed: Array.isArray(parsed.missed) ? parsed.missed : [],
    };
  } catch {
    return empty();
  }
}

export function saveQuizProgress(p: QuizProgress) {
  localStorage.setItem(KEY, JSON.stringify(p));
}

export function recordAnswer(p: QuizProgress, id: string, ok: boolean): QuizProgress {
  const correct = p.correct.filter((x) => x !== id);
  const missed = p.missed.filter((x) => x !== id);
  if (ok) correct.push(id);
  else missed.push(id);
  return { correct, missed };
}
