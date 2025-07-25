import React from "react";
import { HeroHeader } from "./navbar";

import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className=" w-full  ">
      <HeroHeader />
      <section className=" relative md:h-[982px] md:px-[60px] md:mt-0 mt-[72px] w-full flex items-center bg-[#010106] pb-[64px]">
        <video
          src="hero.mp4"
          className="md:block hidden absolute right-0 top-0 h-full w-full object-cover z-10"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          preload="metadata"
        />
        <div className="max-w-[1440px] mx-auto flex flex-col md:pt-0 pt-[64px] md:justify-end md:items-start items-center w-full h-full z-20 relative md:px-0 px-5">
          <div className="">
            <h1 className=" text-bg text-[72px] leading-[72px] tracking-[-2.88px] font-[family-name:var(--font-sora)] md:text-left text-center">
              Earn While
              <br /> You Live
            </h1>
          </div>
          <p className=" text-white leading-6 tracking-[0.27px] font-[family-name:var(--font-fig-tree)] md:text-[18px] text-[20px] mt-4 md:text-left text-center">
            Join the LifeFi revolution - monetize your real-world data.
          </p>

          <div className="flex w-full  md:items-start items-center md:justify-start justify-center flex-row gap-[18px] mt-8">
            <Button asChild variant="default" size="sm">
              <Link href="#">
                <span>Get Started</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
