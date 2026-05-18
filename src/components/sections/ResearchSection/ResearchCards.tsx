import Image from "next/image";
import { researchCards } from "@/lib/research/researchCardsData";

export function ResearchCards() {
  return (
    <div className="relative z-10 ml-auto xl:mx-auto lg:max-xl:mx-auto flex w-full max-w-[1360px] flex-col items-center pl-4 max-md:border-x-0 md:max-lg:w-[736px] md:max-lg:border-x  md:max-lg:border-[#F2F2F2]/20 md:max-lg:pr-0 lg:items-start lg:border-x lg:border-[#F2F2F2]/20 lg:max-xl:pl-0 xl:pl-0 xl:border-white/20 xl:pr-4">
      <div className="w-full ml-auto pr-0 md:border-t md:border-[#F2F2F2]/20">
        <div className="w-full max-lg:overflow-x-auto pr-0 lg:overflow-visible">
          <div className="flex w-max flex-row pr-0 lg:w-full">
            {researchCards.map((item, index) => (
              <div
                key={item.title}
                className={`flex shrink-0 flex-col py-[16px] md:w-[310px] max-lg:pl-4 lg:min-w-0 lg:flex-1 lg:basis-0 lg:pl-6 ${
                  index === researchCards.length - 1
                    ? "md:pr-0 max-lg:pr-0 lg:pr-0"
                    : "max-lg:pr-4 lg:pr-6"
                } ${index > 0 ? "md:border-l md:border-[#F2F2F2]/20" : ""}`}
              >
                <div className="flex h-[230px] w-[277px] flex-col items-start justify-between rounded-[16px] p-[16px] backdrop-blur-[32px] lg:max-xl:w-full xl:w-full">
                  <Image
                    src={item.image}
                    alt=""
                    width={120}
                    height={81}
                    className="h-[81px] w-[120px] shrink-0 object-contain"
                  />
                  <div className="flex w-full min-w-0 flex-col items-start">
                    <span className="mb-2 font-pp-neue text-[24px] font-normal leading-[28px] text-white">
                      {item.title}
                    </span>
                    <span className="font-pp-neue text-[14px] font-normal leading-[20px] text-white/50">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
