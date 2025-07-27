"use client";

import React, { useState, useEffect } from "react";

interface CountdownProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
  title?: string;
  subtitle?: string;
}

export default function Countdown({
  hours = 0,
  minutes = 0,
  seconds = 0,
}: //   title = "Life",
//   subtitle = "starts in",
CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate total seconds from props
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    let remainingSeconds = totalSeconds;

    const calculateTimeLeft = () => {
      if (remainingSeconds > 0) {
        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;

        setTimeLeft({ hours, minutes, seconds });
        remainingSeconds--;
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className=" h-[677px] bg-[#2547D0] flex items-center justify-center w-full relative">
      <div className="w-[657px] h-[306px] relative flex items-center justify-center">
        <h2 className="text-[#6895ff] absolute top-0 transform -translate-y-1/2 text-[156px] font-[family-name:var(--font-sora)]  z-[1] tracking-[-4.68px] font-semibold">
          LiFeFI
        </h2>
        <h2 className="text-[#6895ff] absolute -bottom-[280px] transform -translate-y-1/2 text-[156px] font-[family-name:var(--font-sora)]  z-[1] tracking-[-4.68px] font-semibold">
          in
        </h2>
        <h2 className="text-[#6895ff] absolute top-1/2 transform -translate-y-1/2 text-[156px] font-[family-name:var(--font-sora)]  z-[1] tracking-[-4.68px] font-semibold">
          Launches
        </h2>
        <div className="absolute right-[-70px] top-1/2 transform -translate-y-1/2 z-[2] ">
          <img
            src="/glow.svg"
            alt="CTA Background"
            className="w-full h-full z-[-1]"
          />
        </div>

        <div className="countdown-box max-w-[659px] h-[278px] px-[37px] flex items-center justify-center relative z-10">
          <div
            className="text-[112px] font-[family-name:var(--font-inter)] countdown-text relative z-[1000] flex gap-6 items-center"
            style={{
              minWidth: "508px",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            <div className="w-[105px] ">{formatNumber(timeLeft.hours)}</div>
            <div className="">:</div>
            <div className="w-[105px]">{formatNumber(timeLeft.minutes)}</div>
            <div className="">:</div>
            <div className="w-[105px]">{formatNumber(timeLeft.seconds)}</div>
          </div>
        </div>
      </div>
      {/* Countdown Box */}
    </div>
  );
}
