import { NextResponse } from "next/server";

const MOMENTUM_RESPONSE = [
  {
    title: "Staked Tokens Trend 24h",
    value: "-55.77%",
    position: 95,
    changeRate: null,
  },
  {
    title: "Trading Volume Trend24h",
    value: "-56.25%",
    position: 45,
    changeRate: null,
  },
  {
    title: "Page Views Trend 24h",
    value: "-24.45%",
    position: 60,
    changeRate: null,
  },
];
export async function GET(request: Request) {
  try {
    return NextResponse.json(MOMENTUM_RESPONSE, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    return NextResponse.json({ message: "Failed to generate chart data", error: error }, { status: 500 });
  }
}
