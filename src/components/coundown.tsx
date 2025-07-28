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
    <div className="min-h-[400px] sm:h-[500px] md:h-[600px] lg:h-[677px] bg-[#2547D0] flex items-center justify-center w-full relative px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-[657px] h-auto min-h-[200px] sm:h-[250px] md:h-[280px] lg:h-[306px] relative flex items-center justify-center">
        <h2 className="text-[#6895ff] absolute top-0 transform -translate-y-1/2 text-[60px] sm:text-[80px] md:text-[120px] lg:text-[156px] font-[family-name:var(--font-sora)] z-[1] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4px] lg:tracking-[-4.68px] font-semibold text-center">
          LiFeFI
        </h2>
        <h2 className="text-[#6895ff] absolute -bottom-[120px] sm:-bottom-[160px] md:-bottom-[200px] lg:-bottom-[280px] transform -translate-y-1/2 text-[60px] sm:text-[80px] md:text-[120px] lg:text-[156px] font-[family-name:var(--font-sora)] z-[1] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4px] lg:tracking-[-4.68px] font-semibold text-center">
          in
        </h2>
        <h2 className="text-[#6895ff] absolute top-1/2 transform -translate-y-1/2 text-[60px] sm:text-[80px] md:text-[120px] lg:text-[156px] font-[family-name:var(--font-sora)] z-[1] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4px] lg:tracking-[-4.68px] font-semibold text-center">
          Launches
        </h2>
        <div className="absolute right-0 sm:right-[-35px] md:right-[-50px] lg:right-[-70px] top-1/2 transform -translate-y-1/2 z-[2] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-auto lg:h-auto">
          <img
            src="/glow.svg"
            alt="CTA Background"
            className="w-full h-full object-contain z-[-1]"
          />
        </div>

        <div className="countdown-box w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[659px] h-[150px] sm:h-[180px] md:h-[220px] lg:h-[278px] px-[20px] sm:px-[25px] md:px-[30px] lg:px-[37px] flex items-center justify-center relative z-10">
          <div
            className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[112px] font-[family-name:var(--font-inter)] countdown-text relative z-[1000] flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 items-center"
            style={{
              minWidth: "auto",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            <div className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] text-center">
              {formatNumber(timeLeft.hours)}
            </div>
            <div className="w-[12px] sm:w-[16px] md:w-[20px] lg:w-[24px] text-center">
              :
            </div>
            <div className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] text-center">
              {formatNumber(timeLeft.minutes)}
            </div>
            <div className="w-[12px] sm:w-[16px] md:w-[20px] lg:w-[24px] text-center">
              :
            </div>
            <div className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] text-center">
              {formatNumber(timeLeft.seconds)}
            </div>
          </div>
        </div>
      </div>
      {/* Countdown Box */}
    </div>
  );
}
