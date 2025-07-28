import React from "react";
import { HeroHeader } from "./navbar";

import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className=" w-full  ">
      <HeroHeader />
      <section className=" relative md:h-[982px] h-screen md:px-[60px] pt-[64px] w-full flex items-center bg-[#010106] pb-[64px]">
        <video
          src="hero.mp4"
          className=" absolute right-0 top-0 h-full w-full object-cover z-10"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          preload="auto"
          {...{
            "webkit-playsinline": "true",
            "webkit-video-playable-inline": "true",
            "x5-playsinline": "true",
            "x5-video-player-type": "h5",
            "x5-video-player-fullscreen": "false",
          }}
        />
        <div className="max-w-[1440px] mx-auto flex flex-col md:pt-0 pt-[64px] md:justify-end items-start  w-full h-full z-20 relative md:px-0 px-5">
          <div className="">
            <h1 className=" text-bg md:text-[72px] text-[40px] md:leading-[72px] leading-[40px] md:tracking-[-2.88px] tracking-[-1.6px] font-[family-name:var(--font-sora)]">
              Earn While
              <br /> You Live
            </h1>
          </div>
          <p className=" text-white leading-6 tracking-[0.27px] font-[family-name:var(--font-fig-tree)] md:text-[18px] text-sm mt-4 text-left ">
            Join the LifeFi revolution - <br /> monetize your real-world data.
          </p>

          <div className="flex w-full  md:items-start items-center md:justify-start  flex-row gap-[18px] mt-8">
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
