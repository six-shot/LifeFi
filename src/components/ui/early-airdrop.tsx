import React from "react";
import { Button } from "./button";
import Link from "next/link";

export default function EarlyAirdrop() {
  return (
    <div className="my-12 md:my-16 lg:my-[96px] relative px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('/stars.svg')] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto flex justify-center relative z-10">
        <div className="flex flex-col w-full max-w-[1068px]">
          <h2 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight sm:leading-tight md:leading-tight lg:leading-[56px] tracking-[-1.68px] font-[family-name:var(--font-sora)] text-shadow-[0_0_0_2px_rgba(255,255,255,0.04)] text-center sm:text-left">
            Early Bird Airdrop
          </h2>
          <p className="text-white text-sm sm:text-base text-[16px] leading-[23px] font-[family-name:var(--font-fig-tree)] mt-4 sm:mt-6 lg:mt-[1rem] text-center sm:text-left">
            Exclusive rewards for our first community members
          </p>
          <div className="flex items-center justify-center my-8 sm:my-12 md:my-16 lg:my-[64px] p-3 sm:p-4 md:p-6 bg-[#171A22] rounded-2xl sm:rounded-3xl md:rounded-[56px]">
            <div className="relative w-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                disablePictureInPicture
                preload="metadata"
                src="airdrop.mp4"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-[507px] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[40px] object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="text-xs sm:text-sm"
                >
                  <Link href="#">
                    <span>Join waitlist</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end">
            <p className="text-white/80 font-medium text-base sm:text-lg md:text-xl lg:text-[24px] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[32px] font-[family-name:var(--font-fig-tree)] w-full sm:w-auto sm:max-w-[412px] text-center sm:text-left">
              Join the waitlist with your email Share your referral link with
              friends Earn bonus tokens for each successful referral Claim your
              rewards at launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
