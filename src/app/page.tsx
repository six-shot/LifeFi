import Features from "@/components/feautures-1";
// import Footer from "@/components/footer";

import HeroSection from "@/components/hero-section";

import IntroducingLife from "@/components/introducing-life";
import Trusted from "@/components/testimonial";
import EarlyAirdrop from "@/components/ui/early-airdrop";
import WhyLifeFi from "@/components/why-life-fi";
import Countdown from "@/components/coundown";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <IntroducingLife />
      <Features />
      <EarlyAirdrop />
      <WhyLifeFi />
      <Trusted />
      <Countdown
        hours={12}
        minutes={30}
        seconds={45}
        title="Launch"
        subtitle="begins in"
      />
      <CTA/>
    </div>
  );
}
