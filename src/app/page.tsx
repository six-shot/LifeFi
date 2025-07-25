import Features from "@/components/feautures-1";
import Feautures2 from "@/components/feautures-2";
import Footer from "@/components/footer";
import FrequentlyAskedQuestions from "@/components/frequently-asked-questions";
import HeroSection from "@/components/hero-section";
import HowToSave from "@/components/how-to-save";
import StartInvesting from "@/components/start-investing";
import RewardPoweredInvesting from "@/components/reward-powered-investing";
import IntroducingLife from "@/components/introducing-life";
export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <IntroducingLife/>
      {/* <Features />
      <Feautures2 />
      <HowToSave />
      <RewardPoweredInvesting />
      <div className="md:h-[184px] h-[70px]" />
      <FrequentlyAskedQuestions />
      <StartInvesting />
      <div className="h-[32px]" />
      <Footer /> */}
    
    </div>
  );
}
