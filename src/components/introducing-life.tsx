"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function IntroducingLife() {
  return (
    <div className="h-[958px] intro-text flex justify-center items-center">
      <motion.div
        className="w-[536px] h-[536px] ring-1 flex justify-center items-center"
        animate={{
          scale: [0.1, 1],
          opacity: [0, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <motion.div
          className="w-[407px] h-[407px] ring-1 flex justify-center items-center"
          animate={{
            scale: [0.05, 1],
            opacity: [0, 1],
          }}
          transition={{
            duration: 4,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.8,
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
    </div>
  );
}
