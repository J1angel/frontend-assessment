import { AdviceSection } from "@/components/sections/AdviceSection";
import { FacialAnalysisSection } from "@/components/sections/FacialAnalysisSection";
import { FaqsSection } from "@/components/sections/FaqsSection";
import { ResearchSection } from "@/components/sections/ResearchSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <AdviceSection />
      <FacialAnalysisSection />
      <div className="hidden border-b border-[#F2F2F2] lg:block">
        <div className="mx-auto h-[120px] w-[1360px] border-x border-[#F2F2F2]" />
      </div>
      <FaqsSection />
      <div className="hidden border-b border-[#F2F2F2] lg:block">
        <div className="mx-auto h-[120px] w-[1360px] border-x border-[#F2F2F2]" />
      </div>
      <ResearchSection />
    </main>
  );
}
