import { NextResponse } from "next/server";

const GENERAL_RESPONSE = [
  {
    title: "Price",
    value: "$4.25",
    position: 55,
    changeRate: 6.18,
  },
  {
    title: "Market Cap",
    value: "$12.48b",
    position: 80,
    changeRate: 5.81,
  },
  {
    title: "Daily Volume",
    value: "$1.03b",
    position: 85,
    changeRate: 63.2,
  },
  {
    title: "Net Staking Flow 24h",
    value: "-$76.52m",
    position: 95,
    changeRate: null,
  },
  {
    title: "Inflation Rate",
    value: "7.51%",
    position: 3,
    changeRate: 0.03,
  },
  {
    title: "Staked Tokens",
    value: "7.81b",
    position: 92,
    changeRate: 0.31,
  },
];
export async function GET(request: Request) {
  try {
    return NextResponse.json(GENERAL_RESPONSE, {
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
