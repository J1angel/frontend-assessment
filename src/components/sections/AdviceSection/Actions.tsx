export function Actions() {
  const actions = [
    {
      title: "Get your expert facial analysis",
    },
    {
      title: "Visualise your best looking self",
    },
    {
      title: "Get your personalized glow-up protocol",
    },
    {
      title: "Track your progress and see dramatic results",
    },
  ];

  return (
    <div className="flex">
      {actions.map((action, index) => (
        <div
          key={action.title}
          className="border-r border-[#F2F2F2] p-[16px] last:border-r-0"
        >
          <div className="group relative flex h-[152px] w-[308px] cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-[#F2F2F2] p-[16px] transition-all duration-400 ease-in-out hover:border-transparent hover:bg-[#9AAEB5]">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-12 top-1/2 z-0 aspect-square w-[220px] -translate-y-1/2 rounded-full bg-[#A37156] opacity-0 blur-[56px] transition-opacity duration-400 group-hover:opacity-40"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 top-1/2 z-0 aspect-square w-[220px] -translate-y-1/2 rounded-full bg-[#000000] opacity-0 blur-[56px] transition-opacity duration-400 group-hover:opacity-20"
            />
            <div className="z-0 grid size-6 shrink-0 place-items-center rounded-full bg-[#9AAEB5] transition-colors duration-400 group-hover:bg-white/20">
              <span className="font-zagma text-xs font-normal leading-none text-white tabular-nums">
                {index + 1}
              </span>
            </div>
            <span className="z-0 w-fit min-w-[182px] max-w-[230px] font-pp-neue text-[20px] font-normal leading-6 text-[#233137] transition-colors duration-400 group-hover:text-white">
              {action.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
