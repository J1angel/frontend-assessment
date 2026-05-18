"use client";

function ArrowIcon() {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-6 shrink-0"
      aria-hidden
    >
      <path
        d="M4.66675 10.0001H16.3334M16.3334 10.0001L10.5001 4.16675M16.3334 10.0001L10.5001 15.8334"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type GlowUpButtonProps = {
  className?: string;
};

export function GlowUpButton({ className = "" }: GlowUpButtonProps) {
  return (
    <button
      type="button"
      className={`group flex w-full items-center justify-between gap-3 rounded-lg border border-[#E8E8E8] bg-white px-4 py-4 text-[#233137] transition-colors duration-400 hover:bg-white disabled:cursor-default ${className}`}
    >
      <span className="relative flex-1 pr-3 text-left font-pp-neue text-lg font-medium leading-6 after:absolute after:right-0 after:top-0 after:h-full after:w-px after:bg-[#E8E8E8] after:content-['']">
        Start Your Glow-Up
      </span>
      <span className="relative size-6 shrink-0 overflow-hidden text-[#233137]">
        <span className="relative flex transition-transform duration-400 ease-out group-hover:translate-x-[30px]">
          <ArrowIcon />
          <span className="absolute left-[-30px] top-0">
            <ArrowIcon />
          </span>
        </span>
      </span>
    </button>
  );
}
