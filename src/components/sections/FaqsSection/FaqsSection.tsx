import { faqHeadingData } from "@/lib/faqs/faqHeadingData";
import { FaqAccordion } from "./FaqAccordion";
import { FaqHeading } from "./FaqHeading";

export function FaqsSection() {
  return (
    <section
      id="faq"
      aria-labelledby={faqHeadingData.id}
    >
      <div className="mx-auto w-full max-w-[1360px] border-[#F2F2F2] max-md:border-x-0 md:max-lg:w-[736px] md:max-lg:border-x lg:border-x">
        <div className="px-0 py-10 md:max-lg:px-6 xs:max-lg:pt-[80px] lg:px-10 lg:py-14 xl:px-12 xl:py-16">
          <FaqHeading />
          <div className="mx-auto mt-8 w-[343px] md:mt-10 md:max-lg:w-[688px] lg:mt-12 lg:w-[1080px]">
            <FaqAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
