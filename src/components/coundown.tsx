"use client";

import React, { useState, useEffect } from "react";

interface CountdownProps {
  title?: string;
  subtitle?: string;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export default function Countdown({
  hours: propHours,
  minutes: propMinutes,
  seconds: propSeconds,
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // If props are provided, use them instead of fetching from API
    if (
      propHours !== undefined ||
      propMinutes !== undefined ||
      propSeconds !== undefined
    ) {
      setTimeLeft({
        hours: propHours || 0,
        minutes: propMinutes || 0,
        seconds: propSeconds || 0,
      });
      return;
    }

    const fetchCountdown = async () => {
      try {
        const response = await fetch("/api/countdown");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTimeLeft({
          hours: data.hours || 0,
          minutes: data.minutes || 0,
          seconds: data.seconds || 0,
        });
      } catch (error) {
        console.error("Failed to fetch countdown:", error);
        // Set a default countdown if API fails
        setTimeLeft({ hours: 24, minutes: 0, seconds: 0 });
      }
    };

    // Fetch initial countdown immediately
    fetchCountdown();

    // Update every second
    const timer = setInterval(fetchCountdown, 1000);

    return () => clearInterval(timer);
  }, [propHours, propMinutes, propSeconds]);

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
              minWidth: "518px",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            <div className="w-[120px] text-center">
              {formatNumber(timeLeft.hours)}
            </div>
            <div className="w-[24px] text-center">:</div>
            <div className="w-[120px] text-center">
              {formatNumber(timeLeft.minutes)}
            </div>
            <div className="w-[24px] text-center">:</div>
            <div className="w-[120px] text-center">
              {formatNumber(timeLeft.seconds)}
            </div>
          </div>
        </div>
      </div>
      {/* Countdown Box */}
    </div>
  );
}
