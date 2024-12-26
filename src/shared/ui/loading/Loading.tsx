export const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-end h-[200px] gap-2 p-4 rounded-lg">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={"w-10 h-[80%] bg-blue-600/80 rounded origin-bottom animate-grow-up scale-y-0"}
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          />
        ))}
      </div>
      <p className="text-zinc-800 dark:text-zinc-100 font-semibold text-sm">Loading performance metrics...</p>
    </div>
  );
};
