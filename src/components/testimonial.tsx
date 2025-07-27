import React from "react";
import Image from "next/image";
import { InfiniteSlider } from "./infinite-slider";

// Testimonial data array
const testimonials = [
  {
    id: 1,
    text: "I started with just one bundle of DeCharge Minis, mostly out of curiosity. We installed them near a college campus where there's always EV traffic.",
    name: "Cornrad liakksis",
    role: "Student",
  },
  {
    id: 2,
    text: "The rewards system is incredible! I've earned more from my investments than I ever expected. LifeFi makes investing feel accessible and profitable.",
    name: "Sarah Chen",
    role: "Investor",
  },
  {
    id: 3,
    text: "LifeFi's platform is revolutionary. The combination of traditional investing with crypto rewards is exactly what the market needed.",
    name: "Marcus Johnson",
    role: "Trader",
  },
  {
    id: 4,
    text: "Finally, a platform that bridges the gap between traditional finance and crypto. The rewards are real and the interface is intuitive.",
    name: "Elena Rodriguez",
    role: "Financial Advisor",
  },
  {
    id: 5,
    text: "The airdrop rewards are fantastic! I've been using LifeFi for just a few months and already earned significant returns through their reward system.",
    name: "David Kim",
    role: "Crypto Enthusiast",
  },
  {
    id: 6,
    text: "As someone new to investing, LifeFi made it so easy to get started. The rewards are a great incentive to learn and grow my portfolio.",
    name: "Alex Thompson",
    role: "New Investor",
  },
  {
    id: 7,
    text: "I started with just one bundle of DeCharge Minis, mostly out of curiosity. We installed them near a college campus where there's always EV traffic.",
    name: "Cornrad liakksis",
    role: "Student",
  },
  {
    id: 8,
    text: "The rewards system is incredible! I've earned more from my investments than I ever expected. LifeFi makes investing feel accessible and profitable.",
    name: "Sarah Chen",
    role: "Investor",
  },
  {
    id: 9,
    text: "LifeFi's platform is revolutionary. The combination of traditional investing with crypto rewards is exactly what the market needed.",
    name: "Marcus Johnson",
    role: "Trader",
  },
  {
    id: 10,
    text: "Finally, a platform that bridges the gap between traditional finance and crypto. The rewards are real and the interface is intuitive.",
    name: "Elena Rodriguez",
    role: "Financial Advisor",
  },
  {
    id: 11,
    text: "The airdrop rewards are fantastic! I've been using LifeFi for just a few months and already earned significant returns through their reward system.",
    name: "David Kim",
    role: "Crypto Enthusiast",
  },
  {
    id: 12,
    text: "As someone new to investing, LifeFi made it so easy to get started. The rewards are a great incentive to learn and grow my portfolio.",
    name: "Alex Thompson",
    role: "New Investor",
  },
];

// Helper function to render a testimonial card
const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div className=" w-full ]">
    <div className="p-[23px] bg-[#0E121B] flex flex-col gap-[26px] rounded-[14px] w-full">
      <p className="text-base leading-[24px] font-[family-name:var(--font-geist)] font-medium text-white break-words">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-[9px]">
        <Image src="/avatar.svg" alt="avatar" width={47} height={47} />
        <div className="flex flex-col gap-[1px]">
          <p className="text-white text-[20px] leading-[28px] font-[family-name:var(--font-geist) tracking-[-0.76px] font-medium">
            {testimonial.name}
          </p>
          <p className="text-[#525866] text-base leading-[24px] font-[family-name:var(--font-geist)] tracking-[-0.334px] font-medium">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function Trusted() {
  return (
    <section className="py-24 font-[family-name:var(--font-fig-tree)] px-[60px]">
      <div className="@container mx-auto max-w-[1440px] ">
        <h2 className="text-white text-[56px] leading-[56px] tracking-[-1.68px] font-[family-name:var(--font-sora)] text-center text-shadow-[0_0_0_2px_rgba(255,255,255,0.04)] mb-16">
          Trusted by the Future
        </h2>

        <div className="relative overflow-hidden">
          {/* Gradient blur overlay */}

          <div className="grid grid-cols-3 gap-[48px] mt-[28px] relative z-0">
            {/* Column 1 */}
            <div className="col-span-1">
              <InfiniteSlider
                direction="vertical"
                speed={50}
                className="h-[677px]"
              >
                {testimonials.slice(0, 2).map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </InfiniteSlider>
            </div>

            {/* Column 2 */}
            <div className="col-span-1">
              <InfiniteSlider
                direction="vertical"
                speed={70}
                className="h-[677px]"
              >
                {testimonials.slice(2, 4).map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </InfiniteSlider>
            </div>

            {/* Column 3 */}
            <div className="col-span-1">
              <InfiniteSlider
                direction="vertical"
                speed={60}
                className="h-[677px]"
              >
                {testimonials.slice(4, 6).map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </InfiniteSlider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
