import { NextResponse } from "next/server";

const RISK_RESPONSE = [
  {
    title: "Staking Market Cap",
    value: "$33.37b",
    position: 95,
    changeRate: 6.03,
  },
  {
    title: "Staking Ratio",
    value: "78.15%",
    position: 70,
    changeRate: 0.24,
  },
  {
    title: "Staking Wallets",
    value: "270.47k",
    position: 80,
    changeRate: 6.78,
  },
  {
    title: "Circulating Percentage",
    value: "29.28%",
    position: 40,
    changeRate: 0,
  },
];

export async function GET(request: Request) {
  try {
    return NextResponse.json(RISK_RESPONSE, {
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
