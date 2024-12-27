import { NextResponse } from "next/server";

interface DataProps {
  date: number;
  price: number;
  staked: number;
  reward: number;
  inflation: number;
}

const generateData = (): DataProps[] => {
  const data: DataProps[] = [];
  const startDate = new Date("2024-11-25");

  for (let i = 0; i < 31; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    data.push({
      date: currentDate.getTime(),
      price: 3.13 + Math.random() * 2,
      staked: 7.793 + Math.random() * 0.1,
      reward: 5 + Math.random() * 2,
      inflation: 7 + Math.random() * 1,
    });
  }
  return data;
};

export async function GET() {
  try {
    const chartData = generateData();

    return NextResponse.json(chartData, {
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
