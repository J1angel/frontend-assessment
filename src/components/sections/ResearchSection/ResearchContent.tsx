import { ArrowIcon } from "@/components/ui/ArrowIcon";

export function ResearchContent() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 mx-auto flex w-full max-w-[1360px] pl-6 flex-col items-center lg:items-start md:max-lg:w-[736px]">
      <div className="mb-4 flex flex-col items-center text-center md:mb-[16px] lg:items-start lg:text-left">
        <div className="inline-flex rounded-full bg-white/10 px-3 py-1 border border-[#F2F2F21A]/10 mb-[16px] lg:hidden">
          <span className="font-zagma text-xs font-normal leading-[14px] tracking-[-0.05px] text-white uppercase">
            Backed by 2000+ research papers
          </span>
        </div>
        <span className="font-pp-neue text-[40px] font-normal leading-[48px] tracking-[-0.112rem] text-white">
          Will analyzing my face
        </span>
        <span className="font-pp-neue text-[40px] font-normal leading-[48px] tracking-[-0.112rem] text-white lg:hidden">
          make me insecure?
        </span>
        <span className="hidden font-pp-neue text-[40px] font-normal leading-[48px] tracking-[-0.112rem] text-white/40 lg:inline">
          Make me insecure?
        </span>
      </div>

      <div className="mb-8 hidden w-full max-w-[467px] flex-col items-start md:mb-10 lg:flex">
        <span className="font-pp-neue text-[16px] font-normal leading-[24px] text-white">
          Most insecurity comes from uncertainty-not knowing if your concerns are
          real or imagined. When you&apos;re guessing about your appearance, your
          mind often makes things seem worse than they are.
        </span>
      </div>
      <div className="mb-8 flex w-full max-w-[400px] flex-col items-center text-center lg:hidden">
        <span className="font-pp-neue text-[14px] font-normal leading-[20px] text-white/80">
          Get your personalized facial analysis and transformation plan based on
          2000+ academic studies.
        </span>
      </div>
      <button
        type="button"
        className="group relative mb-[40px] inline-flex h-[48px] w-[212px] cursor-pointer rounded-[8px] p-px transition-all duration-300 ease-out lg:hidden bg-gradient-to-b from-white/20 via-white/10 to-white/[0.03] shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:from-white/30 hover:via-white/15 hover:to-white/[0.06] hover:shadow-[0_0_28px_rgba(255,255,255,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 before:pointer-events-none before:absolute before:inset-0 before:rounded-[8px] before:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] before:transition-shadow before:duration-300 group-hover:before:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.28)]"
      >
        <div className="relative flex h-full w-full items-center justify-between rounded-[7px] bg-white/15 pr-1 pl-3 backdrop-blur-[6px] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition-all duration-300 group-hover:bg-white/22 group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14)]">
          <span className="pl-2 font-pp-neue text-[16px] font-medium leading-[24px] text-white">
            Start your glow-up
          </span>
          <div className="rounded-[6px] bg-white/[0.06] p-[11px] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:bg-white/12 group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)]">
            <span className="block transition-transform duration-300 ease-out group-hover:translate-x-0.5">
              <ArrowIcon />
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}


