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
//   title = "Life",
//   subtitle = "starts in",
}: CountdownProps) {
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
    <div
      className=" h-[677px] bg-[#2547D0] flex items-center justify-center w-full"
    >
      {/* Countdown Box */}
      <div
        style={{
          width: "579px",
          height: "270px",
          backgroundColor: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            fontSize: "6rem",
            fontFamily: "monospace",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {formatNumber(timeLeft.hours)} : {formatNumber(timeLeft.minutes)} :{" "}
          {formatNumber(timeLeft.seconds)}
        </div>
      </div>
    </div>
  );
}
