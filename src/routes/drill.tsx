import { createFileRoute } from "@tanstack/react-router";
import { DrillApp } from "@/components/drill-app";

export const Route = createFileRoute("/drill")({ component: DrillPage });

function DrillPage() {
  return <DrillApp />;
}
