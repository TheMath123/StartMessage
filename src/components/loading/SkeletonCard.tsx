export function SkeletonCard() {
  return (
    <div className="flex flex-col w-full gap-5 p-5 border border-border bg-card rounded animate-pulse">
      <div className="flex flex-col w-full gap-3">
        <div className="h-4 w-24 bg-muted rounded"></div>
        <div className="h-9 w-full bg-muted rounded"></div>
        <div className="h-4 w-24 bg-muted rounded"></div>
        <div className="h-9 w-full bg-muted rounded"></div>
        <div className="h-4 w-24 bg-muted rounded"></div>
        <div className="h-16 w-full bg-muted rounded"></div>
      </div>
      <div className="h-9 w-full bg-primary/30 rounded"></div>
    </div>
  );
}
