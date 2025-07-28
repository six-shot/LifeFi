"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Shield, Users, Eye, Heart } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface Feature {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: {
    title: string;
    description: string[];
  };
}

const features: Feature[] = [
  {
    id: "privacy",
    title: "Privacy-First",
    icon: <Shield className="w-6 h-6" />,
    content: {
      title: "Privacy-First",
      description: [
        "You're Always In Control Of What You Share, How It's Used, And Who Can See It. You Can Revoke Permissions, Delete Your Data, Or Export It At Any Time — No Hidden Settings, No Dark Patterns.",
        "We Don't Just Say 'Privacy-First' — It's Baked Into Our Infrastructure, Enforced By Our DAO Governance Model, And Upheld By Transparent, Open-Source Smart Contracts.",
      ],
    },
  },
  {
    id: "dao",
    title: "DAO-Powered",
    icon: <Users className="w-6 h-6" />,
    content: {
      title: "DAO-Powered",
      description: [
        "Our platform is governed by a decentralized autonomous organization (DAO), ensuring that all decisions are made transparently and democratically by the community.",
        "Every user has a voice in shaping the future of LifeFi, from feature updates to governance policies, creating a truly community-driven financial ecosystem.",
      ],
    },
  },
  {
    id: "audited",
    title: "Audited & Transparent",
    icon: <Eye className="w-6 h-6" />,
    content: {
      title: "Audited & Transparent",
      description: [
        "All our smart contracts undergo rigorous security audits by leading blockchain security firms, ensuring the highest standards of safety and reliability.",
        "Complete transparency in all operations - from code to transactions, everything is open source and verifiable on the blockchain.",
      ],
    },
  },
  {
    id: "real-life",
    title: "Built For Real Life",
    icon: <Heart className="w-6 h-6" />,
    content: {
      title: "Built For Real Life",
      description: [
        "LifeFi is designed for everyday people, not just crypto enthusiasts. Our intuitive interface makes complex financial tools accessible to everyone.",
        "We focus on real-world use cases, helping you save, invest, and grow your wealth with tools that actually work in your daily life.",
      ],
    },
  },
];

export default function WhyLifeFi() {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[60px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight sm:leading-tight md:leading-tight lg:leading-[56px] tracking-[-1.68px] font-[family-name:var(--font-sora)] text-center text-shadow-[0_0_0_2px_rgba(255,255,255,0.04)] mb-8 sm:mb-12 md:mb-16">
          Why LifeFi?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-[48px]">
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-3 sm:gap-4">
              {features.map((feature) => (
                <div key={feature.id}>
                  <motion.button
                    onClick={() => setActiveTab(feature.id)}
                    className={`w-full rounded-2xl sm:rounded-3xl lg:rounded-[40px] text-left transition-colors border border-[rgba(255,255,255,0.06)] duration-200 ${
                      activeTab === feature.id
                        ? "h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:h-[399px] bg-[#0E121B] p-4 sm:p-5 lg:p-6"
                        : "hover:bg-[#0E121B] bg-[rgba(255,255,255,0.04)] backdrop-blur-[20px] h-16 sm:h-20 lg:h-[80px] px-4 sm:px-5 lg:px-6 cursor-pointer"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeTab === feature.id ? (
                      <div className="flex flex-col justify-between items-start h-full">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] rounded-full icon-1st flex items-center justify-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[40px] lg:h-[40px] flex items-center justify-center icon-2nd rounded-full">
                            <Image
                              src="/privacy.svg"
                              alt={feature.title}
                              width={26}
                              height={26}
                              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[26px] lg:h-[26px]"
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <h3
                            className={`font-semibold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-tight sm:leading-tight md:leading-tight lg:leading-[32px] font-[family-name:var(--font-sora)] tracking-[-0.96px] ${
                              activeTab === feature.id
                                ? "text-white"
                                : "text-white/80"
                            }`}
                          >
                            {feature.title}
                          </h3>
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm sm:text-base leading-relaxed sm:leading-[24px] font-[family-name:var(--font-fig-tree)] text-white tracking-[-0.32px] mt-3 sm:mt-4"
                          >
                            {feature.content.description[0]}
                          </motion.p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center h-full">
                        <h3
                          className={`font-semibold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-tight sm:leading-tight md:leading-tight lg:leading-[32px] font-[family-name:var(--font-sora)] tracking-[-0.96px] ${
                            activeTab === feature.id
                              ? "text-white"
                              : "text-white/80"
                          }`}
                        >
                          {feature.title}
                        </h3>
                      </div>
                    )}
                  </motion.button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {features.map(
                (feature) =>
                  activeTab === feature.id && (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="content-card h-full px-4 sm:px-6 md:px-8 lg:px-[34px] py-6 sm:py-8 md:py-10 lg:py-[44px] relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-none"
                    >
                      <Image
                        src="/coins.svg"
                        width={986}
                        height={372}
                        alt="coin"
                        className="absolute -bottom-[70px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[372px] -left-[1px] w-full opacity-50 lg:opacity-100"
                      />
                      <div className="relative z-10">
                        <div className="space-y-3 sm:space-y-4">
                          {feature.content.description.map(
                            (paragraph, index) => (
                              <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-white leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[46px] text-lg sm:text-xl md:text-2xl lg:text-[32px] font-semibold font-[family-name:var(--font-sora)]"
                              >
                                {paragraph}
                              </motion.p>
                            )
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
