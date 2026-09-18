import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function SiteNav({ current }: { current: "quiz" | "drill" }) {
  return (
    <nav className="flex flex-wrap gap-2" aria-label="Study modes">
      <Link
        to="/"
        className={cn(
          "inline-flex min-h-11 items-center rounded-md px-4 text-sm font-medium",
          current === "quiz"
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-fg hover:bg-border",
        )}
      >
        Quiz bank
      </Link>
      <Link
        to="/drill"
        className={cn(
          "inline-flex min-h-11 items-center rounded-md px-4 text-sm font-medium",
          current === "drill"
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-fg hover:bg-border",
        )}
      >
        Flashcards
      </Link>
    </nav>
  );
}
