import { NextResponse } from "next/server";

// Set your launch time (same for everyone)
// 5 hours from now
const LAUNCH_TIME = Date.now() + 99 * 60 * 60 * 1000;

export async function GET() {
  try {
    const now = Date.now();
    const remaining = Math.max(0, LAUNCH_TIME - now);

    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    return NextResponse.json({
      hours,
      minutes,
      seconds,
      totalSeconds: Math.floor(remaining / 1000),
    });
  } catch (error) {
    console.error("Countdown API error:", error);
    return NextResponse.json(
      { error: "Failed to calculate countdown" },
      { status: 500 }
    );
  }
}
