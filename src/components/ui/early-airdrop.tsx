import React from "react";
import { Button } from "./button";
import Link from "next/link";

export default function EarlyAirdrop() {
  return (
    <div className="my-[96px] relative">
      <div className="absolute inset-0 bg-[url('/stars.svg')]  pointer-events-none" />

      <div className="max-w-[1440px] mx-auto flex justify-center relative z-10">
        <div className="flex flex-col  w-[1068px]">
          <h2 className=" text-bg text-[56px] leading-[56px] tracking-[-1.68px] font-[family-name:var(--font-sora)] text-shadow-[0_0_0_2px_rgba(255,255,255,0.04)]">
            How it works
          </h2>
          <p className="text-white text-[16px] leading-[23px] font-[family-name:var(--font-fig-tree)]  mt-[1rem]">
            Exclusive rewards for our first community members
          </p>
          <div className="flex items-center justify-center my-[64px] p-6 bg-[#171A22] rounded-[56px]">
            <div className="relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                disablePictureInPicture
                preload="metadata"
                src="airdrop.mp4"
                className="w-[1068px] h-[507px] rounded-[40px] object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Button asChild variant="outline" size="sm">
                  <Link href="#">
                    <span>Join waitlist</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <p className="text-white/80 font-medium text-[24px] leading-[32px] font-[family-name:var(--font-fig-tree)] w-[412px]">
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
