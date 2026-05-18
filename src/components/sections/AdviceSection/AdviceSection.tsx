import { BeforeAfterBlock } from "./BeforeAfterBlock";
import { Actions } from "./Actions";

export function AdviceSection() {
  return (
    <section className="hidden lg:block">
      <div className="border-y border-[#F2F2F2]">
        <div className="mx-auto w-[1360px] border-x border-[#F2F2F2] py-10">
          <div className="flex flex-col items-center self-stretch bg-white text-[10px] antialiased">
            <div className="flex w-full flex-col items-center gap-4 px-40">
              <div className="flex px-10">
                <div className="w-full rounded-full border border-[#C7D1D54D] px-2 py-1 text-center xl:w-auto">
                  <span className="hidden font-zagma text-xs font-normal leading-[14px] tracking-[-0.05px] text-[#9AAEB5] xl:inline">
                    PERSONALIZED ANALYSIS
                  </span>
                  <span className="font-zagma text-xs font-normal leading-[14px] tracking-[-0.05px] text-[#9AAEB5] xl:hidden">
                    INTRODUCING
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 self-stretch">
                <span className="font-pp-neue text-[48px] font-normal leading-6 tracking-[-0.36px] text-[#233137]">
                  Get your personalised
                </span>
                <span className="whitespace-pre-line font-pp-neue text-[48px] font-normal leading-[64px] tracking-[-0.112rem] text-[#9AAEB5]">
                  <strong className="font-normal">
                    Qoves<span className="xl:hidden">™</span>
                  </strong>{" "}
                  plan
                </span>
              </div>

              <div className="flex items-center justify-center self-stretch text-center">
                <span className="w-[408px] font-pp-neue text-base font-normal leading-6 text-[#515255]">
                  Understand your facial features and start your glow-up today with a proven action plan,
                  no plastic surgery needed.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-[#F2F2F2]">
        <div className="mx-auto w-[1360px] border-x border-[#F2F2F2]">
          <BeforeAfterBlock />
        </div>
      </div>

      <div className="border-b border-[#F2F2F2]">
        <div className="mx-auto w-[1360px] border-x border-[#F2F2F2]">
          <Actions />
        </div>
      </div>

      <div className="border-b border-[#F2F2F2]">
        <div className="mx-auto h-[120px] w-[1360px] border-x border-[#F2F2F2]" />
      </div>
    </section>
  );
}
