import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Footer from "./footer";

export default function CTA() {
  return (
    <div className="pt-[96px] max-w-[1440px] mx-auto relative">
      <div className="absolute inset-0 bg-[url('/stars.svg')]  pointer-events-none" />
      <div className="h-[588px] cta-bg rounded-[40px] relative z-[100] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/cta.svg')]  pointer-events-none" />
        <div className="relative z-[100] flex flex-col items-center justify-center">
          <h2 className="text-white text-[56px] leading-[56px] tracking-[-1.68px] font-[family-name:var(--font-sora)] text-shadow-[0_0_0_2px_rgba(255,255,255,0.04)]">
            Ready to Start Earning?
          </h2>
          <p className="text-white/80 text-[16px] leading-[23px] font-[family-name:var(--font-fig-tree)]  mt-[1rem] text-center">
            Don&apos;t just walk through life — earn from it. <br /> Join
            thousands already on the LifeFi waitlist. Your steps could be worth
            more than you think.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <div className="w-[300px] h-[40px] rounded-[10px] border border-white/20 bg-white/10 shadow-sm backdrop-blur-[20px]">
              <input
                type="text"
                placeholder="Enter  email"
                className="w-full h-full  border-none bg-transparent outline-none text-white px-3 font-[family-name:var(--font-inter)] placeholder:text-white"
              />
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="#">
                <span>Join waitlist</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
