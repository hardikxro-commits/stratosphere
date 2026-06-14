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
        <div className="flex justify-between text-2xs sm:text-xs font-sans mb-1 text-gray-400">
          <span>{label}</span>
          <span>{pct}%</span>
        </div>
      )}
      <div className="h-2 sm:h-2.5 progress-track">
        <div
          className="h-full progress-fill"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
