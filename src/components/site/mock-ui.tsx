export function MockUi({ name }: { name: string }) {
  return (
    <div className="absolute inset-0 flex flex-col p-4">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="ml-2 truncate font-mono text-[0.6rem] text-white/45">
          {name.toLowerCase().replace(/\s+/g, "-")}.app
        </span>
      </div>
      <div className="mt-3 flex flex-1 gap-2">
        <div className="hidden w-1/5 flex-col gap-1.5 rounded-lg bg-white/6 p-2 sm:flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="h-1.5 rounded-full bg-white/15" style={{ width: `${60 + i * 8}%` }} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-lg bg-white/6 p-2">
                <span className="block h-1.5 w-2/3 rounded-full bg-white/20" />
                <span className="mt-2 block h-3 w-1/2 rounded bg-primary/60" />
              </div>
            ))}
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg bg-white/6">
            <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              <polyline
                points="0,64 20,58 40,62 60,44 80,48 100,30 120,36 140,20 160,26 180,12 200,16"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.6"
                vectorEffect="non-scaling-stroke"
              />
              <polygon
                points="0,64 20,58 40,62 60,44 80,48 100,30 120,36 140,20 160,26 180,12 200,16 200,80 0,80"
                fill="color-mix(in oklab, var(--primary) 16%, transparent)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
