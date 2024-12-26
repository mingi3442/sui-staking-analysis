import { NextResponse } from "next/server";

const REWARD_RESPONSE = [
  {
    title: "Reward Rate",
    value: "2.81%",
    position: 20,
    changeRate: 0.02,
  },
  {
    title: "Real Reward Rate",
    value: "-4.37%",
    position: 60,
    changeRate: 0.01,
  },
  {
    title: "Reward Per Year",
    value: "$936.98m",
    position: 90,
    changeRate: 1.42,
  },
  {
    title: "Reward Stability",
    value: "76.11%",
    position: 70,
    changeRate: null,
  },
  {
    title: "Total ROI 365d",
    value: "+408.93%",
    position: null,
    changeRate: null,
  },
  {
    title: "Staking Staked",
    value: "+3.49%",
    position: 30,
    changeRate: null,
  },
  {
    title: "Price ROI 365d",
    value: "+391.79%",
    position: null,
    changeRate: null,
  },
];
export async function GET(request: Request) {
  try {
    return NextResponse.json(REWARD_RESPONSE, {
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
