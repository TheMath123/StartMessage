export function SkeletonCard(){
  return <div
    className="flex flex-col w-full max-w-2xl gap-8 p-8 border border-text border-opacity-20 bg-background rounded-lg animate-pulse"
  >
    <div className="flex flex-col w-full gap-4">
      <div className="h-6 w-32 flex animate-pulse bg-text/25 rounded-sm"></div>
      <div className="h-12 min-w-sm w-full flex animate-pulse bg-input-bg/50 rounded-sm"></div>
      <div className="h-6 w-32 flex animate-pulse bg-text/25 rounded-sm"></div>
      <div className="h-12 w-full block animate-pulse bg-input-bg/50 rounded-sm"></div>
      <div className="h-6 w-32 flex animate-pulse bg-text/25 rounded-sm"></div>
      <div className="h-20 w-full block animate-pulse bg-input-bg/50 rounded-sm"></div>
    </div>

    <div className="h-12 w-full flex animate-pulse bg-green-500/50
rounded-lg "></div>
  </div>
}