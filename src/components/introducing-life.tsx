"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

export default function IntroducingLife() {
  return (
    <div className="min-h-[600px] md:h-[958px] intro-text flex flex-col gap-6 md:gap-10 justify-center items-center px-4 md:px-0">
      <motion.div
        className="w-[280px] h-[280px] md:w-[536px] md:h-[536px] ring-1 flex justify-center items-center"
        animate={{
          scale: [0.4, 1],
          opacity: [0.3, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <motion.div
          className="w-[213px] h-[213px] md:w-[407px] md:h-[407px] ring-1 flex justify-center items-center"
          animate={{
            scale: [0.3, 1],
            opacity: [0.2, 1],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        >
          <motion.div
            className="w-[96px] h-[96px] md:w-[184px] md:h-[184px] bg-white rounded-full flex justify-center items-center"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <Image
              src="/dollar.svg"
              alt="dollar"
              width={48}
              height={48}
              className="md:w-[92px] md:h-[92px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="flex flex-col items-center">
        <h3 className="text-[32px] md:text-[56px] text-white font-[family-name:var(--font-sora)] leading-[36px] md:leading-[56px] font-semibold text-center">
          Introducing $LIFE
        </h3>
        <p className="text-sm md:text-base mb-6 md:mb-8 text-white/80 font-[family-name:var(--font-fig-tree)] mt-4 w-full max-w-[704px] text-center px-4 md:px-0">
          LifeFi Token ($LIFE) is a revolutionary cryptocurrency that rewards
          users for real-world data while maintaining complete privacy through
          zero-knowledge protocols.
        </p>
        <Button asChild variant="outline" size="sm">
          <Link href="#">
            <span>Get Life</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
