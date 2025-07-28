import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Footer from "./footer";

export default function CTA() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-[60px]">
      <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-[96px] max-w-[1440px] mx-auto relative">
        <div className="absolute inset-0 bg-[url('/stars.svg')]  pointer-events-none" />
        <div className="h-[400px] sm:h-[450px] md:h-[500px] lg:h-[588px] cta-bg rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] relative z-[100] flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/cta.svg')]  pointer-events-none" />
          <div className="relative z-[100] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
            <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] sm:leading-[1.1] md:leading-[1.1] lg:leading-[56px] tracking-[-0.96px] sm:tracking-[-1.2px] md:tracking-[-1.44px] lg:tracking-[-1.68px] font-[family-name:var(--font-sora)] text-shadow-[0_0_0_2px_rgba(255,255,255,0.04)] text-center">
              Ready to Start Earning?
            </h2>
            <p className="text-white/80 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.4] sm:leading-[1.4] md:leading-[23px] font-[family-name:var(--font-fig-tree)] mt-4 sm:mt-6 md:mt-[1rem] text-center max-w-[600px]">
              Don&apos;t just walk through life — earn from it.{" "}
              <br className="hidden sm:block" /> Join thousands already on the
              LifeFi waitlist. Your steps could be worth more than you think.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-[500px]">
              <div className="w-full sm:w-[300px] h-[40px] rounded-[10px] border border-white/20 bg-white/10 shadow-sm backdrop-blur-[20px]">
                <input
                  type="text"
                  placeholder="Enter  email"
                  className="w-full h-full  border-none bg-transparent outline-none text-white px-3 font-[family-name:var(--font-inter)] placeholder:text-white text-[14px] sm:text-[16px]"
                />
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full sm:w-auto"
              >
                <Link href="#">
                  <span>Join waitlist</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
