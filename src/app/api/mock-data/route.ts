import { NextResponse } from 'next/server'

export async function GET() {
  const mockData = {
    // 일일 데이터
    dailyData: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      values: [120, 150, 180, 190, 160, 170, 200],
    },
    // 주간 데이터
    weeklyData: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      values: [800, 950, 1100, 1200],
    },
    // 월간 데이터
    monthlyData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      values: [3000, 3500, 4000, 4200, 4500, 5000],
    },
    // 메타데이터
    metadata: {
      lastUpdated: new Date().toISOString(),
      dataSource: 'Mock Data Generator',
      currency: 'SUI'
    }
  }

  return NextResponse.json(mockData)
}
