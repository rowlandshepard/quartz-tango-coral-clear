import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Check,
  Layers,
  RotateCcw,
  Shuffle,
  X,
  BookmarkCheck,
  BookmarkMinus,
} from "lucide-react";
import { FLASHCARDS, type Flashcard } from "@/data/flashcards";
import { Button } from "@/components/ui/button";
import { gradeGuess } from "@/lib/grade";
import {
  applyTag,
  loadProgress,
  saveProgress,
  tagOf,
  type Progress,
  type Tag,
} from "@/lib/progress-store";
import { cn } from "@/lib/utils";

const LECTURES = [2, 3, 4, 5, 6] as const;
const LECTURE_LABEL: Record<number, string> = {
  2: "Method",
  3: "Life",
  4: "Chemistry",
  5: "Molecules",
  6: "Cells",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function DrillApp() {
  const [progress, setProgress] = useState<Progress>({ known: [], needsWork: [] });
  const [lecture, setLecture] = useState<number | "all">("all");
  const [kind, setKind] = useState<"all" | "Term" | "Compare">("all");
  const [queue, setQueue] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [verdict, setVerdict] = useState<boolean | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setReady(true);
  }, []);

  const knownSet = useMemo(() => new Set(progress.known), [progress.known]);

  const pool = useMemo(() => {
    return FLASHCARDS.filter((c) => {
      if (lecture !== "all" && c.lecture !== lecture) return false;
      if (kind !== "all" && c.type !== kind) return false;
      if (knownSet.has(c.id)) return false;
      return true;
    });
  }, [lecture, kind, knownSet]);

  useEffect(() => {
    if (!ready) return;
    const ids = shuffle(pool.map((c) => c.id));
    setQueue(ids);
    setIndex(0);
    setGuess("");
    setRevealed(false);
    setVerdict(null);
  }, [pool, ready]);

  useEffect(() => {
    if (ready) saveProgress(progress);
  }, [progress, ready]);

  const card: Flashcard | undefined = useMemo(() => {
    const id = queue[index];
    if (!id) return undefined;
    return FLASHCARDS.find((c) => c.id === id);
  }, [queue, index]);

  function reveal() {
    if (!card) return;
    setRevealed(true);
    setVerdict(gradeGuess(guess, card.back));
  }

  function goNext() {
    setGuess("");
    setRevealed(false);
    setVerdict(null);
    if (index + 1 < queue.length) {
      setIndex(index + 1);
    } else {
      const ids = shuffle(pool.map((c) => c.id));
      setQueue(ids);
      setIndex(0);
    }
  }

  function reshuffle() {
    setQueue(shuffle(pool.map((c) => c.id)));
    setIndex(0);
    setGuess("");
    setRevealed(false);
    setVerdict(null);
  }

  function mark(tag: Tag) {
    if (!card) return;
    const next = applyTag(progress, card.id, tag);
    setProgress(next);
    if (tag === "known") {
      const remaining = queue.filter((id) => id !== card.id && !next.known.includes(id));
      setGuess("");
      setRevealed(false);
      setVerdict(null);
      setQueue(remaining);
      setIndex(0);
    }
  }

  function resetKnown() {
    setProgress({ known: [], needsWork: progress.needsWork });
  }

  const totalInFilter = FLASHCARDS.filter((c) => {
    if (lecture !== "all" && c.lecture !== lecture) return false;
    if (kind !== "all" && c.type !== kind) return false;
    return true;
  }).length;
  const knownInFilter = FLASHCARDS.filter((c) => {
    if (lecture !== "all" && c.lecture !== lecture) return false;
    if (kind !== "all" && c.type !== kind) return false;
    return knownSet.has(c.id);
  }).length;

  return (
    <div className="min-h-screen bg-bg text-fg">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-sans text-xs font-medium tracking-[0.18em] text-fg-subtle uppercase">
              BIOL 1414 · Lectures 2–6
            </p>
            <h1 className="font-display mt-1 text-4xl font-medium tracking-[-0.03em] text-primary">
              Drill
            </h1>
            <p className="mt-2 max-w-md text-sm text-fg-muted">
              Type an answer, reveal, and see if you were right. Tag Known to drop a card from later shuffles.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs tabular-nums text-fg-muted">
            <Stat label="In deck" value={pool.length} />
            <Stat label="Known" value={knownInFilter} />
            <Stat
              label="Needs work"
              value={FLASHCARDS.filter((c) => {
                if (lecture !== "all" && c.lecture !== lecture) return false;
                if (kind !== "all" && c.type !== kind) return false;
                return progress.needsWork.includes(c.id);
              }).length}
            />
          </div>
        </header>

        <div className="flex flex-col gap-3">
          <FilterRow label="Lecture">
            <Chip active={lecture === "all"} onClick={() => setLecture("all")}>
              All
            </Chip>
            {LECTURES.map((n) => (
              <Chip key={n} active={lecture === n} onClick={() => setLecture(n)}>
                {n} {LECTURE_LABEL[n]}
              </Chip>
            ))}
          </FilterRow>
          <FilterRow label="Type">
            <Chip active={kind === "all"} onClick={() => setKind("all")}>
              All
            </Chip>
            <Chip active={kind === "Term"} onClick={() => setKind("Term")}>
              Term
            </Chip>
            <Chip active={kind === "Compare"} onClick={() => setKind("Compare")}>
              Compare
            </Chip>
          </FilterRow>
        </div>

        <div className="h-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-primary transition-[width] duration-[var(--motion-fast)]"
            style={{
              width: totalInFilter ? `${(knownInFilter / totalInFilter) * 100}%` : "0%",
            }}
          />
        </div>

        {!ready ? (
          <div className="rounded-xl border border-border bg-surface p-8 text-sm text-fg-muted">
            Loading deck…
          </div>
        ) : !card ? (
          <EmptyDeck
            knownCount={knownInFilter}
            total={totalInFilter}
            onReset={resetKnown}
            onShuffle={reshuffle}
          />
        ) : (
          <article className="rounded-xl border border-border bg-surface p-5 shadow-[0_1px_0_rgba(26,25,22,0.04)] sm:p-7">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-sm bg-muted px-2 py-1 text-xs font-medium tracking-wide text-fg-muted">
                  Lecture {card.lecture} · {LECTURE_LABEL[card.lecture]}
                </span>
                <span className="rounded-sm bg-muted px-2 py-1 text-xs font-medium tracking-wide text-fg-muted">
                  {card.type}
                </span>
                {tagOf(progress, card.id) === "needsWork" && (
                  <span className="rounded-sm bg-danger/10 px-2 py-1 text-xs font-medium text-danger">
                    Needs work
                  </span>
                )}
              </div>
              <p className="text-xs tabular-nums text-fg-subtle">
                {Math.min(index + 1, queue.length)} / {queue.length}
              </p>
            </div>

            <h2 className="font-display text-2xl leading-snug font-medium tracking-[-0.02em] text-fg sm:text-3xl">
              {card.front}
            </h2>

            <label className="mt-6 block">
              <span className="mb-2 block text-xs font-medium tracking-wide text-fg-subtle uppercase">
                Your answer
              </span>
              <textarea
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                disabled={revealed}
                rows={3}
                placeholder="Say it in your own words, then reveal."
                className="w-full resize-y rounded-md border border-border bg-bg px-3 py-2.5 text-base text-fg placeholder:text-fg-subtle focus:ring-2 focus:ring-ring focus:outline-none disabled:opacity-70"
              />
            </label>

            {!revealed ? (
              <div className="mt-5 flex flex-wrap gap-2">
                <Button onClick={reveal}>Reveal answer</Button>
                <Button variant="outline" onClick={reshuffle}>
                  <Shuffle className="size-4" />
                  Shuffle remaining
                </Button>
              </div>
            ) : (
              <div className="mt-5 flex flex-col gap-4">
                <VerdictBanner verdict={verdict} onSet={setVerdict} />
                <div className="rounded-md border border-border bg-bg p-4">
                  <p className="text-xs font-medium tracking-wide text-fg-subtle uppercase">
                    Official answer
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-fg">{card.back}</p>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <Button
                    variant={tagOf(progress, card.id) === "known" ? "success" : "outline"}
                    onClick={() => mark("known")}
                  >
                    <BookmarkCheck className="size-4" />
                    Known — hide next shuffle
                  </Button>
                  <Button
                    variant={tagOf(progress, card.id) === "needsWork" ? "danger" : "outline"}
                    onClick={() => mark("needsWork")}
                  >
                    <BookmarkMinus className="size-4" />
                    Needs work
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button onClick={goNext}>Next card</Button>
                  <Button variant="ghost" onClick={reshuffle}>
                    <Shuffle className="size-4" />
                    Shuffle remaining
                  </Button>
                </div>
              </div>
            )}
          </article>
        )}

        <p className="flex items-start gap-2 text-xs text-fg-subtle">
          <Layers className="mt-0.5 size-3.5 shrink-0" />
          {FLASHCARDS.length} cards from the lecture 2–6 vocab workbook. Known tags stay in this browser.
        </p>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md border border-border bg-surface px-3 py-2">
      <div className="text-[10px] tracking-wide uppercase">{label}</div>
      <div className="font-display text-lg text-fg">{value}</div>
    </div>
  );
}

function FilterRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <span className="w-16 shrink-0 text-xs font-medium tracking-wide text-fg-subtle uppercase">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-11 rounded-md px-3 text-sm font-medium",
        active ? "bg-primary text-primary-foreground" : "bg-muted text-fg hover:bg-border",
      )}
    >
      {children}
    </button>
  );
}

function VerdictBanner({
  verdict,
  onSet,
}: {
  verdict: boolean | null;
  onSet: (v: boolean) => void;
}) {
  return (
    <div
      className={cn(
        "rounded-md border px-4 py-3",
        verdict === true && "border-success/30 bg-success/10",
        verdict === false && "border-danger/30 bg-danger/10",
        verdict === null && "border-border bg-bg",
      )}
    >
      <p className="font-medium">
        {verdict === true && "Correct — that matches the official answer."}
        {verdict === false && "Incorrect — compare your wording to the official answer."}
        {verdict === null && "No guess typed. Mark it yourself."}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Button size="sm" variant={verdict === true ? "success" : "outline"} onClick={() => onSet(true)}>
          <Check className="size-4" />
          Mark correct
        </Button>
        <Button size="sm" variant={verdict === false ? "danger" : "outline"} onClick={() => onSet(false)}>
          <X className="size-4" />
          Mark incorrect
        </Button>
      </div>
    </div>
  );
}

function EmptyDeck({
  knownCount,
  total,
  onReset,
  onShuffle,
}: {
  knownCount: number;
  total: number;
  onReset: () => void;
  onShuffle: () => void;
}) {
  const allKnown = total > 0 && knownCount >= total;
  return (
    <div className="rounded-xl border border-border bg-surface p-8 text-center">
      <h2 className="font-display text-2xl text-primary">
        {allKnown ? "This filter is all known." : "No cards in this filter."}
      </h2>
      <p className="mx-auto mt-2 max-w-sm text-sm text-fg-muted">
        {allKnown
          ? "Known cards stay out of later shuffles. Reset them to drill again."
          : "Try another lecture or type."}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {allKnown && (
          <Button onClick={onReset}>
            <RotateCcw className="size-4" />
            Reset known in this browser
          </Button>
        )}
        <Button variant="outline" onClick={onShuffle}>
          <Shuffle className="size-4" />
          Shuffle
        </Button>
      </div>
    </div>
  );
}
