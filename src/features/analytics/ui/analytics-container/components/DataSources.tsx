export const DataSources = () => {
  return (
    <div className="pt-4 flex items-center justify-end gap-x-2 text-sm text-zinc-500 dark:text-zinc-400 px-4">
      <span className="text-xs font-medium">Data Trusted by</span>
      <div className="flex items-center gap-x-2">
        <p className="font-normal text-[10px]">GRAYSCALE</p>
        <p className="font-medium text-xs text-purple-600">Kraken</p>
        <p className="font-semibold text-xs text-blue-600">coinbase</p>
      </div>
      <span className="text-xs font-medium">&more</span>
    </div>
  );
};
