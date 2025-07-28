"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Features() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false },
    transition: { duration: 0.5, ease: "easeOut" as const },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false },
    transition: { duration: 0.5, ease: "easeOut" as const },
  };

  const cards = [
    {
      title: "Live Your Life — We'll Track It Securely",
      description:
        "No complicated setup. Just download the LifeFi app, connect your phone, smartwatch, or fitness tracker, and go about your day — walking, running, working, living. We'll handle the tracking.",
      image: "/1.svg",
    },
    {
      title: "Earn $LIFE Tokens for Staying Active",
      description:
        "Stay active and get rewarded. With every step, workout, or activity, you accumulate $LIFE tokens effortlessly through your connected devices. Healthy habits just became profitable.",
      image: "/2.svg",
    },
    {
      title: "Claim, Save, Spend, or Trade",
      description:
        "Once you earn your $LIFE tokens, you can claim daily rewards with a single tap, save them in your wallet, or let them grow. Spend within the LifeFi ecosystem, unlock premium features, or enjoy discounts from our partners.",
      image: "/3.svg",
    },
  ];

  return (
    <div
      id="feature"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 overflow-hidden"
    >
      <h2 className="text-bg text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[56px] tracking-[-0.5px] sm:tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-1.68px] font-[family-name:var(--font-sora)] text-center text-shadow-[0_0_0_2px_rgba(255,255,255,0.04)]">
        How it works
      </h2>

      <div className="max-w-[1440px] mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-[58px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Section */}
              <motion.div
                {...fadeInLeft}
                className="w-full lg:w-1/2 flex gap-2 items-start flex-col z-[3] relative text-white order-2 lg:order-1"
              >
                <div className="w-full max-w-full lg:max-w-[472px] mx-auto lg:mx-0">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[37px] md:h-[37px] rounded-[10px] sm:rounded-[12px] md:rounded-[16px] border border-white/10 shadow-[0_0_0_2px_rgba(255,255,255,0.04)] flex items-center justify-center text-xs sm:text-sm font-[family-name:var(--font-sora)]">
                      0{index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[40px] font-[family-name:var(--font-sora)] w-full mt-3 sm:mt-4 md:mt-6">
                    {card.title}
                  </h3>
                  <p className="w-full mt-2 sm:mt-3 md:mt-4 lg:mt-[1rem] text-sm sm:text-base leading-relaxed sm:leading-[23px] font-[family-name:var(--font-fig-tree)]">
                    {card.description}
                  </p>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                {...fadeInRight}
                className="w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[660px] h-auto  p-[0.5px] relative order-1 lg:order-2"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={660}
                  height={479}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
