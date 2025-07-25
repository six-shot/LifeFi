"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

export default function IntroducingLife() {
  return (
    <div className="h-[958px] intro-text flex flex-col gap-10 justify-center items-center">
      <motion.div
        className="w-[536px] h-[536px] ring-1 flex justify-center items-center"
        animate={{
          scale: [0.4, 1],
          opacity: [0.3, 1],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <motion.div
          className="w-[407px] h-[407px] ring-1 flex justify-center items-center"
          animate={{
            scale: [0.3, 1],
            opacity: [0.2, 1],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1.2,
          }}
        >
          <motion.div
            className="w-[184px] h-[184px] bg-white rounded-full flex justify-center items-center"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <Image src="/dollar.svg" alt="dollar" width={92} height={92} />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="flex flex-col items-center">
        <h3 className="text-[56px] text-white font-[family-name:var(--font-sora)] leading-[56px] font-semibold">
          Introducing $LIFE
        </h3>
        <p className="text-base mb-8 text-white/80 font-[family-name:var(--font-fig-tree)] mt-4 w-[704px] text-center">
          LifeFi Token ($LIFE) is a revolutionary cryptocurrency that rewards
          users for real-world data while maintaining complete privacy through
          zero-knowledge protocols.
        </p>
        <Button asChild variant="outline"  size="sm">
          <Link href="#">
            <span>Get Life</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
