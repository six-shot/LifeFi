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
    <div id="feature" className="py-[96px]">
      <h2 className=" text-bg text-[56px] leading-[56px] tracking-[-1.68px] font-[family-name:var(--font-sora)] text-center text-shadow-[0_0_0_2px_rgba(255,255,255,0.04)]">
        How it works
      </h2>

      <div className="max-w-[1440px] mx-auto mt-[6.5rem] overflow-hidden">
        <div className="lg:px-[2.5rem] flex flex-col gap-[58px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative flex md:flex-row flex-col items-center lg:gap-[5rem] md:gap-[2rem] gap-[3rem] ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Section */}
              <motion.div
                {...fadeInLeft}
                className="md:w-1/2 flex gap-2 items-start flex-col z-[3] relative text-white md:order-1"
              >
                <div className="w-[472px]">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[37px] h-[37px] rounded-[16px] border border-white/10 shadow-[0_0_0_2px_rgba(255,255,255,0.04)] flex items-center justify-center text-sm font-[family-name:var(--font-sora)]">
                      0{index + 1}
                    </div>
                  </div>
                  <h3 className="lg:text-[40px] text-[2.375rem] leading-[40px] font-[family-name:var(--font-sora)] w-full mt-6">
                    {card.title}
                  </h3>
                  <p className="w-full mt-[1rem] text-[16px] leading-[23px] font-[family-name:var(--font-fig-tree)]">
                    {card.description}
                  </p>
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                {...fadeInRight}
                className="w-[660px] h-[479px] p-[0.5px] relative"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={660}
                  height={479}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
