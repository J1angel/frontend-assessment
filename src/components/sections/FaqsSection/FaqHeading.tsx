import { faqHeadingData } from "@/lib/faqs/faqHeadingData";

export function FaqHeading() {
  const { id, title, titleAccent } = faqHeadingData;

  return (
    <header
      id={id}
      className="flex w-full flex-col items-center gap-4 px-6 text-center md:max-lg:px-2 lg:px-6 xl:px-12"
    >
      <div className="flex flex-col items-center self-stretch bg-white text-[10px] antialiased">
            <div className="flex w-full flex-col items-center gap-4 px-40">
              <div className="flex px-10">
                <div className="w-full rounded-full border border-[#C7D1D54D] px-2 py-1 text-center xl:w-auto">
                  <span className="hidden font-zagma text-xs font-normal leading-[14px] tracking-[-0.05px] text-[#9AAEB5] xl:inline">
                    YOUR QUESTIONS
                  </span>
                  <span className="font-zagma text-xs font-normal leading-[14px] tracking-[-0.05px] text-[#9AAEB5] xl:hidden">
                    INTRODUCING
                  </span>
                </div>
              </div>
            </div>
      </div>
      <div className="flex w-full max-w-[1360px] flex-col items-center md:max-lg:w-[280px]">
        <h2 className="font-pp-neue text-[32px] font-normal leading-[36px] tracking-[-1.5px] text-qoves-dark xs:text-[36px] xs:leading-[40px] md:max-lg:text-[40px] md:max-lg:leading-[48px] lg:text-[48px] lg:leading-[56px] lg:tracking-[-0.072rem]">
          {title}{" "}
          <strong className="font-normal text-qoves-muted">{titleAccent}</strong>
        </h2>
      </div>
      <div className="lg:max-xl:w-[588px] xs:w-[320px]">
        <span className="font-pp-neue text-[16px] font-normal leading-6 text-[#515255] xs:max-lg:text-[13px] md:max-lg:leading-[20px] lg:text-[16px] lg:leading-6">
          If you have any further questions, please use the chat box in the bottom right or contact us by email at hello@qoves.com
        </span>
      </div>
    </header>
  );
}
