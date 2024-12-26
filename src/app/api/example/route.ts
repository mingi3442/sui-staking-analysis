import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    status: "success",
    data: {
      id: 1,
      name: "Example Data",
      values: [10, 20, 30, 40, 50],
      metadata: {
        lastUpdated: new Date().toISOString(),
        category: "test",
      },
    },
  };
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    status: "success",
    message: "Data received",
    receivedData: body,
    timestamp: new Date().toISOString(),
  });
}

export async function PUT() {
  return NextResponse.json(
    {
      status: "error",
      message: "Not authorized",
      errorCode: "AUTH_ERROR",
    },
    { status: 401 }
  );
}
