import { useEffect, useMemo, useState } from "react";
import { Check, RotateCcw, Shuffle, X } from "lucide-react";
import { QUESTIONS, type LectureKey, type QuizQuestion } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/site-nav";
import { gradeGuess } from "@/lib/grade";
import {
  loadQuizProgress,
  recordAnswer,
  saveQuizProgress,
  type QuizProgress,
} from "@/lib/quiz-store";
import { cn } from "@/lib/utils";

const LECTURE_OPTS: { id: LectureKey | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: 2, label: "2 Method" },
  { id: 3, label: "3 Life" },
  { id: 4, label: "4 Chemistry" },
  { id: 5, label: "5 Molecules" },
  { id: 6, label: "6 Cells" },
  { id: "mixed", label: "Mixed exam" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function gradeQuestion(q: QuizQuestion, response: string): boolean {
  if (q.kind === "mc") return response === q.answer;
  return gradeGuess(response, q.answer) === true;
}

export function QuizApp() {
  const [progress, setProgress] = useState<QuizProgress>({ correct: [], missed: [] });
  const [ready, setReady] = useState(false);
  const [lecture, setLecture] = useState<LectureKey | "all">("all");
  const [kinds, setKinds] = useState<{ mc: boolean; sa: boolean; label: boolean }>({
    mc: true,
    sa: true,
    label: true,
  });
  const [skipCorrect, setSkipCorrect] = useState(true);
  const [queue, setQueue] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<string>("");
  const [written, setWritten] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [session, setSession] = useState({ right: 0, wrong: 0 });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setProgress(loadQuizProgress());
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) saveQuizProgress(progress);
  }, [progress, ready]);

  const pool = useMemo(() => {
    const correct = new Set(progress.correct);
    return QUESTIONS.filter((q) => {
      if (lecture !== "all" && q.lecture !== lecture) return false;
      if (q.kind === "mc" && !kinds.mc) return false;
      if (q.kind === "sa" && !kinds.sa) return false;
      if (q.kind === "label" && !kinds.label) return false;
      if (skipCorrect && correct.has(q.id)) return false;
      return true;
    });
  }, [lecture, kinds, skipCorrect, progress.correct]);

  const question = QUESTIONS.find((q) => q.id === queue[index]);

  function begin() {
    const ids = shuffle(pool.map((q) => q.id));
    setQueue(ids);
    setIndex(0);
    setChoice("");
    setWritten("");
    setSubmitted(false);
    setOk(null);
    setSession({ right: 0, wrong: 0 });
    setStarted(true);
  }

  function submit() {
    if (!question) return;
    const response = question.kind === "mc" ? choice : written;
    if (question.kind === "mc" && !choice) return;
    const result = gradeQuestion(question, response);
    setOk(result);
    setSubmitted(true);
    setProgress((p) => recordAnswer(p, question.id, result));
    setSession((s) => ({
      right: s.right + (result ? 1 : 0),
      wrong: s.wrong + (result ? 0 : 1),
    }));
  }

  function next() {
    setChoice("");
    setWritten("");
    setSubmitted(false);
    setOk(null);
    if (index + 1 < queue.length) setIndex(index + 1);
    else setStarted(false);
  }

  const remainingAfterSkip = pool.length;
  const savedCorrect = QUESTIONS.filter((q) => {
    if (lecture !== "all" && q.lecture !== lecture) return false;
    return progress.correct.includes(q.id);
  }).length;

  return (
    <div className="min-h-screen bg-bg text-fg">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
        <header className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-fg-subtle uppercase">
                BIOL 1414 · Lectures 2–6
              </p>
              <h1 className="font-display mt-1 text-4xl font-medium tracking-[-0.03em] text-primary">
                Quiz bank
              </h1>
              <p className="mt-2 max-w-md text-sm text-fg-muted">
                One question at a time from the lecture 2–6 quiz bank. Misses show a study-packet explanation. Later runs can skip what you already got right.
              </p>
            </div>
            <SiteNav current="quiz" />
          </div>
        </header>

        {!started || !question ? (
          <section className="rounded-xl border border-border bg-surface p-5 sm:p-7">
            <h2 className="font-display text-xl text-primary">Set up this run</h2>
            <p className="mt-2 text-sm text-fg-muted">
              {remainingAfterSkip} question{remainingAfterSkip === 1 ? "" : "s"} in this filter
              {skipCorrect ? ` · ${savedCorrect} already correct and hidden` : ""}.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <span className="text-xs font-medium tracking-wide text-fg-subtle uppercase">Lecture</span>
              <div className="flex flex-wrap gap-1.5">
                {LECTURE_OPTS.map((opt) => (
                  <button
                    key={String(opt.id)}
                    type="button"
                    onClick={() => setLecture(opt.id)}
                    className={cn(
                      "min-h-11 rounded-md px-3 text-sm font-medium",
                      lecture === opt.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-fg hover:bg-border",
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              {(
                [
                  ["mc", "Multiple choice"],
                  ["sa", "Short answer"],
                  ["label", "Labeling"],
                ] as const
              ).map(([k, label]) => (
                <label key={k} className="inline-flex min-h-11 items-center gap-2">
                  <input
                    type="checkbox"
                    checked={kinds[k]}
                    onChange={(e) => setKinds((s) => ({ ...s, [k]: e.target.checked }))}
                    className="size-4 accent-primary"
                  />
                  {label}
                </label>
              ))}
            </div>
            <label className="mt-4 flex min-h-11 items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={skipCorrect}
                onChange={(e) => setSkipCorrect(e.target.checked)}
                className="mt-1 size-4 accent-primary"
              />
              <span>
                Subsequent quizzes skip questions I already answered correctly
              </span>
            </label>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button onClick={begin} disabled={!ready || remainingAfterSkip === 0}>
                <Shuffle className="size-4" />
                Start shuffled quiz
              </Button>
              {savedCorrect > 0 && (
                <Button
                  variant="outline"
                  onClick={() => setProgress({ correct: [], missed: progress.missed })}
                >
                  <RotateCcw className="size-4" />
                  Reset correct list
                </Button>
              )}
            </div>
            {started && !question && (
              <p className="mt-4 text-sm text-fg-muted">
                Run finished · {session.right} correct · {session.wrong} incorrect. Start again to reshuffle remaining items.
              </p>
            )}
          </section>
        ) : (
          <article className="rounded-xl border border-border bg-surface p-5 sm:p-7">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-sm bg-muted px-2 py-1 text-xs font-medium text-fg-muted">
                {question.lecture === "mixed"
                  ? "Mixed exam"
                  : `Lecture ${question.lecture}`}{" "}
                · {question.kind === "mc" ? "Multiple choice" : question.kind === "sa" ? "Short answer" : "Labeling"}
              </span>
              <span className="text-xs tabular-nums text-fg-subtle">
                {index + 1} / {queue.length} · session {session.right} right / {session.wrong} wrong
              </span>
            </div>
            <h2 className="font-display text-2xl leading-snug font-medium tracking-[-0.02em]">
              {question.prompt}
            </h2>

            {question.kind === "mc" && question.choices && (
              <fieldset className="mt-5 flex flex-col gap-2" disabled={submitted}>
                <legend className="sr-only">Choose one</legend>
                {question.choices.map((c) => {
                  const selected = choice === c.letter;
                  const isAnswer = submitted && c.letter === question.answer;
                  const isWrongPick = submitted && selected && c.letter !== question.answer;
                  return (
                    <label
                      key={c.letter}
                      className={cn(
                        "flex min-h-11 cursor-pointer items-start gap-3 rounded-md border px-3 py-2.5 text-sm",
                        selected && !submitted && "border-primary bg-muted",
                        isAnswer && "border-success bg-success/10",
                        isWrongPick && "border-danger bg-danger/10",
                        !selected && !isAnswer && "border-border bg-bg",
                      )}
                    >
                      <input
                        type="radio"
                        name="choice"
                        className="mt-1 accent-primary"
                        checked={selected}
                        onChange={() => setChoice(c.letter)}
                      />
                      <span>
                        <span className="font-medium">{c.letter}. </span>
                        {c.text}
                      </span>
                    </label>
                  );
                })}
              </fieldset>
            )}

            {question.kind !== "mc" && (
              <label className="mt-5 block">
                <span className="mb-2 block text-xs font-medium tracking-wide text-fg-subtle uppercase">
                  Your answer
                </span>
                <textarea
                  value={written}
                  onChange={(e) => setWritten(e.target.value)}
                  disabled={submitted}
                  rows={4}
                  className="w-full rounded-md border border-border bg-bg px-3 py-2.5 text-base text-fg focus:ring-2 focus:ring-ring focus:outline-none disabled:opacity-70"
                  placeholder="Write a complete phrase."
                />
              </label>
            )}

            {!submitted ? (
              <div className="mt-5">
                <Button onClick={submit} disabled={question.kind === "mc" ? !choice : !written.trim()}>
                  Record answer
                </Button>
              </div>
            ) : (
              <div className="mt-5 flex flex-col gap-4">
                <div
                  className={cn(
                    "rounded-md border px-4 py-3",
                    ok ? "border-success/30 bg-success/10" : "border-danger/30 bg-danger/10",
                  )}
                >
                  <p className="flex items-center gap-2 font-medium">
                    {ok ? <Check className="size-4" /> : <X className="size-4" />}
                    {ok ? "Correct" : "Incorrect"}
                  </p>
                  {!ok && (
                    <p className="mt-2 text-sm">
                      Official answer: {question.answer}
                      {question.kind === "mc" && question.choices
                        ? ` — ${question.choices.find((c) => c.letter === question.answer)?.text ?? ""}`
                        : ""}
                    </p>
                  )}
                </div>
                {!ok && (
                  <div className="rounded-md border border-border bg-bg p-4">
                    <p className="text-xs font-medium tracking-wide text-fg-subtle uppercase">
                      From the study packet
                    </p>
                    <p className="mt-2 text-sm leading-relaxed">{question.explanation}</p>
                  </div>
                )}
                <Button onClick={next}>
                  {index + 1 < queue.length ? "Next question" : "Finish run"}
                </Button>
              </div>
            )}
          </article>
        )}
      </div>
    </div>
  );
}
