import { MetricCard } from "./MetricCard";

export const GeneralContent = () => {
  return (
    <div className="p-8">
      <div className="grid  grid-cols-[repeat(auto-fill,200px)] gap-4">
        <MetricCard title="Reward Rate" value="5.71%" position={50} change={{ value: 12.1, isPositive: true }} />
        <MetricCard title="Total Staked" value="$1,000,000" position={20} change={{ value: 10, isPositive: false }} />
        <MetricCard title="Total Staked" value="$1,000,000" position={10} change={{ value: 10, isPositive: true }} />
        <MetricCard title="Total Staked" value="$1,000,000" position={50} change={{ value: 10, isPositive: true }} />
        <MetricCard title="Total Staked" value="$1,000,000" position={50} change={{ value: 10, isPositive: true }} />
        <MetricCard title="Total Staked" value="$1,000,000" position={50} change={{ value: 10, isPositive: true }} />
      </div>
    </div>
  );
};
