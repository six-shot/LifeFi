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
    <div className="py-[96px] px-[60px]">
      <div className="md:px-0 px-5">
        <h2 className="text-white text-[56px] leading-[56px] tracking-[-1.68px] font-[family-name:var(--font-sora)] text-center text-shadow-[0_0_0_2px_rgba(255,255,255,0.04)] mb-16">
          Why LifeFi?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[48px] max-w-[1440px] mx-auto">
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-4">
              {features.map((feature) => (
                <div key={feature.id}>
                  <motion.button
                    onClick={() => setActiveTab(feature.id)}
                    className={`w-full rounded-[40px] text-left transition-colors  border border-[rgba(255,255,255,0.06)] duration-200 ${
                      activeTab === feature.id
                        ? "h-[399px]  bg-[#0E121B] p-6"
                        : "hover:bg-[#0E121B] bg-[rgba(255,255,255,0.04)] backdrop-blur-[20px] h-[80px] px-6 cursor-pointer"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeTab === feature.id ? (
                      <div className="flex flex-col justify-between items-start h-full">
                        <div className="w-[60px] h-[60px] rounded-full icon-1st flex items-center justify-center">
                          <div className="w-[40px] h-[40px] flex items-center justify-center icon-2nd rounded-full">
                            <Image
                              src="/privacy.svg"
                              alt={feature.title}
                              width={26}
                              height={26}
                            />
                          </div>
                        </div>
                        <div className="">
                          <h3
                            className={`font-semibold text-[24px] leading-[32px] font-[family-name:var(--font-sora)] tracking-[-0.96px] ${
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
                            className="text-base leading-[24px] font-[family-name:var(--font-fig-tree)] text-white tracking-[-0.32px] mt-4 "
                          >
                            {feature.content.description[0]}
                          </motion.p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center h-full">
                        <h3
                          className={`font-semibold text-[24px] leading-[32px] font-[family-name:var(--font-sora)] tracking-[-0.96px] ${
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

                  {/* {index < features.length - 1 && (
                    <div className="h-px bg-gray-600/50 my-2" />
                  )} */}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 ">
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
                      className="content-card h-full px-[34px] py-[44px]  relative overflow-hidden"
                    >
                      {" "}
                      <Image
                        src="/coins.svg"
                        width={986}
                        height={372}
                        alt="coin"
                        className="absolute -bottom-[70px] h-[372px] -left-[1px]  w-full"
                      />
                      <div className="relative z-10">
                        <div className="space-y-4">
                          {feature.content.description.map(
                            (paragraph, index) => (
                              <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-white leading-[46px] text-[32px] font-semibold font-[family-name:var(--font-sora)]"
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
