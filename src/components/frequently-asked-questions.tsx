"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function FrequentlyAskedQuestions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
 const data = [
   {
     title: "What is Stockbits?",
     answer:
       "Stockbits is a DeFi platform that lets you stake crypto assets and earn dividends in the form of tokenized stocks—digital versions of real-world equities like Apple, Tesla, or Microsoft.",
   },
   {
     title: "How are rewards distributed?",
     answer:
       "When you stake crypto in a Stockbits pool, the platform converts pooled assets into tokenized stocks via regulated providers. These are then distributed to users based on their stake size and duration.",
   },
   {
     title: "Which crypto assets can I stake?",
     answer:
       "You can stake stablecoins like USDC, USDT, DAI, or major tokens like ETH and wBTC, depending on the pool. Each pool may support different assets.",
   },
   {
     title: "Are the tokenized stocks real?",
     answer:
       "Yes. The rewards you receive are backed by real or synthetically collateralized equities via regulated real-world asset (RWA) providers. These tokens represent fractional ownership in public companies.",
   },
   {
     title: "Can I withdraw my crypto and rewards anytime?",
     answer:
       "Yes, unless the pool has a lock-in period. Your principal can be withdrawn, and any earned tokenized stock rewards remain claimable, tradable, or reinvestable.",
   },
 ];


  return (
    <div>
      <div className="max-w-[1440px] mx-auto  md:pt-[96px] pt-[38px] md:pb-[256px] pb-[50px] md:px-[60px] px-5">
        <div className="flex  justify-start  items-center ">
          <h2 className="text-[#0E121B] md:text-[72px] text-[36px] tracking-[-1.44px] md:leading-[90px] leading-[50px] font-[family-name:var(--font-cal-sans)]  ">
            Frequently <br className="md:block hidden" /> Asked Questions
          </h2>
        </div>

        <div className="md:mt-[64px] mt-[28px] flex justify-center relative ">
          <div className="  flex flex-col  w-full gap-4 ">
            {data.map((item, index) => (
              <Accordion
                key={index}
                index={index}
                title={item.title}
                answer={item.answer}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
const Accordion = ({
  title,
  answer,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  title: string;
  answer: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) => {
  const isOpen = hoveredIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
      onClick={() => setHoveredIndex(isOpen ? null : index)}
      className="relative p-[1px] overflow-hidden cursor-pointer font-[family-name:var(--font-fig-tree)]"
    >
      <div className="stroke-rectangle absolute inset-0"></div>
      {isOpen && <div className="stroke-rectangle is-gradient"></div>}
      <div className=" card-bg border-b border-[#EAECF0]  pt-2.5 ">
        <motion.button className="flex justify-between items-center w-full mb-[24px] ">
          <span className="text-[18px] text-[#061833] text-left font-medium md:w-full w-[90%]">
            {title}
          </span>
          <div className="w-6 h-6 border-[2px] border-[#667085] rounded-full flex justify-center items-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="ml-[1px] mt-[1px]"
            >
              {/* Vertical line (always present, animates opacity) */}
              <motion.path
                d="M12 5V19"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 1 }}
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              {/* Horizontal line (always present) */}
              <motion.path
                d="M5 12H19"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className=" text-[16px] text-[#667085] mb-[24px] md:w-[1264px]  ">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
