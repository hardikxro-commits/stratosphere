interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
}

export default function ProgressBar({ value, max, label }: ProgressBarProps) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-xs font-sans mb-1 text-[#8B7D6B] dark:text-[#7A6F8A]">
          <span>{label}</span>
          <span>{pct}%</span>
        </div>
      )}
      <div className="h-2 bg-[#D4C9B8] dark:bg-[#3A3545] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#B84A3A] dark:bg-[#D4735E] rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
