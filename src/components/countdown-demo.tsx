"use client";

import React, { useState } from "react";
import Countdown from "./coundown";

export default function CountdownDemo() {
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [title, setTitle] = useState("Life");
  const [subtitle, setSubtitle] = useState("starts in");

  const presetTimes = [
    { label: "1 Minute", hours: 0, minutes: 1, seconds: 0 },
    { label: "5 Minutes", hours: 0, minutes: 5, seconds: 0 },
    { label: "1 Hour", hours: 1, minutes: 0, seconds: 0 },
    { label: "2 Hours", hours: 2, minutes: 0, seconds: 0 },
    { label: "12 Hours", hours: 12, minutes: 0, seconds: 0 },
    { label: "24 Hours", hours: 24, minutes: 0, seconds: 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Controls */}
      <div className="fixed top-4 left-4 z-50 bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 text-white">
        <h3 className="text-lg font-bold mb-4">Countdown Controls</h3>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-1 bg-gray-700 rounded border border-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subtitle:</label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full px-3 py-1 bg-gray-700 rounded border border-gray-600 text-white"
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-sm font-medium mb-1">Hours:</label>
              <input
                type="number"
                min="0"
                max="99"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-1 bg-gray-700 rounded border border-gray-600 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Minutes:</label>
              <input
                type="number"
                min="0"
                max="59"
                value={minutes}
                onChange={(e) => setMinutes(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-1 bg-gray-700 rounded border border-gray-600 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Seconds:</label>
              <input
                type="number"
                min="0"
                max="59"
                value={seconds}
                onChange={(e) => setSeconds(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-1 bg-gray-700 rounded border border-gray-600 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Preset Times:
            </label>
            <div className="space-y-1">
              {presetTimes.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => {
                    setHours(preset.hours);
                    setMinutes(preset.minutes);
                    setSeconds(preset.seconds);
                  }}
                  className="block w-full text-left px-2 py-1 text-sm bg-gray-700 hover:bg-gray-600 rounded"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Countdown Display */}
      <Countdown
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        title={title}
        subtitle={subtitle}
      />
    </div>
  );
}
