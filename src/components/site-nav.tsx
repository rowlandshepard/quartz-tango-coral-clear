import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function appDir() {
  if (typeof window === "undefined") return "/";
  const segs = window.location.pathname.split("/").filter(Boolean);
  if (segs.length) {
    const last = segs[segs.length - 1]!;
    if (/\./.test(last) || last === "drill") segs.pop();
  }
  return `/${segs.length ? `${segs.join("/")}/` : ""}`;
}

function appHref(file: string) {
  const dir = appDir();
  if (file === "index.html") return dir;
  return `${dir}${file}`;
}

export function SiteNav({ current }: { current: "quiz" | "drill" }) {
  const [quizHref, setQuizHref] = useState("./");
  const [drillHref, setDrillHref] = useState("drill.html");

  useEffect(() => {
    setQuizHref(appHref("index.html"));
    setDrillHref(appHref("drill.html"));
  }, []);

  return (
    <nav className="flex flex-wrap gap-2" aria-label="Study modes">
      <a
        href={quizHref}
        className={cn(
          "inline-flex min-h-11 items-center rounded-md px-4 text-sm font-medium",
          current === "quiz"
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-fg hover:bg-border",
        )}
      >
        Quiz bank
      </a>
      <a
        href={drillHref}
        className={cn(
          "inline-flex min-h-11 items-center rounded-md px-4 text-sm font-medium",
          current === "drill"
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-fg hover:bg-border",
        )}
      >
        Flashcards
      </a>
    </nav>
  );
}
